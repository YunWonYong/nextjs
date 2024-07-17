"use server";

import { google, sheets_v4 } from "googleapis"
import { getConfig } from "../config";
import { obj } from "../type";


type googleSheetInfo = {
    privateKey: string,
    privateKeyId: string,
    clientEmail: string,
    spreadSheetid: string
}

export type Sheet = {
    columns: string[],
    rows: string[][],
};

export type Sheets = {
    sheetNames: string[],
    info: obj<Sheet>,
};

let catchingGoogleSheet: Sheets | null = null;

const googleSheetScope = "https://www.googleapis.com/auth/spreadsheets";

const instanceTable: obj<{ sheet: sheets_v4.Sheets, spreadSheetId: string }> = {};

const getGoogleJWT = async (game: string, scope: string) => {
    const sheetConfigData = await getConfig<{[key: string]: googleSheetInfo}>("googleSheetInfo");
    const sheetCredentials = sheetConfigData[game];
    if (!sheetCredentials) {
        throw new Error(`${game} sheetCredentials not found.`);
    }
    const { clientEmail, privateKey, privateKeyId } = sheetCredentials;
    return { jwt: new google.auth.JWT(clientEmail, "", privateKey, scope, "", privateKeyId), spreadSheetId: sheetCredentials.spreadSheetid };
};

const getGameBySheetInstance = async (game: string) => {
    const instance = instanceTable[game];
    if (instance) {
        return instance;
    }
    const jwtInfo = await getGoogleJWT(game, googleSheetScope);
    const sheetInstance = google.sheets({ version: "v4", auth: jwtInfo.jwt });
    const info = {
        sheet: sheetInstance,
        spreadSheetId: jwtInfo.spreadSheetId
    };
    return info;
};

const fetchingGameByGoogleSheet = async (game: string): Promise<Sheets> => {
    if (catchingGoogleSheet !== null) {
        return catchingGoogleSheet;
    }
    const { sheet, spreadSheetId } = await getGameBySheetInstance(game);
    const sheetNames = await fetchSheetNames(sheet, spreadSheetId);

    let i = 0;
    let sheetName = "";
    const range = sheetNames.length;
    const sheets: Sheets = {
        sheetNames: [],
        info: {}
    };

    while(i < range) {
        sheetName = sheetNames[i];
        sheets.sheetNames.push(sheetName);
        const { columns, values } = await fetchSheetData(sheet, spreadSheetId, sheetName);
        sheets.info[sheetName] = {
            columns,
            rows: values
        };
        ++i;
    }
    catchingGoogleSheet = sheets;
    return sheets;
};

const fetchingGameByGoogleSheetColumns = async (game: string) => {
    const { sheet, spreadSheetId } = await getGameBySheetInstance(game);
    const sheetNames = await fetchSheetNames(sheet, spreadSheetId);
    return sheetNames;
};

const fetchingGameByGoogleSheetValues = async (game: string, sheetName: string) => {
    const { sheet, spreadSheetId } = await getGameBySheetInstance(game);
    const { columns, values } = await fetchSheetData(sheet, spreadSheetId, sheetName);
    return [columns, values];
};

const fetchSheetNames = (sheetInstance: sheets_v4.Sheets, sheetId: string): Promise<string[]> => {
    return new Promise(( resolve, rejects ) => {
        sheetInstance.spreadsheets.get({
            spreadsheetId: sheetId,
        }).then((response) => {
            const { data } = response;
            const { sheets,  } = data;
            if (!sheets) {
                rejects("Fetching google sheet names failed.")
                return;
            }
            const sheetNames: string[] = [];
            sheets.forEach((sheet: sheets_v4.Schema$Sheet) => {
                if (sheet.properties && sheet.properties.title) {
                    sheetNames.push(sheet.properties.title);
                }
            })
            resolve(sheetNames);
        }).catch(() => {
            rejects();
        })
    });
};

const fetchSheetData = (sheetInstance: sheets_v4.Sheets, sheetId: string, sheetName: string): Promise<{ columns: string[], values: string[][] }> => {
    return new Promise(( resolve, rejects ) => {
        sheetInstance.spreadsheets.values.get({
            spreadsheetId: sheetId,
            range: `${ sheetName }!A1:Z`,
        }).then((response) => {
            const { data } = response;
            if (!data) {
                rejects(`Fetching ${sheetName} sheet data failed.`);
                return;
            }
            const { values, range } = data;
            if (!values || !Array.isArray(values)) {
                rejects(`Fetching ${sheetName} sheet values not found. range: ${range}`);
                return;
            }
            const list = values as string[][];
            
            const columns = list.shift();
            if (!columns || !Array.isArray(columns)) {
                rejects(`Fetching ${sheetName} sheet values not found. vlaues range: ${list.length}`);
                return;
            }
            resolve({
                columns,
                values: list.splice(1)
            });
        }).catch(() => {
            rejects();
        })
    });
}

export {
    fetchingGameByGoogleSheet,
    fetchingGameByGoogleSheetColumns,
    fetchingGameByGoogleSheetValues as fetchingGameByGoogleSheetData
};
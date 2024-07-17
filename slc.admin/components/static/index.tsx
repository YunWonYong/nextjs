"use client";
import { useState, FC, useEffect } from "react";
import { Sheets, Sheet } from "@/lib/google";
import { obj } from "@/lib/type";

import classes from "./index.module.css";

const StaticSheet: FC<{ sheet: Sheet }> = ({ sheet }) => {
    return (
        <article>
            <table 
                className={ classes.table }
            >
                <thead>
                    <tr>
                        {
                            sheet.columns.map((column: string, index: number) => <th key={ `${index}_${column}` }>{ column }</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        sheet.rows.map((row: string[], rowIndex: number) => {
                            return (
                                <tr
                                    key={ rowIndex }
                                >
                                    {
                                        row.map((data: string, index: number) => {
                                            const column = sheet.columns[index];
                                            return (
                                                <td
                                                    key={ `${rowIndex}_${column}_${index}` }
                                                >
                                                    {
                                                        data
                                                    }
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </article>
    );
};

type SheetInfo = {
    original: Sheets,
    printSheet: Sheet | null,
    diffSheets: Sheets,
};
const StaticSheets: FC<{ sheets: Sheets }> = ({ sheets }) => {
    const [sheetInfo, setSheetInfo] = useState<SheetInfo>({
        original: sheets,
        diffSheets: sheets,
        printSheet: null,
    });
    const [selectedTab, setSelectedTab] = useState<string>(sheets.sheetNames[0]);
    const [selectedEnv, setSelectedEnv ] = useState<string>("none");
    const tabClickHandler = (selectTab: string) => {
        if (selectedTab === selectTab) {
            return;
        }

        setSelectedTab(selectTab);
    };
    useEffect(() => {
        setSheetInfo((old: SheetInfo) => {
            return {
                ...old,
                printSheet: old.diffSheets.info[selectedTab],
            };
        });
    }, [selectedTab, sheetInfo.original])
    useEffect(() => {
        if (selectedEnv === "none") {
            return;
        }

        const fetchEnvByStaticData = async () => {
            const response = await fetch(`https://app-${selectedEnv}-slots.sloco.io/plcasino/admin/static`);
            const data = await response.json();
            const serverSheetNames = Object.keys(data);
            const { info } = sheetInfo.original;
            const diffSheets: Sheets = {
                sheetNames: [],
                info: {},
            };
            serverSheetNames.forEach((sheetName: string) => {
                const serverSheetData = data[sheetName];
                if (!serverSheetData) {
                    return;
                }

                const serverDiffSheet: Sheet = {
                    rows: [],
                    columns: []
                };
                
                serverSheetData.forEach((sheet: obj<string>) => {
                    const columns: string[] = Object.keys(sheet);
                    if (serverDiffSheet.columns.length === 0) {
                        serverDiffSheet.columns = columns;
                    }
                    const row: string[] = [];
                    columns.forEach((column: string) => {
                        row.push(sheet[column] || "");
                    });
                    serverDiffSheet.rows.push(row);
                });

                diffSheets.sheetNames.push(sheetName);
                diffSheets.info[sheetName] = {
                    rows: [],
                    columns: []
                };
                const originSheet = info[sheetName];
                if (!originSheet) {
                    diffSheets.info[sheetName] = serverDiffSheet;
                    return;
                }

                let i = 0;
                const size = serverDiffSheet.rows.length > originSheet.rows.length? serverDiffSheet.rows.length: originSheet.rows.length;

                while (i < size) {
                    const serverRow = serverDiffSheet.rows[i] || [];
                    const originRow = originSheet.rows[i] || [];
                    if (JSON.stringify(serverRow) !== JSON.stringify(originRow)) {
                        console.log(sheetName, JSON.stringify(serverRow), JSON.stringify(originRow));
                    }
                    
                    ++i;

                }
            });
        };

        fetchEnvByStaticData();
    }, [selectedEnv, sheetInfo.original])
    return (
        <section className={ classes.wrap }>
            <div>
                <select onChange={ (event) => setSelectedEnv(event.target.value) }>
                    <option value="none">none</option>
                    <option value="dev">dev</option>
                    <option value="qa">qa</option>
                    <option value="live">live</option>
                </select>
            </div>
            <header className={ classes.header }>
                {
                    sheets.sheetNames.map((sheetName: string) => {
                        return (
                            <h4
                                key={ sheetName }
                                className={ `${classes.tab} ${selectedTab === sheetName? classes.selected: ""}` }
                                onClick={() => tabClickHandler(sheetName)}
                            >
                                {
                                    sheetName
                                }
                            </h4>
                        );
                    })
                }
            </header>
            <StaticSheet 
                sheet={ sheets.info[selectedTab] }
            />
            {/* {
                sheetNames.map((sheetName: string) => {
                    const sheet = sheets[sheetName];
                    return (
                        <StaticSheet
                            key={ sheetName }
                            sheet={ sheet }
                        />
                    );
                })
            } */}
        </section>
    );
}


export default StaticSheets;
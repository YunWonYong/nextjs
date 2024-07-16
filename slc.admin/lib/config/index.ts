"use server";

import fs from "node:fs/promises";

type objectType<V> =  {
    [k: string]: V
};
// type configType = {
//     data: objectType<string, string>,
//     get: (key: string) => string,
// };

class Config {
    private readonly info: objectType<string>;
    constructor(configStr: string) {
        this.info = JSON.parse(configStr);
    }

    get(key: string): string {
        const data = this.info[key];
        if (!data) {
            throw new Error(`${key} config not found.`);
        }
        return data;
    }
}

let c: Config;

const loadConfigFile = async () => {
    const configFile = await fs.readFile(`${process.env.PWD}/config.json`, { encoding: "utf-8" });
    c = new Config(configFile);
};

const getConfig = async <T, > (key: string): Promise<T> => {
    if (c === undefined) {
        await loadConfigFile();      
    }
    const configData = c.get(key);
    return configData as T;
};

export {
    getConfig
};
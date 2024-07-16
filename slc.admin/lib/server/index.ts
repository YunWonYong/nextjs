"use server";

type envs = {
    [k: "dev" | "qa" | "live-test" | "live" | string]: { [k: "slots" |"assets" | "baccarat" | string]: { endpoint: string, path: string, protocol?: string } }
}

const envByEndpoint: envs = {
    dev: {
        slots: {
            protocol: "https",
            endpoint: "app-dev-slots.sloco.io",
            path: "plcasino/admin/static"
        },
        assets: {
            protocol: "https",
            endpoint: "app-dev-slots.sloco.io",
            path: "plcasino/admin/static"
        },
        baccarat: {
            protocol: "https",
            endpoint: "app-dev-slots.sloco.io",
            path: "plcasino/admin/static"
        }
    }
};

const envByStaticData = async (env: string, game: string) => {
    const url = getServerUrl(env, game);
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
}

const getServerUrl = (env: string, game: string) => {
    const envByData = envByEndpoint[env];
    if (!envByData) {
        throw new Error(`${env} env server endpoints not found.`);
    }

    const data = envByData[game]
    if (!data) {
        throw new Error(`${game} game server endpoint not found.`);
    }
    const { protocol, endpoint, path, } = data;
    return `${protocol}://${endpoint}/${path}`;
};

export {
    envByStaticData
};
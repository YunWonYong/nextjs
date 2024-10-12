import { ObjUn } from "@/lib/const";

import { DateNameType, YMD } from "./const";
const MONTH_NAME: readonly DateNameType[] = [
    { full: "January", short: "Jan" },
    { full: "February", short: "Feb" },
    { full: "March", short: "Mar" },
    { full: "April", short: "Apr" },
    { full: "May", short: "May" },
    { full: "June", short: "June" },
    { full: "July", short: "July" },
    { full: "August", short: "Aug" },
    { full: "September", short: "Sept" },
    { full: "October", short: "Oct" },
    { full: "November", short: "Nov" },
    { full: "December", short: "Dec" },
];

const DAY_NAME: readonly DateNameType[] = [
    { full: "Sunday", short: "Sun" },
    { full: "Monday", short: "Mon" },
    { full: "Tuesday", short: "Tues" },
    { full: "Wednesday", short: "Wed" },
    { full: "Thursday", short: "Thurs" },
    { full: "Friday", short: "Fri" },
    { full: "Saturday", short: "Sat" },
];

const getCurrentDate = (): Date => {
    return new Date(Date.now());
};

const getCurrentYMD = (): YMD => {
    return get(getCurrentDate());
};


const daysCache: ObjUn<number, ObjUn<number, YMD[]>> = { };

const getDays = (year: number, month: number): YMD[] => {
    const cacheList = getCacheDays(year, month);
    if (cacheList) {
        return cacheList;
    }

    const list: YMD[] = [];
    let i = 1;
    const d = new Date(year, month);
    while (true) {
        d.setDate(i++);
        const ymd = get(d);
        if (ymd.month !== month) {
            console.log(`stop ${ ymd.year }_${ ymd.month }_${ ymd.date }_${ ymd.day }`);
            if (!daysCache[year]) {
                daysCache[year] = {};
            }
            daysCache[year][month] = list;
            return list;
        }
        list.push(ymd);
    }
};

const getCacheDays = (year: number, month: number) => {
    const yearCache = daysCache[year];
    if (yearCache  === undefined) {
        return;
    }
    const monthCache = yearCache[month];
    if (monthCache === undefined) {
        return;
    }

    return monthCache;
};

const get = (d: Date): YMD => {
    const year = d.getFullYear();
    const month = d.getMonth();
    const monthName = MONTH_NAME[month];
    const date = d.getDate();
    const day = d.getDay();
    const dayName = DAY_NAME[day];
    return {
        year,
        month,
        monthName,
        date,
        day,
        dayName,
    };
}

export {
    getCurrentDate,
    getCurrentYMD,
    getDays,
    MONTH_NAME,
    DAY_NAME
};
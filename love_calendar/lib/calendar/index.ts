import { getCurrentYMD, getDays, MONTH_NAME } from "@/lib/date";

const getCurrentYM = () => {
    const { year, month, monthName } = getCurrentYMD();
    return {
        year: getCalendarFormat(year),
        month: getCalendarFormat(month + 1),
        monthName
    };
};


const getDaysByYM = (year: string, month: string) => {
    const y = parseInt(year);
    const m = parseInt(month) - 1;
    const days = getDays(y, m);
    const fistDay = days[0].day;
    if (fistDay > 0) {
        const preMonthDays = getDays(y, m - 1);
        const preMonthLastDay = preMonthDays.length;
        let i = 0;
        while(i < fistDay) {
            days.unshift(preMonthDays[preMonthLastDay- ++i]);
        }
    }
    
    const lastDay = days[days.length - 1].day;
    if (lastDay < 6) {
        
        const nextMonthDays = getDays(y, m + 1);
        let i = 0;
        while(i < (6 - lastDay)) {
            days.push(nextMonthDays[i]);
            i++;
        }
    }


    return days.map(({ year, month, monthName, date, day, dayName }) => {
        return {
            year: getCalendarFormat(year), 
            month: getCalendarFormat(month + 1), 
            monthName, 
            date: getCalendarFormat(date), 
            day, 
            dayName
        };
    });
};

const getMonthName = (month: string) => {
    return MONTH_NAME[parseInt(month) - 1];
};

const getCalendarFormat = (i: number): string => {
    if (i < 10) {
        return "0" + i;
    }
    return `${i}`;
};

const yearRegexp = /^[1|2]{1}[0-9]{3}$/;
const monthRegexp = /^([0]{1}[1-9]{1})|([1]+[0-2]{1})$/;

const isAvailableYear = (year: string): boolean => {
    if (!yearRegexp.test(year)) {
        return false;
    }

    return isSupportedYear(parseInt(year));
};

const isAvailableMonth = (month: string): boolean => {
    return monthRegexp.test(month);
};

const isSupportedYear = (year: number): boolean => {
    const y = new Date().getFullYear();
    const yy = y - year;
    return Math.abs(yy) <= 100;
};

export {
    getCurrentYM,
    getDaysByYM,
    getMonthName,
    isAvailableYear,
    isAvailableMonth,
}
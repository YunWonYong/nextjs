import { getCurrentYMD, getDays } from "@/lib/date";

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

const getCalendarFormat = (i: number): string => {
    if (i < 10) {
        return "0" + i;
    }
    return `${i}`;
};

export {
    getCurrentYM,
    getDaysByYM
}
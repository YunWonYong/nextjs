
const months = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const maxDayOfMonth = 31;

type DayInfo = {
    day: string;
    position: number;
};

type MonthInfo = {
    month: string;
    days: DayInfo[];
};

type YearsInfo = {
    year: string;
    months: MonthInfo[];
};


export const getYearsInfo = (year: number): YearsInfo => {
    const info: YearsInfo = {
        year: year.toString(),
        months: [],
    };

    const date = new Date();
    date.setUTCFullYear(year);
    months.forEach((month) => {
        date.setMonth(month);
        date.setDate(1);
        let decrementDay = 0;
        let maxDayOfCurrentMonth = maxDayOfMonth;
        while (maxDayOfMonth - decrementDay > 27) {
            date.setMonth(month);
            date.setUTCDate(maxDayOfMonth - decrementDay);
            // console.log(date.getUTCMonth(), maxDayOfMonth - decrementDay)
            if (month == date.getUTCMonth()) {
                maxDayOfCurrentMonth = maxDayOfMonth - decrementDay;
                break;
            }
            decrementDay++;
        }

        date.setMonth(month);
        let day = 1;
        const dayInfo: DayInfo[] = [];
        do {
            date.setUTCDate(day);
            dayInfo.push({
                day: formatDayOfMonth(day),
                position: date.getUTCDay(),
            });
        } while(++day <= maxDayOfCurrentMonth);

        info.months.push({
            month: formatMonth1To12(month),
            days: dayInfo,
        });
    });

    return info;
};

export const formatMonth1To12 = (month: number): string => {
    return formatTwoDigits(month + 1);
};

export const formatDayOfMonth = (date: number): string => {
    return formatTwoDigits(date);
};


const formatTwoDigits = (n: number): string => {
    let result = n.toString();
    if (n < 10) {
        result = result.padStart(2, "0");
    }

    return result;
}
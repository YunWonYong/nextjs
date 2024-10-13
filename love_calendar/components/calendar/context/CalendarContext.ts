"use client";

import { createContext } from "react";

export type CalendarContextType = {
    year: string,
    month: string
    changeYear: (year: string) => void,
    changeMonth: (month: string) => void,
};

const CalendarContext = createContext<CalendarContextType>(
    {
        year: "",
        month: "",
        changeYear: (year: string) => { throw new Error(`calendar context already. ${year}`) },
        changeMonth: (month: string) => { throw new Error(`calendar context already. ${month}`) },
    }
);

export {
    CalendarContext
};
"use client";

import { FC, ReactNode, useState } from "react";
import { CalendarContext } from "./CalendarContext";
import { getCurrentYM } from "@/lib/calendar";

const CalendarProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [ym, setYm] = useState<{ year: string, month: string }>(getCurrentYM());
    const changeYear = (year: string) => {
        setYm((old) => {
            return {
                ...old,
                year
            };
        })
    };

    const changeMonth = (month: string) => {
        setYm((old) => {
            return {
                ...old,
                month
            };
        })
    };

    return (
        <CalendarContext.Provider
            value={{ ...ym, changeYear, changeMonth }}
        >
            {
                children
            }
        </CalendarContext.Provider>
    );
};

export {
    CalendarProvider
};
"use client";

import { getMonthName } from "@/lib/calendar";
import { FC } from "react";

import "./header.css";

const CalendarHeader: FC<{ year: string, month: string }> = ({ year, month }) => {
    const monthName = getMonthName(month);
    return (
        <header
            className="calendar__h"
        >
            <div
                className="calendar__h_month_name"
            >
                {
                    monthName.full
                }
            </div>
            <div
                className="calendar__h_content"
            >
                <span
                    className="calendar__h_content_select"
                    onClick={ () => console.log(year) }
                >
                    {
                        year
                    }
                </span>
                <span>
                    .
                </span>
                <span
                    className="calendar__h_content_select"
                    onClick={ () => console.log(month) }
                >
                    {
                        month
                    }
                </span>
            </div>
        </header>
    );
};

export default CalendarHeader;
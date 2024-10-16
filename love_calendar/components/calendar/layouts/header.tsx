"use client";

import { FC } from "react";
import { getMonthName } from "@/lib/calendar";
import useModal from "@/components/modal/hooks";
import { useGlobalDimmed } from "@/components/dimmed/hooks";


import "./header.css";

const CalendarHeader: FC<{ year: string, month: string }> = ({ year, month }) => {
    const monthName = getMonthName(month);
    
    const { on, off } = useGlobalDimmed();
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
                    onClick={ on }
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
                    onClick={ off }
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
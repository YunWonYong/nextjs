import { FC } from "react";
import { getMonthName } from "@/lib/calendar";
import { HeaderYear, HeaderMonth } from "./clientComponent";

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
               <HeaderYear year={ year } />
                <span>
                    .
                </span>
                <HeaderMonth month={ month } />
            </div>
        </header>
    );
};

export {
    CalendarHeader
};
import { FC } from "react";
import { isAvailableYear, isAvailableMonth } from "@/lib/calendar";
import Calendar from "@/components/calendar";

const CalendarPage: FC<{ params: { ym: string[] } }> = ({ params: { ym: [ year, month ] } }) => {
    if (!isAvailableYear(year)) {
        throw new Error(`${year} is not supported years.`);
    } else if (!isAvailableMonth(month)) {
        throw new Error(`${month} is not supported months.`);
    }
    return (
        <Calendar 
            year={ year } 
            month={ month } 
        />
    );
};

export default CalendarPage;
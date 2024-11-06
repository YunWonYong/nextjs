"use client";
import { FC } from "react";

const HeaderYear: FC<{ year: string }> = ({ year }) => {
    return (
        <span
            className="calendar__h_content_select"
            // onClick={ on }
        >
            {
                year
            }
        </span>
    );
};

const HeaderMonth: FC<{ month: string }> = ({ month }) => {
    return (
        <span
            className="calendar__h_content_select"
        >
            {
                month
            }
        </span>
    );
};

export {
    HeaderYear,
    HeaderMonth
};
"use client";
import { useModal } from "@/components/modal/hooks";
import { FC } from "react";

const HeaderYear: FC<{ year: string }> = ({ year }) => {
    const { open, close } = useModal("year");
    return (
        <span
            className="calendar__h_content_select"
            onClick={ open }
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
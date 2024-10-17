"use client";

import { FC, RefObject } from "react";

import "./index.css";

const DimmedWrap: FC<{ refer: RefObject<HTMLDivElement>, status: string, off: () => void }> = ({ refer, status, off }) => {
    return (
        <div
            className={ status }
            ref={ refer }
            onClick={ () => { if (status === "dimmed__wrap_off") off() } } 
        >
        </div>
    );
};

export default DimmedWrap;
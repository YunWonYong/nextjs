"use client";

import { FC, ReactNode, useRef } from "react";
import { GlobalDimmed } from "./GlobalDimmedContext";

const GlobalDimmedProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const dimmedRef = useRef<HTMLDivElement>(null);
    

    const on = () => {
        if (!dimmedRef.current) {
            return;
        }
        console.log("on", dimmedRef.current.className)
        
        const body = document.getElementById("body");
        if (!body) {
            return;
        }
        dimmedRef.current.className = "on";
        body.style.overflow = "none";
    };

    const off = () => {
        if (!dimmedRef.current) {
            return;
        }
        console.log("off", dimmedRef.current.className)
        
        const body = document.getElementById("body");
        if (!body) {
            return;
        }
        dimmedRef.current.className = "off";
        body.style.overflow = "auto";
    };

    const isGlobalDimmed = () => {
        if (!dimmedRef.current) {
            return false;
        }
        const flag = dimmedRef.current.className.indexOf("on") === 0
        console.log("isGlobalDimmed", flag);
        return flag;
    };

    return (
        <GlobalDimmed.Provider value={{ isGlobalDimmed, on, off }}>
            <div
                ref={ dimmedRef }
                className="off"
            >
                {
                    children
                }
            </div>
        </GlobalDimmed.Provider>
    );
};

export default GlobalDimmedProvider;
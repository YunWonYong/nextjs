"use client";

import { FC, ReactNode, useRef, useCallback } from "react";
import { GlobalDimmed } from "./GlobalDimmedContext";
import DimmedWrap from "../../layouts";

const GlobalDimmedProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const dimmedRef = useRef<HTMLDivElement>(null);

    const on = useCallback(() => {
        if (!dimmedRef.current) {
            return;
        }
        
        const body = document.getElementById("body");
        if (!body) {
            return;
        }

        dimmedRef.current.className = "dimmed__wrap_on";
        body.style.overflow = "hidden";
    }, [dimmedRef]);

    const off = useCallback(() => {
        if (!dimmedRef.current) {
            return;
        }
        
        const body = document.getElementById("body");
        if (!body) {
            return;
        }

        dimmedRef.current.className = "dimmed__wrap_off";
        body.style.overflow = "auto";
    }, [dimmedRef]);

    const isGlobalDimmed = useCallback(() => {
        if (!dimmedRef.current) {
            return false;
        }
        const flag = dimmedRef.current.className.indexOf("on") === 0;
        return flag;
    }, [dimmedRef]);

    return (
        <GlobalDimmed.Provider value={{ isGlobalDimmed, on, off }}>
            <DimmedWrap
                refer={ dimmedRef }
                status="dimmed__wrap_off"
                off={ off }
            />
            {
                children
            }
        </GlobalDimmed.Provider>
    );
};

export default GlobalDimmedProvider;
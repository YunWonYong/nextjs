"use client";

import { useContext, useState } from "react";
import { GlobalDimmed, GlobalDimmedContextType } from "../global/context/GlobalDimmedContext";

const useGlobalDimmed = () => {
    const { off, on, isGlobalDimmed: is } = useContext<GlobalDimmedContextType>(GlobalDimmed);
    const [isGlobalDimmed, setIsGlobalDimmed] = useState<boolean>(is());
    const _on = () => {
        if (is()) {
            console.log("_on: ", isGlobalDimmed, "return", is());
            return;
        }
        on();
        setIsGlobalDimmed(true);
    };

    const _off = () => {
        if (!is()) {
            console.log("_off: ", isGlobalDimmed, "return", is());
            return;
        }
        off();
        setIsGlobalDimmed(false);
    };

    return { isGlobalDimmed, on: _on, off, _off };
};

export {
    useGlobalDimmed,
};
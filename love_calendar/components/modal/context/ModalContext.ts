"use client";

import { createContext } from "react";

export type ModalContextType = {
    isOpen: boolean,
    open: (modalId: string) => void,
    close: () => void
};


const ModalContext = createContext<ModalContextType>({
    isOpen: false,
    open: (modalId: string) => { throw new Error(`modal context already. ${modalId}`) },
    close: () => { throw new Error("modal context already.") },
});

export {
    ModalContext
};
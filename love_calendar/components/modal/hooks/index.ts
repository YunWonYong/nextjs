"use client";
import { useContext } from "react";
import { ModalContext } from "../context/context";
import { useGlobalDimmed } from "@/components/dimmed/hooks";

const useModal = (modalId: string) => {
    const { on, off } = useGlobalDimmed();
    const { open, close } = useContext(ModalContext);
    const o = () => {
        on(close);
        open(modalId);
    };
    const c = () => {
        off();
        return close();
    };
    return { open: o, close: c};
};

export {
    useModal
};
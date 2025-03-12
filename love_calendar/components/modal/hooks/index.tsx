"use client";

import { useContext } from "react";
import { ModalContext, ModalContextType } from "../context/ModalContext";

const useModal = () => {
    const { open, isOpen } = useContext<ModalContextType>(ModalContext);
    return { isOpen, open };
};

export default useModal;
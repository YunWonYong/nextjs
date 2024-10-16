"use client";

import { FC, ReactNode, useState } from "react";
import { ModalContext } from "./ModalContext";
import ModalWrap from "../layouts/ModalWrap";

type ModalState = {
    isOpen: boolean,
    modalId?: string
};

const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [modal, setModal] = useState<ModalState>({ isOpen: false });
    const close = () => setModal({ isOpen: false, modalId: "" });
    const open = (modalId: string) => setModal((old) => ({ ...old, isOpen: true, modalId }));
    return (
        <ModalContext.Provider 
            value={{
                isOpen: modal.isOpen,
                open,
                close,
            }}
        >
            <ModalWrap
                flag={ modal.isOpen }
                close={ close } 
            />
               
            {
                children
            }
        </ModalContext.Provider>
    );
};

export default ModalProvider;
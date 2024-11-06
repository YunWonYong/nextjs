"use client";

import { FC, ReactNode, useState } from "react";

import { ModalContext } from "./context";
import "./index.css";

const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [modalInfo, setModalInfo] = useState({ modalId: "" });
    const open = (modalId: string) => {
        setModalInfo({
            modalId
        });
    };

    const close = () => {
        return {};
    };
    return (
        <ModalContext.Provider value={{ open, close }}>
            {
                children
            }
            {
                modalInfo.modalId && 
                    <div
                        className="modal_wrap"
                    >
                        modal!!!!!!!
                    </div>
            }
        </ModalContext.Provider>
    );
};

export {
    ModalProvider
};
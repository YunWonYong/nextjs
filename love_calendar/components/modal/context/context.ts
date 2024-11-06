import { createContext } from "react";

type ModalContextResult = {
    [K in string]: any
};

type ModalContextType = {
    open: (modalId: string) => void,
    close: () => ModalContextResult
};


const ModalContext = createContext<ModalContextType>({
    open: (modalId: string) => { throw new Error(`modal open function context already. modalId: ${modalId}`) },
    close: () => { throw new Error(`modal close function context already.`) },
});

export {
    ModalContext
};
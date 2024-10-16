import { createContext } from "react";

export type GlobalDimmedContextType = {
    isGlobalDimmed: () => boolean,
    on: () => void,
    off: () => void
};

const GlobalDimmed = createContext<GlobalDimmedContextType>({
    isGlobalDimmed: () => { throw new Error(`global dimmed isGlobalDimmed function context already.`) },
    on: () => { throw new Error(`global dimmed on function context already.`) },
    off: () => { throw new Error(`global dimmed off function context already.`) },
});

export {
    GlobalDimmed
};
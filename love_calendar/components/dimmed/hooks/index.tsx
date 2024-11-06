"use client";

import { useState, useEffect } from "react";
// const useGlobalDimmed = () => {
//     const { off, on, isGlobalDimmed: is } = useContext<GlobalDimmedContextType>(GlobalDimmed);
//     const [isGlobalDimmed, setIsGlobalDimmed] = useState<boolean>(is());
//     const _on = () => {
//         if (is()) {
//             console.log("_on: ", isGlobalDimmed, "return", is());
//             return;
//         }
//         console.log("ModalProvider call");
//         on();
//         setIsGlobalDimmed(true);
//     };

//     const _off = () => {
//         if (!is()) {
//             console.log("_off: ", isGlobalDimmed, "return", is());
//             return;
//         }
//         off();
//         setIsGlobalDimmed(false);
//     };

//     return { isGlobalDimmed, on: _on, off: _off };
// };

type globalDimmedStateType = {
    isOpen: boolean,
    callbacks: (()=>void)[],
};

const useGlobalDimmed = () => {
    const [dimmedInfo, setDimmedInfo] = useState<globalDimmedStateType>({ isOpen: false, callbacks: [] });
    // useEffect(() => {
    //     const { isOpen, callbacks } = dimmedInfo;
    //     if (!isOpen && callbacks.length > 0) {
    //         debugger;
    //         let fn;
    //         while(fn = callbacks.pop()) {
    //             fn();
    //         }

    //         setDimmedInfo((old) => {
    //             return {
    //                 ...old,
    //                 callbacks: []
    //             };
    //         });
    //     }
    // }, [dimmedInfo]);

    const off = () => {
        const dimmed = document.getElementById("global_dimmed");
        if (!dimmed) {
            return;
        }
        
        const body = document.getElementById("body");
        if (!body) {
            return;
        }
        if (dimmedInfo.callbacks.length > 0) {
            let fn = undefined;
            while((fn = dimmedInfo.callbacks.pop())) {
                console.log(fn);
                fn();
            }
        }

        body.style.overflow = "auto";
        dimmed.className = "dimmed__wrap_off";
        dimmed.onclick = null;

        setDimmedInfo((old) => ({
            ...old,
            isOpen: false
        }));
    };

    const on = (callback?: () => void) => {
        const body = document.getElementById("body");
        if(!body) {
            return;
        }

        const dimmed = document.getElementById("global_dimmed");
        if (!dimmed) {
            return;
        }
        
        body.style.overflow = "hidden";
        dimmed.className = "dimmed__wrap_on";

        const oldCallbacks = [...dimmedInfo.callbacks];
        if (callback) {
            oldCallbacks.push(callback);
        }

        setDimmedInfo(() => ({
            callbacks: oldCallbacks,
            isOpen: true
        }));
        
        dimmed.onclick = off;
    }; 
    return { on, off, isOpen: dimmedInfo.isOpen };
};
export {
    useGlobalDimmed,
}; 
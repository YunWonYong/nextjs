"use client";

import { getCurrentYM } from "@/lib/calendar";
import { FC } from "react";

const ModalWrap: FC<{ flag: boolean, close: () => void }> = ({ flag, close }) => {
    return (
        <>
            {
                flag && <>
                            <div
                                style={{
                                    position: "absolute",
                                    zIndex: 90000,
                                    opacity: 0.8,
                                    backgroundColor: "black",
                                    overflow: "hidden",
                                    width: "100vw",
                                    height: "100vh"
                                }}
                                onClick={ close }
                            >
                            </div>
                            
                            <div
                                style={{
                                    position: "absolute",
                                    zIndex: 90001,
                                    boxSizing: "border-box",
                                    backgroundColor: "white",
                                    width: "80%",
                                    height: "80%",
                                    transform: "translate(10%, 10%)"
                                }}
                            >
                                <Test />
                            </div>
                        </>
            }
        </>
    );
};

const Test = () => {
    const { year } = getCurrentYM();
    return (
        <div
            style={{
                display: "grid",
                overflow: "scroll",
                gridTemplateColumns: "repeat(5, 1fr)",
                boxSizing: "border-box",
                maxHeight: "100%"
            }}
        >
            {
                Array.from({ length: 100 }, (_, i) => i - 100 + parseInt(year)).map((year) => {
                    return (
                        <div 
                            key={ year }
                            style={{
                                display: "flex",
                                border: "1px solid black",
                                boxSizing: "border-box",
                                height: "50px",
                                alignItems: "center",
                                justifyContent: "space-around"
                            }}
                        >
                            {
                                year
                            }
                        </div>
                    );
                })
            }
        </div>
    );
};
export default ModalWrap;
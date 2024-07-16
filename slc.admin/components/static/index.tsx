"use client";

import { obj } from "@/lib/type";
import { FC, useEffect, useState } from "react";

const StaticSheet: FC<{ sheetName: string }> = ({ sheetName }) => {

    return (
        <div>
            {
                sheetName
            }
        </div>
    );
};

const StaticSheets: FC<{ sheetNames: string[] }> = ({ sheetNames }) => {
    const [selectedSheet, setSelectedSheet] = useState<string>(sheetNames[0]);
    const [serverStaticData, setServerStaticData] = useState<obj<string>[]>([]);
    useEffect(() => {
        if (serverStaticData.length > 0) {
            return;
        }
        const fetchServerStaticData = async () => {
            const resposen = await fetch("https://app-dev-slots.sloco.io/plcasino/admin/static", { method: "GET" });

            const data = await resposen.json();
            console.log(data);
            setServerStaticData(data);
        };

        fetchServerStaticData();
    }, [serverStaticData]);
    const changeSheet = (sheetName: string) => {
        setSelectedSheet(sheetName);
    };
    return (
        <section
            style={{
                display: "flex"
            }}
        >
            {
                sheetNames.map((sheetName: string) => {
                    return (
                        <div
                            key={ sheetName }
                            onClick={ () => changeSheet(sheetName) }
                            style={{
                                border: "1px solid black",
                                borderTopRightRadius: "5px",
                                borderTopLeftRadius: "5px",
                                padding: "3px",
                                backgroundColor: selectedSheet === sheetName ? "red": "white",
                                userSelect: "none",
                                cursor: "pointer",
                                boxSizing: "border-box"
                            }}
                        >
                            {
                                sheetName
                            }
                        </div>
                    );
                })
            }
            <StaticSheet 
                sheetName={ selectedSheet }
            />
        </section>
    );
};

export default StaticSheets;
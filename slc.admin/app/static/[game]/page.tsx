import { FC, ReactNode, Suspense } from "react";

import { fetchingGameByGoogleSheet } from "@/lib/google";
import { envByStaticData } from "@/lib/server";
import { obj } from "@/lib/type";

// const StaticDataDiff

const StaticDataLoad: FC< { game: string } > = async ({ game }) => {
    const googleSheets = await fetchingGameByGoogleSheet(game);
    const envByStatics = await envByStaticData("dev", game);
    return (
        <>
            {
                Object.keys(googleSheets).map((sheetName: string) => {
                    const googleSheet = googleSheets[sheetName];
                    const envByStatic = envByStatics[sheetName];
                    const range = googleSheet.length > envByStatic.length? googleSheet.length : envByStatic.length;
                    let i = 0;
                    const tsx: ReactNode[] = [];
                    while (i < range) {
                        const googleEl = googleSheet[i];
                        const serverEl = googleSheet[i];
                        ++i;
                        if (googleEl === serverEl) {
                            console.log(sheetName, ": ", googleEl, serverEl);
                            continue;
                        }
                        tsx.push(
                            <div>
                                <div>
                                    google<br /> { `${googleEl} => ${serverEl}` }
                                </div>
                            </div>
                        )
                    }   

                    return (
                        <article>
                            {
                                tsx
                            }
                        </article>
                    );
                })
            }
        </>
        // <Suspense fallback={ <p>Fetching { game } static data...</p> }>
        //     {/* <StaticSheets 
        //         sheetNames={ sheetNames}
        //     /> */}
        // </Suspense>
    );
    
}

const GameByStaticPage: FC< { params: { game: string } } > = ({ params: { game } }) => {
    return (
        <>
            <main>
                {
                    game
                }        
                <Suspense fallback={ <p>Fetching { game } static data...</p> }>
                    <StaticDataLoad
                        game={ game }
                    />
                </Suspense>
                {/* {
                    Object.keys(sheetData).map((sheetName: string) => {
                        const sheet = sheetData[sheetName];
                        return (
                            <GameByStaticDataSection
                                key={ sheetName }
                                sheets={ sheet }
                                name={ sheetName }
                            />
                        );
                    })
                } */}
            </main>
        </>
    );
};

export default GameByStaticPage;
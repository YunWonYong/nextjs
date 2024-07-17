import { FC } from "react";
import StaticSheets from "@/components/static";

import { fetchingGameByGoogleSheet } from "@/lib/google";

const GameByStaticPage: FC< { params: { game: string } } > = async ({ params: { game } }) => {
    console.log("server side lendering");
    const googleSheets = await fetchingGameByGoogleSheet(game);
    return (
        <>
            <main>
                <div>
                    {
                        game
                    }
                </div>
                <StaticSheets 
                    sheets={ googleSheets }
                />
            </main>
        </>
    );
};

export default GameByStaticPage;
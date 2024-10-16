import GlobalDimmedProvider from "@/components/dimmed/global/context/GlobalDimmedProvider";
import { FC, ReactNode } from "react";

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="kr">
            <body 
                id="body"
                style={{ margin: 0 }}
            >
                <GlobalDimmedProvider>
                    {
                        children
                    }
                </GlobalDimmedProvider>
            </body>
        </html>
    );
};

export default RootLayout;
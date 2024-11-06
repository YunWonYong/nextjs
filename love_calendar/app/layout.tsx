import { FC, ReactNode } from "react";

import { ModalProvider } from "@/components/modal/context/provider";

import "@/components/dimmed/index.css";

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="kr">
            <body 
                id="body"
                style={{ margin: 0 }}
            >
                <div id="global_dimmed"></div>
                <ModalProvider>
                    {
                        children
                    }
                </ModalProvider>
            </body>
        </html>
    );
};

export default RootLayout;
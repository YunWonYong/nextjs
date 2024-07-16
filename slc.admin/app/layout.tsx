import { FC, ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "slc admin",
    description: "sloco admin page",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                {
                    children
                }
            </body>
        </html>
    );
};

export default RootLayout;
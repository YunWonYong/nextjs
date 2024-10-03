import { FC, ReactNode } from "react";

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="kr">
            <body>
                {
                    children
                }
            </body>
        </html>
    );
};

export default RootLayout;
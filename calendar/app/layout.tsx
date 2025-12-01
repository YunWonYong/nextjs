import type { Metadata } from "next";
import { ReactNode } from "react";

import "@/app/global.css";

export const metadata: Metadata = {
    title: "Lovendar",
    description: "love calendar",
};

type RootLayoutProps = Readonly<{
    children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="kr">
            <body>
                {
                    children
                }
            </body>
        </html>
    )
}
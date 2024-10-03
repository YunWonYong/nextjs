import "./globals.css";
import MainHeader from "@/components/layouts/MainHeader";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div id="page">
                    <MainHeader/>
                    {
                        children
                    }
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
import Calendar from "@/components/calendar";
// import ModalProvider from "@/components/modal/context/ModalProvider";
import { getCurrentYM } from "@/lib/calendar";

const Home = () => {
    const ym = getCurrentYM();
    return (
        // <ModalProvider>
        <Calendar year={ ym.year } month={ ym.month } />
        // </ModalProvider>
    );
};

export default Home;
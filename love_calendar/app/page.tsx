import Calendar from "@/components/calendar";
import { getCurrentYM } from "@/lib/calendar";

const Home = () => {
    const ym = getCurrentYM();
    return (
        <Calendar year={ ym.year } month={ ym.month } />
    );
};

export default Home;
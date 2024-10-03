import { getNewsForYear } from "@/lib/news";

import NewsList from "@/components/news/NewsList";


const YearArchivePage = ({ params: { year } }) => {
    const news = getNewsForYear(year);
    return (
        <NewsList news={ news } />
    );
};

export default YearArchivePage;
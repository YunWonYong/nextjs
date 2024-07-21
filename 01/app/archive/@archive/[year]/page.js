import NewsList from "@/components/NewsList";

import { getNewsForYear } from "@/lib/news";

const FilteredNewsPage = ({ params: { year } }) => {
    const news = getNewsForYear(year);

    return (
        <NewsList  news={ news } />
    );
};

export default FilteredNewsPage;
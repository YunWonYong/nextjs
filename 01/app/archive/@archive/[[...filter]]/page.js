import Link from "next/link";

import NewsList from "@/components/NewsList";

import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from "@/lib/news";

const FilteredNewsPage = ({ params: { filter } }) => {
    
    const seletedYear = filter?.[0];
    const seletedMonth = filter?.[1];
    let news;
    let links = getAvailableNewsYears();
    if (seletedYear && !seletedMonth) {
        news = getNewsForYear(seletedYear);
        links = getAvailableNewsMonths(seletedYear);
    } else if (seletedYear && seletedMonth) {
        news = getNewsForYearAndMonth(seletedYear, seletedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the seleted period.</p>
    if (news && news.length > 0) {
        newsContent = <NewsList news={ news } />
    }

    if (seletedYear && !getAvailableNewsYears().includes(+seletedYear) ||
        (seletedMonth && !getAvailableNewsMonths(seletedYear).includes(+seletedMonth))
    ) {
        throw new Error("Invalid filter.");
    }
    return (
    <>
        <header id="archive-header">
            <nav>
                <ul>
                    {
                        links.map(link => {
                            const href = seletedYear? `/archive/${seletedYear}/${link}`: `/archive/${link}`;
                            return (
                                <li key={ link }>
                                    <Link href={ href }>
                                        { link }
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
        { newsContent }
    </>
);
};

export default FilteredNewsPage;
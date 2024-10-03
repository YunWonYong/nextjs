import Link from "next/link";

import { getNewsForYear, getAvailableNewsYears, getNewsForYearAndMonth, getAvailableNewsMonths } from "@/lib/news";
import NewsList from "@/components/news/NewsList";


const YearArchivePage = ({ params: { filter } }) => {
    let links = getAvailableNewsYears();
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];
    let news = null;
    if (selectedYear && !links.includes(+selectedYear)) {
        new Error("Invalid filter.");
    } else if (selectedYear) {
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedMonth && !links.includes(+selectedMonth)) {
        new Error("Invalid filter.");
    }
    
    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    } else if (selectedYear) {
        news = getNewsForYear(selectedYear);
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {
                            links.map((link) => {
                                return (
                                    <li key={ link }>
                                        <Link href={ `/archive/${selectedYear? `${selectedYear}/${link}`: link}` }>
                                            {
                                                link
                                            }
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </header>
            {
                news && news.length > 0 
                    ? <NewsList news={ news } />
                    : <p>No news found for the selected period.</p>
            }
        </>
    );
};

export default YearArchivePage;
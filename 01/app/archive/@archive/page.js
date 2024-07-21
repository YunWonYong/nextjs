import Link from "next/link";
import { getAvailableNewsMonths, getAvailableNewsYears } from "@/lib/news";

const ArchivePage = () => {
    const links = getAvailableNewsYears();
    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {
                        links.map(link => <li key={ link }><Link href={`/archive/${link}`}>{ link }</Link></li>)
                    }
                </ul>
            </nav>
        </header>
    );
};

export default ArchivePage;
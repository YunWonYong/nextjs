import Link from "next/link";

const NewsPage = () => {
    return (
        <ul>
            <li>
                <Link href="/news/new-1">
                    new-1
                </Link>
            </li>
            <li>
                <Link href="/news/new-2">
                    new-2
                </Link>
            </li>
            <li>
                <Link href="/news/new-3">
                    new-3
                </Link>
            </li>
        </ul>
    );
};

export default NewsPage;
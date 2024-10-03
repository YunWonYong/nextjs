import NewsList from "@/components/news/NewsList";
import { getLatestNews } from "@/lib/news";

const LatestPage = () => {
    const news = getLatestNews();
    return (
        <>
            <h2>
                Latest Page
            </h2>
            <NewsList news={ news } />
        </>
    );
};

export default LatestPage;
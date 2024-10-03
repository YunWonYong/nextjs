import { DUMMY_NEWS } from "@/dummy-news";

const NewsDetailPage = ({ params: { newsId } }) => {
    const newsItem = DUMMY_NEWS.find(({ slug }) => slug === newsId);
    return (
        <article className="news-article">
            <header>
                <img src={ `/images/news/${newsItem.image}` } alt={ newsItem.title } />
                <h1>
                    {
                        newsItem.title
                    }
                </h1>
                <time dateTime={ newsItem.date } >
                    {
                        newsItem.date
                    }
                </time>
            </header>
            <p>
                {
                    newsItem.content
                }
            </p>
        </article>
    );
};

export default NewsDetailPage;
const NewsDetailPage = ({ params: { newsId } }) => {
    return (
        <div>
            {
                `${newsId} news`
            }
        </div>
    );
};

export default NewsDetailPage;
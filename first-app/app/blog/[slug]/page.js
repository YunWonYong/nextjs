
const BlogPostPage = (props) => {
    return (
        <main>
            <h1>
                Blog Post
            </h1>
            <p>
                {
                    props.params.slug
                }
            </p>
        </main>
    );
};

export default BlogPostPage;
import { useLoaderData } from "react-router-dom";
import classes from "./PostList.module.css";
import Post from "./Post";

const PostList = () => {
    const posts = useLoaderData();
    return (
        <>  
            <ul
                className={ classes.posts }
            >
                {
                posts.length > 0 
                    ?  posts.map(({ id, author, body }, index) => {
                                        return (
                                            <Post
                                                key={ `${author}_${index}` }
                                                id={ id }
                                                author={ author }
                                                body={ body }
                                            />
                                        );
                                    })
                    :   <div
                            style={{
                                textAlign: "cender",
                                color: "white"
                            }}
                        >
                            <h2>
                                There are no posts yet.
                            </h2>
                            <p>
                                Start adding some!
                            </p>
                        </div>
                }
            </ul>
        </>
    );
};

export default PostList;
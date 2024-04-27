import { useState, useEffect } from "react";

import classes from "./PostList.module.css";

import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

const PostList = ({ isPosting, onStopPosting }) => {
    const [ posts, setPosts ] = useState([]);
    const [ isFetching, setFetching ] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setFetching(() => true);
                const response = await fetch("http://localhost:8080/posts");
                const data = await response.json();
                setPosts(data.posts);
            } finally {
                setFetching(() => false);
            }
        };
        fetchPosts();
    }, []);
    const addPostHandler = (postData) =>{
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    };
    return (
        <>  
            {
                // conditional rendering case 3
                isPosting &&
                    <Modal
                        onClose={ onStopPosting }
                    >
                        <NewPost 
                            onCancel={ onStopPosting }
                            onAddPost={ addPostHandler }
                        />
                    </Modal>
            }
            <ul
                className={ classes.posts }
            >
                {
                    isFetching
                        ?   <div        
                                style={{
                                    textAlign: "cender",
                                    color: "white"
                                }}
                            >
                                <p>
                                    Loading posts...
                                </p>
                            </div>
                        :   posts.length > 0
                                ?   posts.map(({ author, body }, index) => {
                                        return (
                                            <Post
                                                key={ `${author}_${index}` }
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
import { useState } from "react";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";

import Post from "./Post";

const PostList = () => {
    const [ enterdBody, setEnterdBody ] = useState("");
    const [ enterdAuthor, setEnterdAuthor ] = useState("");

    const bodyChangeHandler = (event) => {
        setEnterdBody(event.target.value);
    };

    const authorChangeHandler = (event) => {
        setEnterdAuthor(event.target.value);
    };
    return (
        <>
            <NewPost 
                onBodyChange={ bodyChangeHandler }
                onAuthorChange={ authorChangeHandler }
            />
            <ul
                className={ classes.posts }
            >
                <Post 
                    // author="Maximilian"
                    author={ enterdAuthor }
                    // body="React.js is awesome!"
                    body={ enterdBody }
                />
                <Post 
                    author="Manuel"
                    body="Check out the full course!"
                />
                {/* <Post 
                    author=""
                    body=""
                />
                <Post 
                    author=""
                    body=""
                /> */}
            </ul>
        </>
    );
};

export default PostList;
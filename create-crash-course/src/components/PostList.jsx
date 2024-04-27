import { useState } from "react";
import classes from "./PostList.module.css";

import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

const PostList = () => {
    const [ modalIsVisible, setModalIsVisible ] = useState(true);
    const [ enterdBody, setEnterdBody ] = useState("");
    const [ enterdAuthor, setEnterdAuthor ] = useState("");

    const hideModalHandler = () => {
        setModalIsVisible(false);
    };

    const bodyChangeHandler = (event) => {
        setEnterdBody(event.target.value);
    };

    const authorChangeHandler = (event) => {
        setEnterdAuthor(event.target.value);
    };
    return (
        <>  
            {
                // conditional rendering case 3
                modalIsVisible &&
                    <Modal
                        onClose={ hideModalHandler }
                    >
                        <NewPost 
                            onBodyChange={ bodyChangeHandler }
                            onAuthorChange={ authorChangeHandler }
                        />
                    </Modal>
            }
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
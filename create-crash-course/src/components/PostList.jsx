import classes from "./PostList.module.css";

import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

const PostList = ({ isPosting, onStopPosting }) => {
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
                        />
                    </Modal>
            }
            <ul
                className={ classes.posts }
            >
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
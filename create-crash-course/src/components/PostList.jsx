import classes from "./PostList.module.css";
import Post from "./Post";

const PostList = () => {
    return (
        <ul
            className={ classes.posts }
        >
            <Post 
                author="Maximilian"
                body="React.js is awesome!"
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

    );
};

export default PostList;
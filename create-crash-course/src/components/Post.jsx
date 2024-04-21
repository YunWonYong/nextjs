import classes from "./Post.module.css";
const Post = ({ author, body }) => {
    return (
        <li
            className={ classes.post }
            // className="post"
            // style={{
            //     color: "red",
            //     textAlign: "left"
            // }}
        >
            <p
                className={ classes.author }
            >
                {
                    author  
                }
            </p>
            <p
                className={ classes.text }
            >
                {
                    body
                }
            </p>
        </li>        
    );
};

export default Post;
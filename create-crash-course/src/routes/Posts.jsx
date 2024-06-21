import { Outlet } from "react-router";
import PostList from "../components/PostList";

const Posts = () => {
    return (
        <>
            <Outlet />
            <main>
                <PostList />
            </main>
        </>
    );
}

export const postsLoader = async () => {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    return data.posts;
};

export default Posts;
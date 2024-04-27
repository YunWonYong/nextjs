import { readFile, writeFile } from "fs/promises";

const getStoredPosts = async () => {
    const rawFileContent = await readFile("posts.json", {
        encoding: "utf-8"
    });
    const data = JSON.parse(rawFileContent);
    const storedPosts = data.posts ?? [];
    return storedPosts;
};

const storePosts = (posts) => {
    const data = JSON.stringify({
        posts: posts || []
    });
    return writeFile("posts.json", data);
};

export {
    getStoredPosts,
    storePosts
};
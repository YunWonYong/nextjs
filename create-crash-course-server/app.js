import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidV4 } from "uuid";

import { getStoredPosts, storePosts } from "./data/posts.js";

const app = express();

// request body json parser
app.use(bodyParser.json());

// Attach CORS headers
// Required when using a detached backend (that runs on a different domain)
app.use((_, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET,POST");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get("/posts", async (_, response) => {
    const storedPosts = await getStoredPosts();
    response.json({ posts: storedPosts });
});

app.get("/posts/:id", async (request, response) =>{
    const storedPosts = await getStoredPosts();
    const post = storedPosts.find((post) => post.id === request.params.id);
    response.json({ post });
});

app.post("/posts", async (request, response) => {
    const existingPosts = await getStoredPosts();
    const postData = request.body;
    const newPost = {
        ...postData, 
        id: uuidV4()
    };
    const updatedPosts = [
        newPost, 
        ...existingPosts
    ];
    await storePosts(updatedPosts);
    response.status(201).json({ message: "Stored new post.", post: newPost });
});

app.listen(8080);
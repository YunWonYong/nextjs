import Post from "./components/Post";

// root component
const App = () => {
    return (
        <main>
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
        </main>
    );
}

export default App;

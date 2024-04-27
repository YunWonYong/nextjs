import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

// root component
const App = () => {
    const [ modalIsVisible, setModalIsVisible ] = useState(true);
    const hideModalHandler = () => {
        setModalIsVisible(false);
    };

    const showModalHandler = () => {
        setModalIsVisible(true);
    }
    return (
        <>
            <MainHeader 
                onCreatePost={ showModalHandler }
            />
            <main>
                <PostList 
                    isPosting={ modalIsVisible }
                    onStopPosting={ hideModalHandler }
                />
            </main>
        </>
    );
}

export default App;

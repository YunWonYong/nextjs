import { useState } from "react";

import classes from "./NewPost.module.css";

const NewPost = () => {
    const stateData = useState("");
    const enterdBody = stateData[0]; // current value
    const setEnterdBody = stateData[1]; // state updating function
    const changeBodyHandler = (event) => {
        const { target } = event;
        const { value } = target; 
        setEnterdBody(value);
    };
    return (
        <form 
            className={ classes.form }
        >
            <p>
                <label
                    htmlFor="body"
                >
                    Text
                </label>
                <textarea
                    id="body"
                    required
                    rows={ 3 }
                    onChange={ changeBodyHandler }
                />
            </p>
            <p>
                {
                    enterdBody
                }
            </p>
            <p>
                <label
                    htmlFor="name"
                >
                    Your name
                </label>
                <input 
                    type="text" 
                    id="name" 
                    required
                />
            </p>
        </form>
    );
}

export default NewPost;
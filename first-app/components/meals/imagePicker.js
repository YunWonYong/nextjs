"use client";
import { useState, useRef } from "react";
import Image from "next/image";

import classes from "./imagePicker.module.css";

const ImagePicker = ({ label, name, required = false }) => {
    const [pickedImage, setPickedImage] = useState();
    const imageRef = useRef();
    console.log(label, name, required)
    const handlePickClick = () => {
        imageRef.current.click();
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
        
    }
    return (
        <div
            className={ classes.picker }
        >
            <label htmlFor={ name } > 
                {
                    label
                }
            </label>
            <div className={ classes.controls } >
                <div className={ classes.preview } >
                    {
                        pickedImage
                            ?   <Image 
                                    src={ pickedImage }
                                    alt="The image selected by the user."
                                    fill
                                />
                            :   <p>
                                    No image picked yet.
                                </p>
                    }
                </div>
                <input 
                    className={ classes.input }
                    type="file"
                    id={ name }
                    accept="image/png, image/jpeg"
                    name={ name }
                    ref={ imageRef }
                    onChange={ handleImageChange }
                    required={ required }
                />
                <button
                    className={ classes.button }
                    type="button"
                    onClick={ handlePickClick }
                >
                    Pick an Image
                </button>
            </div>
            
        </div>
    );
}

export default ImagePicker;
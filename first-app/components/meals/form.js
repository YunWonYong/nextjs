"use client";

import { useFormState } from "react-dom";
// import { useActionState } from "react";

const MealsFormSubmit = () => {
    // const { pending } = useActionState();
    const { pending } = useFormState();
    return (
        <button
            disabled={ pending }
        >
            {
                pending
                    ?   "Submitting..."
                    :   "Share Meal"
            }
        </button>
    );
}

export default MealsFormSubmit;
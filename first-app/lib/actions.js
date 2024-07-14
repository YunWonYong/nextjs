"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const isInvalidTexts = (...texts) => {
    let i = 0;
    let range = texts.length;
    do {
        if (isInvalidText(texts[i])) {
            return true;
        }
    } while(++i < range);
    return false;
};

const isInvalidText = (text) => !text || text.trim("") === "";

const isInvalidEmal = (email) => {
    return isInvalidText(email) || !email.includes("@");
};

const shareMeal = async (prevState, formData) => {
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("shareImage"),
        creator: formData.get("name"),
        creator_email: formData.get("email")
    };

    if (
        isInvalidTexts(meal.title, meal.summary, meal.instructions, meal.creator) ||
        isInvalidEmal(meal.email) ||
        (!meal.image || meal.image.size === 0)
    ) {
        return {
            message: "Invalid input."
        };
    }
    console.log(meal);
    await saveMeal(meal);
    redirect("/meals");
}
export {
    shareMeal
};  
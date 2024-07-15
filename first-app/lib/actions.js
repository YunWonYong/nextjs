"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

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

const shareMeal = async (formData) => {
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("shareImage"),
        creator: formData.get("name"),
        creator_email: formData.get("email")
    };
    console.log(meal);
    if (
        isInvalidTexts(meal.title, meal.summary, meal.instructions, meal.creator) ||
        isInvalidEmal(meal.creator_email) ||
        (!meal.image || meal.image.size === 0)
    ) {
        console.log(isInvalidTexts(meal.title, meal.summary, meal.instructions, meal.creator));
        console.log(isInvalidEmal(meal.creator_email));
        console.log((!meal.image || meal.image.size === 0));
        return {
            message: "Invalid input."
        };
    }
    
    await saveMeal(meal);
    // 첫 번째 인자인 path 기준으로 캐싱된 정보를 삭제 (두 번째 인자는 page, layout인데 어떤 기준으로 캐싱된 정보를 삭제할지 지정하는 것)
    revalidatePath("/meals", "layout");
    redirect("/meals");
}
export {
    shareMeal
};  


// const shareMeal = async (prevState, formData) => {
//     const meal = {
//         title: formData.get("title"),
//         summary: formData.get("summary"),
//         instructions: formData.get("instructions"),
//         image: formData.get("shareImage"),
//         creator: formData.get("name"),
//         creator_email: formData.get("email")
//     };

//     if (
//         isInvalidTexts(meal.title, meal.summary, meal.instructions, meal.creator) ||
//         isInvalidEmal(meal.email) ||
//         (!meal.image || meal.image.size === 0)
//     ) {
//         return {
//             message: "Invalid input."
//         };
//     }
    
//     await saveMeal(meal);
//     // 첫 번째 인자인 path 기준으로 캐싱된 정보를 삭제 (두 번째 인자는 page, layout인데 어떤 기준으로 캐싱된 정보를 삭제할지 지정하는 것)
//     revalidatePath("/meals", "layout");
//     redirect("/meals");
// }
// export {
//     shareMeal
// };  
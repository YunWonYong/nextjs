import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

// 동적 메타데이터 설정
const generateMeatadata = async ({ params: { slug } }) => {
    const meal = getMeal(slug);
    if (!meal) {
        notFound();
    }
    return {
        title: meal.title,
        description: meal.summary
    };
};

const MealDetail = ({ params: { slug } }) => {
    const meal = getMeal(slug);
    
    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br />" );
    return (
        <>
            <header className={ classes.header } >
                <div className={ classes.image} >
                    <Image src={ meal.image } alt={ meal.title } fill />
                </div>
                <div className={ classes.headerText } >
                    <h1>
                        {
                            meal.title
                        }
                    </h1>
                    <p className={ classes.creator }>
                        by <a href={`mailto:${ meal.creator_email }`}>{ meal.creator }</a>
                    </p>
                    <p className={ classes.summary }>
                        {
                            meal.summary
                        }
                    </p>
                </div>
            </header>
            <main
            
            >
                <p 
                    className={ classes.instructions }
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions
                    }}
                >
                </p>
            </main>
        </>
    )
}

export default MealDetail;

export {
    generateMeatadata
}
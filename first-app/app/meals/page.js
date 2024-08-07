import { Suspense } from "react";

import Link from "next/link";

import classes from "./page.module.css";
import Grid from "@/components/meals/grid";
import { getMeals } from "@/lib/meals";

// 정적 메타데이타 설정
const metadata = {
    title: "All Meals",
    description: "Browse the delicious meals shared by our vibrant community."
};

const MealsContext = async () => {
    const meals = await getMeals();
    return (
        <Grid 
            meals={ meals }
        />
    );
};


const Meals = () => {
    
    return (
        <>
            <header
                className={ classes.header }
            >
                <h1>
                    Delicious meals, created <span className={ classes.highlight }>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yoursalf. It is easy and fun!
                </p>
                <p
                    className={ classes.cta } // call to action [cta]
                >
                    <Link
                        href="/meals/share"
                    >
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main
                className={ classes.main }
            >
                <Suspense
                    fallback={ <p className={ classes.loading }>Fetching meals...</p> }
                >
                    <MealsContext />
                </Suspense>
                
            </main>
        </>
    );
};

export default Meals;

export {
    metadata
}
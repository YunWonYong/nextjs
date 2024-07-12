const MealsSlug = ({ params: { slug } }) => {
    return (
        <>
            <main>
                <h1>
                    Meals { slug }
                </h1>
            </main>
        </>
    )
}

export default MealsSlug;
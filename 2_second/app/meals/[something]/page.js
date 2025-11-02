export default async function SomethingMealsPage({ params }) {
    const { something } = await params;
    return (
        <main>
            <h1>
                Something Meals Page
            </h1>
            <p>
                {
                    something
                }
            </p>
        </main>
    );
}
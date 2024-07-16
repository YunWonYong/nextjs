import Link from "next/link";

const StaticPage = () => {
    return (
        <>
            <main>
                <section>
                    <Link href="/static/slots">
                        Slots
                    </Link>
                </section>
                <section>
                    <Link href="/static/assets">
                        Assets
                    </Link>
                </section>
                <section>
                    <Link href="/static/baccarat">
                        Baccarat
                    </Link>
                </section>
            </main>
        </>
    );
}

export default StaticPage;
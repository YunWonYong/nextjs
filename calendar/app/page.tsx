import { getYearsInfo } from "@/lib/calendar/date";

export default function Home() {
    const yearInfo = getYearsInfo(new Date().getUTCFullYear())
    return (
        <section>
            <h1>
                {
                    yearInfo.year
                }
            </h1>
            {
                yearInfo.months.map(({month, days}) => {
                    return (
                        <article key={`${yearInfo.year}@${month}`}>
                            <h2>
                                {
                                    month
                                }
                            </h2>
                            {
                                days.map(({ day })=> {
                                    return (
                                        <p key={`${yearInfo.year}@${month}@${day}`}>
                                            {
                                                day
                                            }
                                        </p>
                                    );
                                })
                            }
                        </article>
                    );
                })
            }
        </section>
    );
};

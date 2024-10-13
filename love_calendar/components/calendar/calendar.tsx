import { FC } from "react";
import { getDaysByYM } from "@/lib/calendar";
import { DAY_NAME } from "@/lib/date";
import CalendarHeader from "./layouts/header";


const Calendar: FC<{ year: string, month: string }> = ({ year, month }) => {
    return (
        <section>
            <CalendarHeader year={ year } month={ month } />
            <article
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    boxSizing: "border-box"
                }}
            >
                {
                    Array.from({ length: DAY_NAME.length }).map((_, i) => {
                        const { full, short } = DAY_NAME[i];
                        return (
                            <div
                                key={ `${full}(${short})` }
                                style={{
                                    boxSizing: "border-box",
                                    border: "0.2px solid black",
                                    borderCollapse: "collapse"
                                }}
                            >
                                <p 
                                    style={{
                                        color: `${ i === 6? "blue": i === 0? "red": "black" }`,
                                        margin: 0,
                                        fontWeight: "bold",
                                        minHeight: "30px",
                                        padding: "0.1rem",
                                        fontSize: "1rem",    
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-around",
                                    }}
                                >
                                    { short }
                                </p>
                            </div>
                        );
                    })
                }
                {
                    getDaysByYM(year, month).map((day) => {
                        return ( 
                            <div
                                key={ `${day.year}_${day.month}_${day.date}` }
                                style={{
                                    boxSizing: "border-box",
                                    border: "0.2px solid #666",
                                    borderCollapse: "collapse",
                                    minHeight: "80px",
                                    padding: "0.1rem",
                                    fontSize: "0.8rem",
                                    fontWeight: 700
                                }}
                            >   
                                <p 
                                    style={{
                                        color: `${ day.day === 6? "blue": day.day === 0? "red":  "black" }`,
                                        opacity: month === day.month? 1: 0.3,
                                        margin: 0
                                    }}
                                >
                                    { day.date }
                                </p>
                            </div>
                            
                        );
                    })
                }
            </article>
        </section>
        // <M year={ year } />
    );
};

// const M: FC<{ year: number }> = ({ year }) => {
//     const d = new Date(Date.now());
//     return (
//         <R year={ year } month={ d.getMonth() }>
//         </R>
//     );
// };

// const d: string[] = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// const R: FC<{ year: number, month: number }> = ({ year, month }) => {
//     return (
//         <>
//             <section>
//                 {
//                     `${year}.${calendarFormat(month + 1)}`
//                 }
//             </section>
//             {
//                 d.map((str) => {
//                     return (
//                         <span
//                             key={ str }
//                             style={{
//                                 paddingRight: "1em"
//                             }}
//                         >
//                             {
//                                 str
//                             }
//                         </span>
//                     );
//                 })
//             }
//             <span>
//                 {
//                     Array.from({ length: 40 }).map((_, index) => {
//                         ++index;
//                         return (
//                             <div key={ index }>
//                                 {
//                                     new Date(year, month, index).getDay() + ", " + new Date(year, month, index).getDate()
//                                 }
//                             </div>
//                         );
//                     })
//                 }
//             </span>
//         </>
//     );
// }

const calendarFormat = (i: number): string => {
    return `${i < 10? "0" + i: i}`;
}

export {
    Calendar
};
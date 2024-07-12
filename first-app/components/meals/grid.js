import Item from "./item";
import classes from "./grid.module.css";

const Grid = ({ meals }) => {
    return (
        <ul
            className={ classes.meals }
        >
            { 
                meals.map(meal => {
                    return (
                        <li
                            key={ meal.id }
                        >
                            <Item {...meal} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Grid;
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (

        <nav className="Menu">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/list">Meetings</NavLink></li>
                <li><NavLink to="/insert">Scedule new meeting</NavLink></li>
            </ul>
        </nav>





    );
}

export default Menu;

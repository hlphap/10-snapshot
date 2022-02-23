import "./Navigation.css";

import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <ul className="navigation">
            <li className="navigation__item">
                <NavLink className="navigation__item-link" to="/mountain">
                    Mountain
                </NavLink>
            </li>
            <li className="navigation__item">
                <NavLink className="navigation__item-link" to="/beach">
                    Beaches
                </NavLink>
            </li>
            <li className="navigation__item">
                <NavLink className="navigation__item-link" to="bird">
                    Birds
                </NavLink>
            </li>
            <li className="navigation__item">
                <NavLink className="navigation__item-link" to="food">
                    Food
                </NavLink>
            </li>
        </ul>
    );
}

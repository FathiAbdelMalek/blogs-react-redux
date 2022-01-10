import React from "react";
import { NavLink } from "react-router-dom";


export default class Nav extends React.Component {

    render() {
        return (
            <nav>
                <NavLink to='/' className="nav-item nav-link">Home</NavLink>
            </nav>
        )
    }
}

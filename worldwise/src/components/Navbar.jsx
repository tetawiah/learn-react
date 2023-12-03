import {NavLink} from "react-router-dom";

export default function Navbar () {
    return <nav>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/product" >Product </NavLink>
        <NavLink to="/pricing" > Pricing </NavLink>
    </nav>
}
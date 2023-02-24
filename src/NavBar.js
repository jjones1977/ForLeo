import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <>
        <Link to="/">Home</Link>
        <Link to="/AddUser">AddUser</Link>
        </>
    );
}

export default NavBar;
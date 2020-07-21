import React from 'react';
import NavigationBar from "./NavigationBar";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="p-3 flex justify-between items-center">
            <Link to="/" className="font-bold">
                LI Kevin
            </Link>
            <NavigationBar/>
        </header>
    );
}

export default Header;
import React from 'react';
import NavigationBar from "./NavigationBar";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="p-5 flex justify-between items-center bg-color-primary-2 text-white fixed w-full z-50">
            <Link to="/" className="font-bold text-xl text-white">
                LI Kevin
            </Link>
            <NavigationBar/>
        </header>
    );
}

export default Header;
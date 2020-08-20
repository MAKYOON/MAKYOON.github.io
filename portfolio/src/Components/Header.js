import React from 'react';
import NavigationBar from "./NavigationBar";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="p-5 md:p-10 lg:p-12 flex justify-between items-center bg-color-primary-2 text-white fixed w-full z-50">
            <Link to="/" className="font-bold text-xl text-white md:text-3xl lg:text-4xl">
                LI Kevin
            </Link>
            <NavigationBar/>
        </header>
    );
}

export default Header;
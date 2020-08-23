import React from 'react';
import NavigationBar from "../Components/NavigationBar";
import {Link} from 'react-scroll';

function Header() {
    return (
        <header
            className="p-5 flex justify-between items-center bg-color-primary-2 text-white fixed w-full z-50
            md:p-10
            lg:p-12
            xl:p-6"
        >
            <Link
                to="accueil"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="font-bold text-xl text-white
                md:text-3xl
                lg:text-4xl
                xl:text-2xl"
            >
                LI Kevin
            </Link>
            <NavigationBar/>
        </header>
    );
}

export default Header;
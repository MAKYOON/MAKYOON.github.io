import React from 'react';
import {Link} from 'react-scroll';

function NavigationMenu(props) {

    return (
        <div className="h-full">
            <ul className="flex flex-col text-xl justify-center items-center h-full">
                <li className="py-3 border-b-2">
                    <Link
                        to="accueil"
                        onClick={props.closeMenu}
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}
                        activeClass="active"
                    >
                        Accueil
                    </Link>
                </li>
                <li className="py-3 border-b-2">
                    <Link
                        onClick={props.closeMenu}
                        activeClass="active"
                        to="presentation"
                        spy={true}
                        smooth={true}
                        offset={40}
                        duration={500}
                    >
                        Présentation
                    </Link>
                </li>
                <li className="py-3 border-b-2">
                    <Link
                        onClick={props.closeMenu}
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={40}
                        duration={500}
                    >
                        Mes Projets
                    </Link>
                </li>
                <li className="py-3 border-b-2">
                    <Link
                        onClick={props.closeMenu}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={40}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationMenu;
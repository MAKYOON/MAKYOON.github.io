import React from 'react';
import {Link} from 'react-scroll';

function NavigationMenu(props) {

    return (
        <div className="h-full">
            <ul className="flex flex-col text-xl justify-center items-center h-full
            md:text-3xl
            lg:text-4xl
            xl:flex-row xl:text-xl"

            >
                <li
                    className="py-3 border-b-2
                    xl:border-b-0 xl:py-0 xl:px-3">
                    <Link
                        to="accueil"
                        onClick={props.closeMenu}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={300}
                        activeClass="active"
                    >
                        Accueil
                    </Link>
                </li>
                <li
                    className="py-3 border-b-2
                    xl:border-b-0 xl:py-0 xl:px-5"
                >
                    <Link
                        onClick={props.closeMenu}
                        activeClass="active"
                        to="presentation"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={300}
                    >
                        Présentation
                    </Link>
                </li>
                <li
                    className="py-3 border-b-2
                    xl:border-b-0 xl:py-0 xl:px-5"
                >
                    <Link
                        onClick={props.closeMenu}
                        activeClass="active"
                        to="competences"
                        spy={true}
                        smooth={true}
                        offset={40}
                        duration={300}
                    >
                        Compétences
                    </Link>
                </li>
                <li
                    className="py-3 border-b-2
                    xl:border-b-0 xl:py-0 xl:px-5"
                >
                    <Link
                        onClick={props.closeMenu}
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={40}
                        duration={300}
                    >
                        Mes Projets
                    </Link>
                </li>
                <li
                    className="py-3 border-b-2
                    xl:border-b-0 xl:py-0 xl:px-5"
                >
                    <Link
                        onClick={props.closeMenu}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={45}
                        duration={300}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationMenu;
import React, {useEffect} from 'react';
import {Link} from 'react-scroll';
import useWindowSize from "../Hooks/WindowSize";

function NavigationMenu(props) {

    const size = useWindowSize();

    let offSet;

    useEffect(() => {
        if(size.width > 1024)
            offSet = 80;
        else
            offSet = 0;
    })

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
                        isDynamic={true}
                        smooth={true}
                        offset={0}
                        duration={500}
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
                        isDynamic={true}
                        smooth={true}
                        offset={0}
                        duration={500}
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
                        isDynamic={true}
                        smooth={true}
                        offset={0}
                        duration={500}
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
                        isDynamic={true}
                        smooth={true}
                        offset={0}
                        duration={500}
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
                        isDynamic={true}
                        smooth={true}
                        offset={0}
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
import React, {useState} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

function NavigationMenu(props) {

    return (
        <div>
            <div
                className="font-bold"
            >
                Menu
            </div>
            <ul>
                <li>
                    <Link
                        to="/"
                        className="py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        className="py-3 border-t border-b block"
                        onClick={props.closeMenu}
                        activeClass="active"
                        to="presentation"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Présentation
                    </Link>
                </li>
                <li>
                    <Link
                        className="py-3 border-t border-b block"
                        onClick={props.closeMenu}
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        My Projects
                    </Link>
                </li>
                <li>
                    <Link
                        className="py-3 border-t border-b block"
                        onClick={props.closeMenu}
                        activeClass="active"
                        to="contact"
                        spy={true}
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
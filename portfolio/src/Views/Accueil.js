import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";

function Accueil() {
    return (
        <section
            id="accueil"
            className="relative w-full h-screen overflow-hidden"
        >
            <figure>
                <img src={require("../Assets/accueil.jpg")}
                     alt="Accueil"
                     className="w-full h-screen object-cover"
                />
                <figcaption
                    className="absolute pin-center text-center text-4xl font-bold w-full pt-2 text-white"
                >
                    <p>PORTFOLIO</p>
                    <p>LI Kevin</p>
                </figcaption>
            </figure>
            <div className="absolute pin-bottom flex">
                <div className="mx-3">
                    <a target="_blank" href="https://www.linkedin.com/in/kevin-li-340814194/">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="fa-3x color-linkedin"
                        />
                    </a>
                </div>
                <div className="mx-3">
                    <a target="_blank" href="https://github.com/MAKYOON">
                        <FontAwesomeIcon
                            icon={faGithubSquare}
                            className="fa-3x"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Accueil;
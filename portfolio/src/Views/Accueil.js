import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {Fade} from "react-awesome-reveal";

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
                    className="absolute pin-center text-center text-4xl font-bold w-full pt-2 text-white
                    md:text-5xl
                    lg:text-6xl
                    xl:text-5xl"
                >
                    <p>PORTFOLIO</p>
                    <p>LI Kevin</p>
                    <br/>
                    <p
                        className="text-2xl
                        md:text-4xl
                        lg:text-5xl
                        xl:text-3xl"
                    >
                        Développeur Web
                    </p>
                </figcaption>
            </figure>
            <div
                className="absolute pin-bottom-20 flex
                           xl:pt-64"
            >
                <Fade triggerOnce cascade>
                    <div className="mx-3">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/kevin-li-340814194/">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-6xl color-linkedin
                                md:text-8xl
                                lg:text-9xl
                                xl:text-6xl"
                            />
                        </a>
                    </div>
                    <div className="mx-3">
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/MAKYOON">
                            <FontAwesomeIcon
                                icon={faGithubSquare}
                                className="text-6xl
                                md:text-8xl
                                lg:text-9xl
                                xl:text-6xl"
                            />
                        </a>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Accueil;
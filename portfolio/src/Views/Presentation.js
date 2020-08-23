import React from 'react';
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";
import {Slide} from "react-awesome-reveal";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";


function Presentation() {


    return (
        <section id="presentation"
                 className="pt-20 bg-color-primary text-black
                            md:pt-32
                            xl:pt-20"
        >
            <Slide triggerOnce>
                <div
                    className="flex flex-col items-center justify-around w-full min-h-screen
                    xl:grid xl:grid-cols-3 xl:grid-rows-3
                    "
                >
                    <h1 className="text-3xl text-center p-3 section-title
                    md:text-5xl md:p-5
                    lg:text-6xl lg:p-8
                    xl:text-4xl xl:p-3 xl:col-span-2"
                    >
                        <FontAwesomeIcon
                            icon={faUserCircle}
                            className="mr-3"
                        />
                        PRESENTATION </h1>
                    <div
                        className="xl:row-start-1 xl:row-span-3 xl:m-auto "
                    >
                        <img
                            className="rounded-full h-32 w-32 mb-12
                            md:h-48 md:w-48
                            lg:h-64 lg:w-64
                            "
                            src={require("../Assets/photo.jpg")}
                            alt="Profil"
                        />
                    </div>
                    <div
                        className="pl-3
                        md:text-2xl md:pl-5
                        lg:text-3xl
                        xl:text-xl xl:m-auto xl:col-span-2 xl:pr-3"
                    >
                        <p>
                            Je m'appelle <strong className="color-primary-3"> LI Kevin </strong>, j'ai 22 ans et je suis un étudiant à Strasbourg.
                            Diplômé d'un <strong className="color-primary-3"> Foundation Degree Jeux Vidéo et Serious Games </strong>, j'ai décidé
                            de continuer mes études dans le domaine du développement web. Ainsi, je prépare actuellement
                            une <strong className="color-primary-3"> Licence Pro : Développement Web, Communication et Apprentissages </strong> à
                            la Faculté de Strasbourg, en alternance au sein de la startup <strong className="color-primary-3">AirCampus </strong>.
                        </p>
                        <br/>
                        <p>
                            Ce portfolio retrace les différentes étapes de ma formation et recense ainsi les différents
                            projets sur lesquels j'ai pu travailler. Si vous avez des questions, n'hésitez pas à me contacter !
                        </p>
                    </div>
                    <div
                        className="flex flex-col space-y-5 w-4/5 text-center
                        md:w-3/5
                        xl:w-2/5 xl:m-auto xl:col-span-2"
                    >
                        <Link
                            className="bg-color-primary-2 cursor-pointer text-white font-bold py-2 px-5 rounded text-xl
                            md:text-3xl
                            lg:text-4xl
                            xl:text-xl"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={300}
                        >
                            <FontAwesomeIcon className="mr-5" icon={faPaperPlane}/>
                            Me contacter
                        </Link>
                        <a
                            href={require("../Assets/CV_LI_Kevin.pdf")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-color-primary-2 cursor-pointer text-white font-bold py-2 px-5 rounded text-xl
                            md:text-3xl
                            lg:text-4xl
                            xl:text-xl"
                        >
                            <FontAwesomeIcon className="mr-5" icon={faFileDownload}/>
                            Téléchargez mon CV
                        </a>
                    </div>
                </div>
            </Slide>
        </section>
    );
}

export default Presentation;
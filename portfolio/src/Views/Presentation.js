import React from 'react';
import {animated, useTransition} from "react-spring";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";

function Presentation() {

    const displayTransition = useTransition(true, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <section id="presentation" className="pt-20 bg-color-primary text-black">
        {
            displayTransition.map(({ item, key, props }) =>
                item &&
                <animated.div
                    key={key}
                    style={props}
                    className="flex flex-col items-center justify-around w-full min-h-screen"
                >
                    <h1 className="font-bold text-3xl text-center w-full bg-color-primary-2 text-white p-3"> PRESENTATION </h1>
                    <div>
                        <img className="rounded-full h-32 w-32" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                    </div>
                    <div className="pl-3">
                        <p>
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
                    <div className="flex flex-col space-y-5">
                        <Link
                            className="bg-color-primary-2 cursor-pointer text-white font-bold py-2 px-5 rounded text-xl"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <FontAwesomeIcon className="mr-5" icon={faPaperPlane}/>
                            Me contacter
                        </Link>
                        <a href={require("../Assets/CV_LI_Kevin.pdf")} download
                           className="bg-color-primary-2 cursor-pointer text-white font-bold py-2 px-5 rounded text-xl"
                        >
                            <FontAwesomeIcon className="mr-5" icon={faFileDownload}/>
                            Téléchargez mon CV
                        </a>
                    </div>
                </animated.div>)
        }
        </section>
    );
}

export default Presentation;
import React from 'react';
import {animated, useTransition} from "react-spring";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";

function Presentation() {

    const displayTransition = useTransition(true, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <section id="presentation" className="pt-20 color-primary text-white">
        {
            displayTransition.map(({ item, key, props }) =>
                item &&
                <animated.div
                    key={key}
                    style={props}
                    className="flex flex-col items-center justify-around w-full min-h-screen"
                >
                    <h1 className="font-bold text-3xl"> PRESENTATION </h1>
                    <div>
                        <img className="rounded-full h-32 w-32" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                        <p className="text-center text-bold text-xl pt-3">LI Kevin</p>
                    </div>
                    <div className="pl-3">
                        <p>
                            Diplômé d'un <strong> Foundation Degree Jeux Vidéo et Serious Games </strong>, j'ai décidé
                            de continuer mes études dans le domaine du développement web. Ainsi, je prépare actuellement
                            une <strong> Licence Pro : Développement Web, Communication et Apprentissages </strong> à
                            la Faculté de Strasbourg, en alternance au sein de la startup <strong>AirCampus </strong>.
                        </p>
                        <br/>
                        <p>
                            Ce portfolio retrace les différentes étapes de ma formation et recense ainsi les différents
                            projets sur lesquels j'ai pu travailler. Si vous avez des questions, n'hésitez pas à me contacter !
                        </p>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <Link
                            className="color-secondary cursor-pointer text-white font-bold py-2 px-5 rounded text-xl"
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
                           className="color-secondary cursor-pointer text-white font-bold py-2 px-5 rounded text-xl"
                        >
                            <FontAwesomeIcon className="mr-5" icon={faEye}/>
                            Consultez mon CV
                        </a>
                    </div>
                </animated.div>)
        }
        </section>
    );
}

export default Presentation;
import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {animated, useTransition} from "react-spring";

function CardOverlay(propts) {

    //Transition qui donne un effet "fade-in"
    const overlayTransition = useTransition(propts.showOverlay, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    //On récupère l'état à travers les props et on affiche l'overlay si la props est égale à true
    if (propts.showOverlay) {
        return (
            //On met en place l'animation
            overlayTransition.map (
                ({item, key, props}) =>
                item &&
                <animated.div
                    key={key}
                    style={props}
                    className="w-full bg-black z-10 h-48 absolute top-0"
                >
                    {/*On affiche le titre et un bouton qui contient un lien vers le projet (données récupérées à
                     travers les props*/}
                    <figcaption className="text-white">
                        <h1 className="absolute pin-top text-center text-lg"> {propts.title} </h1>
                        <Link
                            to={propts.link}
                            className="absolute pin-bottom border-button px-5 py-1 rounded-full text-xl"
                        >
                            Voir plus
                            <FontAwesomeIcon className="ml-2 pt-1" icon={faAngleRight}/>
                        </Link>
                    </figcaption>

                </animated.div>
            )
        );
    }

    return (
        overlayTransition.map (
            ({item, key, props}) =>
                item &&
                <animated.div
                    key={key}
                    style={props}
                    className="w-full bg-black z-10 h-48 absolute top-0"
                >
                </animated.div>
        )
    );
}

export default CardOverlay;
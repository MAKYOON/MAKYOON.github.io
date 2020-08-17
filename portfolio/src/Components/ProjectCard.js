import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

function ProjectCard(props) {
    return (
        <div className="p-4">
            <figure className="relative">
                <img className="rounded-md w-full h-48"
                     src={require(`../Assets/${props.name}`)}
                     alt="Image représentant un projet"
                />
                <div className="hidden w-full bg-black z-50 h-48 absolute top-0">
                    <figcaption className="text-white">
                        <h1 className="absolute pin-top text-center text-lg"> Blog Post (fetch API from JSON PlaceHolder) </h1>
                        <Link
                            to="/posts"
                            className="absolute pin-bottom border-button px-5 py-1 rounded-full text-xl"
                        >
                            Voir plus
                            <FontAwesomeIcon className="ml-2 pt-1" icon={faAngleRight}/>
                        </Link>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}

export default ProjectCard;
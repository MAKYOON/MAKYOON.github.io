import React, {useState} from 'react';
import CardOverlay from "./CardOverlay";
import OnOutsiceClick from "react-outclick";


function ProjectCard(props) {

    //Permet de gérer le state actuel (afficher ou non l'overlay)
    const [showOverlay, setShowOverlay] = useState(false);


    return (
        //Quand on clique dessus, on l'active/désactive
        <div className="p-2"
             onClick={() => setShowOverlay(!showOverlay)}
        >
            {/*Cet import permet de gérer le clic en dehors du composant et du coup mettre l'état à false*/}
            <OnOutsiceClick
                onOutsideClick={() => setShowOverlay(false)}
            >
                {/*Titre du projet*/}
                <h1 className="text-center text-white color-primary-3 text-2xl md:text-4xl lg:text-5xl">{props.title}</h1>
                {/*Image représentant le projet*/}
                <figure className="relative">
                    <img className="rounded-md w-full h-48 md:h-80 lg:h-112"
                         src={require(`../Assets/${props.name}`)}
                         alt="Projet"
                    />
                    {/*L'overlay qui contient un titre ainsi qu'un lien vers le projet*/}
                    <CardOverlay
                        description={props.description}
                        link={props.link}
                        showOverlay={showOverlay}
                        date={props.date}
                    />
                </figure>
            </OnOutsiceClick>
        </div>
    );
}


export default ProjectCard;
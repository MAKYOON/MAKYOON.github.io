import React, {useState} from 'react';
import CardOverlay from "./CardOverlay";
import OnOutsiceClick from "react-outclick";


function ProjectCard(props) {

    //Permet de gérer le state actuel (afficher ou non l'overlay)
    const [showOverlay, setShowOverlay] = useState(false);


    return (
        //Quand on clique dessus, on l'active/désactive
        <div className="p-4"
             onClick={() => setShowOverlay(!showOverlay)}
        >
            {/*Cet import permet de gérer le clic en dehors du composant et du coup mettre l'état à false*/}
            <OnOutsiceClick
                onOutsideClick={() => setShowOverlay(false)}
            >
                {/*Image représentant le projet*/}
                <figure className="relative">
                    <img className="rounded-md w-full h-48"
                         src={require(`../Assets/${props.name}`)}
                         alt="Image représentant un projet"
                    />
                    {/*L'overlay qui contient un titre ainsi qu'un lien vers le projet*/}
                    <CardOverlay
                        title={props.title}
                        link={props.link}
                        showOverlay={showOverlay}
                    />
                </figure>
            </OnOutsiceClick>
        </div>
    );
}


export default ProjectCard;
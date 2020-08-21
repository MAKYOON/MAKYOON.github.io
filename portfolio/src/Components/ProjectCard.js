import React, {useState} from 'react';
import CardOverlay from "./CardOverlay";
import OnOutsiceClick from "react-outclick";


function ProjectCard(props) {

    //Permet de gérer le state actuel (afficher ou non l'overlay)
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        //Quand on clique dessus, on l'active/désactive
        <div
            className="p-2
            xl:p-0"
            //display the overlay onclick only when on small to large devices / on desktop it will be on hover
            onClick={() => {
                if(window.innerWidth < 1024)
                    setShowOverlay(!showOverlay);
            }}
        >
            {/*Cet import permet de gérer le clic en dehors du composant et du coup mettre l'état à false*/}
            <OnOutsiceClick
                onOutsideClick={() => setShowOverlay(false)}
            >
                {/*Titre du projet*/}
                <h1
                    className="text-center text-2xl
                     md:text-4xl
                     lg:text-5xl
                     xl:hidden"
                >
                    {props.title}
                </h1>
                {/*Image représentant le projet*/}
                <figure className="relative">
                    <img
                         className="rounded-md w-full h-48 object-cover
                         md:h-80
                         lg:h-112
                         xl:rounded-none "
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
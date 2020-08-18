import React, {useState} from 'react';
import CardOverlay from "./CardOverlay";
import OnOutsiceClick from "react-outclick";


function ProjectCard(props) {

    const [showOverlay, setShowOverlay] = useState(false);


    return (
        <div className="p-4"
             onClick={() => setShowOverlay(!showOverlay)}
        >
            <OnOutsiceClick
                onOutsideClick={() => setShowOverlay(false)}
            >
                <figure className="relative">
                    <img className="rounded-md w-full h-48"
                         src={require(`../Assets/${props.name}`)}
                         alt="Image représentant un projet"
                    />
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
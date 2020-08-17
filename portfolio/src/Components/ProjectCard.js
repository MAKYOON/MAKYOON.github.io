import React, {useState} from 'react';
import CardOverlay from "./CardOverlay";


function ProjectCard(props) {

    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className="p-4"
             onClick={() => setShowOverlay(!showOverlay)}
        >
            <figure className="relative">
                <img className="rounded-md w-full h-48"
                     src={require(`../Assets/${props.name}`)}
                     alt="Image représentant un projet"
                />
                <CardOverlay
                    title="Blog Post (fetch API from JSONPlaceHolder)"
                    link="/posts"
                    showOverlay={showOverlay}
                />
            </figure>
        </div>
    );
}

export default ProjectCard;
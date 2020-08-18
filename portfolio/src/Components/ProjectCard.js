import React, {useState} from 'react';
import CardOverlay from "./CardOverlay";
import onClickOutside from "react-onclickoutside";

function ProjectCard(props) {

    const [showOverlay, setShowOverlay] = useState(false);

    ProjectCard.handleClickOutside = () => {
        setShowOverlay(false);
    }

    const clickOutsideConfig = {
        handleClickOutside: () => ProjectCard.handleClickOutside;
    }

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
                    title={props.title}
                    link={props.link}
                    showOverlay={showOverlay}
                />
            </figure>
        </div>
    );
}

export default onClickOutside(ProjectCard, clickOutsideConfig);
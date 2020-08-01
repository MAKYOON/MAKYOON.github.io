import React from 'react';
import {animated, useTransition} from "react-spring";

function Presentation() {

    const displayTransition = useTransition(true, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <section id="presentation" className="bg-gray-800 pl-5 pb-3 text-white">
        {
            displayTransition.map(({ item, key, props }) =>
                item &&
                <animated.div
                    key={key}
                    style={props}
                >️
                    <h1 className="font-bold text-center p-3 text-3xl"> PRESENTATION </h1>
                    <div className="pb-3 flex justify-center">
                        <img className="rounded-full h-48 w-48" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste officia perspiciatis possimus
                        quisquam, recusandae voluptate! Aliquid animi architecto corporis ea harum, inventore ipsa natus
                        officiis porro quia sunt vero?
                    </p>
                </animated.div>)
        }
        </section>
    );
}

export default Presentation;
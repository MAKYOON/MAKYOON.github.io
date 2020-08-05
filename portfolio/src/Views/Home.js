import React from 'react';
import Presentation from "./Presentation";
import MyProjects from "./MyProjects";
import Contact from "./Contact";
import {animated} from "react-spring";

function Home() {
    return (
        <div>
            {/*<section id="presentation" className="bg-gray-800 text-white flex flex-col items-center justify-around w-full h-screen">
                <h1 className="font-bold text-3xl"> PRESENTATION </h1>
                <div>
                    <img className="rounded-full h-48 w-48" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste officia perspiciatis possimus
                    quisquam, recusandae voluptate! Aliquid animi architecto corporis ea harum, inventore ipsa natus
                    officiis porro quia sunt vero?
                </p>
            </section>*/}
            <Presentation/>
            <MyProjects/>
            <Contact/>
        </div>
    );
}

export default Home;
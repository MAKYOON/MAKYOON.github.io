import React from 'react';
import Presentation from "../Components/Presentation";
import MyProjects from "./MyProjects";
import Contact from "../Components/Contact";

function Home() {
    return (
        <div>
            <Presentation/>
            <section  className="bg-gray-800 pl-5 pb-3 text-white">
                <h1 className="pb-3 font-bold"> Présentation </h1>
                <div className="pb-3 flex justify-center">
                    <img className="rounded-full h-48 w-48" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste officia perspiciatis possimus
                    quisquam, recusandae voluptate! Aliquid animi architecto corporis ea harum, inventore ipsa natus
                    officiis porro quia sunt vero?
                </p>
            </section>
            <section  className="bg-gray-800 pl-5 pb-3 text-white">

                <h1 className="pb-3 font-bold"> Présentation </h1>
                <div className="pb-3 flex justify-center">
                    <img className="rounded-full h-48 w-48" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste officia perspiciatis possimus
                    quisquam, recusandae voluptate! Aliquid animi architecto corporis ea harum, inventore ipsa natus
                    officiis porro quia sunt vero?
                </p>
            </section>
            <section  className="bg-gray-800 pl-5 pb-3 text-white">

                <h1 className="pb-3 font-bold"> Présentation </h1>
                <div className="pb-3 flex justify-center">
                    <img className="rounded-full h-48 w-48" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste officia perspiciatis possimus
                    quisquam, recusandae voluptate! Aliquid animi architecto corporis ea harum, inventore ipsa natus
                    officiis porro quia sunt vero?
                </p>
            </section>
            <MyProjects/>
            <section  className="bg-gray-800 pl-5 pb-3 text-white">

                <h1 className="pb-3 font-bold"> Présentation </h1>
                <div className="pb-3 flex justify-center">
                    <img className="rounded-full h-48 w-48" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste officia perspiciatis possimus
                    quisquam, recusandae voluptate! Aliquid animi architecto corporis ea harum, inventore ipsa natus
                    officiis porro quia sunt vero?
                </p>
            </section>
            <section  className="bg-gray-800 pl-5 pb-3 text-white">

                <h1 className="pb-3 font-bold"> Présentation </h1>
                <div className="pb-3 flex justify-center">
                    <img className="rounded-full h-48 w-48" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste officia perspiciatis possimus
                    quisquam, recusandae voluptate! Aliquid animi architecto corporis ea harum, inventore ipsa natus
                    officiis porro quia sunt vero?
                </p>
            </section>
            <Contact/>
            <section  className="bg-gray-800 pl-5 pb-3 text-white">

                <h1 className="pb-3 font-bold"> Présentation </h1>
                <div className="pb-3 flex justify-center">
                    <img className="rounded-full h-48 w-48" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste officia perspiciatis possimus
                    quisquam, recusandae voluptate! Aliquid animi architecto corporis ea harum, inventore ipsa natus
                    officiis porro quia sunt vero?
                </p>
            </section>
            <section  className="bg-gray-800 pl-5 pb-3 text-white">

                <h1 className="pb-3 font-bold"> Présentation </h1>
                <div className="pb-3 flex justify-center">
                    <img className="rounded-full h-48 w-48" src={require("../Assets/photo.jpg")} alt="Photo de profil"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste officia perspiciatis possimus
                    quisquam, recusandae voluptate! Aliquid animi architecto corporis ea harum, inventore ipsa natus
                    officiis porro quia sunt vero?
                </p>
            </section>
        </div>
    );
}

export default Home;
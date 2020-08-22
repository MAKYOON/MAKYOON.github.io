import React from 'react';
import ProjectCard from "../Components/ProjectCard";
import {Fade} from "react-awesome-reveal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTasks} from "@fortawesome/free-solid-svg-icons";

function MyProjects() {
    
    return (
        <section
            id="projects"
            className="pt-24 bg-color-primary w-full min-h-screen relative pb-4
            md:pt-40
            lg:pt-48
            xl:pt-32"
        >

                <h1
                    className="section-title text-3xl text-black text-center p-3 mb-12
                    md:p-5 md:text-5xl
                    lg:text-6xl
                    xl:text-4xl xl:p-3"
                >
                    <FontAwesomeIcon
                        icon={faTasks}
                        className="mr-3"
                    />
                    PROJETS
                </h1>
                <div
                    className="xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-2 xl:w-4/5 xl:m-auto "
                >
                    <div
                        className="xl:col-span-2"
                    >
                        <Fade triggerOnce>
                            <ProjectCard
                                name="portfolio.png"
                                title="Portfolio"
                                description="Portfolio réalisé sous React & Tailwind"
                                date="2020"
                                link="/"
                            />
                        </Fade>
                    </div>
                    <div>
                        <Fade delay={200} triggerOnce>
                            <ProjectCard
                                name="geekpotato.png"
                                title="Geek Potato"
                                description="Jeu de plateforme sur le thème 'Réparer'"
                                date="GGJ - 2020"
                                link="/projects/geekpotato"
                            />
                        </Fade>
                    </div>
                    <div>
                        <Fade delay={300} triggerOnce>
                            <ProjectCard
                                name="survivalz.png"
                                title="SurvivalZ"
                                description="Un top-down shooter : survivez face aux zombies !"
                                date="2019"
                                link="/projects/survivalz"
                            />
                        </Fade>
                    </div>
                    <div
                        className="xl:col-span-2"
                    >
                        <Fade delay={400} triggerOnce>
                            <ProjectCard
                                name="serenity.png"
                                title="Serenity"
                                description="Prototype de jeu anti-stress"
                                date="Ludus Académie - 2019"
                                link="/projects/serenity"
                            />
                        </Fade>
                    </div>
                </div>
        </section>
    );
}

export default MyProjects;
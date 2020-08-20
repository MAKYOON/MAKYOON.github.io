import React from 'react';
import ProjectCard from "../Components/ProjectCard";
import {Fade} from "react-awesome-reveal";

function MyProjects() {
    
    return (
        <section
            id="projects"
            className="pt-24 md:pt-40 lg:pt-48 bg-color-primary w-full min-h-screen relative pb-4"
        >
            <Fade cascade triggerOnce>
                <h1 className="font-bold bg-color-primary-2 text-white text-center p-3 md:p-5 text-3xl md:text-5xl lg:text-6xl mb-12"> PROJETS </h1>
                <ProjectCard
                    name="portfolio.png"
                    title="Portfolio"
                    description="Portfolio réalisé sous React & Tailwind"
                    date="2020"
                    link="/"
                />
                <ProjectCard
                    name="geekpotato.png"
                    title="Geek Potato"
                    description="Jeu de plateforme sur le thème 'Réparer'"
                    date="GGJ - 2020"
                    link="/projects/geekpotato"
                />
                <ProjectCard
                    name="survivalz.png"
                    title="SurvivalZ"
                    description="Un top-down shooter : survivez face aux zombies !"
                    date="2019"
                    link="/projects/survivalz"
                />
                <ProjectCard
                    name="serenity.png"
                    title="Serenity"
                    description="Prototype de jeu anti-stress"
                    date="Ludus Académie - 2019"
                    link="/projects/serenity"
                />
            </Fade>
        </section>
    );
}

export default MyProjects;
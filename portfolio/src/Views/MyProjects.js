import React from 'react';
import ProjectCard from "../Components/ProjectCard";

function MyProjects() {
    
    return (
        <section
            id="projects"
            className="pt-24 bg-color-secondary w-full min-h-screen relative"
        >
            <h1 className="font-bold bg-color-primary-2 text-white text-center p-3 text-3xl mb-12"> PROJETS </h1>
            <ProjectCard
                name="survivalz.png"
                title="SurvivalZ : Top-down shooter"
                link="/projects/survivalz"
            />
            <ProjectCard
                name="geekpotato.png"
                title="Geek Potato Project : GGJ 2020"
                link="/projects/geekpotato"
            />
            <ProjectCard
                name="serenity.png"
                title="Serenity : prototype de jeu anti-stress"
                link="/projects/serenity"
            />
            <ProjectCard
                name="wood-bg.jpg"
                title="Filler"
                link="/posts"
            />
        </section>
    );
}

export default MyProjects;
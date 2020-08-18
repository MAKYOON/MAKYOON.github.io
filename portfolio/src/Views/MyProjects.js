import React from 'react';
import ProjectCard from "../Components/ProjectCard";

function MyProjects() {
    
    return (
        <section
            id="projects"
            className="pt-20 color-primary-2 w-full min-h-screen"
        >
            <h1 className="font-bold text-white text-center p-3 text-3xl mb-16"> PROJECTS </h1>
            <ProjectCard
                name="survivalz.png"
                title="SurvivalZ : Top-down shooter"
                link="/projects/survivalz"
            />
            <ProjectCard
                name="geekpotato.png"
                title="Geek Potato Project : GGJ 2020"
                link="/posts"
            />
            <ProjectCard
                name="wood-bg.jpg"
                title="Filler"
                link="/posts"
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
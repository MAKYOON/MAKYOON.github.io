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
                name="contact.jpg"
                title="Blog Post (fetch API from JSONPlaceHolder)"
                link="/posts"
            />
            <ProjectCard
                name="wood-bg.jpg"
                title="Filler"
            />
        </section>
    );
}

export default MyProjects;
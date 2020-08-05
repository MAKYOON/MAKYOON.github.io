import React from 'react';
import {Link} from "react-router-dom";

function MyProjects() {
    return (
        <section id="projects" className="bg-blue-500 w-full h-screen">
            <h1 className="font-bold text-white text-center p-3 text-3xl"> PROJECTS </h1>
            <ul>
                <li>
                    <Link
                        to="/posts"
                        className="text-white py-3 block hover:text-black "
                    >
                       Blog Post (fetch API from JSONPlaceHolder)
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default MyProjects;
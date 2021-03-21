import React from "react";

function Projects({ key, image, title, summary, link, repo }) {
    return (
        <div className="container bg-tomato-100 bg-opacity-50 mx-auto my-4 w-3/4 h-full md:w-2/3 md:px-0 rounded shadow overflow-hidden">
            <section className="h-full" id={key}>
                <img src={image} className="object-fill" alt="Screenshot of the application." />
                <div className="flex flex-row justify-center w-full">
                    <h1 className="text-2xl font-semibold underline mx-auto">{title}</h1>
                </div>
                <div className="p-1 md:px-4 border-b-2 border-tomato-200 border-opacity-50">
                    <p className="text-lg leading-normal">{summary}</p>
                </div>
                <ul className="flex flex-row justify-center p-4 mb-2">
                    <li><a className="hover:text-gray-800 font-semibold" href={link}>View App Here</a></li>
                    <li><a className="hover:text-gray-800 font-semibold pl-2" href={repo}>View GitHub Repo</a></li>
                </ul>
            </section>
        </div>
    )
}

export default Projects;
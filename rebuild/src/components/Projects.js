import React from "react";

function Projects({ key, image, title, summary, link, repo }) {
    return (
        <div className=" bg-tomato-100 bg-opacity-50 mx-auto my-4 w-full h-full md:w-2/3 md:px-0 rounded shadow">
            <section className="h-full" id={key}>
                <div className="p-4">
                    <img src={image} className="h-40 object-cover md:h-auto md:object-fill rounded" alt="Screenshot of the application." />
                </div>
                <div className="flex flex-row justify-center w-full">
                    <h1 className="text-2xl font-semibold underline mx-auto">{title}</h1>
                </div>
                <div className="p-1 md:px-4 border-b-2 border-gray-400 border-opacity-25">
                    <p className="tracking-tight leading-snug md:text-lg md:leading-normal">{summary}</p>
                </div>
                <ul className="flex flex-row justify-center p-4 mb-2">
                    <li><a className="p-2 font-semibold rounded-md shadow-inner transition duration-300 ease-in-out hover:shadow-md mx-2" href={link}>View Here</a></li>
                    <li><a className="p-2 font-semibold rounded-md shadow-inner transition duration-300 ease-in-out hover:shadow-md mx-2" href={repo}>GitHub</a></li>
                </ul>
            </section>
        </div>
    )
}

export default Projects;
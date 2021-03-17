import React from "react";
import YayOrNay from "../images/yay_or_nay_screenshot.png"

function Projects() {
    return (
        <div className="container bg-tomato-100 bg-opacity-50 mx-auto my-4 px-12 h-full w-full md:w-2/3 md:px-0 rounded shadow overflow-hidden">
            <section className="h-full">
                <div>
                    <img src={YayOrNay} className="w-full" alt="Screenshot of the application." />
                </div>
                <div className="flex flex-row justify-center">
                    <h1 className="text-2xl font-semibold underline mx-auto">Yay Or Nay</h1>
                </div>
                <div className="p-1 md:px-4 border-b-2 border-tomato-200 border-opacity-50">
                    <p className="text-lg leading-normal">Yay Or Nay is an application that is a dashboard for an employer to offer a place for
                    employees to vote on ideas. For example where to get lunch on Friday. This is a group project that was
                    built from the ground up using Node.js, Express.js and Sequelize in the back end as well as EJS for
              templating in the front end.</p>
                </div>
                <ul className="flex flex-row justify-center p-4 mb-2">
                    <li><a className="hover:text-gray-800 font-semibold" href="https://p002-yay-or-nay.herokuapp.com/">View App Here</a></li>
                    <li><a className="hover:text-gray-800 font-semibold pl-2" href="https://github.com/trevorsmithbanjo/p2_org_decider">View GitHub Repo</a></li>
                </ul>
            </section>
        </div>
    )
}

export default Projects;
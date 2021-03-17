import React from "react";
import Resume from "../assets/Resume.pdf";

function Footer() {
    return (
        <footer className="h-20 w-full px-10">
            <ul className="h-full flex justify-around items-center px-20 text-lg">
                <li>
                    <a className="hover:text-gray-800" href="mailto: trevorsmithbanjo@gmail.com">Email</a>
                </li>
                <li>
                    <a className="hover:text-gray-800 ml-1 md:ml-0" href="https://www.linkedin.com/in/trevor-smith-banjo/" target="_blank">LinkedIn</a>
                </li>
                <li>
                    <a className="hover:text-gray-800 ml-1 md:ml-0" href="https://github.com/trevorsmithbanjo" target="_blank">GitHub</a>
                </li>
                <li>
                    <a className="hover:text-gray-800 ml-1 md:ml-0" href={Resume} target="_blank">Resume</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
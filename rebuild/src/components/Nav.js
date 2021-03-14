import React from "react";

function Nav() {
    return (
        <div className="bg-sunglow-500 bg-opacity-25 w-full">
            <nav className="">
                <ul className="flex flex-row justify-evenly py-4 text-lg">
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Portfolio</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
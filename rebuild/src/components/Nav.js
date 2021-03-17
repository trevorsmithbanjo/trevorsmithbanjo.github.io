import React from "react";
import "../index.css";

function Nav({ menu, handleMenu }) {

    return (
        <div className="bg-sunglow-500 w-full p-4 fixed top-0">
            <nav className="flex flex-row py-1 md:justify-between">
                <div className="flex flex-row flex-grow justify-between md:justify-start mx-4">
                    <h1 className="text-xl font-bold">
                        <a className="hover:text-gray-800" href="/">Trevor Smith</a>
                    </h1>
                    <p className="md:hidden" onClick={handleMenu}>
                        <svg className="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </p>


                </div>
                <ul className="hidden md:flex flex-row flex-grow justify-evenly text-lg ">
                    <li>
                        <a className="hover:text-gray-800" href="#/About">About</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-800" href="#/Portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-800" href="#/Contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <ul className={menu}>
                <li className="">
                    <a href="#/About">About</a>
                </li>
                <li>
                    <a href="#/Portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#/Contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
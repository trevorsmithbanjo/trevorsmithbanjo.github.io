import React, { useEffect, useState } from "react";
import "../index.css";

function Nav() {
    const [scrolled, setScrolled] = useState(true);
    const [currentScrollPos, setCurrentScrollPos] = useState(50);

    const handleScroll = () => {
        const offset = window.scrollY;
        console.log(offset);
        if (offset < currentScrollPos) {
            setScrolled(true);
            setCurrentScrollPos(window.scrollY);
        }
        else {
            setScrolled(false);
            setCurrentScrollPos(window.scrollY);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    })

    return (
        <nav className={scrolled ? "navbar border-2 border-red-500" : "navbar-hidden"}>
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
    )
}

export default Nav;
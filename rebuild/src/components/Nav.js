import React from "react";

function Nav() {
    return (
        <div>
            <nav>
                <div>
                    <h1>
                        <a href="/">Home</a>
                    </h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="/">Portfolio</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
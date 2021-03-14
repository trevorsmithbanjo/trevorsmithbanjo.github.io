import React from "react";
import Headshot from "../images/headshot_small_copy.jpg";

function Hero() {
    return (
        <div className="border-2 border-red-500 w-full h-screen grid grid-cols-3 mr-2">
            <main className="flex h-full col-span-2 border-2 border-red-500 overflow-hidden">
                <div className="border-2 border-red-500">
                    <img src={Headshot} alt="Headshot of Trevor Smith" className="max-w-sm"></img>
                </div>
                <div className="border-2 border-red-500 w-full">
                    <h3 className="text-4xl font-semibold">Developer</h3>
                    <p></p>
                </div>
            </main>
            <aside className="col-span-1 w-full h-full border-2 border-blue-500">

            </aside>
        </div>
    )
}

export default Hero;
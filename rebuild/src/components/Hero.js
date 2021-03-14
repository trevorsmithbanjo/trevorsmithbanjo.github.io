import React from "react";
import Headshot from "../images/headshot_small_copy.jpg";

function Hero() {
    return (
        <div className="container mx-auto p-x-16 py-8 border-2 border-red-500">
            <main className="flex justify-center h-full col-span-2 overflow-hidden px-10 mx-20">
                <div className="">
                    <img src={Headshot} alt="Headshot of Trevor Smith" className="max-w-xs object-contain rounded shadow"></img>
                </div>
                <div className="w-full m-4">
                    <h3 className="text-4xl font-semibold">Developer</h3>
                    <p className="py-2 text-lg leading-normal">Full Stack Web Developer with an extensive background in the music industry. Graduate of the University of Texas Coding Boot Camp with skills in HTML, CSS, JavaScript, and MERN stack. As a Grammy nominated musician I understand the importance of mastering skills through practice and perseverance. I’ve found similarities between coding and learning an instrument, as they are both challenging yet every small victory is more rewarding than the last. I am now able to apply this passion to my work as a programmer. Eager to combine my background in music with my technical skills to help the developer team build, test and deploy high quality products.</p>
                </div>
            </main>
            <aside className="w-full h-screen">
                <h3 className="text-4xl font-semibold py-2">Technical Skills</h3>
            </aside>
        </div>
    )
}

export default Hero;
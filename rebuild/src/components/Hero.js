import React from "react";
import Headshot from "../images/headshot_small_copy.jpg";

function Hero() {
    return (
        <div className="container mx-auto p-x-16 py-8">
            <main className="flex justify-center flex-col lg:flex-row lg:justify-center h-full px-4 mx-8">
                <div className="mx-auto lg:mx-0">
                    <img src={Headshot} alt="Headshot of Trevor Smith" className="max-w-xs object-contain rounded shadow"></img>
                </div>
                <div className="m-2">
                    <h3 className="text-2xl font-semibold uppercase">Developer</h3>
                    <p className="py-2 text-lg leading-normal">Full Stack Web Developer with an extensive background in the music industry. Graduate of the University of Texas Coding Boot Camp with skills in HTML, CSS, JavaScript, and MERN stack. As a Grammy nominated musician I understand the importance of mastering skills through practice and perseverance. I’ve found similarities between coding and learning an instrument, as they are both challenging yet every small victory is more rewarding than the last. I am now able to apply this passion to my work as a programmer. Eager to combine my background in music with my technical skills to help the developer team build, test and deploy high quality products.</p>
                </div>
                <aside className="w-full h-screen m-2">
                    <h3 className="text-2xl font-semibold uppercase py-2l">Technical Skills</h3>
                </aside>
            </main>

        </div>
    )
}

export default Hero;
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { ProjectsArr } from "../utils/ProjectsArr";

function Portfollio() {
    // Set state to click responsive navbar menu.
    const [menu, setMenu] = useState(true);

    //Menu button click event handler
    const handleMenu = (e) => {
        e.preventDefault();
        if (!menu) {
            setMenu(true);
        }
        else {
            setMenu(false);
        }
    }

    return (
        <Container>
            <Nav
                menu={menu ? "hidden" : "block text-lg font-semibold mx-4"}
                handleMenu={handleMenu}
                about={"hover:text-gray-800 hover:line-through"}
                portfolio={"hover:text-gray-800 hover:line-through underline"}
                contact={"hover:text-gray-800 hover:line-through"}
            />
            <Header
                menu={menu ? "flex justify-center w-full text-4xl mt-14 p-6 uppercase font-bold" : "flex justify-center w-full text-4xl mt-24 p-16 uppercase font-bold"}
                header="Portfolio"
            />
            <Wrapper>
                {ProjectsArr.map((project, key) => (
                    <Projects
                        key={key}
                        image={project.image}
                        title={project.title}
                        summary={project.summary}
                        link={project.link}
                        repo={project.repo}
                    />
                ))}
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Portfollio;
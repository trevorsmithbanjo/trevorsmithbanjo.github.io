import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

function About() {
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
        <div>

            <Nav
                menu={menu ? "hidden" : "block text-lg font-semibold mx-4"}
                handleMenu={handleMenu}
                about={"hover:text-gray-800 hover:line-through underline"}
                portfolio={"hover:text-gray-800 hover:line-through"}
                contact={"hover:text-gray-800 hover:line-through"}
            />
            <Container>
                <Header
                    menu={menu ? "flex justify-center w-full text-4xl mt-14 p-6 uppercase font-bold" : "flex justify-center w-full text-4xl mt-24 p-16 uppercase font-bold"}
                    header="Developer"
                />
                <Wrapper>
                    <Hero />
                </Wrapper>
                <Footer />
            </Container>
        </div>
    )
}

export default About;
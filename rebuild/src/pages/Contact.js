import React, { useState } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";



function Contact() {
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
                about={"hover:text-gray-800 hover:line-through"}
                portfolio={"hover:text-gray-800 hover:line-through"}
                contact={"hover:text-gray-800 hover:line-through underline"}
            />
            <Container>
                <Header
                    menu={menu ? "flex justify-center w-full text-4xl mt-14 p-6 uppercase font-bold" : "flex justify-center w-full text-4xl mt-24 p-16 uppercase font-bold"}
                    header="Contact"
                />
                {/* <Wrapper> */}
                <ContactCard />
                {/* </Wrapper> */}
                <Footer />
            </Container>
        </div>
    )
}

export default Contact;
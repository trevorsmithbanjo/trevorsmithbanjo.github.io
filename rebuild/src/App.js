import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Container>
      <Nav />
      <Header />
      <Wrapper>
        <Hero />
      </Wrapper>
    </Container>
  )
}

export default App;

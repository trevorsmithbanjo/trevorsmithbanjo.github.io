import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-sunglow-500 via-royalblue-300 to-tomato-100">
      <Nav />
      <Header />
    </div>
  )
}

export default App;

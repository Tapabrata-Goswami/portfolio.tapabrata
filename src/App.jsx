import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Heading from "./components/heading/Heading";

function App(){
    return(
        <div className="container-fluid">
            <Header />
            <Hero />
            <Heading data={{title:'About me'}} />
            <About />
        </div>
    )
}

export default App;
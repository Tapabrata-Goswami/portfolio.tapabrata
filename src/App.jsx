import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Heading from "./components/heading/Heading";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App(){
    return(
        <div className="container-fluid">
            <Header />
            <Hero />
            <Heading data={{title:'About me'}} />
            <About />
            <Heading data={{title:'Experience'}} />
            <Experience />
            <Heading data={{title:'Portfolio'}} />
            <Portfolio />
            <Heading data={{title:'Contact me'}} />
            <Contact />
        </div>
    )
}

export default App;
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Heading from "./components/heading/Heading";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Websites from "./components/websites/Websites";
import Contact from "./components/contact/Contact";
import StickyBar from "./components/stickybar/StickyBar";
import Cursor from "./components/cursor/Cursor";

function App(){
    return(
        <div className="container-fluid pb-5">
            <Cursor />
            <Header />
            <Hero />
            <Heading data={{title:'About me'}} />
            <About />
            <Experience />
            <Heading data={{title:'Portfolio'}} />
            <Portfolio />
            <Heading data={{title:'Websites'}} />
            <Websites />
            <Heading data={{title:'Contact me'}} />
            <Contact />
            <StickyBar />
        </div>
    )
}

export default App;
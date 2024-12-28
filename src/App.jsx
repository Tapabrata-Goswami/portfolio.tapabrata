import React, {useEffect, useRef} from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Heading from "./components/heading/Heading";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import StickyBar from "./components/stickybar/StickyBar";

// const MouseTracker = () => {
//     const cursorRef = useRef(null);
//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             const cursor = cursorRef.current; 
//             if (cursor) {
//                 cursor.style.left = `${e.clientX + window.scrollX}px`;
//                 cursor.style.top = `${e.clientY + window.scrollY}px`;
//             }
//         };
//         const handleScroll = () => {
//             const cursor = cursorRef.current;
//             if (cursor) {
//                 const { left, top } = cursor.getBoundingClientRect();
//                 cursor.style.left = `${left + window.scrollX}px`;
//                 cursor.style.top = `${top + window.scrollY}px`;
//             }
//         };
//         document.body.addEventListener('mousemove', handleMouseMove);
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//         document.body.removeEventListener('mousemove', handleMouseMove);
//         window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//     return (
//         <>
//             <div id="circularcursor" ref={cursorRef} />
//         </>
//     );
// };

function App(){
    return(
        <div className="container-fluid pb-5">
            {/* <MouseTracker /> */}
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
            <StickyBar />
        </div>
    )
}

export default App;
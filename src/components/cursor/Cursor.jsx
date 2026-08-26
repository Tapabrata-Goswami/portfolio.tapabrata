import { useEffect, useRef } from 'react'
import './Cursor.css'
import { gsap } from '../../gsap'

function Cursor(){
    const cursorRef = useRef(null);

    useEffect(() => {
        const isFinePointer = window.matchMedia('(pointer: fine)').matches;
        if (!isFinePointer) return;

        const cursor = cursorRef.current;
        document.body.classList.add('custom-cursor-active');

        const xTo = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3.out' });
        const yTo = gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power3.out' });

        const handleMouseMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea')) {
                cursor.classList.add('cursor-hover');
            }
        };
        const handleMouseOut = (e) => {
            if (e.target.closest('a, button, input, textarea')) {
                cursor.classList.remove('cursor-hover');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.body.classList.remove('custom-cursor-active');
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return <div className="custom-cursor" ref={cursorRef} />;
}

export default Cursor;

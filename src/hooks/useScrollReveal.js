import { useEffect, useRef } from 'react';
import { gsap } from '../gsap';

function useScrollReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const ctx = gsap.context(() => {
            if (reduceMotion) return;

            gsap.from(ref.current, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 85%',
                },
            });
        }, ref);

        return () => ctx.revert();
    }, []);

    return ref;
}

export default useScrollReveal;

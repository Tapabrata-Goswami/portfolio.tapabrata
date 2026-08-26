import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap';

let lenis = null;

if (typeof window !== 'undefined') {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion) {
        lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.addEventListener('refresh', () => lenis.resize());

        if (typeof ResizeObserver !== 'undefined') {
            const resizeObserver = new ResizeObserver(() => lenis.resize());
            resizeObserver.observe(document.body);
        }

        // Content (async data fetches, lazily-loaded images, GSAP pin-spacers) can
        // grow the page after Lenis's own internal auto-resize has already settled
        // on a stale height, so re-measure on a short poll until things stabilize.
        let resizeCount = 0;
        const resizeInterval = setInterval(() => {
            lenis.resize();
            resizeCount += 1;
            if (resizeCount >= 20) clearInterval(resizeInterval);
        }, 300);
    }
}

export default lenis;

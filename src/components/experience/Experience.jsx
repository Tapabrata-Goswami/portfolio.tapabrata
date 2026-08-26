import { useEffect, useRef } from 'react'
import "./Experience.css"
import { gsap } from '../../gsap'
import Heading from '../heading/Heading'

function Experience(){
    const stageRef = useRef(null);
    const windowRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const PIN_DISTANCE_PER_ITEM = 400;

        const ctx = gsap.context(() => {
            if (reduceMotion) return;

            const stage = stageRef.current;
            const win = windowRef.current;
            const inner = timelineRef.current;
            const boxes = gsap.utils.toArray('.work-exp-box', inner);

            const scrollDistance = () => Math.max(inner.scrollHeight - win.clientHeight, 0);

            if (scrollDistance() <= 0 || boxes.length === 0) return;

            gsap.set(boxes, { opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: stage,
                    start: 'top top',
                    end: () => `+=${boxes.length * PIN_DISTANCE_PER_ITEM}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(inner, { y: () => -scrollDistance(), ease: 'none', duration: boxes.length }, 0);

            boxes.forEach((box, i) => {
                const fromLeft = box.classList.contains('left');
                tl.fromTo(box,
                    { opacity: 0, x: fromLeft ? -80 : 80 },
                    { opacity: 1, x: 0, ease: 'power2.out', duration: 1 },
                    i
                );
            });
        }, stageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="my-5" id="experience">
            <div className='experience-stage' ref={stageRef}>
                <Heading data={{title:'Experience'}} />
                <div className='timeline-window container' ref={windowRef}>
                <div className='timeline' ref={timelineRef}>
                    <div className="work-exp-box right">
                        <div className="content">
                            <h2>Engineer Web</h2>
                            <p className='company-name'>CodeClouds</p>
                            <span className='company-year'>Oct 2025 - Present</span>
                            <p>Building scalable web solutions with React, Next.js, Node.js, Laravel &amp; WordPress, plus hands-on work with Shopify, WooCommerce, MySQL/MongoDB and cloud deployments on AWS.</p>
                        </div>
                    </div>
                    <div className="work-exp-box left">
                        <div className="content">
                            <h2>Assistant Web Engineer</h2>
                            <p className='company-name'>CodeClouds</p>
                            <span className='company-year'>Jul 2024 - Oct 2025</span>
                            <p>Maintained and extended WordPress-based client sites, handling both custom theme/plugin work and backend fixes.</p>
                        </div>
                    </div>
                    <div className="work-exp-box right">
                        <div className="content">
                            <h2>Software Development Engineer</h2>
                            <p className='company-name'>Dream Logo Design</p>
                            <span className='company-year'>Jan 2024 - Jul 2024</span>
                            <p>Built custom WordPress and Shopify solutions for client projects, from theme development to backend integrations.</p>
                        </div>
                    </div>
                    <div className="work-exp-box left">
                        <div className="content">
                            <h2>Full-stack Developer</h2>
                            <p className='company-name'>TakeTech Devs</p>
                            <span className='company-year'>Apr 2023 - Dec 2023</span>
                            <p>Developed and maintained full-stack features using Laravel and React across client web applications.</p>
                        </div>
                    </div>
                    <div className="work-exp-box right">
                        <div className="content">
                            <h2>Web Developer Intern</h2>
                            <p className='company-name'>Business Web Media</p>
                            <span className='company-year'>Oct 2022 - Apr 2023</span>
                            <p>Assisted in developing and maintaining WordPress websites, gaining hands-on front-end and back-end experience.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
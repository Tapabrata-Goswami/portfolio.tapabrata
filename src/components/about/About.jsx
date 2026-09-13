import './About.css'
import useScrollReveal from '../../hooks/useScrollReveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function About() {
    const reveal = useScrollReveal();
    return (
        <div className='container my-5' id="about-me" ref={reveal}>


            <div className='row d-flex justify-content-center'>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <h4 className='about-small-heading'>About my self</h4>
                    <p className='about-tagline'>Turning coffee into commits since day one. <span className='tagline-emoji'>☕</span></p>
                </div>
                <div className='col-md-6'>
                    <div className='about-card'>
                        <p className='about-me-content-p'>Full-Stack Engineer with 3+ years of experience building production web applications. Currently at <span className='about-highlight'>CodeClouds</span>, working across React/Next.js front ends and Node.js, Laravel &amp; WordPress back ends. Experienced with MongoDB, MySQL, AWS deployments, and Shopify/WooCommerce storefronts. I focus on clean, maintainable code and attention to UX detail.</p>
                    </div>
                </div>
            </div>

            <div className='row mt-5 d-flex justify-content-center'>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <h4 className='about-small-heading'>Education</h4>
                    <p className='about-tagline'>Proof I once sat exams instead of Stack Overflow. <span className='tagline-emoji'>🎓</span></p>
                </div>
                <div className='col-md-6'>
                    <div className='edu-card'>
                        <div className='edu-icon'><FontAwesomeIcon icon={faGraduationCap} /></div>
                        <div className='edu-details'>
                            <h6 className='education-heading'>Future Institute of Technology</h6>
                            <span className='edu-subheading'>Bachelor of Technology in Computer Science &amp; Engineering</span>
                        </div>
                        <div className='edu-palce'>
                            <FontAwesomeIcon icon={faLocationDot} /> Kolkata, India
                        </div>
                    </div>
                    <div className='edu-card'>
                        <div className='edu-icon'><FontAwesomeIcon icon={faGraduationCap} /></div>
                        <div className='edu-details'>
                            <h6 className='education-heading'>Siliguri Netaji School</h6>
                            <span className='edu-subheading'>Higher Secondary Education (Class XII)</span>
                        </div>
                        <div className='edu-palce'>
                            <FontAwesomeIcon icon={faLocationDot} /> Siliguri, India
                        </div>
                    </div>
                    <div className='edu-card'>
                        <div className='edu-icon'><FontAwesomeIcon icon={faGraduationCap} /></div>
                        <div className='edu-details'>
                            <h6 className='education-heading'>Siliguri Boys' High School</h6>
                            <span className='edu-subheading'>Secondary Education (Class X)</span>
                        </div>
                        <div className='edu-palce'>
                            <FontAwesomeIcon icon={faLocationDot} /> Siliguri, India
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-5 d-flex justify-content-center'>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <h4 className='about-small-heading'>Skills</h4>
                    <p className='about-tagline'>Google is technically one of them. <span className='tagline-emoji'>🔍</span></p>
                </div>
                <div className='col-md-6'>
                    <div className='skills-card'>
                    <img
                        src="/images/skills/javascript.png"
                        alt="JavaScript"
                        className='skill-icons' />
                    <img
                        src="/images/skills/typescript.png"
                        alt="TypeScript"
                        className='skill-icons' />
                    <img
                        src="/images/skills/react.png"
                        alt="React"
                        className='skill-icons' />
                    <img
                        src="/images/skills/bootstrap.svg"
                        alt="Bootstrap"
                        className='skill-icons' />
                    <img
                        src="/images/skills/figma.svg"
                        alt="Figma"
                        className='skill-icons' />
                    <img
                        src="/images/skills/nextjs.svg"
                        alt="Next.js"
                        className='skill-icons' />

                    <img src="/images/skills/nuxtjs.svg" alt="Nuxt.js" className="skill-icons" />
                    <img src="/images/skills/flutter.png" alt="Flutter" className="skill-icons" />
                    <img src="/images/skills/jquery.png" alt="jQuery" className="skill-icons" />
                    <img src="/images/skills/nodejs.png" alt="Node.js" className="skill-icons" />
                    <img src="/images/skills/expressjs.svg" alt="Express.js" className="skill-icons" />
                    <img src="/images/skills/dart.svg" alt="Dart" className="skill-icons" />
                    <img src="/images/skills/docker.png" alt="Docker" className="skill-icons" />
                    <img src="/images/skills/checkout-champ.svg" alt="Checkout Champ" className="skill-icons" />
                    <img src="/images/skills/aws.svg" alt="AWS" className="skill-icons" />
                    <img src="/images/skills/bitbucket.svg" alt="Bitbucket" className="skill-icons" />
                    <img src="/images/skills/laravel.svg" alt="Laravel" className="skill-icons" />
                    <img src="/images/skills/github.svg" alt="GitHub" className="skill-icons" />
                    <img src="/images/skills/joomla.svg" alt="Joomla" className="skill-icons" />
                    <img src="/images/skills/klaviyo.svg" alt="Klaviyo" className="skill-icons" />
                    <img src="/images/skills/php.svg" alt="PHP" className="skill-icons" />
                    <img src="/images/skills/zapier.svg" alt="Zapier" className="skill-icons" />
                    <img src="/images/skills/cloudflare.svg" alt="Cloudflare" className="skill-icons" />
                    <img src="/images/skills/heroku.svg" alt="Heroku" className="skill-icons" />
                    <img src="/images/skills/firebase.svg" alt="Firebase" className="skill-icons" />
                    <img src="/images/skills/mysql.png" alt="MySQL" className="skill-icons" />
                    <img src="/images/skills/mongodb.svg" alt="MongoDB" className="skill-icons" />
                    <img src="/images/skills/sql.svg" alt="SQL" className="skill-icons" />
                    <img src="/images/skills/graphql.svg" alt="GraphQL" className="skill-icons" />
                    <img src="/images/skills/wordpress.svg" alt="WordPress" className="skill-icons" />
                    <img src="/images/skills/shopify.png" alt="Shopify" className="skill-icons" />
                    <img src="/images/skills/konnektive.svg" alt="Konnektive" className="skill-icons" />
                    <img src="/images/skills/woocommerce.png" alt="WooCommerce" className="skill-icons" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;

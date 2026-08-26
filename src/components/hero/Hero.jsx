import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCodeBranch, faBriefcase, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faUpwork } from '@fortawesome/free-brands-svg-icons/faUpwork'

function Hero(){
    return(
        <div className="container hero-container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img className="tapabrata-image" src="/images/Tapabrata-preview.png" alt="Tapabrata Goswami" />
                </div>
                <div className="col-md-6">
                    <h2 className='h1 hero-heading'>Hi, I'm <span className="separate-color">Tapabrata</span></h2>
                    <h3 className='h2 mt-3 hero-secondary-heading '>Full-Stack Engineer</h3>
                    <div className='mt-5 hero-info-list'>
                        <p className='hero-description'><FontAwesomeIcon className='hero-description-icon' icon={faLocationDot} /> Based in India</p>
                        <p className='hero-description'><FontAwesomeIcon className='hero-description-icon' icon={faCodeBranch} /> Open Source Enthusiast</p>
                        <p className='hero-description'><FontAwesomeIcon className='hero-description-icon' icon={faBriefcase} /> Web Engineer at CodeClouds</p>
                    </div>
                    <div className='hero-social-links'>
                        <a className='hero-resume-btn' href="/Tapabrata's_Resume.pdf" download><FontAwesomeIcon icon={faDownload} /> Resume</a>
                        <a className='hero-icon-btn' href="https://github.com/Tapabrata-Goswami" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className='hero-icon-btn' href="https://www.linkedin.com/in/tapabrata-goswami/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a className='hero-icon-btn' href="https://www.upwork.com/freelancers/~0179458da42d782d1f" target="_blank" rel="noreferrer" aria-label="Upwork"><FontAwesomeIcon icon={faUpwork} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
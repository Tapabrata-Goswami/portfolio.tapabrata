import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCodeBranch, faBriefcase } from '@fortawesome/free-solid-svg-icons'

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
                    <a className='btn resume-download-btn' href="/Tapabrata's_Resume.pdf" download>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
import './Hero.css'
import tgImage from '../../assets/images/Tapabrata-preview.png'

function Hero(){
    return(
        <div className="container hero-container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={tgImage} alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className='h1 hero-heading'>Hi, I'm <span className="separate-color">Tapabrata</span> 👋</h2>
                    <h3 className='h2 mt-3 hero-secondary-heading '>I'm a Full-Stack Engineer..</h3>
                    <p className='mt-5 hero-description'>🌎 Based in @India</p>
                    <p className='hero-description'>📖 Open Source Enthusiasts</p>
                    <p className='hero-description'>💼 Assistant Web Engineer at @CodeClouds</p>
                    <a className='btn resume-download-btn' href="">Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
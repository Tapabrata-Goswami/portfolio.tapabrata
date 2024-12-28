

import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Header(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className='logo'>TG<span className='logo-dot'>.</span></div>
                </div>
                <div className="col-md-8 main-menu-col">
                    <ul className="d-flex justify-content-end align-items-center main-menu-items">
                        <li className="menu-item"><a href="#about-me">About me</a></li>
                        <li className="menu-item"><a href="#experience">Experience</a></li>
                        <li className="menu-item"><a href="#portfolio">Portfolio</a></li>
                        <li className="menu-item"><a href="#contact-me">Contact me</a></li>
                    </ul>
                </div>
                <div className="Menu-bar-mob">
                    <FontAwesomeIcon icon={faHamburger} className="hambuger-menu" />
                </div>
            </div>

            
        </div>
    )
}

export default Header;
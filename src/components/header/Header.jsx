import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Header() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6 col-md-4">
                    <div className="logo">TG<span className="logo-dot">.</span></div>
                </div>
                <div className="col-6 col-md-8 d-md-block d-none">
                    <ul className="d-flex justify-content-end align-items-center main-menu-items">
                        <li className="menu-item"><a href="#about-me">About me</a></li>
                        <li className="menu-item"><a href="#experience">Experience</a></li>
                        <li className="menu-item"><a href="#portfolio">Portfolio</a></li>
                        <li className="menu-item"><a href="#contact-me">Contact me</a></li>
                    </ul>
                </div>
                <div className="col-6 d-md-none text-end">
                    <button className="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                        <FontAwesomeIcon icon={faBars} className="hamburger-menu" />
                    </button>
                </div>
            </div>

            {/* Offcanvas Menu */}
            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasMenu"
                aria-labelledby="offcanvasMenuLabel"
            >
                <div className="offcanvas-header">
                    <h5 id="offcanvasMenuLabel" className="offcanvas-title">
                        <div className="logo-on-canvas">
                            TG<span className="logo-dot-on-canvas">.</span>
                        </div>
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-unstyled mobile-menu-items">
                        <li className="menu-item">
                            <a href="#about-me" className="menu-link" data-bs-dismiss="offcanvas">
                                About me
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#experience" className="menu-link" data-bs-dismiss="offcanvas">
                                Experience
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#portfolio" className="menu-link" data-bs-dismiss="offcanvas">
                                Portfolio
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#contact-me" className="menu-link" data-bs-dismiss="offcanvas">
                                Contact me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>


    )
}

export default Header;
import './Header.css'

function Header(){
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className='logo'>TG<span className='logo-dot'>.</span></div>
                    </div>
                    <div className="col-md-8">
                        <ul className="d-flex justify-content-end align-items-center main-menu-items">
                            <li className="menu-item"><a href="">About me</a></li>
                            <li className="menu-item"><a href="">Experience</a></li>
                            <li className="menu-item"><a href="">Portfolio</a></li>
                            <li className="menu-item"><a href="">Contact me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
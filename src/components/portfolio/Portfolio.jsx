import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Portfolio() {
    return (
        <div className="container my-5">
            <div className='row'>
                <div className='col'>
                    <div className="card portfolio-card" >
                        {/* <img className="card-img-top" alt="Card image cap" /> */}
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary portfolio-project-btn"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> look out</a>
                            <a href="#" className='portfolio-githubbtn'><FontAwesomeIcon className='portfolio-githubbtn-icon' icon={faGithub} /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Portfolio;
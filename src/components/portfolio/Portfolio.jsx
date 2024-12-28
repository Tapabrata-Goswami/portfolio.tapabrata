import { useState, useEffect } from 'react'
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Portfolio() {
    const [repos , updateRepos] = useState([]);
    const [loading, updateLoading] = useState(true);
    const [error, upadateError] = useState(null);

    useEffect(()=>{
        
        const fetchRepos = async ()=>{
            try{
                const response = await fetch('https://api.github.com/users/Tapabrata-Goswami/repos');
                const data = await response.json();
                updateRepos(data);
            }catch(err){
                upadateError(err);
            }finally{
                updateLoading(false);
            }
        };
        
        fetchRepos();
    },[]);

    return (
        <div className="container my-5" id="portfolio">
            <div className='row'>
            {repos.map((repo) => (
                <div className='col-md-3 pb-5' key={repo.id}>
                    <div className="card portfolio-card" >
                        {/* <img className="card-img-top" alt="Card image cap" /> */}
                        <div className="card-body">
                            <h5 className="card-title pb-2">{repo.name}</h5>
                            <p className="card-text pb-2">{repo.description}</p>
                            <a href="#" className="btn btn-primary portfolio-project-btn"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> view</a>
                            <a href={repo.html_url} className='portfolio-githubbtn'><FontAwesomeIcon className='portfolio-githubbtn-icon' icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Portfolio;
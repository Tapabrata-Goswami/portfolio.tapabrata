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
                updateRepos(Array.isArray(data) ? data.filter((repo) => !repo.fork) : []);
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
            {loading && <p className="portfolio-status-text">Loading projects…</p>}
            {!loading && error && <p className="portfolio-status-text">Unable to load projects right now.</p>}
            {!loading && !error && (
                <div className='row'>
                {repos.map((repo) => (
                    <div className='col-md-3 pb-5 d-flex' key={repo.id}>
                        <div className="card portfolio-card h-100 w-100" >
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title pb-2">{repo.name}</h5>
                                <p className="card-text pb-2">{repo.description}</p>
                                <div className="mt-auto">
                                    <a href={repo.homepage || repo.html_url} target="_blank" rel="noreferrer" className="btn btn-primary portfolio-project-btn"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> view</a>
                                    <a href={repo.html_url} target="_blank" rel="noreferrer" className='portfolio-githubbtn'><FontAwesomeIcon className='portfolio-githubbtn-icon' icon={faGithub} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            )}
        </div>
    )
}

export default Portfolio;
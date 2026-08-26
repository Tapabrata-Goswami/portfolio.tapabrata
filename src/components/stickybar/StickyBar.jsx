

import './StickyBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faUpwork } from '@fortawesome/free-brands-svg-icons/faUpwork'


function StickyBar() {
  return (
    <div className='sticky-icons'>

        <p className='stickyheading'>Follow Me</p>
        <span className='stert-line'></span>
        <div className='sticky-icn-box'>
            <a href="https://github.com/Tapabrata-Goswami" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/tapabrata-goswami/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.upwork.com/freelancers/~0179458da42d782d1f" target="_blank" rel="noreferrer" aria-label="Upwork"><FontAwesomeIcon icon={faUpwork} /></a>
        </div>


    </div>
  )
}

export default StickyBar;
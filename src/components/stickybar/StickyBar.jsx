import './StickyBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'

function StickyBar() {
  return (
    <div className='sticky-icons'>

        <p className='stickyheading'>Follow Me</p>
        <span className='stert-line'></span>
        <div className='sticky-icn-box'>
            <a href="https://github.com/Tapabrata-Goswami" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://www.linkedin.com/in/tapabrata-goswami/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>


    </div>
  )
}

export default StickyBar;
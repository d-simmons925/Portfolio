import './header.css'
import resume from '../files/Resume.pdf'
import me from '../images/me.webp'

const Header = () => {
  return (
    <div id="main-header">
      <h1>
        <span className="my-name">David Simmons </span>
        <span className="spacer">|</span> Web Developer
      </h1>
      <img src={me} alt="David Simmons" className="header-img" />
      <div className="header-links">
        <div className="header-link">
          <a
            href="https://www.linkedin.com/in/david-s-194427218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" aria-label="Linked-in"></i>
          </a>
          <p>LinkedIn</p>
        </div>
        <div className="header-link">
          <a
            href="https://github.com/d-simmons925"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" aria-label="github"></i>
          </a>
          <p>Github</p>
        </div>
        <div className="header-link">
          <a href={resume} download>
            <i
              className="fas fa-file-download"
              aria-label="download resume"
            ></i>
          </a>
          <p>download resume</p>
        </div>
      </div>
    </div>
  )
}

export default Header

import './appnavbar.css'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const AppNavbar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <nav>
        <div className="nav-container">
          <button
            className="nav-toggler"
            onClick={() => setIsActive(!isActive)}
          >
            <i className="fas fa-bars" aria-label="toggle menu"></i>
          </button>
          <div className="links-container">
            <CSSTransition
              in={isActive}
              timeout={800}
              classNames="slidefromtop"
            >
              <div className={`nav-items ${isActive && 'show-collapse'}`}>
                <a href="#main-header">Home</a>
                <a href="#tech-stack">Tech</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
              </div>
            </CSSTransition>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AppNavbar

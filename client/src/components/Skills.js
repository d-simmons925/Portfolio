import './skills.css'
import logos from '../images/logos/logos'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Skills = ({ inSkills }) => {
  return (
    <div id="tech-stack">
      <h1>Tech Stack</h1>
      <TransitionGroup className="skill-list">
        <ul>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.HTML} alt="HTML" />
              <span>HTML</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.CSS} alt="CSS" />
              <span>CSS</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.Javascript} alt="JavaScript" />
              <span>JavaScript</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.Nodejs} alt="Node.js" />
              <span>Node.js</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.Bootstrap} alt="Bootstrap" />
              <span>Bootstrap</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.React} alt="React,js" />
              <span>React.js</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.Redux} alt="Redux.js" />
              <span>Redux.js</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.MongoDB} alt="Mongo DB" />
              <span>Mongo DB</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.Socketio} alt="Socket.io" />
              <span>Socket.io</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.Typescript} alt="TypeScript" />
              <span>TypeScript</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.Express} alt="Express.js" />
              <span>Express.js</span>
            </li>
          </CSSTransition>
          <CSSTransition
            in={inSkills}
            timeout={1800}
            classNames="slidefromright"
          >
            <li className="skill-item">
              {' '}
              <img src={logos.Next} alt="Next.js" />
              <span>Next.js</span>
            </li>
          </CSSTransition>
        </ul>
      </TransitionGroup>
    </div>
  )
}

export default Skills

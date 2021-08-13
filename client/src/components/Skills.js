import './skills.css'
import logos from '../images/logos/logos'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Skills = ({ inSkills }) => {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <TransitionGroup className="skill-list">
        <ul>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.HTML} alt="redux" />
              <span>HTML</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.CSS} alt="redux" />
              <span>CSS</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.Javascript} alt="redux" />
              <span>JavaScript</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.Nodejs} alt="redux" />
              <span>Node.js</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.Bootstrap} alt="redux" />
              <span>Bootstrap</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.React} alt="redux" />
              <span>React.js</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.Redux} alt="redux" />
              <span>Redux.js</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.MongoDB} alt="redux" />
              <span>Mongo DB</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.Socketio} alt="redux" />
              <span>Socket.io</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.Typescript} alt="redux" />
              <span>TypeScript</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.Express} alt="redux" />
              <span>Express.js</span>
            </li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li className="skill-item">
              {' '}
              <img src={logos.Next} alt="redux" />
              <span>Next.js</span>
            </li>
          </CSSTransition>
        </ul>
      </TransitionGroup>
    </div>
  )
}

export default Skills

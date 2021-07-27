import { CSSTransition, TransitionGroup } from "react-transition-group";

const Skills = ({ inSkills }) => {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <TransitionGroup className="skill-list">
        <ul>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>HTML</li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>CSS</li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>JavaScript</li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>Node JS</li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>Bootstrap</li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>Axios</li>
          </CSSTransition>
        </ul>
        <ul>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>Express</li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>React</li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>Redux</li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>Mongo DB</li>
          </CSSTransition>
          <CSSTransition in={inSkills} timeout={500} classNames="fade">
            <li>Socket.io</li>
          </CSSTransition>
        </ul>
      </TransitionGroup>
    </div>
  );
};

export default Skills;

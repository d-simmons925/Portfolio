import { useState } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AppNavbar from "./components/AppNavbar";
import { Waypoint } from "react-waypoint";

function App() {
  const [inSkills, setInSkills] = useState(false);
  const [inProjects, setInProjects] = useState(false);
  const skillEnter = () => {
    setInSkills(true);
  };
  const skillLeave = () => {
    setInSkills(false);
  };
  const projectEnter = () => {
    setInProjects(true);
  };
  const projectLeave = () => {
    setInProjects(false);
  };

  return (
    <div className="App">
      <AppNavbar />
      <Header />
      <Waypoint onEnter={skillEnter} onLeave={skillLeave}>
        <div>
          <Skills inSkills={inSkills} />
        </div>
      </Waypoint>
      <Waypoint onEnter={projectEnter} onLeave={projectLeave}>
        <div>
          <Projects inProjects={inProjects} />
        </div>
      </Waypoint>
      <footer>
        <p>&copy; David Simmons 2021</p>
      </footer>
    </div>
  );
}

export default App;

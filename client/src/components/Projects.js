import Project from "./Project";
import drawTogether from "../images/drawTogether.png";
import mernCalendar from "../images/mernCalendar.png";
import pokemonTCG from "../images/pokemonTCG.png";
import { Row, Col } from "reactstrap";

const Projects = () => {
  const projects = [
    {
      title: "Draw Together",
      src: drawTogether,
      demo: "https://stormy-journey-60064.herokuapp.com/",
      github: "https://github.com/d-simmons925/DrawTogether",
    },
    {
      title: "MERN Calendar",
      src: mernCalendar,
      demo: "https://sheltered-headland-93031.herokuapp.com/",
      github: "https://github.com/d-simmons925/MERN_Calendar",
    },
    {
      title: "Pokemon TCG App",
      src: pokemonTCG,
      demo: "https://pokemon-tcg-search-app.herokuapp.com/",
      github: "https://github.com/d-simmons925/pokemon_search_app",
    },
  ];

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <Row>
          {projects.map((project, index) => (
            <Col xl="4" lg="6" sm="12" className="p-3" key={index}>
              <Project
                title={project.title}
                src={project.src}
                demo={project.demo}
                github={project.github}
                key={index}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Projects;

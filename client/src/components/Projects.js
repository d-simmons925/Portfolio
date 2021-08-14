import './projects.css'
import { useState } from 'react'
import Project from './Project'
import ProjectReverse from './ProjectReverse'
import drawTogetherImages from '../images/drawtogether/drawTogetherImages'
import mernCalendarImages from '../images/merncalendar/mernCalendarImages'
import pokemonTCGImages from '../images/pokemontcgapp/pokemonTCGImages'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Waypoint } from 'react-waypoint'

const Projects = () => {
  const [inDraw, setInDraw] = useState(false)
  const [inMernCal, setInMernCal] = useState(false)
  const [inPok, setInPok] = useState(false)

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <TransitionGroup>
          <Waypoint
            onEnter={() => setInDraw(true)}
            onLeave={() => setInDraw(false)}
          >
            <div>
              <CSSTransition
                in={inDraw}
                timeout={800}
                classNames="slidefromright"
              >
                <Project
                  title="Draw Together"
                  images={drawTogetherImages}
                  demo="https://stormy-journey-60064.herokuapp.com/"
                  github="https://github.com/d-simmons925/DrawTogether"
                  desc="Draw Together is a simple drawing app that allows users to draw on the same canvas using web sockets. Users can join the same room using a randomly generated id, and will only be able to draw within that room."
                />
              </CSSTransition>
            </div>
          </Waypoint>
          <Waypoint
            onEnter={() => setInMernCal(true)}
            onLeave={() => setInMernCal(false)}
          >
            <div>
              <CSSTransition
                in={inMernCal}
                timeout={800}
                classNames="slidefromleft"
              >
                <ProjectReverse
                  title="MERN Calendar"
                  images={mernCalendarImages}
                  demo="https://sheltered-headland-93031.herokuapp.com/"
                  github="https://github.com/d-simmons925/MERN_Calendar"
                  desc="This project converts Portexe's react calendar (which can be found at https://github.com/portexe/ReactCalendar) into a full stack CRUD application. I also changed some of the css to make the calendar responsive so it can work on mobile devices."
                />
              </CSSTransition>
            </div>
          </Waypoint>
          <Waypoint
            onEnter={() => setInPok(true)}
            onLeave={() => setInPok(false)}
          >
            <div>
              <CSSTransition
                in={inPok}
                timeout={800}
                classNames="slidefromright"
              >
                <Project
                  title="Pokemon TCG App"
                  images={pokemonTCGImages}
                  demo="https://pokemon-tcg-search-app.herokuapp.com/"
                  github="https://github.com/d-simmons925/pokemon_search_app"
                  desc="This project uses a web api to get data about pokemon cards and displays data about each card relating to what the user searches for. This project is also responsive and works on mobile devices."
                />
              </CSSTransition>
            </div>
          </Waypoint>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default Projects

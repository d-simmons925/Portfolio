import './app.css'
import { useState } from 'react'
import { Alert } from 'reactstrap'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AppNavbar from './components/AppNavbar'
import Contact from './components/Contact'
import { Waypoint } from 'react-waypoint'

function App() {
  const [inSkills, setInSkills] = useState(false)
  const [inContact, setInContact] = useState(false)
  const [msg, setMsg] = useState(null)

  const onDismiss = () => setMsg(null)

  const handleMsg = (data) => {
    setMsg(data)
  }

  const skillEnter = () => {
    setInSkills(true)
  }
  const skillLeave = () => {
    setInSkills(false)
  }
  const contactEnter = () => {
    setInContact(true)
  }
  const contactLeave = () => {
    setInContact(false)
  }

  return (
    <div className="App">
      <AppNavbar />
      {msg && msg.type === 'success' && (
        <Alert color="primary" toggle={onDismiss}>
          {msg.msg}
        </Alert>
      )}
      {msg && msg.type === 'error' && (
        <Alert color="danger" toggle={onDismiss}>
          {msg.msg}
        </Alert>
      )}
      <Header />
      <Waypoint onEnter={skillEnter} onLeave={skillLeave}>
        <div>
          <Skills inSkills={inSkills} />
        </div>
      </Waypoint>
      <Projects />
      <Waypoint onEnter={contactEnter} onLeave={contactLeave}>
        <div>
          <Contact handleMsg={handleMsg} inContact={inContact} />
        </div>
      </Waypoint>
    </div>
  )
}

export default App

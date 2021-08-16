import './app.css'
import { useState } from 'react'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AppNavbar from './components/AppNavbar'
import Contact from './components/Contact'

function App() {
  const [msg, setMsg] = useState(null)

  const onDismiss = () => setMsg(null)

  const handleMsg = (data) => {
    setMsg(data)
  }

  return (
    <div className="App">
      <AppNavbar />

      {msg && msg.type === 'success' && (
        <div className="alert success" toggle={onDismiss}>
          <p>{msg.msg}</p>
          <button className="close" onClick={onDismiss}>
            X
          </button>
        </div>
      )}
      {msg && msg.type === 'error' && (
        <div className="alert error" toggle={onDismiss}>
          <p>{msg.msg}</p>
          <button className="close" onClick={onDismiss}>
            X
          </button>
        </div>
      )}

      <Header />
      <Skills />
      <Projects />
      <Contact handleMsg={handleMsg} />
    </div>
  )
}

export default App

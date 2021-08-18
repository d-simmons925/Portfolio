import './contact.css'
import { useState } from 'react'
import axios from 'axios'
import { CSSTransition } from 'react-transition-group'
import { Waypoint } from 'react-waypoint'

const Contact = ({ handleMsg }: { handleMsg: any }) => {
  const [inContact, setInContact] = useState(false)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [phone, setPhone] = useState()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const data = {
      name,
      email,
      phone,
      message,
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios.post('/email', data, config).then((res) => {
      handleMsg(res.data)
    })
  }
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <Waypoint
          onEnter={() => setInContact(true)}
          onLeave={() => setInContact(false)}
        >
          <div className="form-container">
            <CSSTransition
              in={inContact}
              timeout={800}
              classNames="slidefrombottom"
            >
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-text"
                    onChange={(e: any) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-text"
                    onChange={(e: any) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-control">
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="input-text"
                    onChange={(e: any) => setPhone(e.target.value)}
                    required
                  />
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="form-control">
                  <input
                    type="textarea"
                    id="message"
                    name="message"
                    className="input-textarea"
                    onChange={(e: any) => setMessage(e.target.value)}
                    required
                  />
                  <label htmlFor="message" className="message-label">
                    Message
                  </label>
                </div>
                <button className="submit">Submit</button>
              </form>
            </CSSTransition>
          </div>
        </Waypoint>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default Contact

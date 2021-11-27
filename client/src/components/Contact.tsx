import './contact.css'
import React, { useState } from 'react'
import axios from 'axios'

interface MsgI {
  type: string
  msg: string
}

type PropsFunc = (data: MsgI) => void

const Contact = ({ handleMsg }: { handleMsg: PropsFunc }) => {
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [message, setMessage] = useState<string>()
  const [phone, setPhone] = useState<string>()

  const handleSubmit = (e: React.FormEvent) => {
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

    axios.post('/email', data, config).then(res => {
      handleMsg(res.data)
    })
  }
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="text"
                id="name"
                name="name"
                className="input-text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                required
              />
              <label htmlFor="message" className="message-label">
                Message
              </label>
            </div>
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

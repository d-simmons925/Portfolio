const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const config = require('config')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/email', (req, res) => {
  const output = `
  <p> You have a new contact request </p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `

  let transporter = nodemailer.createTransport({
    host: config.get('host') || process.env.host,
    port: config.get('port') || process.env.port,
    secure: false,
    auth: {
      user: config.get('email') || process.env.email,
      pass: config.get('pass') || process.env.pass,
    },
  })

  let mailOptions = {
    from: '"Simmons Web Dev" <simmonswebdev@gmail.com>',
    subject: 'New Message from Simmons Web Dev',
    to: 'simmonswebdev@gmail.com',
    text: '',
    html: output,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  })
  return res.status(200).json({ msg: 'Message Sent!', type: 'success' })
})

app.get('/email', (req, res) => {
  return res.status(400).json({
    msg: 'you must submit a form to access this route!',
    type: 'error',
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))

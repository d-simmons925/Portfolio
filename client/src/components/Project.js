import { useState, Fragment } from 'react'

const Project = ({ title, src, demo, github }) => {
  const [visible, setVisible] = useState()

  const handleMouseEnter = () => {
    setVisible(true)
  }

  const handleMouseLeave = () => {
    setVisible(false)
  }

  const buttons = (
    <Fragment>
      <div className="project-buttons">
        <a href={demo} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          View on Github
        </a>
      </div>
    </Fragment>
  )

  return (
    <div className="project">
      <h5>{title}</h5>
      <div
        className="project-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={src} alt={`screenshot of ${title}`} />
        {visible ? buttons : ''}
      </div>
    </div>
  )
}

export default Project

import { useState, useEffect, useCallback } from 'react'

const Project = ({
  title,
  images,
  demo,
  github,
  desc,
  reverse,
}: {
  title: string
  images: any
  demo: string
  github: string
  desc: string
  reverse: boolean
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState<number | null>(null)
  const [toRight, setToRight] = useState([])
  const [toLeft, setToLeft] = useState([])

  const next = useCallback(() => {
    setIsAnimating(activeIndex)
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
    setTimeout(() => setIsAnimating(null), 800)
  }, [activeIndex, images.length])

  const previous = () => {
    setIsAnimating(activeIndex)
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
    setTimeout(() => setIsAnimating(null), 800)
  }

  useEffect(() => {
    const rightArr = images.filter((image: any) => image.id - 1 > activeIndex)
    const leftArr = images.filter((image: any) => image.id - 1 < activeIndex)
    setToRight(rightArr)
    setToLeft(leftArr)
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [activeIndex, images, next])

  return (
    <div className={`project ${reverse && 'reverse'}`}>
      <div className="carousel">
        <div className="slider">
          {images.map((image: any, index: number) => (
            <img
              key={image.id}
              src={image.image}
              alt={image.altText}
              className={`carousel-img ${activeIndex === index && 'active'} 
                ${toRight.includes(image) && 'to-right'}
                ${toLeft.includes(image) && 'to-left'}
                ${isAnimating === index && 'animating'}
                `}
            />
          ))}
        </div>
        <div className="carousel-buttons">
          <button
            className={`prev  ${isAnimating !== null && 'disabled'}`}
            onClick={previous}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className={`next  ${isAnimating !== null && 'disabled'}`}
            onClick={next}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="info">
        <h5>{title}</h5>
        <p>{desc}</p>
        <div className="links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" aria-label="view on github"></i>
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt" aria-label="view demo"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project

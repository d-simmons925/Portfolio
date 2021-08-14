import { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap'

const Project = ({ title, images, demo, github, desc }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  return (
    <div className="project">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={images}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {images.map((image) => (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={image.id}
          >
            <img src={image.image} alt={image.altText} />
          </CarouselItem>
        ))}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
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

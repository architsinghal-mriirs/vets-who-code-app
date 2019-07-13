import React, { useState, useEffect } from 'react'
import FluidImage from './FluidImage'
import Carousel from 'nuka-carousel'

const baseSettlings = {
  autoplay: true,
  enableKeyboardControls: true,
  pauseOnHover: true,
  speed: 500,
  transitionMode: 'fade',
  wrapAround: true,
  withoutControls: true,
}

const alignmentStyles = {
  height: 60,
  width: 60,
  margin: '0 auto',
}

function SponsorSlider() {
  const [viewport, setViewport] = useState(800)

  function updateWindowDimensions() {
    setViewport(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions)

    return () => window.removeEventListener('resize', updateWindowDimensions)
  })

  const isMobile = Boolean(viewport < 800)

  return (
    <Carousel {...baseSettlings} slidesToShow={isMobile ? 4 : 8}>
      <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
        <FluidImage fileName="google.png" alt="google" style={alignmentStyles} />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FluidImage fileName="github.png" alt="Github" style={alignmentStyles} />
      </a>
      <a href="https://repl.it" target="_blank" rel="noopener noreferrer">
        <FluidImage fileName="repl.it.png" alt="Repl.it" style={alignmentStyles} />
      </a>
      <a href="https://slack.com/" target="_blank" rel="noopener noreferrer">
        <FluidImage fileName="slack.png" alt="Slack" style={alignmentStyles} />
      </a>
      <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">
        <FluidImage fileName="DO.png" alt="Digital Ocean" style={alignmentStyles} />
      </a>
      <a href="https://frontendmasters.com/" target="_blank" rel="noopener noreferrer">
        <FluidImage fileName="fem.png" alt="Front End Masters" style={alignmentStyles} />
      </a>
      <a
        href="https://corporate.comcast.com/company/nbcuniversal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FluidImage fileName="comcast.png" alt="Comcast" style={alignmentStyles} />
      </a>
      <a href="https://www.contentful.com/" rel="noopener noreferrer" target="_blank">
        <FluidImage fileName="contentful.png" alt="Powered by Contentful" style={alignmentStyles} />
      </a>
    </Carousel>
  )
}

export default SponsorSlider

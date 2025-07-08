import React from 'react'
import TopScroll from '../../components/top-scroll/top-scroll'
import AboutComponent from '../../components/aboutComponent/AboutComponent'

const About = () => {
  return (
    <>
    <TopScroll />
    <AboutComponent />
    </>
  )
}

export default React.memo(About)
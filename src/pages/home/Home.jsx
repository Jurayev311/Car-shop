import React from 'react'
import Hero from '../../components/hero/Hero'
import CarType from '../../components/carType/CarType'
import Explore from '../../components/explore/Explore'
import Why from '../../components/why/Why'
import Progress from '../../components/progress/Progress'

const Home = () => {
  return (
    <>
      <Hero />
      <CarType />
      <Explore />
      <Why />
      <Progress />
    </>
  )
}

export default React.memo(Home)
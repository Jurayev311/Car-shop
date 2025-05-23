import React from 'react'
import Hero from '../../components/hero/Hero'
import CarType from '../../components/carType/CarType'
import Explore from '../../components/explore/Explore'
import Why from '../../components/why/Why'
import Specials from '../../components/specials/Specials'
import OurTeam from '../../components/OurTeam/OurTeam'
import Progress from '../../components/progress/Progress'

const Home = () => {
  return (
    <>
      <Hero />
      <CarType />
      <Explore />
      <Why />
      <Specials />
      <OurTeam />
      <Progress />
    </>
  )
}

export default React.memo(Home)
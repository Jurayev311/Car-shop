import React from 'react'
import Hero from '../../components/hero/Hero'
import CarType from '../../components/carType/CarType'
import Explore from '../../components/explore/Explore'

const Home = () => {
  return (
    <>
      <Hero />
      <CarType />
      <Explore />
    </>
  )
}

export default React.memo(Home)
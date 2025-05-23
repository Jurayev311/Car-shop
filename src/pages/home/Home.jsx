import React from 'react'
import Hero from '../../components/hero/Hero'
import CarType from '../../components/carType/CarType'

const Home = () => {
  return (
    <>
      <Hero />
      <CarType />
    </>
  )
}

export default React.memo(Home)
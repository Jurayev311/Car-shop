import React from 'react'
import ComingSoon from '../../components/comingSoon/ComingSoon'
import TopScroll from '../../components/top-scroll/top-scroll'
import Cars from '../../components/cars/Cars'

const Listing = () => {
  return (
    <>
      <TopScroll />
      <Cars />
    </>
  )
}

export default React.memo(Listing)
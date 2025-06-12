import React from 'react'
import ComingSoon from '../../components/comingSoon/ComingSoon'
import TopScroll from '../../components/top-scroll/top-scroll'

const Blog = () => {
  return (
    <>
      <TopScroll />
      <ComingSoon />
    </>
  )
}

export default React.memo(Blog)
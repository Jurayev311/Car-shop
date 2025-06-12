import React from 'react'
import ComingSoon from '../../components/comingSoon/ComingSoon'
import TopScroll from '../../components/top-scroll/top-scroll'

const Contact = () => {
  return (
    <>
      <TopScroll />
      <ComingSoon />
    </>
  )
}

export default React.memo(Contact)
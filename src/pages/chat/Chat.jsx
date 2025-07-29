import React from 'react'
import TopScroll from '../../components/top-scroll/top-scroll'
import ComingSoon from '../../components/comingSoon/ComingSoon'

const Chat = () => {
  return (
    <>
        <TopScroll />
        <ComingSoon />
    </>
  )
}

export default React.memo(Chat)
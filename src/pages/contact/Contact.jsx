import React from 'react'
import TopScroll from '../../components/top-scroll/top-scroll'
import ContactComponent from '../../components/contactComponent/ContactComponent'

const Contact = () => {
  return (
    <>
      <TopScroll />
      <ContactComponent />
    </>
  )
}

export default React.memo(Contact)
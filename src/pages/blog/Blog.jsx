import React from 'react'
import TopScroll from '../../components/top-scroll/top-scroll'
import BlogComponent from '../../components/blogComponent/BlogComponent'

const Blog = () => {
  return (
    <>
        <TopScroll />
        <BlogComponent />
    </>
  )
}

export default React.memo(Blog)
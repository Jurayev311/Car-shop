import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const HomePage = location.pathname === '/'

  const headerBg = HomePage
    ? `${scrolled ? 'bg-[#ffffff73] backdrop-blur-[8px] text-[#1c1c1c]' : 'bg-transparent text-white'}`
    : 'bg-[#050B20] text-white'

  return (
    <header className={`fixed top-0 left-0 w-full border-b-[1px] border-b-gray-400 z-50 duration-200 ${headerBg}`}>
      <div className='container'>
        <nav className='flex items-center justify-between h-[75px]'>
          <Link to='/'>
            <h2 className='uppercase font-bold text-xl'>Auto Deals</h2>
          </Link>

          <ul className='flex items-center gap-[30px] text-[15px] font-medium'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/listing'}>Listing</NavLink></li>
            <li><NavLink to={'/blog'}>Blog</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
            <button className='border p-2 px-3.5 rounded-2xl cursor-pointer hover:bg-[#ffffff73] hover:border-gray-300 active:scale-95 duration-150'>Submit Listing</button>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(Header)

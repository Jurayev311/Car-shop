import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { TbCarambolaFilled } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";

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
    ? `${scrolled ? 'bg-[#ffffff73] backdrop-blur-[8px] text-[#1c1c1c]' : 'bg-[#ffffff49] text-black'}`
    : 'bg-[#050B20] text-white'

  return (
    <header className={`fixed top-0 left-0 w-full border-b-[1px] border-b-gray-400 z-50 duration-200 ${headerBg}`}>
      <div className='container'>
        <nav className='flex items-center justify-between h-[75px]'>
          <Link to='/'>
            <h2 className='uppercase font-bold text-xl'>Auto Deals</h2>
          </Link>

          <ul className='hidden md:flex items-center gap-[30px] text-[15px] font-medium'>
            <li><NavLink to={'/'}>Bosh sahifa</NavLink></li>
            <li><NavLink to={'/listing'}>Mashinalar</NavLink></li>
            <li><NavLink to={'/blog'}>Blog</NavLink></li>
            <li><NavLink to={'/about'}>Biz haqimizda</NavLink></li>
            <li><NavLink to={'/contact'}>Aloqa</NavLink></li>
            <Link to={'/wishlist'} className='border p-2 px-3.5 rounded-[8px] cursor-pointer hover:bg-[#ffffff73] hover:border-gray-300 hover:text-yellow-500 active:scale-95 duration-150'><TbCarambolaFilled /></Link>
          </ul>

          <div className='md:hidden block'>
            <button><FaBars /></button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(Header)

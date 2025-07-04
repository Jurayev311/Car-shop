import React from 'react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-2 mt-10 shadow-inner">
      <div className="containerL flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full shadow" />
          <span className="font-bold text-lg tracking-wide">Avto Savdo</span>
        </div>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/" className="hover:text-yellow-400 transition">Bosh sahifa</NavLink>
          <NavLink to="/about" className="hover:text-gray-400 transition">Biz haqimizda</NavLink>
          <NavLink to="/blog" className="hover:text-gray-400 transition">Blog</NavLink>
          <NavLink to="/contact" className="hover:text-gray-400 transition">Aloqa</NavLink>
        </nav>
        <div className="flex gap-3">
          <a href="https://github.com/Jurayev311" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaGithub className="text-xl" /></a>
          <a href="https://www.linkedin.com/in/javohir-jo-rayev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaLinkedin className="text-xl" /></a>
          <a href="https://t.me/Javohir_Frontend" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaTelegram className="text-xl" /></a>
      <div className="containerL flex items-center text-xs text-gray-400 mt-2">© {new Date().getFullYear()} Avto Savdo. Barcha huquqlar himoyalangan.</div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
import React from 'react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white border border-gray-300 text-black py-10 px-4 mt-[60px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Get in Touch</a></li>
            <li><a href="#" className="hover:text-gray-300">Help center</a></li>
            <li><a href="#" className="hover:text-gray-300">Live chat</a></li>
            <li><a href="#" className="hover:text-gray-300">How it works</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Our Brands</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Toyota</a></li>
            <li><a href="#" className="hover:text-gray-300">Porsche</a></li>
            <li><a href="#" className="hover:text-gray-300">Audi</a></li>
            <li><a href="#" className="hover:text-gray-300">BMW</a></li>
            <li><a href="#" className="hover:text-gray-300">Ford</a></li>
            <li><a href="#" className="hover:text-gray-300">Nissan</a></li>
            <li><a href="#" className="hover:text-gray-300">Peugeot</a></li>
            <li><a href="#" className="hover:text-gray-300">Volkswagen</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Vehicles Type</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Sedan</a></li>
            <li><a href="#" className="hover:text-gray-300">Hatchback</a></li>
            <li><a href="#" className="hover:text-gray-300">SUV</a></li>
            <li><a href="#" className="hover:text-gray-300">Hybrid</a></li>
            <li><a href="#" className="hover:text-gray-300">Electric</a></li>
            <li><a href="#" className="hover:text-gray-300">Coupe</a></li>
            <li><a href="#" className="hover:text-gray-300">Truck</a></li>
            <li><a href="#" className="hover:text-gray-300">Convertible</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Sale Hours</h3>
          <ul className="space-y-2 mb-6">
            <li>Monday - Friday: 09:00AM - 09:00 PM</li>
            <li>Saturday: 09:00AM - 07:00PM</li>
            <li>Sunday: Closed</li>
          </ul>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/Jurayev311" target='_blank' className="hover:text-gray-500"><FaGithub className="text-2xl" /></a>
            <a href="https://www.linkedin.com/in/javohir-jo-rayev" target='_blank' className="hover:text-gray-500"><FaLinkedin className="text-2xl" /></a>
            <a href="https://t.me/Javohir_Frontend" target='_blank' className="hover:text-gray-500"><FaTelegram className="text-2xl" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
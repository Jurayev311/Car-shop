import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Routes>
        </>
    )
}

export default React.memo(AppRoutes)
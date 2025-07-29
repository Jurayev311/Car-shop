import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/home/Home'
import Listing from '../pages/listing/Listing'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/not-found/NotFound'
import DetailPage from '../pages/detailPage/DetailPage'
import Wishlist from '../pages/wishlist/Wishlist'
import Blog from '../pages/blog/Blog'
import Chat from '../pages/chat/Chat'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='listing' element={<Listing />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='wishlist' element={<Wishlist />} />
                    <Route path='chat' element={<Chat />} />
                    <Route path='auto/:id' element={<DetailPage />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default React.memo(AppRoutes)
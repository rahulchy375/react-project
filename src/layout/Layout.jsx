import React from 'react'
import Navs from '../sections/navbarmaking/Navs'
import { Outlet } from 'react-router-dom'
import Footer from '../sections/footer/Footer'

const Layout = () => {
  return (
    <>
    <Navs/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
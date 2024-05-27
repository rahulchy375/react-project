import './App.css'
import Layout from './layout/Layout';
import HomePage from './pages/HomePage'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage2 from './pages/HomePage2';
import HomePage3 from './pages/HomePage3';
import AboutPage from './pages/AboutPage';
import LivingPage from './pages/LivingPage';
import KitchenPage from './pages/KitchenPage';
import OutdoorPage from './pages/OutdoorPage';
import ContactPage from './pages/ContactPage';

const router = (createBrowserRouter(createRoutesFromElements(
  <Route element = {<Layout/>}>
    <Route index element = {<HomePage/>}></Route>
    <Route path='/home2' element = {<HomePage2/>}></Route>
    <Route path='/home3' element = {<HomePage3/>}></Route>
    <Route path='/about' element = {<AboutPage/>}></Route>
    <Route path='/living' element = {<LivingPage/>}></Route>
    <Route path='/kitchen' element = {<KitchenPage/>}></Route>
    <Route path='/outdoor' element = {<OutdoorPage/>}></Route>
    <Route path='/contact' element = {<ContactPage/>}></Route>
  </Route>
)))

function App() {

  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App

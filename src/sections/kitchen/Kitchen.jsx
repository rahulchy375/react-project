import React from 'react'
import "./kitchen.css";
import { Link } from 'react-router-dom';
import Con4 from '../content/content4/Con4';

const Kitchen = () => {
  return (
    <section id='kitchen_section'>
        <section className="kitchen_main">
            <h1 className="kitchenHeading">Kitchen</h1>
            <p><Link to = "/" className='home'>Home</Link> // <Link to = "/kitchen">Kitchen</Link></p>
        </section>
        <Con4/>
    </section>
  )
}

export default Kitchen
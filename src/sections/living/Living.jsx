import React from 'react'
import "./living.css";
import { Link } from 'react-router-dom';
import Con4 from '../content/content4/Con4';

const Living = () => {
  return (
    <section id='living_section'>
        <section className="livingSection">
            <h1 className="livingHeading">Living room</h1>
            <p><Link to = "/" className='home'>Home</Link> // <Link to = "/living">Living room</Link></p>
        </section>
        <Con4/>
    </section>
  )
}

export default Living
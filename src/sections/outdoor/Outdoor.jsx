import React from 'react'
import "./outdoor.css";
import { Link } from 'react-router-dom';
import Con5 from '../content/content5/Con5';

const Outdoor = () => {
  return (
    <section id='outdoor_section'>
        <section className="outdoorSection">
            <h1 className="outdoorHeading">Outdoors</h1>
            <p><Link to = "/" className = "home">Home</Link> // <Link to = "/outdoor">Outdoor</Link></p>
        </section>

        <Con5/>
    </section>
  )
}

export default Outdoor
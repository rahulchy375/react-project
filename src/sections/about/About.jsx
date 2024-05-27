import React from 'react'
import "./about.css";
import { Container,Row, Col } from 'react-bootstrap';
import { TbMathGreater } from "react-icons/tb";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about_section'>
        <section className='aboutMain'>
            <h3 className="aboutSubheading">Know more</h3>
            <h1 className="aboutHeading">About Us</h1>
            <p><Link className='home' to = "/">Home</Link> // <Link to = "/about">About</Link></p>
        </section>
        <Container>
            <Row>
                <Col lg = {6} className='img_div'>
                    <div className="aboutImg_div">
                        <img src="../../src/assets/aboutimg.png" alt="" />
                    </div>
                </Col>
                <Col lg = {6}>
                    <div className="about_content">
                    <div className="about_first">
                        <h1 className="aboutheading2">Working Since 1995</h1>
                        <p className="aboutPara">Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.</p>
                    </div>
                    <div className="about_second">
                        <h1 className="aboutheading2">Design Is a Funny Word</h1>
                        <p className="aboutPara">Quisquam voluptatibus pulvinar unde est sapiente mattis consequuntur, metus nobis sed ridiculus. Adipiscing irure excepturi quidem corporis mollit tincidunt nostra, ipsum scelerisque! Maiores enim varius deserunt imperdiet quisquam. Labore condimentum anim saepe!</p>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About
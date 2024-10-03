import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
  return (
    <section id='footer_section'>
        <Container>
            <Row>
                <Col lg = {4}>
                    <div className="footer_heading">About</div>
                    <p className="footer_para">
                    Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.
                    </p>
                </Col>
                <Col lg = {4}>
                    <div className="footer_heading">
                        Social
                    </div>
                    <div className="footer_icons">
                        <div className="icons"><Link><FaFacebook /></Link></div>
                        <div className="icons"><Link><FaTwitter /></Link></div>
                        <div className="icons"><Link><FaInstagram /></Link></div>
                        <div className="icons"><Link><FaLinkedin /></Link></div>
                    </div>
                </Col>
                <Col lg = {4}>
                    <div className="footer_heading">
                        Contact Us
                    </div>
                    <p className="footer_para">
                        Pahartali, Alongkar,Chattogram.
                        +8801884805902 |+8801796807939
                        {/* rahulchy375@gmail.com */}
                    </p>
                </Col>
            </Row>

            <Row className='justify-content-between mt-3'>
                <Col lg ={5}>
                    <div className="copyright_div">
                        Copyright @ 2024 Rahul Chowdhury | Designed <br/>by Rahul Chowdhury.
                    </div>
                </Col>
                <Col lg ={6} className='lastNav'>
                    <ul>
                        <li><Link to = "/about">About</Link></li>
                        <li><Link to = "/living">Living Room</Link></li>
                        <li><Link to = "/kitchen">Kitchen</Link></li>
                        <li><Link to = "/outdoor">Outdoor</Link></li>
                        <li><Link to = "/contact">Contact</Link></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer
import React from 'react'
import "./contact.css";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id='contact_section'>
        <section className="contactMain">
            <h1 className="contactHeading">Get In Touch</h1>
            <p><Link to = "/" className = "home">Home</Link> // <Link to ="/contact">Contact</Link></p>
        </section>
        <section className="contact_content">
            <Container>
                <Row>
                    <Col lg = {6}>
                        <Row>
                            <Col lg = {6}>
                                <label htmlFor="user">Username</label>
                                <input type="text" id='user' placeholder='Enter your username..' />
                            </Col>
                            <Col lg = {6}>
                                <label htmlFor="mail">Email</label>
                                <input type="text" id='mail' placeholder='Enter your Email..' />
                            </Col>
                        </Row>
                        <label htmlFor="topic" className='topic'>Topic</label>
                        <input type="text" id='topic' placeholder='Enter your topic..' />

                        <label htmlFor="des" className='describe'>Description</label>
                        <textarea id="des" rows={5} placeholder='Describe your topic here..'></textarea>

                        <div className="contactBtn">
                            <a href="#" className='bttn'>Send Mail</a>
                        </div>
                        
                    </Col>
                    <Col lg = {6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.21826365963!2d91.65422151951107!3d22.357629611510667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1716784729436!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    </section>
  )
}

export default Contact
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navs.css";
import { Link } from 'react-router-dom';
import LogoImg from "../../../src/assets/home-decor-logo.png";

const Navs = () => {
  return (
    <Navbar expand="lg" className="navbarNav">
      <Container>
        <Link to = "/"><img src={LogoImg} alt="The logo of Home decor"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to = "/about" className='navItems'>About us</Link>
            <Link to = "/living" className='navItems'>Living room</Link>
            <Link to = "/kitchen" className='navItems'>Kitchen</Link>
            <Link to = "/outdoor" className='navItems'>Outdoors</Link>
            <Link to = "/contact" className='navItems'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navs
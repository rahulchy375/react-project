import React from 'react';
import { Container } from 'react-bootstrap';
import "./main.css";

const Main = () => {
  return (
    <section id='main-section'>
      <Container>
        <h1 className='main-heading'>Coming Home Never Felt So Good!</h1>
        <h3 className="main-para">Why are you worried about your home? Just follow us.</h3>
        <div className='mainBtnDiv'><a href='#' className='bttn'>Find Your Style</a></div>
      </Container>
    </section>
  )
}

export default Main
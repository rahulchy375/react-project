import React from 'react'
import "../content.css";
// import "./con3.css";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap'; 
import { Col } from 'react-bootstrap'; 
import { FaGreaterThan } from "react-icons/fa6";
import Reusable from '../../../reusables/Reusable';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Post from '../../../reusables/Post';
import { FaArrowLeft } from "react-icons/fa";
import Tags from '../../../reusables/Tags';

const Con5 = () => {
  return (
    <section id='contentSection'>
      <Container>
          <Row>
                <Col lg={8}>
                    <div className="main-content-div">
                        <p className="content-heading">You may prefer this kitchen</p>
                        <p className="content-date">May 13,2024/Kitchen,Lifestyle</p>
                        <div className="content-first-img">
                            <img src="../../src/assets/outdoor1.jpg" alt="Kitchen-img" />
                        </div>

                        <p className="content-para">
                        Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat[…]
                        </p>
                        <div className="content-btn-div">
                            <a href="#" className="content-btn">Read More <FaGreaterThan className='rightArrow'/> <FaGreaterThan  className='rightArrow rightArrow2'/></a>
                        </div>
                    </div>

                    <Row>
                        <Col lg = {6} className='first'>
                            <Reusable 
                                title = "Icinia soluta. Lacus quas Icinia."
                                subtitle = "November 21, 2017 / Kitchen, Living Room, Reading Room"
                                img = {<img src="../../src/assets/fashion2.jpg" alt="reading room image" />}
                                para = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ab officiis porro officia. Praesentium facere quo voluptates sunt, eius eum!"
                            />
                        </Col>
                        <Col lg = {6} className='first'>
                            <Reusable 
                                title = "A beautiful outdoor with the nature"
                                subtitle = "November 21, 2017 / Kitchen, Living Room, Reading Room"
                                img = {<img src="../../src/assets/outdoor4.jpg" alt="reading room image" />}
                                para = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ab officiis porro officia. Praesentium facere quo voluptates sunt, eius eum!"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg = {6} className='first'>
                            <Reusable 
                                title = "Crporis quae purus inventore Crporis!"
                                subtitle = "November 21, 2017 / Kitchen, Living Room, Reading Room"
                                img = {<img src="../../src/assets/living5.jpg" alt="reading room image" />}
                                para = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ab officiis porro officia. Praesentium facere quo voluptates sunt, eius eum!"
                            />
                        </Col>
                    </Row>
                </Col>

                <Col lg={4}>
                    <input type="search" placeholder='Search...'/>

                    <div className="recent-div">
                        <p className='recent-heading'>Recent Posts</p>

                        <Post img = {<img src="../../src/assets/content-pic-1.jpg" alt="" />}
                              title = "The unique kitchen"
                              para = "In Kitchen, Lifestyle"
                        />
                        <Post img = {<img src="../../src/assets/reading room image.jpg"alt=""/>}
                              title = "Taciti hendrerit dis odit"
                              para = "In Kitchen, Living Room, Reading Room"
                        />
                        <Post img = {<img src="../../src/assets/living room img3.jpg"alt=""/>}
                              title = "Sunt doloremque blandit inven"
                              para = "In Living Room"
                        />
                        <Post img = {<img src="../../src/assets/reading room image.jpg"alt=""/>}
                              title = "Fugit quaerat vulputate! Irure."
                              para = "In Living Room"
                        />
                        <Post img = {<img src="../../src/assets/living room img4.jpg"alt=""/>}
                              title = "Litora aptent magnam laoreet!."
                              para = "In Living Room"
                        />
                        <Post img = {<img src="../../src/assets/living room img3.jpg"alt=""/>}
                              title = "Sunt doloremque blandit inven"
                              para = "In Living Room"
                        />
                    </div>
                    <div className="recent-div">
                        <p className='recent-heading'>Tags</p>
                        <div className="tagDiv">
                            <Tags title="appliances"/>
                            <Tags title="architecture"/>
                            <Tags title="area"/>
                            <Tags title="bed"/>
                            <Tags title="chair"/>
                            <Tags title="bedroom"/>
                            <Tags title="chairs"/>
                            <Tags title="corners"/>
                            <Tags title="decor"/>
                            <Tags title="design"/>
                            <Tags title="living"/>
                            <Tags title="lifestyle"/>
                            <Tags title="kitchen"/>
                            <Tags title="furniture"/>
                            <Tags title="outdoor"/>
                            <Tags title="sitout"/>
                        </div>
                    </div>
                </Col>
          </Row>
      </Container>
    </section>
  )
}

export default Con5
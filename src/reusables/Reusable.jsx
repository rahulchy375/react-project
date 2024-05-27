import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";


const Reusable = (props) => {
  return (
    <>
    
    <div className="sub-content-div">
        <p className="content-title">{props.title}</p>
        <p className="content-subtitle">{props.subtitle}</p>
        <div className="content-img-div">{props.img}</div>
        <p className="content-para">{props.para}</p>
        <div className="content-btn-div">
        <a href="#" className="content-btn">Read More <FaGreaterThan className='rightArrow'/> <FaGreaterThan  className='rightArrow rightArrow2'/></a>
        </div>
    </div>
    </>
  )
}

export default Reusable
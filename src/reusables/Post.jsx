import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <>
    <div className="recent-post-div">
        {props.img}
        <div className="post-detail">
        <Link>
            <h3 className="post-heading">{props.title}</h3>
        </Link>
                                
        <p className='post-para'>{props.para}</p>
    </div>
    </div>
    </>
  )
}

export default Post
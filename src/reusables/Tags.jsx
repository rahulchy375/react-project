import React from 'react'
import { Link } from 'react-router-dom'

const Tags = ({title}) => {
  return (
    <>
    <div className="tags"><Link>{title}</Link></div>
    </>
  )
}

export default Tags
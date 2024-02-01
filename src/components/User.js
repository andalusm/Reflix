import React from 'react'
import { Link } from 'react-router-dom';




export default function User({backgroundColor, name, changeUser}) {
  return (
    <div className='user' style={{backgroundColor: backgroundColor}}><Link to="/catalog" onClick={changeUser}>{name}</Link></div>
  )
}

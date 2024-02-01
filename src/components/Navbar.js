import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-link"><Link to="/">Home</Link></div>
        <div className="navbar-link"><Link to="/catalog">Catalog</Link></div>
        <div className="navbar-link" style={{ marginLeft: 'auto'}}>Reflix</div>
    </nav>
  )
}
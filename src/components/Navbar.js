import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/catalog">
          Catalog
        </Button>
        <Typography variant="h6" style={{ marginLeft: 'auto' }}>
          Reflix
        </Typography>
      </Toolbar>
    </AppBar>


    // <nav className="navbar">
    //     <div className="navbar-link"><Link to="/">Home</Link></div>
    //     <div className="navbar-link"><Link to="/catalog">Catalog</Link></div>
    //     <div className="navbar-link" style={{ marginLeft: 'auto'}}>Reflix</div>
    // </nav>
  )
}
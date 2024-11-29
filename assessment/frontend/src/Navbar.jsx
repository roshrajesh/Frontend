import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<AppBar  position="static" color="primary"  sx={{
    backgroundColor: '#CCCCFF', // Use any HEX, RGB, or CSS color
    color: '#FFFFFF', 
  }}>
    <Toolbar>
        <Typography  variant="h6" flexGrow={1}   style={{ flex: 1, textAlign: 'left' }} color='black'>BLOG</Typography><br /><br />
        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button variant="contained">Home</Button>
        </Link><br /><br />
        &nbsp;
        <Link to="/add" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button variant="contained">Add</Button>
            </Link>
    </Toolbar>
</AppBar>
&nbsp;

&nbsp;

    </div>
  )
}

export default Navbar
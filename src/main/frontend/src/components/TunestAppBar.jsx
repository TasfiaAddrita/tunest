import { AppBar, Toolbar } from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react'

const TunestAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">Home</Link>
      </Toolbar>
    </AppBar>
  )
}

export default TunestAppBar;
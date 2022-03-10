import { AppBar, Button, Toolbar, Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import { Context } from '../context';
import Login from './Login';

const TunestAppBar = () => {
  const { isUserLoggedIn } = useContext(Context);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">tunest</Typography>
        <Box>
          <Button sx={{ my: 2, color: "white", display: "inline" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Button>
          <Button sx={{ my: 2, color: "white", display: "inline" }}>
            {isUserLoggedIn && (
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Saved
              </Link>
            )}
          </Button>
        </Box>
        <Login />
      </Toolbar>
    </AppBar>
  );
}

export default TunestAppBar;
import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
            </Typography>
            <Link style={{textDecoration:'none'}} to="/accessories">
            <Button style={{textDecoration:'none'}} sx={{color:'white'}} color="inherit">Accessories</Button>
          </Link>
          <Link style={{textDecoration:'none'}} to="/purchase">
            <Button style={{textDecoration:'none'}} sx={{color:'white'}} color="inherit">Purhase Entry</Button>
          </Link>
          <Link style={{textDecoration:'none'}} to="/purchaselist">
            <Button style={{textDecoration:'none'}} sx={{color:'white'}} color="inherit">Pending Assign</Button>
          </Link>
          <Link style={{textDecoration:'none'}} to="/servicing">
            <Button style={{textDecoration:'none'}} sx={{color:'white'}} color="inherit">Servicing</Button>
          </Link>
          <Link style={{textDecoration:'none'}} to="/condem">
            <Button style={{textDecoration:'none'}} sx={{color:'white'}} color="inherit">Condem</Button>
          </Link>
            <Link style={{textDecoration:'none'}} to="/login">
            <Button style={{textDecoration:'none'}} sx={{color:'white'}} color="inherit">Login</Button>
          </Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
                   
        <Grid  container spacing={2}>
                      <Grid sx={{mt:5}} item xs={6} md={12}> 
                      <Typography>Login</Typography>
                      <form onSubmit=''>
                      <TextField 
                      id="standard-basic"
                      sx={{width:"75%", m:1}}
                      label="Your Email"
                      variant="standard"
                      type="email"
                      name="email"
                   
                         />
                      <TextField 
                      id="standard-basic"
                      sx={{width:"75%", m:1}}
                      label="Your Password"
                      type="password"
                      name="password"
                      variant="standard"
                     
                       />
  
  
  
                       <Button type="submit" sx={{width:"75%", m:1}} variant="contained">Login</Button>
                       <Link to="/register" style={{textDecoration:'none'}}>
                       <Button  type="submit" sx={{width:"75%", m:1}} variant="text">New User? Please Register</Button>
                       </Link>
                      </form>
  

                      
                      </Grid>
                      <Grid item xs={12} md={6}>
                              <img width="100%" src='' alt=''/>
                      </Grid>
  
  
                  </Grid>
    
              </Container>
    );
};

export default Login;
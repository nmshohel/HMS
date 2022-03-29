import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const AssignModal = ({openAssign,handleBookingClose}) => {
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAssign}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAssign}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
          
            </Typography>
                <form >
                <TextField
                    disabled
                    sx={{width:'90%', m:1}}
                    id="outlined-size-small"
                    // placeholder={time}
                    size="small"
                />
                <TextField
                    sx={{width:'90%', m:1}}
                    id="outlined-size-small"
                    // defaultValue={user.displayName}
                    size="small"
                    name="patientname"
                    // onBlur={handleOnBlur}
                />
            <TextField
                    sx={{width:'90%', m:1}}
                    id="outlined-size-small"
                    // defaultValue={user.email}
                    size="small"
                    name="email"
                    // onBlur={handleOnBlur}
                />
                <TextField
                    sx={{width:'90%', m:1}}
                    id="outlined-size-small"
                    defaultValue="Your Phone Number"
                    size="small"
                    name="phone"
                    // onBlur={handleOnBlur}
                />
                <TextField
                    disabled
                    sx={{width:'90%', m:1}}
                    id="outlined-size-small"
                    // defaultValue={date.toDateString()}
                    size="small"
                />
                <Button type="submit" variant="contained">Send</Button>

                </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default AssignModal;
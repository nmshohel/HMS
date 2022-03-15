import { Container } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const currencies = [
    {
      value: '01',
      label: 'Computer',
    },
    {
      value: '02',
      label: 'Monitor',
    },
    {
      value: '03',
      label: 'UPS',
    },
    {
      value: '04',
      label: 'CPU',
    },
  ];
  const warrenties = [
    {
      value: '01',
      label: '01',
    },
    {
      value: '02',
      label: '02',
    },
    {
      value: '03',
      label: '03',
    },
    {
      value: '04',
      label: '04',
    },
  ];
  const Supplier = [
    {
      value: '01',
      label: 'Oriental System Ltd, Dhaka,Oriental System Ltd, Dhaka',
    },
    {
      value: '02',
      label: 'Startech Technology, Dhaka',
    },

  ];
const Purchase = () => {
  
   

    const [purchaseData, setPurchaseData]=useState({});
    
    const handleOnchange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newPurchaseData={...purchaseData}
        newPurchaseData[field]=value;
        setPurchaseData(newPurchaseData)
     
        

    }
    const handlePurchaseSubmit=e=>{
        
        e.preventDefault();
        console.log(purchaseData)
        fetch('http://127.0.0.1:8000/api/accessories/',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(purchaseData)
        })
        .then(res=>res.json())
        // .then(data=>{
        //   if(data.insertedId)
        //   {
        //     setBookingSuccess(true);
        //     handleBookingClose();
        //   }
        // })

        
    }
    // const purchaseAccessories=(purchaseData)=>{
    //   APIService.purchaseAccessories(purchaseData)
    //   .then(resp=>console.log(resp))

    // }

    return (
            <>
            <Navigation/>
             <Container sx={{mt:5}}>
                <Box
                    
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '30%' },
                    }}
     
                    >
                    <form onSubmit={handlePurchaseSubmit}>
                                <div>
                                    <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Accessories Name"
                                    onChange={handleOnchange}
                                    // onChange={handleItemNameChange}
                                    helperText="Please select Item Name"
                                    name="accessories_name"
                                    required
                                   
                                    >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                    <TextField 
                                    id="outlined-basic" 
                                    label="Identification No" 
                                    variant="outlined"
                                    name="identification_no"
                                    required
                                    onChange={handleOnchange}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                    id="outlined-basic" 
                                    label="Model No" 
                                    variant="outlined"
                                    name="model_no"
                                    required
                                    onChange={handleOnchange} 

                                    />
                                    <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    name="description"
                                    required
                                    onChange={handleOnchange}
                                    multiline
                                    />
                                </div>
                                <div>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Purchase Date" 
                                    onChange={handleOnchange}
                                    placeholder='DD-MM-YYYY'
                                
                                    variant="outlined"
                                    name="purchase_date"
                                    required />
                                    <TextField 
                                    id="outlined-basic" 
                                    label="Price" 
                                    onChange={handleOnchange}
                                    variant="outlined"
                                    name="price"
                                    required />
                                </div>
                                <div>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Accessories Name & Address"
                                    // value={currency}
                                    onChange={handleOnchange}
                                    name="accessories_supplier_name_address"
                                    required
                                    
                                
                                    >
                                    {Supplier.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                    <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Warrenty"
                                    // value={currency}
                                    onChange={handleOnchange}
                                    name="warrenty"
                                    required
                              
                                
                                    >
                                    {warrenties.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                </div>

                                <div>
                                <Button  type="submit" variant="contained">Submit</Button>
                                
                                </div>
                    </form>

                    </Box>
                </Container>
            </>
    );
};

export default Purchase;
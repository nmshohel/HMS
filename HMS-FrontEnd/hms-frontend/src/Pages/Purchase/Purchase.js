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
  
    const [date, setDate] = React.useState(null);

    const [purchaseData, setPurchaseData]=useState({});
    
    const handleOnchange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newPurchaseData={...purchaseData}
        newPurchaseData[field]=value;
        setPurchaseData(newPurchaseData)
     
        

    }
  
    const concateDateData=(purchaseData,date)=>{
        alert("this is concate date")
        const obj = Object.assign({}, purchaseData, date);
        // const newData={purchaseData,date}
        console.log("dateeeee", date)
        setDate(obj);


    }
    
    const handlePurchaseSubmit=e=>{
        concateDateData(purchaseData,date);
       
        console.log(purchaseData)
        alert("submited")
        e.preventDefault();
        
    }

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
                                    onChange={handleOnchange}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                    id="outlined-basic" 
                                    label="Model No" 
                                    variant="outlined"
                                    name="model_no"
                                    onChange={handleOnchange} 

                                    />
                                    <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    name="description"
                                    onChange={handleOnchange}
                                    multiline
                                    />
                                </div>
                                <div>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Purchase Date"
                                        value={date}
                                        name="purchase_date"

                                        // defaultValue={date.toDateString()}
                                        onChange={(newValue) => {
                                        setDate(newValue);
                                        

                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    </LocalizationProvider>
                                    <TextField 
                                    id="outlined-basic" 
                                    label="Price" 
                                    onChange={handleOnchange}
                                    variant="outlined"
                                    name="price" />
                                </div>
                                <div>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Accessories Name & Address"
                                    // value={currency}
                                    onChange={handleOnchange}
                                    name="accessories_supplier_name_address"
                                    
                                
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
                                    helperText="Please select Warrenty"
                                
                                    >
                                    {warrenties.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                </div>

                                <div>
                                <Button type="submit" variant="contained">Submit</Button>
                                
                                </div>
                    </form>

                    </Box>
                </Container>
            </>
    );
};

export default Purchase;
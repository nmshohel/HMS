import React, {useEffect, useState}from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
// import Navigation from '../Shared/Navigation/Navigation';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const Assign = () => {
    const {id}=useParams();
    const [assignInfo, setAssignInfo]=useState({})// for show single item

    const [employeeInfo, setEmployeeInfo]=useState({is_assign:true})// for update assing info

    const [allemployeeInfo, setAllEmployeeInfo]=useState([])// for update assing info


    // for get single selected item 
    useEffect(()=>{
        const uri=`http://127.0.0.1:8000/api/accessories/${id}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setAssignInfo(data))
    },[])


    // for show employee info in form input field 
    useEffect(()=>{
        const uri=`http://127.0.0.1:8000/api/employees/`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setAllEmployeeInfo(data))
    },[])



    // for item assign 
    const handleAssignSubmit=(e)=>{
        console.log(employeeInfo);
        const uri=`http://127.0.0.1:8000/api/accessories/${id}/`;
        fetch(uri, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(employeeInfo)
        })
        .then(res=>res.json())
        .then(data=>{
                if(data.id)
                {
                    alert("Successfully Assigned")
                }
                console.log(data)
          

        })
        e.preventDefault();


    }
    // employee from data get 
    const handleOnchange=(e)=>{
        const field=e.target.name;  //mobile no
        const value=e.target.value; //01793204555
        const newEmployeeData={...employeeInfo};
        newEmployeeData[field]=value;
        setEmployeeInfo(newEmployeeData)       
    }





      return (
<>
<Navigation/>
<div>
        
        <h1>This is assign {id}</h1>
        <h1>Item Name: {assignInfo.model_no}</h1>
            <Container>
                        <Box
                                            sx={{
                        '& .MuiTextField-root': { m: 1, width: '30%' },
                    }}
                        
                        >
                        <form onSubmit={handleAssignSubmit}>
                                <div >
   
                 
                                    <TextField 
                                     id="outlined-select-currency"
                                    select
                                    label="Office Name" 
                                 
                                    name="office_name"
                                    required
                                   
                                    
                                  
                                    onChange={handleOnchange}
                                    >
                                    {allemployeeInfo.map((option) => (
                                    <MenuItem key={option.id} value={option.office_name}>
                                    {option.office_name}
                                    </MenuItem>
                                    ))}
                                    </TextField>
                                </div>
                                <div>
                                    <TextField 
                                    id="outlined-basic" 
                                    select
                                    label="Employee Name" 
                                    variant="outlined"
                                    name="user_name"
                                    required
                                    onChange={handleOnchange} 

                                    >
                                    {allemployeeInfo.map((option) => (
                                    <MenuItem key={option.id} value={option.employee_name}>
                                    {option.employee_name}
                                    </MenuItem>
                                    ))}
                                    </TextField>
                                    </div>
                                    <div>
                                    <TextField 
                                    id="outlined-basic" 
                                    select
                                    label="Designation" 
                                    variant="outlined"
                                    name="user_designation"
                                    required
                                    onChange={handleOnchange} 

                                    >
                                    {allemployeeInfo.map((option) => (
                                    <MenuItem key={option.id} value={option.designation}>
                                    {option.designation}
                                    </MenuItem>
                                    ))}
                                    </TextField>
                                    </div>
                                    
                                    <div>
                                    <TextField
                                    id="outlined-multiline-static"
                                    select
                                    label="Department"
                                    name="department"
                                    required
                                    onChange={handleOnchange}
                                    multiline
                                    >
                                    {allemployeeInfo.map((option) => (
                                    <MenuItem key={option.id} value={option.department}>
                                    {option.department}
                                    </MenuItem>
                                    ))}
                                   </TextField>
                                </div>
                                <div>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Mobile No" 
                                    select
                                    onChange={handleOnchange}
                                    placeholder='mobile_no'
                                
                                    variant="outlined"
                                    name="mobile_no"
                                    required >

                                    {allemployeeInfo.map((option) => (
                                    <MenuItem key={option.id} value={option.mobile_no}>
                                    {option.mobile_no}
                                    </MenuItem>
                                    ))}
                                    </TextField>
                
                                    
                                </div>
                                <div>
                     
       
                    
                                </div>

                                <div>
                                <Button  type="submit" variant="contained">Submit</Button>
                                
                                </div>
                    </form>
                        </Box>
            </Container>

</div>
</>
    );
};

export default Assign;
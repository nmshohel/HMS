import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench,faPenToSquare} from '@fortawesome/free-solid-svg-icons'


import Navigation from '../Shared/Navigation/Navigation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Accessories = () => {
    const [accessories, setAccessories]=useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/accessories/',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
          }
        })
        .then(resp=>resp.json())
        .then(resp=>setAccessories(resp))
        .catch(error=>console.log(error))
      
      },[])

    return (
        <div>
        <Navigation/>
            <h1>Accessories</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>        
            <TableCell align="right">Identification No</TableCell>
            <TableCell align="right">Model No</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Purchase Date</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Supplier Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Warrenty</TableCell>
            <TableCell align="right">Office Name</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Mobile No</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {accessories.map((row) => (
            <TableRow
              key={row.identification_no}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.item_name}</TableCell>
              <TableCell align="right">{row.identification_no}</TableCell>
              <TableCell align="right">{row.model_no}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.parchase_date}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.supplier_name}</TableCell>
              <TableCell align="right">{row.supplier_address}</TableCell>
              <TableCell align="right">{row.warrenty}</TableCell>
              <TableCell align="right">{row.office_name}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.user_name}</TableCell>
              <TableCell align="right">{row.user_designation}</TableCell>
              <TableCell align="right">{row.mobile_no}</TableCell>
              <TableCell align="right">Details</TableCell>
              <TableCell align="right"><FontAwesomeIcon icon={faPenToSquare} /></TableCell>
              <TableCell align="right"><FontAwesomeIcon icon={faWrench} /></TableCell>
              <TableCell align="right">Condem</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




        </div>
    );
};

export default Accessories;
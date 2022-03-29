import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWrench,faPenToSquare} from '@fortawesome/free-solid-svg-icons'


import Navigation from '../Shared/Navigation/Navigation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

import {

  Link
} from "react-router-dom";




const PurchaseList = () => {
    const [accessories, setAccessories]=useState([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/purchaselist/',{
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
            <h1>Assign Pending</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell align="right">S/N</TableCell>    
            <TableCell align="right">Name</TableCell>        
            <TableCell align="right">Identification No</TableCell>
            <TableCell align="right">Model No</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Purchase Date</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Supplier</TableCell>
        
            <TableCell align="right">Warrenty</TableCell>


            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {accessories.map((row,index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{index=index+1}</TableCell>
              <TableCell align="right">{row.accessories_name}</TableCell>
              <TableCell align="right">{row.identification_no}</TableCell>
              <TableCell align="right">{row.model_no}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.purchase_date}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.accessories_supplier_name_address}</TableCell>
           
              <TableCell align="right">{row.warrenty}</TableCell>

              <TableCell align="right">

              <Link to={`/accessories/assign/${row.id}`}>
              <Button variant="contained" color="success">Assign</Button>
              </Link>



              

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




        </div>
    );
};

export default PurchaseList;
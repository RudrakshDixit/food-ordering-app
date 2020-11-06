import { FormControl, InputLabel, makeStyles, MenuItem, NativeSelect, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { keys } from '@material-ui/core/styles/createBreakpoints';
import Axios from 'axios';
import React, { useEffect } from 'react';

function AdminItems({ name, email,  phone,   address,    id, items, status }) {
    const [age, setAge] = React.useState(status);
    const dataUrl = "https://warm-oasis-92826.herokuapp.com/orderDetails";


    const handleChange = (e,id) => {
      setAge(e.target.value);
      console.log(age);
        Axios({
            method: 'post',
            url: dataUrl,
            data: {
              id: id,
              status: e.target.value,
              
            }
          }).then((response) => {
           
          }, (error) => {
            
          });
    };
  
    
      
     
    return (
        <div style={{margin:"1rem"}}>
            <TableContainer component={Paper}>
      <Table  size="medium" aria-label="a dense table">
        <TableHead style={{backgroundColor:"#a8dadc"}}>
          <TableRow>
            <TableCell>Customer details</TableCell>
            <TableCell >Order status</TableCell>
            <TableCell>Order details</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
              <TableCell>
                {name}<br />
                {email}<br />
                {phone} <br />
                {address}
              </TableCell>
              <TableCell align="left">
                  
                  
                  
                  
        <FormControl >
       
        <NativeSelect
          value={age}
          onChange={(e)=> handleChange(e,id)}
        
        >
          <option value="Placed">Placed</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
        </NativeSelect>
      </FormControl>
                  
                  
                  
                  </TableCell>
              <TableCell align="left">
                        <Table>
                        <TableHead>
                        <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell >QTY</TableCell>
                        <TableCell>PRICE</TableCell>
                        </TableRow>
                        </TableHead>
                {items.map((item)=> (             
                      <TableBody>
                            <TableRow>
                                <TableCell>
                                {item.title}
                                </TableCell>
                                <TableCell>
                                {item.qty}
                                </TableCell> 
                                <TableCell>
                                {item.price}
                                </TableCell>
                            </TableRow>
                        </TableBody>                     
                      ))}
              
                        </Table>
              </TableCell>
             
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    );
}

export default AdminItems;
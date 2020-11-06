import React, { useState } from 'react';
import Header from './components/Header';
import TextField from '@material-ui/core/TextField';
import PageviewIcon from '@material-ui/icons/Pageview';
import { Grid, InputAdornment } from '@material-ui/core';
import Axios from 'axios';
import Modal from '@material-ui/core/Modal';

function Status(props) {

    const [id,setId]=useState("");
    const [status,setStatus]=useState("");
    const dataUrl="https://warm-oasis-92826.herokuapp.com/status";
    const [updating,setUpdate] =useState(false);

    const post = () => {
        setUpdate(true);
        Axios({
            method: 'post',
            url: dataUrl,
            data: {
              id: id,
            }
          }).then((response) => {
            setUpdate(false);
            if(response.status==200){
                console.log(response);
                setStatus("Your order status is: "+response.data);
            }
            
          }, (error) => {
            setUpdate(false);
            setStatus("No order found.");
          });
    }
    const body2 = (
        <div style={{width:"100%", height:"100%", color:"blue"}}>  </div>
       );
    return (
        <div style={{width:"100%",backgroundColor:"#F8F8F8",minHeight:"100vh"}}>
        <Header />
        <h1 style={{margin:"1.5rem", fontSize:"2rem", color:"#1D3557", fontFamily:"Lato" }}>Track your Order here</h1>
        
      
          <Grid container  style={{width:"100%",paddingLeft:"1.5rem"}}>
              <Grid xs={11} sm={6} item={true}>
              <TextField required style={{width:"100%", backgroundColor:"white"}} id="ID" label="ORDER ID" variant="outlined" placeholder="eg: 5f827ee8a2d34100045bcb20" value={id} onChange={e => setId(e.target.value)} 
           InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PageviewIcon style={{color:"grey", fontSize:"2rem", cursor:"pointer"}} onClick={post} />
              </InputAdornment>
            ),
          }}
          />
              </Grid>
             
          </Grid>
         <h1 style={{margin:"1.5rem", fontSize:"1rem", fontWeight:"bold", fontFamily:"Montserrat", color:"#457b9d"}}> {status} </h1>
         <Modal
                open={updating}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body2}
                </Modal>
        </div>
    );
}

export default Status;
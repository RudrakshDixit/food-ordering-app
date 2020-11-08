import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './components/Header';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import "../src/menuitem.css";

import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import Axios from 'axios';
import Modal from '@material-ui/core/Modal';




function Checkout(props) {
    const [ {basket},dispatch ] = useStateValue();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, errorMsg] = useState("");
    const dataUrl="https://warm-oasis-92826.herokuapp.com/orders";
    const [searchId,updateId] =useState("");
    const [open, setOpen] = React.useState(false);
    const [updating,setUpdate] =useState(false);

    

   
    
    const validate= () => {
        const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        if(name.length===0||email.length===0||phone.length===0||address===0){
            errorMsg("All the fields are required");
            return;
        }else if(phone.length!==10){
            errorMsg("Length of phone number should be equal to 10");
            return;
        }else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            errorMsg("Wrong email address");
            return;
        }else if(!phone.match(phoneno)){
            errorMsg("Invalid phone number");
            return;
        }
        errorMsg("");
        
        post();
        
    }
    
    
    const dec = () => { 
           //EMPTY CART
            dispatch({
                type: "CLEAR",
                item: {
                  id:"1",        
                },
              });
              
           
      };

       function post(){
        setUpdate(true);
          let result = basket.map(v => ({ title: v.title, price: v.price,qty: v.qty }));

       Axios({
            method: 'post',
            url: dataUrl,
            data: {
              name: name,
              phone: phone,
              email:email,
              address:address,
              orderedItems: result,
              time: new Date().toTimeString().split(" ")[0],
              date: new Date().toLocaleDateString(),
            }
          }).then((response) => {
            setUpdate(false);
            updateId(response.data._id);
            setOpen(true);
          }, (error) => {
            setUpdate(false);
            errorMsg("Something went wrong, please try again");
          });
      
      }
    

      const body = (
        <div style={{margin: "0",
        position: "absolute",
        backgroundColor:"white",
        border:"1px solid red",
        top: "50%",
        left: "50%",      
        transform: "translate(-50%, -50%)", minWidth:"50%",maxWidth:"90%", minHeight:"50vh"}}>

          <h2 id="simple-modal-title" style={{fontSize:"2rem", fontWeight:"bold" ,color:"green", margin:"1rem",fontFamily:"Lato"}}>Success!!!!</h2>
          <p id="simple-modal-description" style={{fontSize:"1rem", fontWeight:"normal" ,color:"#457b9d", margin:"1rem",fontFamily:"Open Sans"}}>
            Your order is placed successfully.Please Copy the Order ID below to check the status of your order.

          </p>
            <div style={{textAlign:"center"}} >
           
            <h1 style={{fontSize:"1rem", fontWeight:"bold" , margin:"1.2rem",fontFamily:"Roboto", color:"#14213d"}}>{searchId}</h1>
            <button className="buttonstyle" style={{width: "50%", fontSize:"1rem",}} onClick={dec}>
                         Back to Home
            </button>
            </div>

        </div>
      );

      const body2 = (
       <div style={{width:"100%", height:"100%", color:"blue"}}>  </div>
      );

    return (
        <div style={{width:"100%",backgroundColor:"#F8F8F8",minHeight:"100vh"}}>
            {basket?.length===0 ? <Redirect to="/" /> :  <div> 
                <Header />
                <Grid container alignItems="stretch" xs={12}>
                <Grid sm={8} xs={12} item={true}>
                    <div> 
                    <Card style={{margin:".5rem"}}>
                    <h1 style={{margin:"1rem",marginLeft:"1.5rem",fontSize:"1rem", fontWeight:"bold", fontFamily:"Lato", color:"#1D3557"}}> Details: </h1>
                    
                    <form  noValidate autoComplete="off" style={{textAlign:"center",padding:"1.5rem"}}>
                    <TextField required style={{width:"100%"}} id="name" label="Name" variant="outlined" placeholder="Rudraksh Dixit" value={name} onChange={e => setName(e.target.value)}/>
                    <TextField required style={{width:"100%",marginTop:"1rem"}} id="email" label="Email" placeholder="xyz@abc.com" variant="outlined" value={email}  onChange={e => setEmail(e.target.value)} />
                    <TextField required style={{width:"100%",marginTop:"1rem"}} id="phone" label="Phone number" variant="outlined" placeholder="9999999999" value={phone} onChange={e => setPhone(e.target.value)} />
                    <TextField required style={{width:"100%",marginTop:"1rem"}} id="address" label="Address" placeholder="Mannat"  multiline variant="outlined" value={address} onChange={e => setAddress(e.target.value)}/>
                    </form>
                    <h1 style={{marginLeft:"1.5rem",marginBottom:"1rem", fontSize:".8rem", fontWeight:"bold", fontFamily:"Montserrat", color:"red"}}> {error} </h1>
                    </Card>
                    
                     </div>
                </Grid>
                <Grid sm={4} xs={12} item={true}>
                <div> 
                
                <Card style={{margin:".5rem"}}>
                <h1 style={{margin:"1rem", fontSize:"1.5rem", fontWeight:"bold", fontFamily:"Lato", color:"#1D3557"}}> Order Now </h1>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 style={{margin:"1rem", fontSize:".8rem", fontWeight:"simple", fontFamily:"Roboto", color:"#6d6875"}}> Amount(COD):</h1>
                <h1 style={{margin:"1rem", fontSize:".8rem", fontWeight:"bold", fontFamily:"Open Sans", color:"#1D3557"}}> ₹{getBasketTotal(basket)} </h1>
                </div>


                  <div style={{padding:"1rem"}}>
                  <button style={{width:"100%", padding:".5rem", textAlign:"center", color:"white", backgroundColor:"#228B22", fontFamily:"Montserrat", fontSize:"1rem", cursor:"pointer", borderRadius:"4px", fontWeight:"bold",}} onClick={validate}>
                  Place Order
                </button>
                  </div>
                    </Card>
                 </div>
                </Grid>
                
                </Grid>
                <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
                </Modal>
                <Modal
                open={updating}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body2}
                </Modal>
            </div>
            }
            
        </div>
        
        
    );
}

export default Checkout;
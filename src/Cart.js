import React from "react";
import Header from "../src/components/Header";
import { useStateValue } from "./StateProvider";
import EmptyCart from "../src/components/EmptyCart"
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CartItem from "../src/components/CartItem";
import {getBasketTotal} from "../src/reducer";
import "../src/menuitem.css";
import { Link } from "react-router-dom";


function Cart(props) {

  const [ {basket} ] = useStateValue();



  return (
    <div style={{width:"100%",backgroundColor:"#F8F8F8"}}>
      <Header />
        <div style={{textAlign:"center",}}>
        {basket?.length===0 ?   <div style={{textAlign:"center",}}> <EmptyCart /> </div>: 
        <div style={{textAlign:"left",padding:"1.5rem"}}>
          
          <Grid container alignItems="stretch">
            <Grid item={true} sm={9}  xs={12} >
               <Card style={{margin:".5rem"}}>
                    <h1 style={{margin:"1rem", fontSize:"1rem", fontWeight:"bold", fontFamily:"Lato", color:"#1D3557"}}> Cart ( {basket?.length} )</h1>


                      <div style={{padding:"1rem"}}>
                        {basket.map((item)=>
                             (
                               
                              <CartItem key={item.id} item= {item}/>
                            )
                        )}
                      </div>


               </Card>
            </Grid>
            <Grid item={true} sm={3} xs={12}  >
                <Card style={{margin:".5rem"}}>
                <h1 style={{margin:"1rem", fontSize:"1.5rem", fontWeight:"bold", fontFamily:"Lato", color:"#1D3557"}}> Cart Total </h1>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 style={{margin:"1rem", fontSize:".8rem", fontWeight:"simple", fontFamily:"Roboto", color:"#6d6875"}}> Total amount:</h1>
                <h1 style={{margin:"1rem", fontSize:".8rem", fontWeight:"bold", fontFamily:"Open Sans", color:"#1D3557"}}> ₹{getBasketTotal(basket)} </h1>
                 
                </div>
                               

               <div style={{padding:".5rem"}}>
               <Link to="/checkout" style={{ textDecoration: "none" }}>

               <button style={{width:"100%", padding:".5rem", textAlign:"center", color:"white", backgroundColor:"#228B22", fontFamily:"Montserrat", fontSize:"1rem", cursor:"pointer", borderRadius:"4px", fontWeight:"bold"}}>
                  Checkout
                </button>
                </Link>
               </div>
                </Card>
            </Grid>
          </Grid>       
          
           </div> 
           
        } 
        </div>
    </div>
  );
}

export default Cart;

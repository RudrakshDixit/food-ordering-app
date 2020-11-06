import React from 'react';
import { useStateValue } from "../StateProvider";

function CartItem({item}) {

  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //Remove from data layer
    dispatch({
      type: "REMOVE",
      item: {
        id: item.id,        
      },
    });
  };

  const addToBasket = () => {
    //add to data layer
    dispatch({
      type: "ADD",
      item: {
        id: item.id,
        title: item.title,
        price: item.price,
        imgSrc: item.imgSrc,
        qty: 1,
      },
    });
  };

  const dec = () => {
    //decrease
    dispatch({
      type: "DEC",
      item: {
        id: item.id,       
      },
    });
  };
    return (
        <div>
        <div style={{display:"flex",width:"100%", padding:".5rem"}}>
         
          <img  style={{width:"20%", objectFit:"contain"}} src={item.imgSrc} alt="itemImg" />

          <div style={{display:"flex", flexDirection:"column", width:"100%", justifyContent:"space-between"}}>
          <div style={{display:"flex", justifyContent:"space-between",width:"100%"}}>
           <h1 style={{marginTop:"1rem",marginLeft:"1rem", fontSize:"1rem", fontWeight:"bold", fontFamily:"Montserrat", color:"#1D3557"}}> {item.title} </h1>
           <h1 style={{fontSize: ".8rem",fontFamily: "Lato",fontWeight: "bold",color: "#ee6c4d",marginTop: "1rem",marginRight:"1rem" }}> ₹{item.price} </h1>
           </div>
          
           <div style={{display:"flex", justifyContent:"space-between"}}>
           <h1 style={{marginLeft:"1rem",marginTop:"1.5rem",marginBottom:"1.5rem", fontSize:".8rem", fontWeight:"bold", fontFamily:"Open Sans", color:"#A8DADC", cursor:"pointer"}} onClick={removeFromBasket}> Remove from cart </h1>
           <h1 style={{fontSize: ".8rem",fontFamily: "Lato",marginBottom:"1.5rem",fontWeight: "bold",color: "#ee6c4d",marginTop: "1rem",marginRight:"1rem", }}> <button style={{border:".5px solid grey", padding:".2rem .5rem .2rem .5rem", marginRight:".5rem",cursor:"pointer" }} onClick={dec}>-</button> {item.qty} <button style={{border:".5px solid grey", padding:".2rem .5rem .2rem .5rem", marginLeft:".5rem",cursor:"pointer"}} onClick={addToBasket}>+</button> </h1>
           </div>
          
          </div>
          
          
          
        </div>
         <hr
           style={{
            height:".2px",
            backgroundColor:"rgba(230, 57, 70,.5)",
             marginLeft: "1.5rem",
             borderRadius: "24px",
             marginRight: "1.5rem",
          }}
           ></hr>
        </div>
    );
}

export default CartItem;
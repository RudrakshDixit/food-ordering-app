import React from 'react';
import Empty from "../images/empty.svg";
import "../menuitem.css";
import { Link } from "react-router-dom";

function EmptyCart() {
    return (
        <div style={{margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
          
            transform: "translate(-50%, -50%)",}}>
            
            <img  src={Empty} alt="empty" style={{
                objectFit:"contain",
                height:"150px",
                textAlign:"center",
            }} />
            <h1 style={{
                marginTop:".8rem",
                marginBottom:".4rem",
                color:"#1D3557",
                fontSize:"1.5rem",
                fontFamily:"Montserrat",
                fontWeight:"bold",
            }}> Your CART is empty</h1>

            <h1 style={{
                
                color:"#6d6875",
                fontSize:".8rem",
                letterSpacing:"1.4px",
                fontFamily:"Open Sans",
                 marginBottom:"1rem" 
            }}> IPL team baad me bana lena phale Khana add karlo </h1>

                <Link to="/" style={{ textDecoration: "none"}}>
                    <button className="buttonstyle" style={{width: "50%", fontSize:".8rem"}}>
                         Back to Home
                    </button>
                </Link>
        </div>
    );
}

export default EmptyCart;
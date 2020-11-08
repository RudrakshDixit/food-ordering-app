import React from 'react';
import Home from '../images/Home.png'
import Analytics from '../images/Analytics.png'

import Help from '../images/Help.png'

import Bank from '../images/Bank.png'
import { Link } from "react-router-dom";


function LeftPane(props) {
    return (
        <div style={{width:"4rem",height:"100%",position:"fixed",backgroundColor:"#1d3557",display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
           <div style={{display:"flex",flexDirection:"column",alignSelf:"center"}}>
           <Link to="/admin" style={{ textDecoration: "none" }}>
                <img src={Home} alt="home" style={{height:"32px",padding:"1rem",backgroundColor:props.selected==='home'&&"#1b6ca8",cursor:"pointer" }}/> 
            </Link>

            <Link to="/analytics" style={{ textDecoration: "none" }}>

                <img src={Analytics} alt="Analytics" style={{height:"32px",marginTop:"1rem",padding:"1rem",backgroundColor:props.selected==='analytics'&&"#1b6ca8",cursor:"pointer"}}/>               
            </Link>
            <Link to="/earnings" style={{ textDecoration: "none" }}>

                <img src={Bank} alt="Money" style={{height:"32px",marginTop:"1rem",padding:"1rem",backgroundColor:props.selected==='money'&&"#1b6ca8",cursor:"pointer"}}/>               
              </Link>
            </div> 
           <div style={{alignSelf:"center"}}>
           <Link to="/help" style={{ textDecoration: "none" }}>

           <img src={Help} alt="Help" style={{height:"32px",padding:"1rem",backgroundColor:props.selected==='help'&&"#1b6ca8",cursor:"pointer"}}/>              
            </Link>
            </div> 

        </div>
    );
}

export default LeftPane;
import React from 'react';
import LeftPane from './components/LeftPane';

function Help(props) {
    return (
        <div style={{backgroundColor:"#F8F8F8",height:"100vh"}}>
            <LeftPane selected='help'/>

            
            <div style={{paddingLeft:"6rem",paddingTop:"1rem",paddingRight:"1rem"}}>
            <h1 style={{marginBottom:"1rem", fontSize:"2rem", fontFamily:"Montserrat", fontWeight:"bold", color:"#1d3557"}}> Help </h1>

            </div>
        </div>
    );
}

export default Help;
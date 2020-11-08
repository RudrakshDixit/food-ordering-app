import React, { useEffect, useState } from 'react';
import LeftPane from './components/LeftPane';
import { CircularProgress } from '@material-ui/core';


function Analytics(props) {
    return (
        <div style={{backgroundColor:"#F8F8F8"}}>
            <LeftPane selected='analytics'/>

            <div style={{paddingLeft:"6rem",paddingTop:"1rem",paddingRight:"1rem"}}>
            <h1 style={{marginBottom:"1rem", fontSize:"2rem", fontFamily:"Montserrat", fontWeight:"bold", color:"#1d3557"}}> Analytics </h1>

            </div>
            
        </div>
    );
}

export default Analytics;
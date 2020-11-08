import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import LeftPane from './components/LeftPane';
import AdminItems from './components/AdminItems';
import { CircularProgress } from '@material-ui/core';



function Admin(props) {

    const dataUrl = "https://warm-oasis-92826.herokuapp.com/orderDetails";
    const [popular, setPopular] = useState([]);
    const [displayBar,setDisplay]=useState(true);
    useEffect(() => {
        async function fetchData() {
          const request = await Axios.get(dataUrl);
          setDisplay(false);

          setPopular(request.data);
          
          return request;
        }
        fetchData();
      }, [dataUrl]);

    return (
        <div style={{width:"100%",backgroundColor:"#F8F8F8",minHeight:"100vh",position:"relative"}}>
          <LeftPane selected='home'/>
            <h1 style={{marginBottom:"1rem", fontSize:"2rem", fontFamily:"Montserrat", fontWeight:"bold", color:"#1d3557",paddingLeft:"6rem",paddingTop:"1rem"}}> Orders </h1>
           {displayBar?<CircularProgress style={{color:"#1d3557",position:"absolute",top:"45%",left:"50%"}}/> :(popular.length!=0)?popular.map(
          (dish) =>
            
             (
               
                 <AdminItems
                  name={dish.name}
                  email={dish.email}
                  phone={dish.phone}
                  address={dish.address}
                  id={dish._id}
                  items={dish.orderedItems}
                  status={dish.status} 
                  key={dish._id}
                  />
            )
        ):  <h1 style={{marginTop:"1rem", fontSize:"1rem", fontFamily:"Montserrat", fontWeight:"bold", color:"#457b9d",paddingLeft:"6rem"}}> No pending order to complete </h1>}
        </div>
    );
}

export default Admin;
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../src/components/Header'
import AdminItems from './components/AdminItems';
function Admin(props) {

    const dataUrl = "https://warm-oasis-92826.herokuapp.com/orderDetails";
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const request = await Axios.get(dataUrl);
          setPopular(request.data);
          console.log(request.data);
          return request;
        }
        fetchData();
      }, [dataUrl]);

    return (
        <div style={{width:"100%",backgroundColor:"#F8F8F8",minHeight:"100vh"}}>
            <Header />
            <h1 style={{margin:"1rem", fontSize:"2rem", fontFamily:"Montserrat", fontWeight:"bold", color:"#1d3557"}}> Orders: </h1>
            {(popular.length!=0)?popular.map(
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
        ):  <h1 style={{margin:"1rem", fontSize:"1rem", fontFamily:"Montserrat", fontWeight:"bold", color:"#457b9d"}}> No pending order to complete </h1>}
        </div>
    );
}

export default Admin;
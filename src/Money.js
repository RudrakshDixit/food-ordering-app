import React, { useEffect, useState } from 'react';
import LeftPane from './components/LeftPane';
import Card from '@material-ui/core/Card';
import Axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import {Bar} from 'react-chartjs-2';

function Money(props) {

    const dataUrl = "https://warm-oasis-92826.herokuapp.com/allDetails";
    const [money, setMoney] = useState(0);
    const [displayBar,setDisplay]=useState(true);
    const [label,updateLabel]=useState([]);
    const [userData,updateData]=useState([]);

    var options = {
        maintainAspectRatio: false,
        legend: {
            display: false,
         },
       
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Items'
                  }
            
            }],
            yAxes: [{
                
                scaleLabel: {
                    display: true,
                    labelString: 'Earning in ₹'
                  }
               
            }]
        }
    }
    const orderedItems = {
        labels: label,
        options: {
            title: {
                display: true,
                text: 'Custom Chart Title'
            }
        },
        datasets: [
          {
            backgroundColor: '#0f3460',
            borderColor: '#16213e',
            borderWidth: 0,
            hoverBackgroundColor: '#16213e',
            hoverBorderColor: '#1a1a2e',
            data: userData
          }
        ],

      };
      


    const calculateData =(data) => {
        let map=new Map();
        
        let sum=0;
        data.map((d)=>{
            d.orderedItems.map((item)=>{
                let amount=parseInt(item.price)*parseInt(item.qty);
                    if(map.has(item.title)){
                        map.set(item.title,map.get(item.title)+amount);
                    }else{
                        map.set(item.title,amount);
                    }

                sum=sum+(amount);
            });
        });

        for (let key of map) {
            label.push(key[0]);
            userData.push(key[1]);
        }

        setDisplay(false);
        setMoney(sum);
    };

    useEffect(() => {
        async function fetchData() {
          const request = await Axios.get(dataUrl);
          calculateData(request.data);
          return request;
        }
        fetchData();
      }, [dataUrl]);


    return (
        <div style={{backgroundColor:"#F8F8F8",height:"100vh"}}>
            <LeftPane selected='money'/>
            <h1 style={{ fontSize:"2rem", fontFamily:"Montserrat", fontWeight:"bold", color:"#1d3557",marginLeft:"6rem",paddingTop:"1rem"}}> Earnings </h1>

            {displayBar?<CircularProgress style={{color:"#1d3557",position:"absolute",top:"45%",left:"50%"}}/>:

            <div style={{paddingLeft:"6rem",paddingTop:".5rem",paddingRight:"1rem"}}>
            <Card style={{backgroundColor:"white"}}>
            <h1 style={{ fontSize:"1.5rem", fontFamily:"Open Sans",fontWeight:"lighter", color:"#00509d",padding:"1rem",letterSpacing:"2px"}}> Your earnings till now is: </h1>
            <h1 style={{marginBottom:"1rem", fontSize:"2rem", fontFamily:"Roboto", color:"#006d77",paddingLeft:"1rem",letterSpacing:"4px"}}>₹{money}  </h1>            
            </Card>
            <h1 style={{ fontSize:"1.2rem", fontFamily:"Montserrat", fontWeight:"bold", color:"#1d3557",paddingTop:"1rem"}}> Your stats </h1>

            <Card style={{marginTop:".5rem",height:"320px",backgroundColor:"white",padding:".5rem"}}>

            <Bar 
          data={orderedItems}
            
          options={
            options
          }
        />


            </Card>
            </div>
            


}


        </div>
    );
}

export default Money;
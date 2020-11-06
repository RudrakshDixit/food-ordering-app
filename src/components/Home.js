import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Cover from "../images/cover.png";
import Grid from "@material-ui/core/Grid";
import CoverImage from "../components/CoverImage";
import Title from "../components/Title";
import MenuItem from "../components/MenuItem";
import Cover2 from "../images/cover2.png";
import axios from "axios";
import Cover3 from "../images/Cover3.png";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from "@material-ui/lab/Alert";



function Home() {
  const [popular, setPopular] = useState([]);
  const dataUrl = "https://warm-oasis-92826.herokuapp.com/popular";
  const [show,showSnack]=useState(false);
  const handleClose = () => {
    showSnack(false);
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(dataUrl);
      setPopular(request.data);
      return request;
    }
    fetchData();
  }, [dataUrl]);

  return (
    <div style={{backgroundColor:"#F8F8F8"}}>
      <Header />
      <CoverImage cover={Cover} />
      <Title title="Popular" />

      <Grid
        container
        alignItems="stretch"
        style={{
          padding: "1.5rem",
        }}
      >
        {popular.map(
          (dish) =>
            // eslint-disable-next-line
            dish.type == "1" && (
              <MenuItem
                key={dish._id}
                id={dish._id}
                title={dish.title}
                price={dish.price}
                imgSrc={dish.imgUrl}
                desc={dish.desc}
                show={showSnack}
              />
            )
        )}
      </Grid>

      <CoverImage cover={Cover2} issmall />

      <Title title="Most Loved" />
      <Grid container alignItems="stretch" style={{ padding: "1.5rem" }}>
        {popular.map(
          (dish) =>
            // eslint-disable-next-line
            dish.type == "2" && (
              <MenuItem
                key={dish._id}
                id={dish._id}
                title={dish.title}
                price={dish.price}
                imgSrc={dish.imgUrl}
                desc={dish.desc}
                show={showSnack}
                
              />
            )
        )}
      </Grid>

      <CoverImage cover={Cover3} />
      <Snackbar 
      style={{marginTop:"2rem", padding:"1rem"}}
      open={show}
       autoHideDuration={500} 
       onClose={handleClose} 
       
       anchorOrigin={{vertical: 'top', horizontal: 'right'}}
       >
        <Alert>
        <h1
              style={{
                fontSize: "1rem",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                color: "#457B9D",
                
              }}
            >
              Added to the Cart
            </h1>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Home;


import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Stack,
    Menu,
    MenuItem,
    Box,
    Grid,
    Chip,
    Card,
  } from "@mui/material";
  
  
  import CardContent from "@mui/material/CardContent";
  import CardMedia from "@mui/material/CardMedia";
  import {  CardActionArea, CardActions } from "@mui/material";
  import Home from "./Home";
  import "./Courses.css"
export default class PDF extends Component {
  state = {

    courses: [

      {
        // image1:
        //     "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/images%2FVector%20(2).png?alt=media&token=bfd97eb2-9d66-44cb-8867-d6a53401c95d",
        
        buttonText: "SSC CHSL Prev. YearQuestion PDF & Question with Answer PDF",
        duartion:"2020-2020",
        price:"150 Full Sets for Tier |"
        
        
        
        
      },
      {
        // image2:
        // "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/images%2FVector%20(2).png?alt=media&token=bfd97eb2-9d66-44cb-8867-d6a53401c95d",
        
        
        buttonText: "SSC CHSL Prev. Year  Question PDF & Question with Answer PDF",
        
        
        price:"150 Full Sets for Tier |",
        duartion:"2020-2020"
      },
      {
        // image3:
        // "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/images%2FVector%20(2).png?alt=media&token=bfd97eb2-9d66-44cb-8867-d6a53401c95d",
        
        
        
        buttonText: "SSC CHSL Prev. Year  Question PDF & Question with Answer PDF",
        
        duartion:"2020-2020",
        price:"150 Full Sets for Tier |"
       
       
      },
     
    ],
  };

  render() {
    
 const cardData = [
        {
        //   title1: "SSC CHSL Prev. Year Question PDF & Question with Answer PDF",
        //   description:
        //     "SSC CHSL Prev. Year Question PDF & Question with Answer PDF",
          image1:
            "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/images%2FVector%20(2).png?alt=media&token=bfd97eb2-9d66-44cb-8867-d6a53401c95d",
        },
        
    ];
    return (
      <div style={{background:" linear-gradient(180deg, #FFFFFF 48.58%, rgba(220, 247, 255, 0.71) 97.76%)"}}>
        <Typography variant="h5" component="div" marginTop="2%">
         
         <center>

          <span style={{ fontWeight: 'bold',color:"#3E30C2", textAlign:"center",}}>Get previous year pdf  with detailed solution for better analysis </span>
         </center>
        </Typography>
       
        <div style={{ display: "flex", justifyContent: "space-around" }}>

          {this.state.courses.map((course, index) => (
            <Grid className='box'>
              <center>

              <img height={"120px"} width={"95.83px"} src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/images%2FVector%20(2).png?alt=media&token=bfd97eb2-9d66-44cb-8867-d6a53401c95d" alt="Img"/>
              </center>


              <Typography className='pdftext'>
                {course.buttonText}

              </Typography>
              <center>

              <Typography className='pdfdur'>
                {course.duartion}

              </Typography>
              </center>
              <center>

              <Typography  style={{color:"#201E31",fontSize:14,marginTop:"10px"}}>
                {course.price}

              </Typography>
              </center>
              <center>
              <Button className="pdfbtn" variant="contained" >View Pdf Pass</Button>
              </center>
              <center>

              <Typography  style={{color:"#201E31",fontSize:14,marginTop:"10px"}}>
                {course.price}

              </Typography>
</center>


            </Grid>
          
          ))}
        </div>

        
       
        <CardActions
          style={{ justifyContent: "center", marginTop: "29px" }}
        >
          <Button className="btn" variant="contained">Explore All  Pdf</Button>
        </CardActions>
      </div>
    );
  }
}

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
} from "@mui/material";

import { Link } from 'react-router-dom';

export default class Learningpath extends Component {
  render() {
    const {
      common,
      home,
      snackbar,
      close_snack_bar
  } = this.props;
    return (
      <div>
        {common.isHome === true &&<Grid container spacing={4} >
        <Grid  item xs={12} md={12} sx={{ m: 10, }}>
          <img width="100%" src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/COurseLearningPath.png?alt=media&token=16791219-90e5-45de-afd9-749d17268d8b" alt="Img" />
        
        {/* <CardActions style={{ justifyContent: "center", marginTop: "15px" }}> */}
        <center>
          <Link smooth to={`/Coursedetails#top`} >
          <Button  style={{backgroundColor: "#3E30C2",weight:"100%",padding:"10px 10px 10px 60px",color:"white"}}>
            <Typography style={{fontWeight:"inherit",marginLeft:"-40px"}}>
              
              Start Your Course
              </Typography>
              </Button>
              </Link>

        </center>
        </Grid>
        {/* </CardActions>  */}
       
    </Grid>}
    </div>
    )
  }
}

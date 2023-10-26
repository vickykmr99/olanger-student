import React, { Component } from "react";
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
import CardPart from "../Container/cardpartCont";

import Courses from "./Courses";

import "./Courses.css";
import heading from "../../../../images/Heading.svg";


export default class Home extends Component {
  render() {
    const {
      common,
      home,
      snackbar,
      close_snack_bar
  } = this.props;
    return (
      <div>
        {common.isHome === true &&<div style={{ marginTop: "140px" }}>
             <Box>
        <Grid item xs={19}  Grid container justifyContent="center" alignItems="center"
             >
            <Grid>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-around",
                 
                }} > </Stack>
                
         
      <img  src={heading} alt="Img"/>
    </Grid>

   </Grid>
        </Box>
        <Box sx={{ marginTop: 5 }}>
          <CardPart />

        </Box>
        {/* <Box>
          <Typography variant="h5" component="h2" textAlign="left" marginTop="3%">
          <span style={{ fontWeight: 'bold' }}>Course Learning Path</span>
          </Typography>
          </Box> */}
       
       
        
      </div>}
      </div>
    );
  }
}

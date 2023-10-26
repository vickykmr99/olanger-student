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
import CardActions from "@mui/material/CardActions";
import Frame from "../../../../images/AdvancedAnalytics.png";

export default class score extends Component {
  render() {
    const {
      common,
      home,
      snackbar,
      close_snack_bar
  } = this.props;
    return (
      <div>
        
        {common.isHome === true && <Grid item xs={19}  Grid container justifyContent="center" alignItems="center"
             >
            <Grid>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-around",
                }} > </Stack>
                
         
      <img src={Frame} style={{marginTop:"2%",width:"100%"}}/>
    </Grid>

   </Grid>}
    
    </div>
    )
  }
}

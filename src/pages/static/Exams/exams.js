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
    Card,
    Chip,
  } from "@mui/material";



export default class exams extends Component {
  render() {
    return (
      <div style={{ marginTop: "140px" }} >
   
   <Grid item xs={19}  Grid container justifyContent="center" alignItems="center"
             >
            <Grid>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-around",
                 
                }} > </Stack>
                
         
      <img  src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Heading.png?alt=media&token=7f0bc64d-78f2-45cb-96d8-9e99461fc5fe" alt="Img"/>
    </Grid>

   </Grid>
<Grid>
<Stack
   direction="row"
    sx={{ marginTop:"55px",
 justifyContent: "space-around"}} > 
<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Frame%207855.png?alt=media&token=a101c65f-f705-4445-ab9d-cd3098b27d3f" alt="img" />
</Stack>
<Stack
   direction="row"
    sx={{ marginTop:"35px",
 justifyContent: "space-around"}} > 
<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Frame%207854.png?alt=media&token=0679f8b3-b2c6-4928-9d6b-b866db1ba5e6" alt="img" />
</Stack>
<Stack
   direction="row"
    sx={{ marginTop:"35px",
 justifyContent: "space-around"}} > 
<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Frame%207853.png?alt=media&token=ebb0e8d5-0861-4d6a-b21e-ddf12082ba16" alt="img" />
</Stack>
<Stack
   direction="row"
    sx={{ marginTop:"35px",
 justifyContent: "space-around"}} > 
<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Comprehensive%20Test%20series.png?alt=media&token=abc7bb4e-e7f9-4c14-a5ef-defd23a11891" alt="img" />
</Stack>
</Grid>


</div>
    )
  }
}

import React, { Component } from 'react';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoFrame from "../../../images/eclipse.png";
import '../../Instruction/Components/reattemptnavbar.css'


export default class reattemtnavbar extends Component {
  render() {
    return (
      <Grid>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{gap:"35px",justifyContent:"space-around",alignItems:"center",paddingTop:"10px",paddingBottom:"10px"}}>
            
            <Grid  style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
            
            <img src={LogoFrame} style={{height:"60px",marginLeft:"40px"}}/>
            </Grid>
            <Grid style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>

            <Typography className='navdesc'>PYST 1: SSC  CGL - Reasoning(Held On : 11 April 2022 Shift 1)</Typography>
            <Typography style={{width:"160px",backgroundColor:"#F1F4FA",whiteSpace:"nowrap",textAlign:"center",height:"45px",paddingTop:"9px",borderRadius:"10px"}}>
               <span style={{color:"#000",fontSize:"12px",fontFamily:"Poppins"}}>Time Left </span>
               <span style={{color:"#fff",backgroundColor:"#000",fontSize:"12px"}}>00</span>
               <span>:</span>
               <span style={{color:"#fff",backgroundColor:"#000",fontSize:"12px"}}>11</span>
               <span>:</span>
               <span style={{color:"#fff",backgroundColor:"#000",fontSize:"12px"}}>28</span>
                
            </Typography>
            
            </Grid>
            <Grid style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
           
           
            <button style={{background:"white",border:"1px solid #3E30C2",color:"#3E30C2",fontSize:"16px",borderRadius:"5px",height:"40px"}}>Switch Full Screen</button>
            <button style={{background:"white",border:"1px solid #3E30C2",color:"#3E30C2",fontSize:"16px",borderRadius:"5px",height:"40px"}}> Pause</button>
            </Grid>
            
          </Toolbar>
        </AppBar>
      </Box>

      </Grid>
    )
  }
}

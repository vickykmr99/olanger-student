import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Card } from "@mui/material";
import coursejourney from "../../../../images/MyCourseJourney.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export default class Coursejourney extends Component {
    render() {
        return (
            <>
           
        
            <Grid style={{marginTop:"150px"}}>
          
            <Link to='/CourseviewDetail' style={{textDecoration:"none"}} > 
            <ArrowBackIcon style={{fontSize:"20px",color:"black",marginLeft:"7%"}}/>
            </Link>
            <center>
                <img src={coursejourney} style={{marginTop:"10px"}} />
                </center>
            </Grid>
           
            </>
        )
    }
}

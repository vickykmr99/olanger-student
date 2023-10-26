import { Typography ,Grid} from '@mui/material';
import React, { Component } from 'react';

class coursejourney extends Component {
    render() {
        return (
            <Grid>
               <Grid style={{background:"#3E30C2",padding:"50px 0px",paddingLeft:"10%",paddingRight:"10%",textAlign:"center",lineHeight:"2px"}}>
                <Typography style={{fontSize:"32px",fontWeight:"600",color:"white"}}>How Course Journey and Examys ai GPT help<br/> you score higher.</Typography>
                <Typography style={{fontSize:"20px",fontWeight:"400",color:"white",marginTop:"2%",marginLeft:"4%",marginRight:"4%"}}>Journey that traces your every activity of Course & Test Series to evaluate "Progress Report", to measure "How is your Foundation?" and to assess " are you in the competition?". Use Examys ai GPT to get exam trend.</Typography>
               </Grid> 
            </Grid>
        );
    }
}

export default coursejourney;
import React, { Component } from 'react';
import { Grid, Typography, Link } from "@mui/material";
import Pathsq from "../../../../images/path-square.png";
import Examyai from "../../../../images/illustrator.png";
import Userico from "../../../../images/user-square.png";


class coursesupportby extends Component {
    render() {
        return (
            <Grid>
                <Typography style={{ fontWeight: "600", fontSize: "28px", marginLeft: "5%" }}>Courses Supported by</Typography>

                <Grid className='course-support-box-contain' style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"30px",margin:"5%",marginTop:"3%"}}>
                    <Grid className='course-support-boxs' style={{backgroundColor:"rgba(238, 236, 254, 0.30)",borderLeft:"5px solid #3E30C2",borderRadius:"6px",paddingTop:"20px",paddingLeft:"15px",paddingBottom:"17px",paddingRight:"15px",display:"flex",flexDirection:"column",gap:"20px"}} >
                        <Grid className='first-icon-part' style={{ display: "flex",gap:"19px" }}>
                            <img src={Pathsq} style={{height:"100%"}}/>
                            <Grid>
                                <Typography style={{fontSize:"20px",fontWeight:"600",color:"#141226",marginBottom:"10px"}}>Course Journey</Typography>
                                <Typography style={{fontSize:"14px",fontWeight:"400",color:"#201E31"}}>Insights that deliver result.</Typography>
                            </Grid>

                        </Grid>
                        <Grid style={{gap:"10px",display:"flex",flexDirection:"column"}}>
                            <Typography style={{fontSize:"16px",fontWeight:"400",color:"#3E3D4D"}}>
                            Every course has a <span style={{fontSize:"16px",fontWeight:"700",color:"#201E31"}}>'course journey'</span>  section to accelerate your preparation and, ultimately, help you crack the exam.
                            </Typography>
                            <Typography style={{textAlign:"right",fontSize:"16px",fontWeight:"400"}}>
                                To Know More ,
                                <Link to="">Click here</Link>
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid className='course-support-boxs' style={{backgroundColor:"rgba(238, 236, 254, 0.30)",borderLeft:"5px solid #3E30C2",borderRadius:"6px",paddingTop:"20px",paddingLeft:"15px",paddingBottom:"17px",paddingRight:"15px",display:"flex",flexDirection:"column",gap:"20px"}} >
                        <Grid className='first-icon-part' style={{ display: "flex",gap:"19px" }}>
                            <img src={Examyai}  style={{height:"80%"}}/>
                            <Grid>
                                <Typography style={{fontSize:"20px",fontWeight:"600",color:"#141226",marginBottom:"10px"}}>Examys ai</Typography>
                                <Typography style={{fontSize:"14px",fontWeight:"400",color:"#201E31"}}>Analyzing trend that boosts your confidence.</Typography>
                            </Grid>

                        </Grid>
                        <Grid style={{gap:"10px",display:"flex",flexDirection:"column"}}>
                            <Typography style={{fontSize:"16px",fontWeight:"400",color:"#3E3D4D"}}>

                            Every course has a <span style={{fontSize:"16px",fontWeight:"700",color:"#201E31"}}>'Trend analysis'</span> section which is powered by examys ai to know the exam pattern.
                            
                            </Typography>
                            <Typography style={{textAlign:"right",fontSize:"16px",fontWeight:"400"}}>
                                To Know More ,
                                <Link to="">Click here</Link>
                            </Typography>
                        </Grid>
                    </Grid>


                    <Grid className='course-support-boxs' style={{backgroundColor:"rgba(238, 236, 254, 0.30)",borderLeft:"5px solid #3E30C2",borderRadius:"6px",paddingTop:"20px",paddingLeft:"15px",paddingBottom:"17px",paddingRight:"15px",display:"flex",flexDirection:"column",gap:"20px"}} >
                        <Grid className='first-icon-part' style={{ display: "flex",gap:"19px" }}>
                            <img src={Userico} style={{height:"100%"}}/>
                            <Grid>
                                <Typography style={{fontSize:"20px",fontWeight:"600",color:"#141226",marginBottom:"10px"}}>Course and Team</Typography>
                                <Typography style={{fontSize:"14px",fontWeight:"400",color:"#201E31"}}>Learning path that connects and </Typography>
                            </Grid>

                        </Grid>
                        <Grid style={{gap:"10px",display:"flex",flexDirection:"column"}}>
                            <Typography style={{fontSize:"16px",fontWeight:"400",color:"#3E3D4D"}}>
                            
                            Every course has a <span style={{fontSize:"16px",fontWeight:"700",color:"#201E31"}}>'course & team'</span>  section to know about the team & faculties and their inspiring story.
                            </Typography>
                            <Typography style={{textAlign:"right",fontSize:"16px",fontWeight:"400"}}>
                                To Know More ,
                                <Link to="">Click here</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default coursesupportby;
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ola from "../../../images/ola.png";
import Rating from '@mui/material/Rating';
import { Grid, Card } from "@mui/material";
import { Link } from 'react-router-dom';
import Frame from "../../../images/Frame 7769.svg";
import arrowmark from "../../../images/arrow-left.svg";
import "../../../pages/Instruction/Components/analytics.css";

class analyticsnav extends Component {
    render() {
        return (
            <div>
                <AppBar position="static"  className='analytics-nav' style={{background:" #E8EAFE", width: "100%", height: "80px", boxShadow: "none" }}>
                    <Toolbar style={{background:" #E8EAFE",paddingTop:"8px",paddingBottom:"8px" }}>


                        <Grid style={{ display: "flex", flexDirection: "row", width: "30%", gap:"10px",justifyContent: "center", marginLeft: "3%", }}>
                            
                            <a href="/submitsection"><img src={arrowmark} /></a>
                            <Grid>
                                <Typography style={{color:"black",fontWeight:"600"}}>Tests</Typography>
                                <Typography  style={{color:"black",fontWeight:"400",fontSize:"14px"}}>Constitutional framework: Historical background and Preamble - I</Typography>
                            </Grid>
                        </Grid>




                        <Grid style={{ display: "flex", width: "65%",gap:"18px", justifyContent: "center",alignItems:"center"}} className='right-nav'>
                           

                            <Grid>
                                <Box>
                                    <center>
                                        <form style={{ gap: '10px' }}>
                                            <label  style={{color:"black",fontWeight:"600"}}>View In</label>

                                            <select style={{ marginLeft: "10px", outline: "none", color: "#6257CD", background: "none", border: "1px solid #6257CD", borderRadius: "2px", padding: '0px 6px ' }}>

                                                <option value="General">English</option>
                                                
                                                
                                            </select>

                                        </form>
                                    </center>

                                </Box>
                            </Grid>

                            <Grid style={{ display: "flex", flexDirection: "row" ,border:"1.5px solid lightgray"}}>

                                <Typography style={{ paddingLeft:"5px",color: "black", fontSize: "16px", fontWeight: 600, marginTop: "6px" }}>
                                    Rate the Test
                                </Typography>

                                <Rating className='rating' defaultValue={.5} style={{  paddingRight:"5px",color: "#faaf00", marginTop: "6px" }} />


                            </Grid>
                            <Grid>
                                <img src={Frame} />
                            </Grid>
                           

                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default analyticsnav;
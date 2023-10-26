import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import "../../../../pages/static/Coupon/Components/Examysfirst.css"
import examyshomeimage from '../../../../images/examys-home-68.png';
import Button from '@mui/material/Button';
import Brightness1SharpIcon from '@mui/icons-material/Brightness1Sharp';
export default class Examysfirst extends Component {
    render() {
        return (
            <Grid className='examysfirst-main'>
                <Grid className="examysfirst-container">
                    <Grid className='examys-home-image'>
                        <img src={examyshomeimage} alt="examyshomeimage" />
                    </Grid>
                    <Grid >
                        <Typography className="examysfirst-heading">
                            Get <span className='spa'>examys first @&#8377;49 </span>
                            membership with exclusive benifits
                        </Typography>
                    </Grid>

                    <Grid className="examysfirst-middle-content">

                        <Typography className="examysfirst-heading">
                            What you get?
                        </Typography>

                        {/* <Grid className="examysfirst--mid-cont">
                            <Grid><Typography className="examysfiirst-icon"><Brightness1SharpIcon /></Typography></Grid>

                            <Grid>
                                <Typography>
                                    20% off on course for 3 years
                                </Typography>
                                <Typography>
                                    10% off on test series for 3 years
                                </Typography>
                            </Grid>
                        </Grid> */}
                         <Grid className="mid-secr">
                            <Grid><Typography className="examysfiirst-icon" ><Brightness1SharpIcon style={{ fontSize: "15px",marginRight:"6px"}}  /></Typography></Grid>

                            <Grid>
                                <Typography>
                                    20% off on course for 3 years
                                </Typography>
                                <Typography>
                                    10% off on test series for 3 years
                                </Typography>
                            </Grid>
                        </Grid>
                        



                    </Grid>
                    <Grid>
                        <Typography className="examysfirst-heading" >Note:</Typography>
                        <Typography>
                            To be eligible for examysfirst,at first, one has buy a course or test pass. Then pay &#8377;49 more for membership.
                        </Typography>
                    </Grid>

                    <Grid className="examysfirst-bottom-content">
                        <Grid>
                            <Typography><Button variant="contained" className="examysfirst-btn">Join examys first @&#8377;49</Button>
                            </Typography>
                        </Grid>
                        <Grid className="examysfirst-or">
                            <Typography className="examysfirst-orr">OR</Typography>
                        </Grid>
                        <Grid>
                            <Typography class="examysfirst--2">
                                You can get examys first for free by referring to your friends.
                            </Typography>
                        </Grid>
                        <Grid>
                           
                            <Typography className="examysfirst--3">
                               <Typography> Refer & get instant benifits and </Typography>
                               <Button variant="contained" 
                               size='small'
                               sx={{width  :'50px'}}
                               className="examysfirst-super-btn">free</Button>  
                               <Typography>Be an examys first with exclusive benifits</Typography>
                            </Typography>
                            {/* <sup className="examysfirst-super-btn">free</sup> */}
                        </Grid>
                    </Grid>


                </Grid>


            </Grid >
        )
    }
}



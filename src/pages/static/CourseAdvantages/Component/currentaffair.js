import React, { Component } from 'react';
import Massagetxtico from "../../../../images/message-text.png";
import { Typography, Grid,Button ,Link} from '@mui/material';
import Referandearn from "../../../../images/Frame 48097637.svg";
import Joinexamyfst from "../../../../images/Frame 48097638.svg";
import Couponhouse from "../../../../images/Frame 48097639.svg";
// import { Button } from 'bootstrap';

class Currentaffair extends Component {
    render() {
        return (
            <Grid style={{ marginTop: "4%", marginLeft: "7%", marginRight: "7%" }}>

                <Grid className='course-support-boxs' style={{ gap: "20px", display: "flex", flexDirection: "column" }} >
                    <Grid className='first-icon-part' style={{ display: "flex", gap: "19px" }}>
                        <img src={Massagetxtico} style={{height:"100%",marginTop:"1%"}} />
                        <Grid>
                            <Typography style={{ fontSize: "16px", fontWeight: "400" }}>Get your brain supercharged with</Typography>
                            <Typography style={{ fontSize: "28px", fontWeight: "600" }}>Examys Current Affairs</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{ gap: "20px", display: "grid", gridTemplateColumns: "430px 400px auto" }}>

                        <Grid>
                            <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Are current affairs for all exams same?:</Typography>
                            <Typography style={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}>As we know, current affairs for banking and Insurance Exams are very different from current affairs for UPSC, SSC, railway, teaching, defence, state government jobs and other similar jobs.</Typography>
                        </Grid>
                        <Grid>
                            <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Exam-wise Current Affairs:</Typography>
                            <Typography style={{ fontSize: "16px", fontWeight: "400" }}>Do you need exam specific current affairs to achieve your goal?</Typography>
                            <Typography style={{ fontSize: "16px", fontWeight: "400" }}>Be focus & get exam-wise current affairs with <span style={{ fontSize: "16px", fontWeight: "800", color: "#201E31" }}>Examys Current Affairs</span> </Typography>
                        </Grid>
                        <Grid>
                            <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Highlights:</Typography>
                            <Typography style={{ fontSize: "16px", fontWeight: "400" }}>Weekly & Monthly pdf</Typography>
                            <Typography style={{ fontSize: "16px", fontWeight: "400" }}>Weekly & monthly quizzes</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid style={{marginTop:"2%",marginBottom:"3%"}}>
                <center>
                <Button variant="contained" style={{background:"#3E30C2",fontSize:"20px",fontWeight:"600"}}>Select Course to Explore Current Affairs</Button>
                </center>
                   
                </Grid>

                <Grid style={{ marginBottom:"3%" ,display:"flex"}}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <img src={Referandearn} style={{width:"100%",maxWidth:"400px"}}/>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>
                    <img src={Joinexamyfst} style={{width:"100%",maxWidth:"400px"}}/>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>
                    <img src={Couponhouse} style={{width:"100%",maxWidth:"400px"}}/>
                    </Link>

                    
                </Grid>

                {/* <Grid>
                    <Grid style={{borderLeft:"2px solid purple"}}>
                        <Grid>
                        </Grid>
                        <Typography></Typography>
                    </Grid>
                </Grid> */}

            </Grid>
        );
    }
}

export default Currentaffair;
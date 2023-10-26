import React, { Component } from 'react'
import { Grid, Typography, Button } from "@mui/material";
import "../../../../pages/static/Coupon/coupon.css";
import couponicn from '../../../../images/couponicn.png';
export default class coupon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packagedata: [
                {
                    year: "1 Year Package",
                    examys: "EXAMYS50",
                    saving: "Save ₹100"
                },
                {
                    year: "1 Year Package",
                    examys: "EXAMYS50",
                    saving: "Save ₹100"
                },
                {
                    year: "1 Year Package",
                    examys: "EXAMYS50",
                    saving: "Save ₹100"
                },
                {
                    year: "1 Year Package",
                    examys: "EXAMYS50",
                    saving: "Save ₹100"
                },
            ],
            packagedata1: [
                {
                    year1: "1 Year Package",
                    examys1: "EXAMYS50",
                    saving1: "Save ₹100"
                },
                {
                    year1: "1 Year Package",
                    examys1: "EXAMYS50",
                    saving1: "Save ₹100"
                },
                {
                    year1: "1 Year Package",
                    examys1: "EXAMYS50",
                    saving1: "Save ₹100"
                },

            ],
            examysdata: [
                {
                    year2: "1 Year Package",
                    examys2: "EXAMYSFIRST ",
                    examysf2: "20%",
                    saving2: "Save ₹20%"
                },
                
            ],
            examysdata1: [
                {
                    year3: "1 Year Package",
                    examys3: "EXAMYSFIRST ",
                    examysf3: "10%",
                    saving3: "Save ₹10%"
                },
                
            ]
        };
    }
    render() {
        return (
            <Grid container
                className='main-grid-container'
                display={"flex"}
                direction='column'
            >
                <Grid className='sub-container'>
                    <center>
                        <Grid >

                            <img className='coupon-outline'
                                src={couponicn}
                            />

                        </Grid>
                        <Typography className='coupon-head'>Coupon house</Typography>
                    </center>


                    <Grid container>
                        <Grid item xs={0.5}></Grid>
                        <Grid xs={11} item style={{ marginTop: "5%" }}>
                            <Typography className='head-new-user'>For New User on First Purchase </Typography>
                            <Typography className='head-lunch'>Lunching Week Offers on Course:</Typography>
                        </Grid>

                        <Grid container direction={'row'} gap={1}>
                            <Grid item xs={0.5}></Grid>
                            {this.state.packagedata.map((item) => {
                                return (
                                    <Grid item xs={12} sm={2.5} className='package-info'>
                                        <Typography style={{fontWeight:600,marginTop:"10px"}}>{item.year}</Typography>
                                        <Button variant='outlined' style={{marginTop:"10px"}} className='coupon-btn'>
                                            <Typography className='buttn1' > {item.examys}</Typography>
                                        </Button>
                                        <Typography className='saveprice'  style={{marginTop:"10px",marginBottom:"10px"}}>{item.saving}</Typography>
                                    </Grid>
                                );
                            })}

                        </Grid>

                        <Grid container>
                            <Grid item xs={0.5}></Grid>
                            <Typography className='head-lunch'>Lunching Week Offers on Test Series:</Typography>
                        </Grid>
                        <Grid container direction={'row'} gap={1}>
                            <Grid item xs={0.5}></Grid>
                            {this.state.packagedata1.map((item) => {
                                return (
                                    <Grid item xs={12} sm={2.5} className='package-info'>
                                        <Typography style={{fontWeight:600,marginTop:"10px"}}>{item.year1}</Typography>
                                        <Button variant='outlined'  style={{marginTop:"10px"}}  className='coupon-btn'>
                                            <Typography className='buttn1'> {item.examys1}</Typography>
                                        </Button>
                                        <Typography className='saveprice'  style={{marginTop:"10px",marginBottom:"10px"}} >{item.saving1}</Typography>
                                    </Grid>
                                );
                            })}

                        </Grid>
                    </Grid>

                    <Grid container>
                    <Grid item xs={0.5}></Grid>
                        <Grid item xs={11}>
                           <Typography className='exist-user-head'>For existing user</Typography>
                           <Typography className='exist-user-subhead'>Examys First</Typography>
                           <Typography className='exist-user-desc'>Be an examysFirst member @ ₹49 and get 20% off on course & 10% on Test pass for 3 years.</Typography>
                           <Typography className='link-membr'>Get examysFirst Membership.</Typography>
                           <Typography className='note-head'>Note:</Typography>
                           <Typography className='exist-user-desc'>To be eligible for examys first, at first, one has  buy a course or test  pass. Then pay ₹ 49 more for membership.</Typography>
                        </Grid>
                     </Grid>

                     <Grid container>
                            <Grid item xs={0.5}></Grid>
                            <Typography className='examys-head'>ExamysFirst offer on Course: </Typography>
                        </Grid>

                     <Grid container direction={'row'} gap={1}>
                            <Grid item xs={0.5}></Grid>
                            {this.state.examysdata.map((item) => {
                                return (
                                    <Grid item xs={12} sm={2.5} className='examsys-info'>
                                        <Typography style={{fontWeight:600,marginTop:"10px"}}>{item.year2}</Typography>
                                        <center>
                                        <Button variant='outlined' style={{marginTop:"10px"}} className='examys-btn'>
                                            <Typography className='buttn2'> {item.examys2}</Typography>
                                            <Typography className='buttn2'> {item.examysf2}</Typography>
                                        </Button>
                                        </center>
                                        <Typography className='saveprice' style={{marginTop:"10px",marginBottom:"10px"}}>{item.saving2}</Typography>
                                    </Grid>
                                );
                            })}

                        </Grid>

                        <Grid container>
                            <Grid item xs={0.5}></Grid>
                            <Typography className='examys-head'>ExamysFirst offer on TestSeries:  </Typography>
                        </Grid>

                        <Grid container direction={'row'} gap={1}>
                            <Grid item xs={0.5}></Grid>
                            {this.state.examysdata1.map((item) => {
                                return (
                                    <Grid item xs={12} sm={2.5} className='examsys-info'>
                                        <Typography style={{fontWeight:600,marginTop:"10px"}}>{item.year3}</Typography>
                                        <center>
                                        <Button variant='outlined' style={{marginTop:"10px"}} className='examys-btn'>
                                            <Typography className='buttn2' > {item.examys3}</Typography>
                                            <Typography className='buttn2' > {item.examysf3}</Typography>
                                        </Button>
                                        </center>
                                        <Typography className='saveprice'  style={{marginTop:"10px",marginBottom:"10px"}}>{item.saving3}</Typography>
                                    </Grid>
                                );
                            })}

                        </Grid>



                </Grid>
            </Grid>
        )
    }
}

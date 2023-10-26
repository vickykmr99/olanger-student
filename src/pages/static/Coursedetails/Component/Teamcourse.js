import React, { Component } from 'react'
import { Button, Grid, Typography } from "@mui/material"
import logo from "../../../../images/user.jpg"
import GroupsIcon from '@mui/icons-material/Groups';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./teamCourse.css"
export default class TeamCourse extends Component {
    render() {
        return (

            <div className='container'>
                <Typography style={{ textAlign: 'center', margin: '70px 0px', fontSize: '20px', lineHeight: '26px', fontWeight: '600', WebkitFontVariantLigatures: "normal", color: '#6257CD', fontFamily: 'poppins', border: '1px solid #6257CD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Team & Course Design Story</Typography>
                <Grid>
                    <Typography style={{ color: '#201E31', fontSize: '18px', fontStyle: 'normal', fontWeight: '500', lineHeight: 'normal', fontFamily: 'poppins', border: '1px solid skyblue', padding: '5px 10px', display: 'inline-block' }}>My objectives for this Course:</Typography>
                    <Grid  container item spacing={2} md={12}>
                        <Grid item lg={1.5} >
                            <Grid style={{ display: 'flex', backgroundColor: '#8E8D9780', padding: '4px 8px', alignItems: 'center', gap: '8px', alignSelf: 'stretch' }}>
                                <img style={{ border: '1px solid #8E8D9780', height: '26px', width: '26px', color: '#201E31', borderRadius: '24px', }} src={logo} alt="" />
                                <Typography style={{ color: '#141226', fontFamily: 'poppins', fontSize: '16px', lineHeight: '24px', fontWeight: '500', textAlign: 'right', fontStyle: 'normal' }}>SSC</Typography>
                            </Grid>
                            <Typography style={{ color: '#6257CD', backgroundColor: '#8E8D9780', padding: '8px 12px', fontStyle: 'normal', lineHeight: '24px', fontFamily: 'poppins', fontSize: '14px', fontWeight: '700', whiteSpace: 'nowrap' }}>Product Manager</Typography>
                        </Grid>

                        <Grid style={{ padding: '20px' }} item lg={3.5}>
                            <Typography style={{ fontFamily: 'poppins', fontWeight: '700', fontSize: '14px', lineHeight: 'normal', fontStyle: 'normal', color: '#201E31' }}>Efficiency in preparation:</Typography>
                            <Typography style={{ fontFamily: 'poppins', lineHeight: 'normal', fontStyle: 'normal', fontWeight: '400' }}>To design the course for maximum output of candidates who are preparing. </Typography>
                        </Grid>

                        <Grid style={{ padding: '20px' }} item lg={3.5}>
                            <Typography style={{ fontWeight: '700' }}>Result driven:</Typography>
                            <Typography>To present Course with test series, Previous year paper with trend analysys are objectives to score high.</Typography>
                        </Grid>

                        <Grid style={{ padding: '20px' }} item lg={3.5}>
                            <Typography style={{ fontWeight: '700' }}>Challenges I have faced:</Typography>
                            <Typography>
                                Introducing "In-depth course".
                                How to present  "My Course journey".
                                Making Examys chat gpt.
                                Presenting Mock tests & previous year test.
                            </Typography><br />
                            <Typography>
                                The first challenge I faced is " How can i present each subject of course in a very systematic and an efficient way such that aspirants can prepare smartly and crack this exam".
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={12} container item spacing={4} >
                    <Grid item lg={1}></Grid>
                    <Grid className='mid' item lg={5}>
                        <Typography style={{ backgroundColor: '#141226', color: '#FFFFFF', textAlign: 'center', padding: '8px 16px', borderRadius: '4px' }}>Sample Design of  SSC CGL Course </Typography>
                        <Grid style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '25px', justifyContent: 'center' }}>
                            <Typography style={{ borderRadius: '2.81px', backgroundColor: '#3E30C2', padding: '2.81px 11.238px', color: '#FFF' }}>Tier I</Typography>
                            <Typography style={{ borderRadius: '2.81px', backgroundColor: '#8E8D9733', padding: '2.81px 11.238px' }}>Tier II</Typography>
                        </Grid>
                        <Grid style={{ display: 'flex', gap: '10px', marginTop: '45px' }}>
                            <Typography style={{ backgroundColor: '#8E8D9733', borderRadius: '2.8px', padding: '7px 14px', whiteSpace: 'nowrap' }}>Quants</Typography>
                            <Typography style={{ backgroundColor: '#8E8D9733', borderRadius: '2.8px', padding: '7px 14px', whiteSpace: 'nowrap' }}>Reasoning</Typography>
                            <Typography style={{ backgroundColor: '#8E8D9733', borderRadius: '2.8px', padding: '7px 14px', whiteSpace: 'nowrap' }}>English</Typography>
                            <Typography style={{ backgroundColor: '#8E8D9733', borderRadius: '2.8px', padding: '7px 14px', whiteSpace: 'nowrap' }}>Gk</Typography>
                            <Typography style={{ backgroundColor: '#8E8D9733', borderRadius: '2.8px', padding: '7px 14px', whiteSpace: 'nowrap' }}>Currents Affairs</Typography>
                        </Grid>
                        <Grid style={{marginTop: '45px', padding:'12px 10px'}} className='childmain'>
                            <Typography style={{ backgroundColor: '#3E30C2', whiteSpace: 'nowrap', marginBottom: '5px', borderRadius: ' 2.81px', display: 'flex', alignItems: 'flex-start', color: '#FFFFFF', gap: '11.238px', fontSize: '16.857px', fontWeight: '500', lineHeight: "25.286px", padding: '2.81px 5.619px' }}>Foundation + In-depth Course</Typography>
                            <Typography className='child'>Prev. Year Paper Discussion</Typography>
                            <Typography className='child'>Test Series</Typography>
                            <Typography className='child'>Trend Analysis</Typography>
                        </Grid>
                        <Typography style={{ margin: '20px',marginTop:'75px',marginBottom:'60px', fontWeight: '500', lineHeight: '25.286px', fontSize: ' 16.857px', border: '1px solid #8E8D9780', padding: '5px 10px', borderRadius: 'border-radius: 2.81px' }} className='child2'>Some Chapters of Foundation + In-depth Course</Typography>

                        <Grid style={{ display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid #4A4958', borderRadius: '5.619px', padding: '11.238px 22.476px' }} className='mid2'>
                            <Grid style={{ display: 'flex', gap: '2px', flexDirection: 'column' }}>
                                <Typography style={{ color: '#4A4958', whiteSpace: 'nowrap', fontSize: '19.667', lineHeight: '29.5px', fontWeight: '400' }}><strong>Chapter 1:LCM & GCF</strong><br />Foundation_1:LCM & GCF</Typography>
                                <Grid style={{ display: 'inline-flex', gap: '10px' }}>
                                    <Typography style={{ display: 'flex', gap: '5px', border: '2px solid #7D43A9', borderRadius: '5.619px' }}>
                                        <Typography style={{ color: '#6BD0F5', fontSize: '16.857px', fontWeight: '400', padding: '5.619px 22.476px' }}>Video 1</Typography>
                                        <Typography style={{ color: '#6BD0F5', fontSize: '16.857px', fontWeight: '400', padding: '5.619px 22.476px' }}>Pdf 1</Typography>
                                    </Typography>
                                    <Typography style={{ border: '2px solid #0CB358', color: '#6BD0F5', fontSize: '16.857px', fontWeight: '400', padding: '5.619px 22.476px', borderRadius:'5px', }}>Quiz 1</Typography>
                                </Grid>
                            </Grid>

                            <Grid>
                                <Typography style={{ fontSize: '16.857px', fontWeight: '400' }}>In-depth course_1:LCM & GCF & application</Typography>
                                <Grid style={{ display: 'flex', gap: '5px' }}>
                                    <Typography style={{ display: 'flex', border: '2px solid #7D43A9', borderRadius: '5.619px', padding: '5.619px 22.476px', justifyContent: 'center', alignItems: 'center', color:'#6BD0F5' }}>Pdf 1</Typography>
                                    <Typography style={{ display: 'flex', border: '2px solid #0CB358', borderRadius: '5.619px', padding: '5.619px 22.476px', justifyContent: 'center', alignItems: 'center', color:'#6BD0F5' }}>Test 1</Typography>
                                </Grid>
                            </Grid>

                            <Grid>
                                <Typography style={{ fontSize: '16.857px', fontWeight: '400' }}>In-depth course_1:LCM & GCF & application</Typography>
                                <Grid style={{ display: 'flex', gap: '5px' }}>
                                    <Typography style={{ display: 'flex', border: '2px solid #7D43A9', borderRadius: '5.619px', padding: '5.619px 22.476px', justifyContent: 'center', alignItems: 'center', color:'#6BD0F5' }}>Pdf 2</Typography>
                                    <Typography style={{ display: 'flex', border: '2px solid #0CB358', borderRadius: '5.619px', padding: '5.619px 22.476px', justifyContent: 'center', alignItems: 'center', color:'#6BD0F5' }}>Test 2</Typography>
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>


                    <Grid item lg={5}>
                        <Typography style={{ backgroundColor: '#141226', color: '#FFFFFF', textAlign: 'center', padding: '8px 16px', borderRadius: '4px' }}>Sample Design SSC CGL Test Series</Typography>
                        <Grid style={{ display: 'flex', alignItems: 'center', gap: '15px',marginTop:'25px', justifyContent: 'center' }}>
                            <Typography style={{ borderRadius: '2.81px', backgroundColor: '#3E30C2', padding: '2.81px 11.238px', color: '#FFF' }}>Tier I</Typography>
                            <Typography style={{ borderRadius: '2.81px', backgroundColor: '#8E8D9733', padding: '2.81px 11.238px' }}>Tier II</Typography>
                        </Grid>

                        <Grid style={{ borderRadius: '13.438px', display: 'flex', flexDirection: 'column', gap: '12px',marginTop:'45px', border: '1px solid #3E3D4D', padding: '13.438px 13.438px 26.875px 13.438px' }}>
                            <Grid style={{ display: 'flex', gap: '20px' }}>
                                <Typography style={{ backgroundColor: '#3E30C2', padding: '3.359px 6.719px', lineHeight: '30px', fontSize: '20px', fontWeight: '500', display: 'flex', gap: '13px', borderRadius: ' 3.359px' }}>Mock Test</Typography>
                                <Typography style={{ padding: '3.359px 6.719px', lineHeight: '30px', fontSize: '20px', fontWeight: '500', display: 'flex', gap: '13px', borderRadius: ' 3.359px', backgroundColor: '#8E8D9733' }}>Prev Year Test</Typography>
                                <Typography style={{ padding: '3.359px 6.719px', display: 'flex', gap: '13px', borderRadius: ' 3.359px', backgroundColor: '#8E8D9733' }}>Trend Test</Typography>
                            </Grid>
                            <Grid style={{ display: 'flex', gap: '10px' }}>
                                <Typography style={{ padding: '3.359px 6.719px', whiteSpace: 'nowrap', color: '#6257CD', lineHeight: '30px', fontSize: '20px', fontWeight: '500', display: 'flex', gap: '13px', borderRadius: ' 3.359px' }}>Chapter Test</Typography>
                                <Typography style={{ padding: '3.359px 6.719px', whiteSpace: 'nowrap', lineHeight: '30px', fontSize: '20px', fontWeight: '500', display: 'flex', gap: '13px', borderRadius: ' 3.359px' }}>Sectional Test</Typography>
                                <Typography style={{ padding: '3.359px 6.719px', whiteSpace: 'nowrap', lineHeight: '30px', fontSize: '20px', fontWeight: '500', display: 'flex', gap: '13px', borderRadius: ' 3.359px' }}>Full Length Test</Typography>
                            </Grid>
                            <Grid style={{ display: 'flex', gap: '10px' }}>
                                <Typography style={{ backgroundColor: '#3E30C2', lineHeight: '30px', fontSize: '20px', fontWeight: '500', padding: '3.359px 6.719px', display: 'flex', gap: '13px', borderRadius: ' 3.359px' }}>Quants</Typography>
                                <Typography style={{ padding: '3.359px 6.719px', lineHeight: '30px', fontSize: '20px', fontWeight: '500', display: 'flex', gap: '13px', borderRadius: ' 3.359px', backgroundColor: '#8E8D9733' }}>Reasoning</Typography>
                                <Typography style={{ padding: '3.359px 6.719px', lineHeight: '30px', fontSize: '20px', fontWeight: '500', display: 'flex', gap: '13px', borderRadius: ' 3.359px', backgroundColor: '#8E8D9733' }}>English</Typography>
                                <Typography style={{ padding: '3.359px 6.719px', lineHeight: '30px', fontSize: '20px', fontWeight: '500', display: 'flex', gap: '13px', borderRadius: ' 3.359px', backgroundColor: '#8E8D9733' }}>GK</Typography>
                            </Grid>
                        </Grid>



                        <Grid style={{ display: 'flex',marginTop:'25px',gap:'6px',marginLeft:'12px', padding: '11.512px', boxShadow: ' 2.87805px 2.87805px 11.51218px 0px #BABAE8, -2.87805px -2.87805px 11.51218px 0px rgba(186, 186, 232, 0.50)', width: '472px', justifyContent: 'center',  flexDirection: 'column', flexShrink: '0' }}>
                            <Typography style={{color:'#16161B',fontSize:'20.146px',fontWeight:'500', lineHeight:'normal', whiteSpace:'nowrap'}}>SSC CHSL Previous Paper Full Test (Held on...</Typography>
                            <Grid style={{ display: 'flex', gap: '10px' }}>

                                <Typography style={{color:'#72717D', lineHeight:', 40.293px',fontSize:'18.707px' }}> <span><HelpOutlineIcon style={{height:'23.024px', width:'23.024px', color:'#72717D'}}/></span> 100 Questions</Typography>

                                <Typography style={{color:'#72717D', lineHeight:', 40.293px',fontSize:'18.707px' }}> <span><NewspaperIcon style={{height:'23.024px', width:'23.024px', color:'#72717D'}}/></span> 100 Marks</Typography>

                                <Typography style={{color:'#72717D', lineHeight:', 40.293px',fontSize:'18.707px' }}> <span><AccessTimeIcon style={{height:'23.024px', width:'23.024px', color:'#72717D'}}/></span> 90 Mins</Typography>
                            </Grid>
                            <Grid style={{ display: 'flex', gap: '10px', justifyContent:'space-between' }}>
                                <Grid style={{ display: 'flex', gap: '10px' }}>
                                    <Typography style={{color:'#F96255'}}>English</Typography>
                                    <Typography style={{color:'#F96255'}}>Hindi</Typography>
                                </Grid>
                                <Typography style={{borderRadius:' 5.582px', padding:'5.582px 11.165px', backgroundColor:'#F96255',display:'flex', alignItems:'center', justifyContent:'center', gap:'5px', fontSize:'19.539px', fontWeight:'500', }}><Button style={{color:'#FFFFFF'}}>Start Now</Button></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={1}></Grid>

                </Grid>

                <Grid id='main' style={{ marginTop: '40px', }}>
                    <Typography style={{ marginBottom: '25px', textAlign: 'center', fontWeight: '700', backgroundColor: '#6257CD', lineHeight: '24px', fontSize: '14px', fontFamily: 'poppins', padding: '8px 16px', color: '#FFFFFF' }}>Team Members</Typography>
                    <Grid container item spacing={2} xs={12} sx={{ display: 'flex' }}>
                        <Grid style={{ boxShadow: '4px 4px 4px 0px grey', padding: '11px 10px 11px 25px' }} lg={3} item>
                            <Grid style={{ backgroundColor: '#8E8D9780', borderRadius: '5px' }}>
                                <Grid style={{ display: 'flex', gap: '10px' }}>
                                    <GroupsIcon />
                                    <Typography>Team for Foundation, In-depth Course & prev. year paper</Typography>
                                </Grid>
                                <Typography style={{ color: '#6257CD', padding: '8px 16px' }}>Subject Matter Experts & Faculties </Typography>
                            </Grid>
                            <Typography style={{ color: '#141226', fontSize:'14px', fontWeight:'700', lineHeight:'24px' }}>Work & challenges:</Typography>
                            <Typography>Collecting, sorting & enriching questions from different sources.</Typography>
                            <Typography>5 years prev. year questions analysis & predicting questions & making  vidoes are chllenges for us.</Typography>
                        </Grid>
                        <Grid style={{ boxShadow: '4px 4px 4px 0px grey', borderRadius: '5px', width: '300px', padding: '11px 10px 11px 25px' }} lg={3} item>
                            <Grid style={{ backgroundColor: '#8E8D9780', borderRadius: '5px', padding: '8px' }}>
                                <Grid style={{ display: 'flex', gap: '10px' }}>
                                    <GroupsIcon />
                                    <Typography>Team for Foundation, In-depth Course & prev. year paper</Typography>
                                </Grid>
                                <Typography style={{ color: '#6257CD' }}>Subject Matter Experts & Faculties </Typography>
                            </Grid>
                            <Typography style={{ color: '#141226', fontSize:'14px', fontWeight:'700', lineHeight:'24px' }}>Work & challenges:</Typography>
                            <Typography>Making Prev. year test series and  mock test series. </Typography>
                        </Grid>
                        <Grid style={{ boxShadow: '4px 4px 4px 0px grey', borderRadius: '5px', width: '300px', padding: '11px 10px 11px 25px' }} lg={3} item>
                            <Grid style={{ backgroundColor: '#8E8D9780', borderRadius: '5px', padding: '8px' }}>
                                <Grid style={{ display: 'flex', gap: '10px' }}>
                                    <GroupsIcon />
                                    <Typography>Team for Foundation, In-depth Course & prev. year paper</Typography>
                                </Grid>
                                <Typography style={{ color: '#6257CD' }}>Subject Matter Experts & Faculties </Typography>
                            </Grid>
                            <Typography style={{ color: '#141226', fontSize:'14px', fontWeight:'700', lineHeight:'24px' }}>Work & challenges:</Typography>
                            <Typography>Making trend questions & answers.</Typography>
                        </Grid>
                        <Grid style={{ boxShadow: '4px 4px 4px 0px grey', borderRadius: '5px', width: '300px', padding: '11px 10px 11px 25px' }} lg={3} item>
                            <Grid style={{ backgroundColor: '#8E8D9780', borderRadius: '5px', padding: '8px' }}>
                                <Grid style={{ display: 'flex', gap: '10px' }}>
                                    <GroupsIcon />
                                    <Typography>Team for Foundation, In-depth Course & prev. year paper</Typography>
                                </Grid>
                                <Typography style={{ color: '#6257CD' }}>Subject Matter Experts & Faculties </Typography>
                            </Grid>
                            <Typography style={{ color: '#141226', fontSize:'14px', fontWeight:'700', lineHeight:'24px' }}>Work & challenges:</Typography>
                            <Typography>Doing analysis of quizzes & tests</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

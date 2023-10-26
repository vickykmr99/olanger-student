import { Grid, Typography, Button } from '@mui/material'
import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';

import "./about.css"
import About from './about.svg'

export default class aboutus extends Component {
    render() {
        return (
            <div style={{  marginTop: "8%" }}>
                
                <Grid className='background' >



                    <Typography style={{ color: "#000", textAlign: "center", fontWeight: "bolder", fontSize: 22, }}>
                        Achieve your goals with our structured <span style={{ color: "#6257CD" }}>Courses</span> and advanced <span style={{ color: "#6257CD" }}>Test series</span>
                    </Typography>

                    <Typography style={{ textAlign: "center", marginLeft: "12%", marginRight: "12%", fontSize: 20, fontWeight: "lighter" }}>
                        Our mission is to empower students to achieve their full potential by providing them with the highest-quality courses and test series. We are dedicated to delivering an exceptional learning experience that helps students succeed in their exams and beyond
                    </Typography>
                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10px", gap: 25, }}>
                        <Button style={{ backgroundColor: "#3E30C2", color: "#fff", padding: '8px 32px', textTransform: "capitalize" }}>
                            Explore Courses
                        </Button>
                        <Button style={{ backgroundColor: "#3E30C2", color: "#fff", padding: '8px 32px', textTransform: "capitalize" }}>
                            Take a Test
                        </Button>
                    </Grid>

                </Grid>
                <Grid className='backgroundsecond' >



                    <img src={About} />


                    <Typography style={{ textAlign: "justify", marginLeft: "12%", marginRight: "12%", fontSize: 18, fontWeight: "normal" }}>
                        <span style={{ color: "#000", fontWeight: "bolder" }}>About Us</span><br></br>
                        Welcome to <span style={{ color: "#000", fontWeight: "bolder" }}>Olanger</span>, where we provide the most advanced exam preparation content in India. Our goal is to help you crack any exam with ease and achieve your academic or professional aspirations. We take a holistic approach to exam preparation that covers all aspects of the exam, from content knowledge to time management and test-taking strategies.                </Typography>


                </Grid>
                <Grid className='backgroundthird'>
                    <Typography style={{ color: "#000", textAlign: "center", fontWeight: "bolder", fontSize: 22, margin: 15 }}>
                        Why you choose our Courses
                    </Typography>
                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 10, margin: 15 }}>
                        <Grid className='aboutcoursecards'>
                            <Typography style={{ textAlign: "center", marginLeft: "15%", marginRight: "15%", fontSize: 18, fontWeight: "lighter", marginBottom: "5%" }}>
                                <span style={{ color: "#000", fontWeight: "bolder" }}>Structure course with weightage</span><br></br>
                                In this course, prioritize In-depth course and Test series as they have 50% weightage, while Foundation and Previous year questions & Trend questions have equal 20% weightage.
                            </Typography>

                        </Grid>
                        <Grid className='aboutcoursecards'>
                            <Typography style={{ textAlign: "center", marginLeft: "18%", marginRight: "18%", fontSize: 18, fontWeight: 'lighter', marginBottom: "5%" }}>
                                <span style={{ color: "#000", fontWeight: "bolder" }}>Systematic Learning Path</span><br></br>
                                Video, pdf, quiz & test series are designed in a systematic learning path  to ace your exam efficiently.
                            </Typography>

                        </Grid>
                        <Grid className='aboutcoursecards'>
                            <Typography style={{ textAlign: "center", marginLeft: "18%", marginRight: "18%", fontSize: 18, fontWeight: "lighter", marginBottom: "5%" }}>
                                <span style={{ color: "#000", fontWeight: "bolder" }}>Advanced Analytics</span><br></br>
                                Learning path analytics provide course progress report, Competitive Index AI analyzes chapter-wise strengths/weaknesses of tests, and Trend analytics shows patterns of last 3 years' questions.                                </Typography>

                        </Grid>
                        <Grid className='aboutcoursecards'>
                            <Typography style={{ textAlign: "center", marginLeft: "18%", marginRight: "18%", fontSize: 18, fontWeight: "lighter", marginBottom: "5%" }}>
                                <span style={{ color: "#000", fontWeight: "bolder" }}>Comprehensive Test series</span><br></br>
                                Learning path analytics provides a course progress report. Competitive Index AI analyzes chapter-wise strengths and weaknesses, recommending whether to revise the current chapter or move forward. Trend analytics shows patterns of the last 3 years' questions.</Typography>
                        </Grid>

                    </Grid>




                </Grid>
                <Grid className='ourteam'>
                    <Typography style={{ color: "#000", textAlign: "center", fontWeight: "bolder", fontSize: 22, margin: 15 }}>
                        Our Team
                    </Typography>
                    <Typography style={{ textAlign: 'justify', marginLeft: "8%", marginRight: "8%", fontSize: 20, fontWeight: "lighter" }}>
                        Our team of experts in teaching is made up of highly experienced and dedicated professionals who are passionate about education. With years of experience in the field, they have developed a deep understanding of the needs of students and how best to help them reach their full potential.
                    </Typography>

                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 10, margin: 15 }}>

                        <Grid className='ourteamcard'>
                            <center style={{ marginTop: 32 }}>

                                <Avatar style={{ height: 100, width: 100 }} src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20249.svg?alt=media&token=6333e702-5939-47a7-b2dc-c3a86a86f2ce' />
                                <Typography style={{ marginTop: 16, fontWeight: "bolder" }}>Ismail Avci</Typography>
                                <Typography style={{ fontWeight: "lighter" }}>SSC Exam Expert</Typography>
                            </center>

                        </Grid>
                        <Grid className='ourteamcard'>
                            <center style={{ marginTop: 32 }}>

                                <Avatar style={{ height: 100, width: 100 }} src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20249.svg?alt=media&token=6333e702-5939-47a7-b2dc-c3a86a86f2ce' />
                                <Typography style={{ marginTop: 16, fontWeight: "bolder" }}>Ismail Avci</Typography>
                                <Typography style={{ fontWeight: "lighter" }}>SSC Exam Expert</Typography>
                            </center>

                        </Grid>
                        <Grid className='ourteamcard'>
                            <center style={{ marginTop: 32 }}>

                                <Avatar style={{ height: 100, width: 100 }} src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20249.svg?alt=media&token=6333e702-5939-47a7-b2dc-c3a86a86f2ce' />
                                <Typography style={{ marginTop: 16, fontWeight: "bolder" }}>Ismail Avci</Typography>
                                <Typography style={{ fontWeight: "lighter" }}>SSC Exam Expert</Typography>
                            </center>

                        </Grid>
                        <Grid className='ourteamcard'>
                            <center style={{ marginTop: 32 }}>

                                <Avatar style={{ height: 100, width: 100 }} src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20249.svg?alt=media&token=6333e702-5939-47a7-b2dc-c3a86a86f2ce' />
                                <Typography style={{ marginTop: 16, fontWeight: "bolder" }}>Ismail Avci</Typography>
                                <Typography style={{ fontWeight: "lighter" }}>SSC Exam Expert</Typography>
                            </center>

                        </Grid>
                        <Grid className='ourteamcard'>
                            <center style={{ marginTop: 32 }}>

                                <Avatar style={{ height: 100, width: 100 }} src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20249.svg?alt=media&token=6333e702-5939-47a7-b2dc-c3a86a86f2ce' />
                                <Typography style={{ marginTop: 16, fontWeight: "bolder" }}>Ismail Avci</Typography>
                                <Typography style={{ fontWeight: "lighter" }}>SSC Exam Expert</Typography>
                            </center>

                        </Grid>
                    </Grid>



                </Grid>
            </div>
        )
    }
}

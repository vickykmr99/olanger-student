/* eslint-disable no-dupe-class-members */
import React, { Component } from 'react';
import { Grid, Typography, Button, Card } from '@mui/material'
import Box from '@mui/material/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GroupsIcon from '@mui/icons-material/Groups';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../../../pages/ExamysaiGpt/Components/ExamysaiGptdetailspage.js";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CurrencyRupee } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import "../../ExamysaiGpt/Components/examysaiGptdetails.css"


export default class ExamysaiGptdetailspage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Click',
            quantsdata: [
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },



            ],


            Gkdata: [
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },



            ],

            Reasoningdata: [
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },



            ],

            Englishdata: [
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },



            ],

            currentdata: [
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },

                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",
                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",


                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },
                {
                    title: "Mensuration trend of chsl exams of last 5 years",

                },



            ],

            course: [
                {
                    title: "SSC chsl+SBI PO+RRB Ntpc",
                    titlede: "(combined p...",
                    description: "All SSC exams in one package",
                    validity: "Duration : 12 months",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    butdes: "Supported by examys ai & Course journey",
                    newprice: "8000",
                    buttonText: "View Details",



                },
                {
                    title: "SSC chsl+SBI PO+RRB Ntpc",
                    titlede: "(combined p...",
                    description: "All Railway exams in one package",
                    validity: "Duration : 12 months",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    butdes: "Supported by examys ai & Course journey",
                    newprice: "8000",
                    buttonText: "View Details",


                },
                {
                    title: "SSC chsl+SBI PO+RRB Ntpc",
                    titlede: "(combined p...",
                    description: "All Banking & Insurance package",
                    validity: "Duration : 12 months",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    butdes: "Supported by examys ai & Course journey",
                    newprice: "8000",
                    buttonText: "View Details",


                },
                {
                    title: "SSC chsl+SBI PO+RRB Ntpc",
                    titlede: "(combined p...",
                    description: "All Banking & Insurance package",
                    validity: "Duration : 12 months",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    butdes: "Supported by examys ai & Course journey",
                    newprice: "8000",
                    buttonText: "View Details",


                },
                {
                    title: "SSC chsl+SBI PO+RRB Ntpc",
                    titlede: "(combination p...",
                    description: "All Banking & Insurance package",
                    validity: "Duration : 12 months",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    butdes: "Supported by examys ai & Course journey",
                    newprice: "8000",
                    buttonText: "View Details",


                },
                {
                    title: "SSC chsl+SBI PO+RRB Ntpc",
                    titlede: "(combined p...",
                    description: "All Banking & Insurance package",
                    validity: "Duration : 12 months",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    butdes: "Supported by examys ai & Course journey",
                    newprice: "8000",
                    buttonText: "View Details",


                },



            ],


            testseries: [
                {
                    title: "SSC GD CONSTABLE 2022 ",
                    mid: "(New Exam Pattern)",
                    description: " Total 500 Sets",
                    languagesused: "English,Hindi",
                    buttonText: "View Details",


                },
                {
                    title: "SSC GD CONSTABLE 2022 ",
                    mid: "(New Exam Pattern)",
                    description: " Total 500 Sets",
                    languagesused: "English,Hindi",
                    buttonText: "View Details",

                },
                {
                    title: "SSC GD CONSTABLE 2022 ",
                    mid: "(New Exam Pattern)",
                    description: " Total 500 Sets",
                    languagesused: "English,Hindi",
                    buttonText: "View Details",

                },
                {
                    title: "SSC GD CONSTABLE 2022 ",
                    mid: "(New Exam Pattern)",
                    description: " Total 500 Sets",
                    languagesused: "English,Hindi",
                    buttonText: "View Details",

                },


            ],





        };
    }

    handleClick = () => {
        this.setState({ buttonText: 'New text' });
      }



    handleClick = () => {
        // Toggle tooltip visibility and change the text when clicked.
        this.setState((prevState) => ({
            isTooltipVisible: !prevState.isTooltipVisible,
            a3e5srtyuui: 'New Tooltip Text', // Replace with your desired text
        }));
    };

    componentDidMount() {
        console.log('testssssssssss', this.props.examgpt.test_series)
        console.log('series_id', this.props.examgpt.test_series_id)
    }
    render() {
        return (
            <Grid style={{ marginTop: "10%" }} className='examys-gpt-main'>
                <center>
                    <Typography style={{ fontSize: 22, fontWeight: 500, fontFamily: "Poppins", color: "#6C60E1", marginTop: "1%", textDecorationLine: "underline" }}>
                        Examys ai GPT for SSC CGL
                    </Typography>
                </center>
                {/* 
                <div>
                    <button onClick={this.handleClick}>Click me</button>

                    {isTooltipVisible && (
                        <div className="tooltip">
                            <span className="tooltip-text">{a3e5srtyuui}</span>
                        </div>
                    )}
                </div> */}
                <Grid sx={{margin:'24px 0px'}}>
                    <center >
                        <Card
                            sx={{
                                width: "450px",
                                height: "68px",
                                borderRadius: '8px',
                                boxShadow: " 0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
                                marginTop: "2%",
                                marginBottom: "2%",
                                backgroundColor: "var(--shades-ghost-white, #F8F8FF)",


                            }}>
                            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding:'16px', marginTop:'5px' }}>
                                <Box style={{ backgroundColor: "#EEECFE", padding: "3px", height: "10%", width: "7%", borderRadius: "50%" }}>
                                    < ArrowBackIosNewIcon style={{ backgroundColor: "#EEECFE", fontSize: "15px", borderRadius: "50% 8px 10px 50%", cursor: "pointer" }} />
                                </Box>
                                <Typography style={{ fontSize: 20, fontWeight: 600, fontFamily: "Poppins",   }}>
                                    Course
                                </Typography>
                                
                                <Box style={{ backgroundColor: "#EEECFE", padding: "3px", height: "10%", width: "7%", borderRadius: "50%" }}>
                                    <ArrowForwardIosIcon style={{ backgroundColor: "#EEECFE", fontSize: "15px", borderRadius: "50% 8px 10px 50%", cursor: "pointer" }} />
                                </Box>
                            </Grid>
                        </Card>
                    </center>



                    <Tabs>
                        <TabList style={{
                            // width: "790px",
                            width: "70%",
                            height: "49px",
                            paddingTop:"9px",
                            borderRadius: '8px',
                            marginLeft:"8%",
                            textAlign: "center",
                            border: "none",
                            boxShadow: " 0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
                            // marginTop: "2%",
                            backgroundColor: "var(--shades-ghost-white, #F8F8FF)",
                            //  marginLeft: "10%",



                        }}>
                            <Grid className="gpt-main-tab" style={{ display: "flex", justifyContent: "space-between", marginLeft: '2%', marginRight: "2%" }}>
                                <Tab className=" gpt-tab" style={{ fontSize: 16, fontWeight: 500, fontFamily: "Poppins", color:'#3E30C2' }}>Quants</Tab>
                                <Tab className=" gpt-tab" style={{ fontSize: 16, fontWeight: 500, fontFamily: "Poppins", color: "#141226", marginLeft: '8%', }}>Gk</Tab>
                                <Tab className=" gpt-tab" style={{ fontSize: 16, fontWeight: 500, fontFamily: "Poppins", color: "#141226", marginLeft: '8%', }}>Reasoning</Tab>
                                <Tab className=" gpt-tab" style={{ fontSize: 16, fontWeight: 500, fontFamily: "Poppins", color: "#141226", marginLeft: '8%', }}>English</Tab>
                                <Tab className=" gpt-tab" style={{ fontSize: 16, fontWeight: 500, fontFamily: "Poppins", color: "#141226", marginLeft: '8%', }}>Current Affairs</Tab>
                            </Grid>
                        </TabList>

                        <TabPanel style={{ marginLeft: "8%" }}>
                            <Typography style={{ fontSize: 16, fontWeight: 500, fontFamily: "Poppins",lineHeight:'24px', color: "#F671D9", marginTop: "2%" }}>
                                Trend Questions 1
                            </Typography>
                            {this.state.quantsdata.map((quantsdata, index) => (

                                <Typography style={{ fontSize: 14, fontWeight: 400,  fontFamily: "Poppins", color: "#6C60E1", lineHeight:'21px' }}>
                                    {quantsdata.title}
                                </Typography>


                            ))}
                        </TabPanel>

                        <TabPanel style={{ marginLeft: "12%" }}>
                            <Typography style={{ fontSize: 14, fontWeight: 400,  fontFamily: "Poppins", color: "#F671D9", marginTop: "2%", lineHeight:'21px' }}>
                                Trend Questions 1

                            </Typography>
                            {this.state.Gkdata.map((Gkdata, index) => (

                                <Typography style={{ fontSize: 14, fontWeight: 400,  fontFamily: "Poppins", color: "#6C60E1", lineHeight: '21px' }}>
                                    {Gkdata.title}
                                </Typography>


                            ))}
                        </TabPanel>

                        <TabPanel style={{ marginLeft: "12%" }}>
                            <Typography style={{ fontSize: 14, fontWeight: 400,  fontFamily: "Poppins", color: "#F671D9", marginTop: "2%", lineHeight:'21px' }}>
                                Trend Questions 1

                            </Typography>
                            {this.state.Reasoningdata.map((Reasoningdata, index) => (

                                <Typography style={{ fontSize: 14, fontWeight: 400,  fontFamily: "Poppins", color: "#6C60E1", lineHeight: '21px' }}>
                                    {Reasoningdata.title}
                                </Typography>


                            ))}
                        </TabPanel>
                        <TabPanel style={{ marginLeft: "12%" }}>
                            <Typography style={{ fontSize: 14, fontWeight: 400,  fontFamily: "Poppins", color: "#F671D9", marginTop: "2%", lineHeight:'21px' }}>
                                Trend Questions 1

                            </Typography>
                            {this.state.Englishdata.map((Englishdata, index) => (

                                <Typography style={{ fontSize: 14, fontWeight: 400,  fontFamily: "Poppins", color: "#6C60E1", lineHeight: '21px' }}>
                                    {Englishdata.title}
                                </Typography>


                            ))}
                        </TabPanel>

                        <TabPanel style={{ marginLeft: "12%" }}>
                            <Typography style={{ fontSize: 14, fontWeight: 400,  fontFamily: "Poppins", color: "#F671D9", marginTop: "2%", lineHeight:'21px' }}>
                                Trend Questions 1

                            </Typography>
                            {this.state.currentdata.map((currentdata, index) => (

                                <Typography style={{ fontSize: 14, fontWeight: 400,  fontFamily: "Poppins", color: "#6C60E1", lineHeight: '21px' }}>
                                    {currentdata.title}
                                </Typography>


                            ))}
                        </TabPanel>



                    </Tabs>









                </Grid>

                {/* course tab cards here */}

                <Grid>

                    <Typography style={{ fontSize: 30, fontWeight: 600, fontFamily: "Poppins", color: "#F671D9", marginTop: "2%", marginLeft: "10%" }}>
                        Courses

                    </Typography>
                    {/* {this.state.courses.map((course, index) => (

                    <Grid sx={{ 
                        
                        display:"flex",flexDirection:"column"}} >
                        <Card
                            key={index}
                            // variant="outlined"
                            sx={{
                                width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", marginLeft: "8%",

                                border: "1px solid rgba(142, 141, 151, 0.5)",
                                boxShadow: "-2px -2px 8px rgba(125, 125, 125, 0.5), 2px 2px 8px rgba(125, 125, 125, 0.5)",
                                borderRadius: "8px",



                            }}
                        >
                            <CardContent>

                                <Typography>

                                    <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}></span>

                                    {course.title} <span style={{ color: "#6C60E1", fontWeight: "500", fontSize: "12px" }}>{course.titlede}</span>

                                </Typography>

                                <Typography
                                    sx={{ fontSize: 14 }}
                                    style={{ display: "flex", fontWeight: "500" }}
                                    gutterBottom

                                >


                                    {course.validity} <span style={{ color: "#F96255", fontWeight: "600" }}>{course.target}</span>
                                </Typography>
                                <Card className="cards" variant="outlined" sx={{ borderRadius: "16px", border: "2px solid lightgray" }} style={{ width: "100%" }}>
                                    <CardContent style={{ width: "100%" }}>
                                        <Typography
                                            sx={{ fontSize: 14 }}
                                            gutterBottom
                                            textAlign="center"
                                        >
                                            {course.lessonbenefit}


                                        </Typography>

                                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>

                                            {course.benefit}

                                        </Typography>
                                    </CardContent>

                                </Card>
                                <center>
                                    <Typography style={{ fontSize: '13px' }}> {course.butdes}</Typography>

                                </center>


                            </CardContent>
                            <CardActions
                                style={{ justifyContent: "center", gap: "10px" }}
                            >
                                <Box style={{ display: "flex", justifyContent: "center" }}>
                                    <Typography
                                        style={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "line-through" }}
                                        textAlign="center"
                                        sx={{ fontWeight: "bold" }}
                                    ><CurrencyRupee style={{ fontSize: "14px" }} />
                                        {course.oldprice}
                                    </Typography>

                                    <Typography
                                        style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "green" }}
                                        textAlign="center"
                                        sx={{ fontWeight: "bold" }}
                                    ><CurrencyRupee style={{ fontSize: "14px" }} marginTop="10%" />
                                        {course.newprice}
                                    </Typography>
                                </Box>
                                <Link to="">
                                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>


                ))} */}
                    <Grid container xs={12} spacing={1} mt={2} display={"flex"} direction="row" className='examys-cards-container'>
                        {this.state.course.map((course, index) => {
                            return (
                                <Grid item lg={3} md={3} sm={4} xs={12}>
                                    <Box sx={{ maxWidth: 530, maxHeight: 350, margin: "1%" }} >
                                        <Card
                                            key={index}
                                            // variant="outlined"
                                            sx={{
                                                // width: "311px",
                                                // height: "281.77px",
                                                borderRadius: "20.9494px", marginTop: "20px", borderColor: "black", marginLeft: "8%",
                                                paddingRight: '10px',
                                                border: "1px solid rgba(142, 141, 151, 0.5)",
                                                boxShadow: "-2px -2px 8px rgba(125, 125, 125, 0.5), 2px 2px 8px rgba(125, 125, 125, 0.5)",
                                            }}


                                        >
                                            <CardContent>

                                                <Typography style={{ fontWeight: "600" }}>

                                                    <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}></span>

                                                    {course.title} <span style={{ color: "#6C60E1", fontWeight: "500", fontSize: "12px" }}>{course.titlede}</span>

                                                </Typography>

                                                <Typography
                                                    sx={{ fontSize: 14 }}
                                                    style={{ display: "flex", fontWeight: "500" }}
                                                    gutterBottom

                                                >


                                                    {course.validity} <span style={{ color: "#F96255", fontWeight: "600" }}>{course.target}</span>
                                                </Typography>
                                                <Card className="cards" variant="outlined" sx={{ borderRadius: "16px", border: "2px solid lightgray" }} style={{ width: "100%" }}>
                                                    <CardContent style={{ width: "100%" }}>
                                                        <Typography
                                                            sx={{ fontSize: 14 }}
                                                            gutterBottom
                                                            textAlign="center"
                                                        >
                                                            {course.lessonbenefit}


                                                        </Typography>

                                                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%",textAlign:"center" }}>

                                                            {course.benefit}

                                                        </Typography>
                                                    </CardContent>

                                                </Card>
                                                <center>
                                                    <Typography style={{ fontSize: '13px' }}> {course.butdes}</Typography>

                                                </center>


                                            </CardContent>
                                            <CardActions
                                                style={{ justifyContent: "space-between", gap: "10px", paddingRight: '10px', }}
                                            >
                                                <Box style={{ display: "flex", justifyContent: "center" }}>
                                                    <Typography
                                                        style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#72717D", textDecoration: "line-through" }}
                                                        textAlign="center"
                                                        sx={{ fontWeight: "bold" }}
                                                    ><CurrencyRupee style={{ color: "#72717D", fontSize: "12px" }} />
                                                        {course.oldprice}
                                                    </Typography>

                                                    <Typography
                                                        style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "green" }}
                                                        textAlign="center"
                                                        sx={{ fontWeight: "bold" }}
                                                    ><CurrencyRupee style={{ fontSize: "12px" }} marginTop="10%" />
                                                        {course.newprice}
                                                    </Typography>
                                                </Box>
                                                <Link to="/viewdetails">
                                                    <button variant="contained" style={{padding:"3px",}} className="view-btn-examys">{course.buttonText}</button>
                                                </Link>
                                            </CardActions>
                                        </Card>

                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>

                </Grid>

                {/* test series cards here */}

                <Grid>
                    <Typography style={{ fontSize: 30, fontWeight: 600, fontFamily: "Poppins", color: "#F671D9", marginTop: "2%", marginLeft: "10%" }}>
                        Test Series

                    </Typography>


                    <Grid container xs={12} spacing={1} mt={2} ml={1} display={"flex"} direction="row">
                        {this.state.testseries.map((testseries, index) => {
                            return (
                                <Grid item lg={3} md={3} sm={4} xs={12}>

                                    <Box sx={{ maxWidth: "325px" }}>
                                        <Card
                                            className="smallbox2"
                                            key={index}
                                            variant="outlined"
                                            sx={{
                                                borderRadius: "8px",
                                                marginTop: "2px",
                                                boxShadow:
                                                    "2px 2px 10px 0px #D8DFF8, -2px -2px 10px 0px #D8DFF8",
                                            }}
                                        >
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        justifyContent: "space-between",
                                                        display: "flex",
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{ fontSize: 14 }}
                                                        gutterBottom
                                                        textAlign="center"
                                                    >
                                                        <img
                                                            src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20147.png?alt=media&token=bcf4e4fb-20a0-430f-ac82-10c0fdc9bbe0"
                                                            alt="logo"
                                                        />
                                                    </Typography>
                                                    <Typography gutterBottom textAlign="center">
                                                        <Button
                                                            sx={{
                                                                borderRadius: "16px",
                                                                position: "relative",
                                                                width: "100%",
                                                                height: "48%",
                                                            }}
                                                            variant="outlined"
                                                            style={{
                                                                fontweight: "bolder",
                                                                color: "black",
                                                                borderColor: "#3E30C2",
                                                                fontSize: 10,
                                                                background: " #EEEEEE",
                                                                marginTop: "9%",
                                                            }}
                                                            startIcon={<GroupsIcon />}
                                                        >
                                                            126.2K Users
                                                        </Button>
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    sx={{ fontSize: 14 }}
                                                    gutterBottom
                                                    textAlign="left"
                                                    fontWeight="bold"
                                                >
                                                    {testseries.title}
                                                </Typography>
                                                <Typography
                                                    sx={{ fontSize: 14, color: "#6C60E1" }}
                                                    gutterBottom
                                                    textAlign="left"
                                                >
                                                    {testseries.mid}
                                                </Typography>
                                                <Typography
                                                    sx={{ fontSize: 14 }}
                                                    gutterBottom
                                                    textAlign="left"
                                                >
                                                    <span style={{ color: "black" }}>
                                                        {" "}
                                                        {testseries.description}
                                                    </span>
                                                    <span
                                                        style={{
                                                            color: "#009E0F",
                                                            fontWeight: "400",
                                                            fontSize: "14px",
                                                        }}
                                                    >
                                                        (15 free test)
                                                    </span>
                                                </Typography>
                                                <Typography
                                                    sx={{ fontSize: 14 }}
                                                    gutterBottom
                                                    textAlign="center"
                                                >
                                                    {testseries.duration}
                                                </Typography>
                                                <Typography
                                                    sx={{ fontSize: 14, color: "#F96255" }}
                                                    gutterBottom
                                                    textAlign="left"
                                                >
                                                    {testseries.languagesused}
                                                </Typography>

                                                <CardContent className="text-series-cardcontent-li">
                                                    <Typography
                                                        sx={{ fontSize: 14 }}
                                                        gutterBottom
                                                        textAlign="left"
                                                    >
                                                        <li>
                                                            {" "}
                                                            200 Mock Tests{" "}
                                                            <span className="test-series-span">
                                                                (50 Chapters tests + 50 section tests + 30 full
                                                                tests + more)
                                                            </span>
                                                        </li>
                                                    </Typography>
                                                    <Typography
                                                        sx={{ fontSize: 14 }}
                                                        gutterBottom
                                                        textAlign="left"
                                                    >
                                                        <li>100 Previous Year Tests</li>
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14 }}>
                                                        <li> 100 Trend Tests</li>
                                                    </Typography>

                                                    <Typography
                                                        sx={{ fontSize: 14 }}
                                                        gutterBottom
                                                        textAlign="left"
                                                    >
                                                        <li>50 Live Tests</li>
                                                    </Typography>
                                                </CardContent>
                                            </CardContent>

                                            <CardActions
                                                className='view-btn-si'
                                            >
                                                <Link to="/Testseriesviewdetails" style={{ textDecoration: "none" }}>
                                                    <Button
                                                        variant="contained"
                                                        style={{
                                                            padding: "8px 45px 8px 45px",
                                                            background: "#3E30C2 ",
                                                            whiteSpace: "nowrap",
                                                            // width:"100px"
                                                            textTransform: "capitalize"
                                                        }}
                                                    >
                                                        {testseries.buttonText}
                                                    </Button>
                                                </Link>
                                            </CardActions>

                                        </Card>
                                    </Box>

                                </Grid>
                            );
                        })}
                    </Grid>

                </Grid>

            </Grid>
        )
    }
}

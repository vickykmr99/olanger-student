import React, { Component } from 'react';
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CurrencyRupee } from "@mui/icons-material";
import Container from '@mui/material/Container';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import { ListItemButton, ListItem, List, } from '@mui/material';
import Slider from "react-slick";
import Paper from '@mui/material/Paper';
import "../../Examysinspire/Components/examy.css"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100px",
    width: "20vw"

}));

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}





export default class Examysinspiresecond extends Component {



    constructor(props) {
        super(props);
        this.state = {
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
                {
                    title: "SSC GD CONSTABLE 2022 ",
                    mid: "(New Exam Pattern)",
                    description: " Total 500 Sets",
                    languagesused: "English,Hindi",
                    buttonText: "View Details",

                },
            


            ],
            courses: [
                {
                    title: "SSC CGl Tier 1 & tier 2 ",
                    description: "All SSC exams in one package",
                    duration: "Duration : 1 year",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    newprice: "8000",
                    buttonText: "View Details",


                },
                {
                    title: "SSC CGl Tier 1 & tier 2 ",
                    description: "All SSC exams in one package",
                    duration: "Duration : 1 year",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    newprice: "8000",
                    buttonText: "View Details",


                },
                {
                    title: "SSC + Railway + Banking ",
                    description: "All Railway exams in one package",
                    duration: "Duration : 1 year",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    newprice: "8000",
                    buttonText: "View Details",


                },
                {
                    title: "SSC + Railway + Banking ",
                    description: "All Banking & Insurance package",
                    duration: "Duration : 1 year",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    newprice: "8000",
                    buttonText: "View Details",


                },
                {
                    title: "SSC + Railway + Banking ",
                    description: "All Banking & Insurance package",
                    duration: "Duration : 1 year",
                    target: "(Target 2023-24)",
                    lessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
                    benefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
                    oldprice: "12,000",
                    newprice: "8000",
                    buttonText: "View Details",


                },

            ],

            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            },

        }
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />

        };
        const settingss = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />

        };
        const msettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        const { yPos } = this.state;
        const style = {
            transform: `translateY(${yPos}px)`
        };




        return (



            <>
                <Grid>

                    <Grid className='examys-inspire-main-container'>


                        <Container className='first-part-container' >
                            <Container sx={{
                                fontFamily: 'Poppins',
                                display: 'flex',
                                flexDirection: "column",
                                margin: 0,
                                padding: "0px",
                                gap: "10px"
                            }} maxWidth="sm">

                                <Typography variant="h5" sx={{
                                    fontFamily: 'Poppins',
                                    padding: 0, fontWeight: 600,
                                }}>
                                    Upcoming exams notification
                                </Typography>

                                <List sx={{
                                    width: "600px"
                                }} >
                                    <ListItem sx={{ padding: "0px", justifyContent: 'space-between' }}>

                                        <Typography sx={{ color: "#4A4958" }} variant="body1" gutterBottom>Starting date</Typography>
                                        <Typography style={{
                                            fontFamily: 'Poppins', fontSize: "18px",
                                            fontWeight: 700,
                                        }} variant="body1" gutterBottom>01 / 08 / 2023</Typography>
                                    </ListItem>

                                    <ListItem sx={{ padding: "0px", justifyContent: 'space-between' }}>
                                        <Typography sx={{ color: "#4A4958" }} variant="body1" gutterBottom>Closure of registration of application</Typography>
                                        <Typography style={{
                                            fontFamily: 'Poppins', fontSize: "18px",
                                            fontWeight: 700,
                                        }} variant="body1" gutterBottom>01 / 08 / 2023</Typography>
                                    </ListItem>
                                    <ListItem sx={{ padding: "0px", justifyContent: 'space-between' }}>
                                        <Typography sx={{ color: "#4A4958" }} variant="body1" gutterBottom>Closure for editing application details</Typography>
                                        <Typography style={{
                                            fontFamily: 'Poppins', fontSize: "18px",
                                            fontWeight: 700,
                                        }} variant="body1" gutterBottom>01 / 08 / 2023</Typography>
                                    </ListItem>


                                    <ListItem sx={{ padding: "0px", justifyContent: 'space-between' }}>
                                        <Typography sx={{ color: "#4A4958" }} variant="body1" gutterBottom>Last date for printing your application</Typography>
                                        <Typography style={{
                                            fontFamily: 'Poppins', fontSize: "18px",
                                            fontWeight: 700,
                                        }} variant="body1" gutterBottom>01 / 08 / 2023</Typography>
                                    </ListItem>
                                    <ListItem sx={{ padding: "0px", justifyContent: 'space-between' }}>
                                        <Typography sx={{ color: "#4A4958" }} variant="body1" gutterBottom>Online Fee Payment</Typography>
                                        <Typography style={{
                                            fontFamily: 'Poppins', fontSize: "18px",
                                            fontWeight: 700,
                                        }} variant="body1" gutterBottom>01 / 08 / 2023</Typography>
                                    </ListItem>
                                </List>


                                <Box sx={{
                                    margin: 0,
                                    padding: 0,
                                    display: 'flex', justifyContent
                                        : "space-between",
                                    marginLeft: 0,
                                }} maxWidth="sm">

                                    <Box>
                                        <Typography variant="body1" gutterBottom>To know more visit</Typography>
                                        <Typography variant="a" gutterBottom>https://ibpsonline.ibps.in/</Typography>

                                    </Box>
                                    <Button sx={{
                                        "&:hover": { backgroundColor: "#3E30C2" },
                                        padding: "4px 20px",
                                        height: "37px",
                                        // justifyContent: "center",
                                        alignItems: "center", fontFamily: "poppins", 'font-size': "13px", background: "#3E30C2", color: 'white'
                                    }}>Apply now</Button>
                                </Box>
                                <Button sx={{
                                    "&:hover": { backgroundColor: "#3E30C2" },
                                    fontFamily: "poppins", 'font-size': "13px", width: " 270px", background: "#3E30C2", color: 'white'
                                }}> <VerticalAlignBottomIcon /> Download Notification</Button>
                                <Box >
                                    <Typography variant="body1" > View more details</Typography>
                                    <a href="/Examdetailnotification" style={{textDecoration:"none"}}>
                                    <Typography variant="a"  style={{cursor:"pointer"}}>https://Examdetialsor Listdetail page</Typography>
                                    </a>
                                </Box>
                            </Container>
                        </Container>

                        <Grid container xs={12} >
                            <Container className="box-card-first" sx={{
                                display: "inline-flex",
                                gap: "15px",
                                padding: "0px",
                                // marginLeft:"10px",
                                justifyContent: "space-between"
                            }}>

                                <Grid
                                    sx={{
                                        // width: "50%",
                                        height: "16.688em",
                                        padding: "0px",
                                        backgroundColor: '#D9D9D9',
                                        borderRadius: "20px"

                                    }}
                                    item
                                    xs={6}
                                />
                                <Grid
                                    item
                                    xs={6}
                                    sx={{
                                        padding: "0px",
                                        // width: "50%",
                                        height: "16.688em",
                                        backgroundColor: '#D9D9D9',
                                        borderRadius: "20px"
                                    }}
                                />
                            </Container>



                            <Container className='gray-box-card'>
                                <Typography sx={
                                    {

                                        color: " #141226",
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                        fontWeight: "600"
                                    }

                                } variant="body1" gutterBottom>Make your SBI PO preparation strategy with <span style={{ color: "#57886C" }}>examys inspire</span> </Typography>

                                <Grid
                                    xs={12}
                                    sx={{
                                        width: " 100%",
                                        height: 267,
                                        backgroundColor: '#D9D9D9',
                                        borderRadius: "20px"
                                    }}
                                />
                            </Container>
                        </Grid>
                        <Grid>

                            <Grid style={{ marginLeft: "7%" }}>

                                <Typography style={{ fontSize: 18, fontWeight: 600, fontFamily: "Poppins", marginLeft: "5%", color: "#141226" }}>
                                    SBI PO Notification

                                </Typography>
                                <Typography style={{ fontSize: 14, fontWeight: 500, fontFamily: "Poppins", marginLeft: "5%", color: "#4A4958" }}>
                                    Apply from 12.07.2023 to 20.08.2023

                                </Typography>


                            </Grid>

                            <Grid style={{ marginLeft: "6%" ,marginRight:"6%"}}>

                                <Typography style={{ fontSize: 25, marginTop: "3%", fontWeight: 600, fontFamily: "Poppins", marginLeft: "5%", color: "#4A4958" }}>
                                    Examys Package for SBI PO

                                </Typography>


                                {/* <Slider {...this.state.settings}> */}
                                <Grid container xs={12} spacing={1} mt={2} display={"flex"} direction="row">
                                    {this.state.courses.map((item, index) => {
                                        return (
                                            <Grid item xs={6} sm={4} md={3} m={0}>

                                                <Card
                                                    key={index}
                                                    variant="outlined"
                                                    sx={{
                                                        maxwidth: "311px",
                                                        borderRadius: "20.9494px",
                                                        // height: "281.77px",
                                                        paddingBottom: "2%",
                                                        marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)"
                                                    }}
                                                >
                                                    <CardContent>
                                                        <Typography
                                                            sx={{ fontSize: 18, fontWeight: "700" }}
                                                            gutterBottom
                                                            textAlign="center"
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                        {/* <Typography style={{fontSize:"12px",color:"blue",marginLeft:"20%"}}>(Focus Package)</Typography> */}

                                                        <Typography
                                                            sx={{ fontSize: 14 }}
                                                            style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500" }}
                                                            gutterBottom
                                                            textAlign="center"
                                                        >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>

                                                            {item.duration} <span style={{ color: "#F96255", fontWeight: "600" }}>{item.target}</span>
                                                        </Typography>
                                                        <Card className="cards" variant="outlined" sx={{ borderRadius: "16px", border: "2px solid lightgray" }} style={{ width: "100%" }}>
                                                            <CardContent style={{ width: "100%" }}>
                                                                <Typography
                                                                    sx={{ fontSize: 14 }}
                                                                    gutterBottom
                                                                    textAlign="center"
                                                                >
                                                                    {item.lessonbenefit}


                                                                </Typography>

                                                                <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>

                                                                    {item.benefit}

                                                                </Typography>
                                                            </CardContent>

                                                        </Card>
                                                        {/* <Typography style={{ fontSize: '10px' }}>Supported by Examys ai & item Training</Typography> */}


                                                    </CardContent>
                                                    <CardActions
                                                        style={{display:"flex",justifyContent: "space-between", padding: "7px",width:"100%",}}
                                                    >
                                                        <Box style={{ display: "flex", justifyContent: "center" }}>
                                                            <Typography
                                                                style={{ display: "flex", justifyContent: "center", alignItems: "center", color:"#72717D",textDecoration: "line-through" }}
                                                                textAlign="center"
                                                                sx={{ fontWeight: "bold" }}
                                                            ><CurrencyRupee style={{ fontSize: "14px",color:"#72717D" }} />
                                                                {item.oldprice}
                                                            </Typography>

                                                            <Typography
                                                                style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "green" }}
                                                                textAlign="center"
                                                                sx={{ fontWeight: "bold" }}
                                                            ><CurrencyRupee style={{ fontSize: "14px" }} marginTop="10%" />
                                                                {item.newprice}
                                                            </Typography>
                                                        </Box>
                                                        <Link to="/CourseviewDetail">
                                                            <button variant="contained" style={{padding:"3px"}} className="view-btn-examy">{item.buttonText}</button>
                                                        </Link>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        );
                                    })}
                                </Grid>

                                {/* <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div> */}
                                {/* </Slider> */}




                            </Grid>

                            <Grid style={{ marginLeft: "6%" ,marginRight:"6%"}}>
                            <center>

                                <Typography style={{ fontSize: 25, marginTop: "3%", fontWeight: 600, fontFamily: "Poppins", marginLeft: "5%", color: "#4A4958" }}>
                                    Examys Package for SBI PO

                                </Typography>
                            </center>







                            

                            <Grid container xs={12} spacing={1} mt={2} ml={1} display={"flex"} direction="row">
                                {this.state.testseries.map((testseries, index) => {
                                    return (
                                        <Grid item lg={3} xs={6} sm={4} md={3} m={0}>

                                            <Box sx={{ maxWidth: "325px", marginLeft: "-2%" }}>
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
                                                        <center>
                                                        <button
                                                            variant="contained"
                                                            style={{
                                                                padding: "8px 40px 10px 40px",
                                                                background: "#3E30C2 ",
                                                                whiteSpace: "nowrap",
                                                                color:"#fff",
                                                                border:"none",
                                                                borderRadius:"5px",
                                                                textTransform: "capitalize"
                                                            }}
                                                        >
                                                            {testseries.buttonText}
                                                        </button>
                                                        </center>
                                                    </CardActions>

                                                </Card>
                                            </Box>

                                        </Grid>
                                    );
                                })}
                            </Grid>


                            <center style={{marginTop:"2%"}}>
                            <Button variant='contained' style={{background:"#3E30C2",textAlign:"center",fontSize:"22px",fontWeight:"600"}}> Examys Test Pass Pro+ </Button>
                            </center>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }
}

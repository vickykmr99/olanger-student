/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import GroupsIcon from "@mui/icons-material/Groups";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./testseries.css";
import { Quiz } from "@mui/icons-material";
class testseries extends Component {
    state = {
        all_testSeries: [],
        clickIndex: "",
        allClick: true,
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
        ],
        Livequiz: [
            {
                title: "Agni 5 Missile Test: Super Power Quiz",
                description: "5 Questions 5 Min 5 Marks",
                date: "5 Dec, 21:00 to 16 Dec, 20:00",
                buttn: "Start Now",
            },
            {
                title: "Agni 5 Missile Test: Super Power Quiz",
                description: "5 Questions 5 Min 5 Marks",
                date: "5 Dec, 21:00 to 16 Dec, 20:00",
                buttn: "Start Now",
            },
            {
                title: "Agni 5 Missile Test: Super Power Quiz",
                description: "5 Questions 5 Min 5 Marks",
                date: "5 Dec, 21:00 to 16 Dec, 20:00",
                buttn: "Start Now",
            },
        ],
    };

    componentDidMount() {

        this.props.viewAllTestSeries();
        this.props.viewAllCategory();
        console.log('series', this.props.testseries.all_testSeries);
    };

    render() {
        const { testseries, snackbar, close_snack_bar } = this.props
        return (
            <Grid className="testseriespage">

                {/* 1st section */}
                <Grid container display={"flex"} style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(234, 232, 255, 0.39) 100%)", paddingTop: "6%", paddingBottom: "2%" }}>
                    <Grid item xs={0.75}></Grid>
                    <Grid item xs={7} className="test-series-home-page-text">
                        <Grid className="test-series-heading-1">
                            Push your exam preparation to the next level with India's
                            Advanced Mock Test Terminal
                        </Grid>
                        <Grid className="test-series-heading-2">
                            Systematic & Seamless Test experience
                        </Grid>
                        <Grid className="test-series-heading-3" style={{ marginTop: "20px" }}>
                            Mock Tests + Prev. Year Tests + Trend Tests + Live Tests
                        </Grid>
                        <Grid className="test-series-heading-4">
                            One Pass & Access to all Exams
                            <br />
                        </Grid>

                        <Grid>
                            <a href="testpasspro" style={{ textDecoration: "none" }}>
                                <Button
                                    variant="contained"
                                    className="test-series-home-butnn"
                                >
                                    Examys Test Pass pro+
                                </Button>
                            </a>
                        </Grid>
                    </Grid>
                    <Grid item xs={0.5}></Grid>
                    <Grid item xs={3} >
                        <img className="test-series-home-page-image"
                            src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%209.png?alt=media&token=95eceebc-b548-4092-866f-1087fe6ba82e"
                            alt="image"
                        />
                    </Grid>
                </Grid>

                {/* 2nd section */}
                <Grid container display={"flex"} style={{ marginTop: 40 }}>
                    <Grid item xs={0.75}></Grid>
                    <Grid item xs={3}>
                        <Typography


                            style={{ fontSize: "24px" }}
                            line-height="58px"

                            fontWeight='600'> Search Tests by Category
                        </Typography>
                    </Grid>

                    <Grid item xs={0.5}></Grid>
                    <Grid item xs={7} >

                        <Paper
                            component="form"
                            style={{ display: "flex", marginLeft: "auto", width: "567px", height: "43px", backgroundColor: "rgba(121, 0, 255, 0.08)", boxShadow: "1", border: "1px solid black" }}
                        >
                            <IconButton
                                type="button"
                                style={{ p: "150px" }}
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                style={{ ml: 5, flex: 1, fontSize: "15px" }}
                                placeholder="Search for your Exam"
                                inputProps={{ "aria-label": "Search here" }}
                                onChange={(e) => {
                                    this.props.searchTestseries(testseries.all_testSeries, e.target.value, "search")
                                }}
                            />
                        </Paper>
                    </Grid>

                </Grid>


                {/* 3rd section */}

                <Grid gridAutoFlow="row" style={{
                    display: "flex",

                    padding: "44px 88px",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                    gap: "32px",
                }} >

                    <Grid style={{ width: "30%", marginLeft: "5%", marginTop: "3%" }} >
                        <Grid item xs={4} class="testseriessidebar">

                            <a
                                style={this.state.allClick ? {
                                    border: "2px solid red",
                                    borderRadius: "8px",
                                    fontWeight: "bolder",
                                    WebkitTextFillColor: "red",
                                    fontSize: "16px",
                                    paddingLeft: '20px'
                                } : {}}
                                onClick={() => {
                                    this.setState({ allClick: true, clickIndex: "" })
                                    this.props.searchTestseries(testseries.all_testSeries, "", "category")
                                }}>All</a>
                            {Array.isArray(this.props.testseries.test_series_category) &&
                                this.props.testseries.test_series_category.map((item, index) => {
                                    return (
                                        <a
                                            style={this.state.clickIndex === index ? {
                                                border: "2px solid red",
                                                borderRadius: "8px",
                                                fontWeight: "bolder",
                                                WebkitTextFillColor: "red",
                                                fontSize: "16px",
                                            } : {}}
                                            onClick={() => {
                                                this.setState({ clickIndex: index, allClick: false })
                                                this.props.searchTestseries(testseries.all_testSeries, item.category_name, "category")
                                            }}>{item.category_name}</a>
                                    )
                                })}
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        // spacing={2}
                        style={{

                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "32px",

                        }} gridAutoFlow="row">
                        <Grid item xs style={{
                            // display: "flex",
                            // justifyContent: "space-around",
                            // alignItems: "center",
                            // gap: "24px",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "24px",
                            width: "100%",
                            justifyContent: "space-between"

                        }}>

                            {this.state.Livequiz.map((Livequiz, index) => (



                                <Card

                                    style={{
                                        // height: "180px",
                                        width: "296px",
                                        display: "flex",
                                        padding: "16px",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                        gap: "8px",
                                        borderRadius: "8px",
                                        border: "1.5px solid #D3D1E7",
                                        background: "#FFF",

                                        /* TestSeriesCart */
                                        boxShadow: "2px 2px 10px 0px #D8DFF8, -2px -2px 10px 0px #D8DFF8",
                                    }}

                                    key={index}>
                                    <Grid item xs={12} style={{ display: "flex", flexdirection: "row", width: "238px", justifyContent: "space-between", justifyItems: "center", alignItems: "center", marginTop: "10px" }}>

                                        {/* <FiberManualRecordIcon style={{ fontSize: "10px",color:"white",  display: "flex",
                                                flexDirection:"row",marginTop:"5px" }} />
                                            <Typography style={{fontSize: "13px", color: "#fff",marginTop:"-30px"}}>Live Quiz</Typography> */}
                                        <CardActions style={{


                                            width: "93px",
                                            backgroundColor: "#E51717", height: "25px", borderRadius: "3px"

                                        }}>
                                            <FiberManualRecordIcon style={{
                                                fontSize: "10px", color: "white",
                                                marginTop: ""
                                            }} />
                                            <Typography style={{ fontSize: "13px", color: "#fff", }}>Live Quiz</Typography>
                                        </CardActions>




                                        <Typography style={{ fontSize: "10px", width: "50px", backgroundColor: "#EEE", color: "#878695", textAlign: "center", borderRadius: "3px" }}>KVS PRT</Typography>

                                        <Typography style={{
                                            padding: " 2px 4px",

                                            background: "#EEE", border: "1px solid #3E30C2", fontWeight: "400", fontSize: "10px", color: "#3E30C2", marginRight: "5%", height: "20px", textAlign: "center", borderRadius: "3px"
                                        }} >+7 more</Typography>

                                    </Grid>

                                    <Typography
                                        sx={{ fontSize: 12, }}
                                        gutterBottom
                                        textAlign="left"
                                        fontWeight='bold'
                                    >
                                        {Livequiz.title}
                                    </Typography>
                                    <Typography
                                        sx={{ fontSize: 12, color: "#141226" }}


                                    >
                                        <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/mark%20icon.png?alt=media&token=c3af77b8-d2f3-402e-ac9f-0dab0a966296" alt="icon" />
                                        {Livequiz.description}
                                    </Typography>
                                    <Grid style={{ display: "flex", flexdirection: "row", justifyContent: "space-between" }}>
                                        <Grid>
                                            <Typography
                                                sx={{ fontSize: 11, width: "175px", color: "#141226", marginTop: "12px" }}


                                            >
                                                <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/calender%20icon.png?alt=media&token=598357da-09f3-4011-a427-c46ab24d6eaf" alt="icon" />

                                                {Livequiz.date}
                                            </Typography>
                                        </Grid>

                                        <Grid className="startnow">
                                            <Typography style={{ padding: "3px", height: "25px", fontSize: "10px", textAlign: "center", width: "65px", backgroundColor: "#3E30C2", color: "#fff", borderRadius: "3px", marginTop: "7%" }}>Start Now</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid >
                                        <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group.png?alt=media&token=d90bd4a6-0a2f-471e-ab40-a9171c4c4d9a" alt="icon" />

                                        <Typography class="testbtnlanguage" style={{ color: " #141226", fontSize: "13px" }}>English,Hindi,Gujurati</Typography>

                                    </Grid>
                                </Card>
                            ))}
                        </Grid>

                        <Grid item xs
                            // xs={10}
                            style={{
                                //     display: "flex",
                                // justifyContent: "space-around",
                                // alignItems: "center",
                                // gap: "24px",
                                display: "flex",
                                alignItems: "flex-start",
                                flexWrap:"wrap",
                                gap: "24px",
                                width: "100%",
                                justifyContent: "space-between"

                            }}
                        // style={{overflow: 'auto'}} 
                        >
                            {Array.isArray(this.props.testseries.search_testseries) &&
                                this.props.testseries.search_testseries.map((testseries, index) => {
                                    return (

                                        <Card
                                            key={index}
                                            style={{
                                                display: "flex",
                                                padding: "16px",
                                                // height:"377px",
                                                width: "18.5em",
                                                boxShadow: "2px 2px 10px 0px #D8DFF8, -2px -2px 10px 0px #D8DFF8",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: "8px",
                                            }}
                                        >

                                            <CardContent>
                                                <Grid
                                                    item
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
                                                            startIcon={<GroupsIcon style={{ color: "#3E3D4D" }} />}
                                                        >
                                                            126.2K Users
                                                        </Button>
                                                    </Typography>
                                                </Grid>
                                                <Typography
                                                    sx={{ fontSize: 14 }}
                                                    gutterBottom
                                                    textAlign="left"
                                                    fontWeight="bold"
                                                >
                                                    {testseries.test_series_name}
                                                </Typography>
                                                <span style={{ display: 'flex', }}>
                                                    {testseries.test_series_content.category.map((cat, index) => {
                                                        return (
                                                            <Typography
                                                                sx={{ fontSize: 14, color: "#6C60E1", marginRight: '5px' }}
                                                            >
                                                            {cat.category_name}
                                                            </Typography>
                                                        )
                                                    }
                                                    )}
                                                </span>
                                                <Typography
                                                    sx={{ fontSize: 14 }}
                                                    gutterBottom
                                                    textAlign="left"
                                                >
                                                    <span
                                                        style={{
                                                            color: "#009E0F",
                                                            fontWeight: "400",
                                                            fontSize: "14px",
                                                        }}
                                                    >
                                                        <span>Total 500 Sets</span>(15 free test)
                                                    </span>
                                                </Typography>
                                                <Typography
                                                    sx={{ fontSize: 14 }}
                                                    gutterBottom
                                                    textAlign="center"
                                                >
                                                    {/* {testseries.chapter_name67
                                                    } */}
                                                </Typography>
                                                <Typography
                                                    sx={{ fontSize: 14, color: "#F96255" }}
                                                    gutterBottom
                                                    textAlign="left"
                                                >
                                                    {testseries.languagesused}
                                                </Typography>

                                                <CardContent style={{ margin: "0px 4px 0px 0px" }} className="text-series-cardcontent-li">
                                                    <Typography
                                                        sx={{ fontSize: 14 }}
                                                        gutterBottom
                                                        textAlign="left"
                                                    >
                                                        <span>
                                                            <p style={{ color: "red" }}>English, Hindi</p>
                                                        </span>
                                                        {/* <li>
                                                            {" "}
                                                            200 Mock Tests{" "}
                                                            <span className="test-series-span">
                                                                (50 Chapters tests + 50 section tests + 30 full
                                                                tests + more)
                                                            </span>
                                                        </li> */}
                                                    </Typography>
                                                    <Typography
                                                        sx={{ fontSize: 14 }}
                                                        gutterBottom
                                                        textAlign="left"
                                                    >
                                                        {/* <li>100 Previous Year Tests</li> */}
                                                        {testseries.test_series_desc}
                                                    </Typography>

                                                    {/* <Typography sx={{ fontSize: 14 }}>
                                                        <li> 100 Trend Tests</li>
                                                    </Typography>

                                                    <Typography
                                                        sx={{ fontSize: 14 }}
                                                        gutterBottom
                                                        textAlign="left"
                                                    >
                                                        <li>50 Live Tests</li>
                                                    </Typography> */}

                                                </CardContent>

                                            </CardContent>

                                            <CardActions
                                                style={{
                                                    justifyContent: "center",
                                                    marginTop: "-15px",
                                                    alignSelf: "center"
                                                }}
                                            >
                                                <a href="/Testseriesviewdetails">
                                                    <Button
                                                        variant="contained"
                                                        style={{
                                                            padding: "8px 45px 8px 45px",
                                                            background: "#3E30C2 ",
                                                        }}
                                                        onClick={() => {
                                                            this.props.setTestseriesId(testseries._id);
                                                            this.props.setTestseries(testseries);
                                                        }}
                                                    >
                                                        {/* {testseries.buttonText} */}
                                                        Submit Details
                                                    </Button>

                                                </a>
                                            </CardActions>

                                        </Card>)
                                })}


                        </Grid>


                    </Grid>
                </Grid>




                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



            </Grid>
        );
    }
}

export default testseries;



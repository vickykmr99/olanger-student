import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from '@mui/material/Box';
import GroupsIcon from "@mui/icons-material/Groups";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../CourseAdvantages/Component/testseriesyoulike.css';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";





export default class testseriesyoulike extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,

            tabdata: [
                {
                    categoryname: "SSC",

                },
                {
                    categoryname: "Railway",

                },
                {
                    categoryname: "Banking & Insurance",

                },

                {
                    categoryname: "Teaching",

                },
                {
                    categoryname: "Defence",

                },
                {
                    categoryname: "Railway",

                },
                {
                    categoryname: "Banking & Insurance",

                },

                {
                    categoryname: "Teaching",

                },
                {
                    categoryname: "Defence",

                },
            ]
        };
    }
    componentDidMount() {
        this.props.viewAllCategory();
        console.log("caaacacacca", this.props.home.all_category)
    }


    render() {
        const { home } = this.props
        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 7
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 6
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 5
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 5
            }
        };

        return (

            <Grid container style={{
                width: "1440px",
                display: "flex",
                padding: "48px 88px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "32px",
            }} >
                <Typography style={{
                    color: "#242121",
                    fontFamily: "Poppins",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                }}>
                    Some Test Series You  May Like
                </Typography>



                <Box style={{
                    width: "100%",
                }}>
                    <Tabs >
                        <Grid container>
                            <TabList className="tablist-series">
                                <div className=''>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: "80vw" }}>
                                        <Carousel responsive={responsive}>
                                            {Array.isArray(home.all_category) && home.all_category.map((item, index) => {
                                                console.log("caaacacacca", home.all_category)
                                                return (
                                                    <button className='tab-list-t'
                                                        onClick={() => {
                                                            this.props.viewTestSeriesByCategory(item._id)
                                                        }}>
                                                        {item.category_name}
                                                    </button>
                                                )

                                            })}
                                        </Carousel>
                                    </Box>

                                </div>
                            </TabList>

                        </Grid>
                        <Box style={{ width: "100%",
                                        gap: "23px",
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "space-evenly",}}>

                            {Array.isArray(home.all_test_series_by_category) && home.all_test_series_by_category.map((item1, index) => {
                                console.log("ghghgfhghfghfghfhfhgfhhg",home.all_test_series_by_category)
                                return (
                                    // <TabPanel key={index} style={{
                                    //     width: "100%",
                                    //     gap: "23px",
                                    //     display: "flex",
                                    //     // flexWrap: "wrap",
                                    //     // justifyContent: "space-evenly",
                                    // }}>

                                    //     {/* { */}
                                    //         {/* // Array(8).fill(0).map(((i, index1) => ( */}


                                                <Card

                                                    key={item1._id}
                                                    style={{
                                                        display: "flex",
                                                        padding: "16px",

                                                        width: "18.5em",
                                                        boxShadow: "2px 2px 10px 0px #D8DFF8, -2px -2px 10px 0px #D8DFF8",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        gap: "8px",
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
                                                                    startIcon={<GroupsIcon style={{ color: "#3E3D4D" }} />}
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
                                                            {item1.test_series_name}
                                                        </Typography>
                                                        <Typography
                                                            sx={{ fontSize: 14, color: "#6C60E1" }}
                                                            gutterBottom
                                                            textAlign="left"
                                                        >
                                                             {item1.packagecategory_name}
                                                        </Typography>
                                                        <Typography
                                                            sx={{ fontSize: 14 }}
                                                            gutterBottom
                                                            textAlign="left"
                                                        >
                                                            <span style={{ color: "black" }}>
                                                                {" "}
                                                                Total 500 Sets
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

                                                        </Typography>
                                                        <Typography
                                                            sx={{ fontSize: 14, color: "#F96255" }}
                                                            gutterBottom
                                                            textAlign="left"
                                                        >
                                                            English,Hindi
                                                        </Typography>

                                                        <CardContent style={{ margin: "0px 4px 0px 0px" }} className="text-series-cardcontent-li">
                                                            <Typography
                                                                sx={{ fontSize: 14 }}
                                                                gutterBottom
                                                                textAlign="left"
                                                            >
                                                                <li>
                                                                    <span className="test-series-span">
                                                                    {item1.test_series_desc}
                                                                    </span>
                                                                </li>
                                                            </Typography>
                                                            {/* <Typography
                                                                sx={{ fontSize: 14 }}
                                                                gutterBottom
                                                                textAlign="left"
                                                            >
                                                                <li>100 Previous Year Tests</li>
                                                            </Typography> */}
                                                            {/* <Typography sx={{ fontSize: 14 }}>
                                                                <li> 100 Trend Tests</li>
                                                            </Typography> */}

                                                            {/* <Typography
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
                                                        <Button
                                                            variant="contained"
                                                            style={{
                                                                padding: "8px 45px 8px 45px",
                                                                background: "#3E30C2 ",
                                                            }}
                                                        >
                                                            View Details
                                                        </Button>
                                                    </CardActions>
                                                    {/* </Grid> */}
                                                </Card>
                                               /* //</Grid> 
                                        //     )))
                                        //  }  */


                                    // </TabPanel>
                                )
                            })
                            }

                        </Box>
                    </Tabs>




                </Box>
                <Button style={{
                    color: "#FFF",

                    /* Heading / H2 - Bold */
                    fontFamily: "Poppins",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    left: "40%",
                    lineHeight: "normal",
                    display: "flex",
                    padding: "8px 48px",
                    alignItems: "center",
                    borderRadius: "8px",
                    background: "#3E30C2",
                }} variant="contained">Explore All</Button>
            </Grid>
        )
    }
}
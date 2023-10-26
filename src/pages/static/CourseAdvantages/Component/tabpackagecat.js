import React, { Component } from 'react';
// import Tabs from '@mui/material/Tabs';
import "../../CourseAdvantages/Component/tabcategory.css";
// import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Grid } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TestSeries extends Component {
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
                    categoryname: "Banking & Insurance",

                },
                {
                    categoryname: "Defence",

                },
                {
                    categoryname: "SSC",

                },
                {
                    categoryname: "Railway",

                },
                {
                    categoryname: "Banking & Insurance",

                },

            ]
        };
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };
    componentDidMount() {
        this.props.viewAllCategory();
        console.log("caaacacacca", this.props.home.all_category)
    }

    render() {
        const { value } = this.state;
        const { home, snackbar, common } = this.props;

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
            <>
                <div className='main'>
                    {/* <Box sx={{ width: '100%', marginTop: '16px' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: "50vw" }}>
                        <Carousel responsive={responsive}>
                            {this.state.tabdata.map((item, index) => {
                                return (
                                    <button className='tab-list-t'>
                                        {item.categoryname}
                                    </button>
                                )

                            })}
                        </Carousel>
                    </Box>
                </Box> */}




                    <Grid container>
                        <TabList className="tablist-series">
                            <div className=''>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: "80vw" }}>
                                    {/* <Box style={{display:"flex",gap:"10px"}}> */}
                                    <Carousel responsive={responsive}>
                                        {Array.isArray(home.all_category) && home.all_category.map((item, index) => {
                                            console.log("caaacacacca", home.all_category)
                                            return (
                                                <button className='tab-list-t-t'
                                               onClick={() =>{
                                                this.props.viewAllPackageGroupByCategory(item._id)
                                               }}
                                                >

                                                    {item.category_name}
                                                </button>
                                            )

                                        })}
                                    </Carousel>
                                    {/* </Box> */}
                                </Box>

                            </div>
                        </TabList>

                    </Grid>
                </div>
            </>
        );
    }
}

export default TestSeries;
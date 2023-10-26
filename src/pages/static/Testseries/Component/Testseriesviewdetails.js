import React, { Component } from 'react'
import Typography from "@mui/material/Typography";
import { Button, Stack, List, Grid, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HelpIcon from '@mui/icons-material/Help';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import Lopenico from "../../../images/lock-open.png";
import {

  IconButton,
  Dialog,
  Tooltip,
} from "@mui/material";
import TextField from '@mui/material/TextField';
import Otp from "../../../../images/navbar/otp-icon 1.svg";
import Mobile from "../../../../images/navbar/mobile-phone-icon.svg";
import Logo from "../../../../images/navbar/logo_olanger.png";
import CloseIcon from '@mui/icons-material/Close';
// import "../../static/Testseries/testseriesview.css";
import "../../Testseries/Component/testseriesview.css"
import { Class } from '@mui/icons-material';
import { Ellipsis } from 'react-bootstrap/esm/PageItem';

export default class Testseriesviewdetails extends Component {
  constructor(props) {
    super(props);
    this.state = { activeButtonId: 2 };
    this.state = {
      modalVisible: false,
      isHidden: true,
      activeButtonId: 0,
      examIndex: 0,
      examIndex1: 0,
      activeButtonId1: 0,
      activeButtonId2: 0,
      activeButtonId3: 0,
      activeButtonId4: 0,
      activeButtonId5: 0,
      activeButtonId6: 0,

      Testseriesviewdetails: [
        {
          title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
          Qn: "100 Questions ",
          mark: "100 Marks",
          time: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english: "English",
          hindi: "Hindi",
        },
        {
          title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
          Qn: "100 Questions ",
          mark: "100 Marks",
          time: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english: "English",
          hindi: "Hindi",
        },
        {
          title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
          Qn: "100 Questions ",
          mark: "100 Marks",
          time: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english: "English",
          hindi: "Hindi",
        },
        {
          title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
          Qn: "100 Questions ",
          mark: "100 Marks",
          time: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english: "English",
          hindi: "Hindi",
        },
        {
          title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
          Qn: "100 Questions ",
          mark: "100 Marks",
          time: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english: "English",
          hindi: "Hindi",
        },
      ],
      Testseriesviewdetails2: [
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
        {
          title1: "English Language Sectional Test - 1",
          Qn1: "100 Questions ",
          mark1: "100 Marks",
          time1: "Time: 90 Mins",
          // btntext: "Unlock Now",
          english1: "English",
          hindi1: "Hindi",
        },
      ]


    }
  }

  handleButtonClick = (buttonId) => {
    this.setState({ activeButtonId: buttonId });
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  toggleElement = () => {
    this.setState((prevState) => ({
      isHidden: !prevState.isHidden,
    }));
  };

  componentDidMount() {
    // console.log(this.props.testseries.testseries_id);
    console.log("get", this.props.testseries.testseries)
    this.props.viewAllTestSeries()
    this.props.setTestseriesId()
  };

  // state = {
  //   Testseriesviewdetails: [
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //   ],
  //   Testseriesviewdetails2: [
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //     {
  //       title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //       Qn: "100 Questions ",
  //       mark: "100 Marks",
  //       time: "Time: 90 Mins",
  //       btntext: "Unlock Now",
  //     },
  //   ]


  // }
  render() {
    const { activeButtonId } = this.state;
    const { selected, modalVisible, modalVisible1 } = this.state;
    const { testseries } = this.props;
    const { examIndex, examIndex1, activeButtonId1, activeButtonId2, activeButtonId3, activeButtonId4, activeButtonId5 } = this.state;
    return (
      <div style={{
        alignitems: "center",
        padding: "44px 20px",
        gap: "20px",
        marginTop: '45px',
        // width: "1485px",
        // height: "4051%",
        // marginLeft: "1%",
        background: "rgba(245, 244, 254, 0.6)"
      }}


      >
        <div style={{
          // maxWidth: "1300px",
          maxHeight: "311%",
          marginTop: '79px',
          // margin: '70px auto',
          textAlign: 'center',



        }}>

          <Typography
            sx={{ fontSize: 29, fontWeight: "bold" }}
            gutterBottom
            textAlign="center"
            marginTop="-1%"
          >
            {this.props.testseries.testseries.test_series_name}
          </Typography>
          {Array.isArray(this.props.testseries.testseries.test_series_content.category || this.props.testseries.testseries.test_series_content.category.length > 1) && this.props.testseries.testseries.test_series_content.category.map((item, index) => {
            console.log("ccccccccccccccccccccccc", this.props.testseries.testseries.test_series_content.category)
            return (

              <Tabs>

                <TabList className="test-secondpart-tab">
                  {Array.isArray(this.props.testseries.testseries.test_series_content.category || this.props.testseries.testseries.test_series_content.category.length > 1) && this.props.testseries.testseries.test_series_content.category.map((item1, index) => {
                    console.log("ccccccccccccccccccccccc", this.props.testseries.testseries.test_series_content.category)
                    return (
                      item1.exam !== undefined && item1.exam.map((el1, index2) => {
                        return (
                          <Tab className=" test-part-tab"
                            onClick={() => {
                              this.setState({ activeButtonId: index, examIndex: index2 })
                              console.log(activeButtonId, examIndex)

                            }}>{el1.exam_name}</Tab>
                          // <Tab className="test-part-tab ">Previous Year Test</Tab>
                          // <Tab className=" test-part-tab">Trend Test</Tab>
                        )
                      })
                    )
                  })}

                </TabList>

                <TabList className="test-series-tab">
                  {(testseries.testseries.test_series_content.category[this.state.activeButtonId].exam !== undefined &&
                    testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage !== undefined) &&
                    testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage.map((e, index) => {
                      return (
                        <Tab className="testseries-tab-tier "
                          onClick={() => {
                            this.setState({ activeButtonId1: index })
                            console.log(activeButtonId1)
                          }}>
                          {e.stage_name}
                        </Tab>
                        // <Tab className="testseries-tab-tier">For Tier 2</Tab>
                      );
                    })}

                </TabList>






                {/* first tier code here  */}

                <TabPanel
                  style={
                    {
                      background: "white",
                      width: "70%",
                      // height: "190px",
                      textAlign: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                      marginLeft: "15%",
                    }}
                  className="tabpan-tab"
                >


                  <Tabs style={{ padding: "15px" }}>

                    <TabList className="test-secondpart-tab">
                      {(testseries.testseries.test_series_content.category[this.state.activeButtonId].exam !== undefined &&
                        testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage !== undefined &&
                        testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject !== undefined) &&
                        testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject.map((e, index) => {
                          return (
                            <Tab className=" test-part-tab"
                              onClick={() => {
                                this.setState({ activeButtonId2: index })
                                // console.log(activeButtonId1)
                              }}
                            >{e.subject_name}</Tab>
                            // <Tab className="test-part-tab ">Previous Year Test</Tab>
                            // <Tab className=" test-part-tab">Trend Test</Tab>
                          );
                        })}
                    </TabList>



                    {/* mock test panel here  */}
                    <TabPanel>
                      <Grid style={
                        {


                          width: "100%",

                          // height: "190px",
                          textAlign: "center",
                          alignItems: "center",
                          alignSelf: "center",
                          justifyContent: "center",
                          marginLeft: "0%",


                        }
                      }>
                        <Tabs >
                          <TabList className="test-series-second-tab">
                            {(testseries.testseries.test_series_content.category[this.state.activeButtonId].exam !== undefined &&
                              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage !== undefined &&
                              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject !== undefined &&
                              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage !== undefined) &&
                              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage.map((e, index) => {
                                console.log("mmmmmmmmmmmmmmmmmmmmmmmmm", e.mini_content)

                                return (
                                  e.mini_content.chapter !== undefined && e.mini_content.chapter.map((el2, index2) => {
                                    console.log("ccccccccccccccccccccchhhhhh", e.mini_content.chapter)
                                    return (
                                      <Tab className="second-tab-test"
                                        onClick={() => {
                                          this.setState({ activeButtonId3: index, examIndex1: index2 })
                                          console.log(activeButtonId3, examIndex1)

                                        }}>{el2.chapter_name}</Tab>
                                      // <Tab className="second-tab-test">Sectional Test</Tab>
                                      // <Tab className="second-tab-test">Full Length Mock Test</Tab>
                                      // <Tab className="second-tab-test">Mini Mock</Tab>
                                      // <Tab className="second-tab-test">Level Up </Tab>//
                                    )
                                  })
                                )
                              })}
                          </TabList>
                          {/* chapter tabpanel  */}
                          <TabPanel style={{ display: "flex", flexDirection: "row" }}>
                            {(testseries.testseries.test_series_content.category[this.state.activeButtonId].exam !== undefined &&
                              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage !== undefined &&
                              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject !== undefined &&
                              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage !== undefined &&
                              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage[this.state.activeButtonId3].mini_content.chapter !== undefined &&
                              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage[this.state.activeButtonId3].mini_content.chapter[this.state.examIndex1].lesson !== undefined) &&
                              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage[this.state.activeButtonId3].mini_content.chapter[this.state.examIndex1].lesson.map((e, index) => {
                                console.log("llllllllllll", e.lesson)
                                return (
                                  <Stack
                                    direction="row"
                                    sx={{
                                      display: "flex",
                                      alignItems: 'center',
                                      borderRadius: '5px',
                                      marginLeft: '1%',
                                      gap: '16px',
                                      marginRight: "2%"
                                    }}
                                  >
                                    <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                                      className={` ${activeButtonId5 === index ? 'arrows arrow-bottom' : 'arrow'}`}
                                      sx={{ ml: 1 }}

                                      variant="contained"
                                      // onClick={() => this.handleButtonClick(1)
                                      onClick={() => {
                                        this.setState({ activeButtonId5: index })
                                        console.log("fjjjdfkjkdfjjkkjdfjkdfkjkgjs", activeButtonId5)
                                      }}

                                    //  }
                                    >
                                      {e.lesson_name}
                                    </Button>
                                    {/* <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                                className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(2)}
                              >
                                Reasoning
                              </Button>
                              <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                                className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(3)}
                              >
                                GK
                              </Button>
                              <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                                className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(4)}
                              >
                                English
                              </Button>
                              <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                                className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(5)}
                              >
                                CA
                              </Button> */}




                                  </Stack>
                                )
                              })}
                          </TabPanel>

                          {/* sectional test panel */}
                          {/* <TabPanel >
                            <Stack
                              direction="row"
                              sx={{

                                alignItems: 'center',
                                borderRadius: '5px',
                                marginLeft: '2%',
                                gap: '16px',
                                marginRight: "2%"
                              }}
                            >
                              <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                                className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(1)}
                              >
                                Quant
                              </Button>
                              <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                                className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(2)}
                              >
                                Reasoning
                              </Button>
                              <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                                className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(3)}
                              >
                                GK
                              </Button>
                              <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                                className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(4)}
                              >
                                English
                              </Button>
                              <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                                className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(5)}
                              >
                                CA
                              </Button>




                            </Stack>
                          </TabPanel> */}

                          {/* Full Length mock test panel */}
                          <TabPanel>

                          </TabPanel>

                          {/* mini mock panel here */}
                          <TabPanel>

                          </TabPanel>

                          {/* Level Up panel here  */}
                          <TabPanel >
                            <Stack
                              direction="row"
                              sx={{

                                alignItems: 'center',
                                borderRadius: '5px',
                                marginLeft: '2%',
                                gap: '16px',
                                marginRight: "2%"
                              }}
                            >
                              <Button style={{ width: "150px" }}
                                className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(1)}
                              >
                                Quant
                              </Button>
                              <Button style={{ width: "150px" }}
                                className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(2)}
                              >
                                Reasoning
                              </Button>
                              <Button style={{ width: "150px" }}
                                className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(3)}
                              >
                                GK
                              </Button>
                              <Button style={{ width: "150px" }}
                                className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(4)}
                              >
                                English
                              </Button>
                              <Button style={{ width: "150px" }}
                                className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(5)}
                              >
                                CA
                              </Button>




                            </Stack>
                          </TabPanel>
                        </Tabs>
                      </Grid>
                    </TabPanel>

                    {/* Previous Year Test here*/}
                    <TabPanel>
                      <Grid>

                        <Stack
                          direction="row"
                          sx={{
                            justifyContent: 'left',
                            alignItems: 'center',
                            borderRadius: '5px',
                            paddingTop: '25px',
                            marginLeft: '2%',
                            gap: '16px',
                            marginRight: "2%"
                          }}
                        >
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}

                            variant="contained"
                            onClick={() => this.handleButtonClick(1)}
                          >
                            2023
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}
                            // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                            variant="contained"
                            onClick={() => this.handleButtonClick(2)}
                          >
                            2022
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}

                            variant="contained"
                            onClick={() => this.handleButtonClick(3)}
                          >
                            2021
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}

                            variant="contained"
                            onClick={() => this.handleButtonClick(4)}
                          >
                            2020
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}
                            variant="contained"
                            onClick={() => this.handleButtonClick(5)}
                          >
                            2019
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 6 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}
                            variant="contained"
                            onClick={() => this.handleButtonClick(6)}
                          >
                            2018
                          </Button>

                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 7 ? 'arrows arrow-bottom' : 'arrow'}`} onClick={() => this.handleButtonClick(7)} sx={{ ml: 1 }}
                            variant="contained">
                            2017
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 8 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}

                            variant="contained"
                            onClick={() => this.handleButtonClick(8)}
                          >
                            2016
                          </Button>

                        </Stack>
                      </Grid>
                    </TabPanel>

                    {/* Trend Test panel here */}

                    <TabPanel>
                      <Stack
                        direction="row"
                        sx={{

                          alignItems: 'center',
                          borderRadius: '5px',
                          marginLeft: '2%',
                          gap: '16px',
                          marginRight: "2%"
                        }}
                      >
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(1)}
                        >
                          Quant
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(2)}
                        >
                          Reasoning
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(3)}
                        >
                          GK
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(4)}
                        >
                          English
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(5)}
                        >
                          CA
                        </Button>




                      </Stack>
                    </TabPanel>

                  </Tabs>



                </TabPanel>


                {/* second tier code here */}

                <TabPanel
                  style={
                    {
                      background: "white",
                      width: "70%",
                      // height: "190px",
                      textAlign: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                      marginLeft: "15%",
                    }}
                  className="tabpan-tab"
                >


                  <Tabs style={{ padding: "15px" }}>
                    <TabList className="test-secondpart-tab">
                      <Tab className=" test-part-tab">Mock Test</Tab>
                      <Tab className="test-part-tab ">Previous Year Test</Tab>
                      <Tab className=" test-part-tab">Trend Test</Tab>
                    </TabList>

                    {/* mock test panel here  */}
                    <TabPanel>
                      <Grid style={
                        {


                          width: "100%",

                          // height: "190px",
                          textAlign: "center",
                          alignItems: "center",
                          alignSelf: "center",
                          justifyContent: "center",
                          marginLeft: "0%",


                        }
                      }>
                        <Tabs >
                          <TabList className="test-series-second-tab">
                            <Tab className="second-tab-test">Chapter Test</Tab>
                            <Tab className="second-tab-test">Sectional Test</Tab>
                            <Tab className="second-tab-test">Full Length Mock Test</Tab>
                            <Tab className="second-tab-test">Mini Mock</Tab>
                            <Tab className="second-tab-test">Level Up </Tab>

                          </TabList>
                          {/* chapter tabpanel  */}
                          <TabPanel >
                            <Stack
                              direction="row"
                              sx={{

                                alignItems: 'center',
                                borderRadius: '5px',
                                marginLeft: '2%',
                                gap: '16px',
                                marginRight: "2%"
                              }}
                            >
                              <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                                className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(1)}
                              >
                                Quant
                              </Button>
                              <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                                className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(2)}
                              >
                                Reasoning
                              </Button>
                              <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                                className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(3)}
                              >
                                GK
                              </Button>
                              <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                                className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(4)}
                              >
                                English
                              </Button>
                              <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                                className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(5)}
                              >
                                CA
                              </Button>




                            </Stack>
                          </TabPanel>

                          {/* sectional test panel */}
                          <TabPanel >
                            <Stack
                              direction="row"
                              sx={{

                                alignItems: 'center',
                                borderRadius: '5px',
                                marginLeft: '2%',
                                gap: '16px',
                                marginRight: "2%"
                              }}
                            >
                              <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                                className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(1)}
                              >
                                Quant
                              </Button>
                              <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                                className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(2)}
                              >
                                Reasoning
                              </Button>
                              <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                                className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(3)}
                              >
                                GK
                              </Button>
                              <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                                className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(4)}
                              >
                                English
                              </Button>
                              <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                                className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(5)}
                              >
                                CA
                              </Button>




                            </Stack>
                          </TabPanel>

                          {/* Full Length mock test panel */}
                          <TabPanel>

                          </TabPanel>

                          {/* mini mock panel here */}
                          <TabPanel>

                          </TabPanel>

                          {/* Level Up panel here  */}
                          <TabPanel >
                            <Stack
                              direction="row"
                              sx={{

                                alignItems: 'center',
                                borderRadius: '5px',
                                marginLeft: '2%',
                                gap: '16px',
                                marginRight: "2%"
                              }}
                            >
                              <Button style={{ width: "150px" }}
                                className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(1)}
                              >
                                Quant
                              </Button>
                              <Button style={{ width: "150px" }}
                                className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(2)}
                              >
                                Reasoning
                              </Button>
                              <Button style={{ width: "150px" }}
                                className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(3)}
                              >
                                GK
                              </Button>
                              <Button style={{ width: "150px" }}
                                className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(4)}
                              >
                                English
                              </Button>
                              <Button style={{ width: "150px" }}
                                className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(5)}
                              >
                                CA
                              </Button>




                            </Stack>
                          </TabPanel>
                        </Tabs>
                      </Grid>
                    </TabPanel>

                    {/* Previous Year Test here*/}
                    <TabPanel>
                      <Grid>

                        <Stack
                          direction="row"
                          sx={{
                            justifyContent: 'left',
                            alignItems: 'center',
                            borderRadius: '5px',
                            paddingTop: '25px',
                            marginLeft: '2%',
                            gap: '16px',
                            marginRight: "2%"
                          }}
                        >
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}

                            variant="contained"
                            onClick={() => this.handleButtonClick(1)}
                          >
                            2023
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}
                            // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                            variant="contained"
                            onClick={() => this.handleButtonClick(2)}
                          >
                            2022
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}

                            variant="contained"
                            onClick={() => this.handleButtonClick(3)}
                          >
                            2021
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}

                            variant="contained"
                            onClick={() => this.handleButtonClick(4)}
                          >
                            2020
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}
                            variant="contained"
                            onClick={() => this.handleButtonClick(5)}
                          >
                            2019
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 6 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}
                            variant="contained"
                            onClick={() => this.handleButtonClick(6)}
                          >
                            2018
                          </Button>

                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 7 ? 'arrows arrow-bottom' : 'arrow'}`} onClick={() => this.handleButtonClick(7)} sx={{ ml: 1 }}
                            variant="contained">
                            2017
                          </Button>
                          <Button style={{ width: "80px" }}
                            className={` ${activeButtonId === 8 ? 'arrows arrow-bottom' : 'arrow'}`}
                            sx={{ ml: 1 }}

                            variant="contained"
                            onClick={() => this.handleButtonClick(8)}
                          >
                            2016
                          </Button>

                        </Stack>
                      </Grid>
                    </TabPanel>

                    {/* Trend Test panel here */}

                    <TabPanel>
                      <Stack
                        direction="row"
                        sx={{

                          alignItems: 'center',
                          borderRadius: '5px',
                          marginLeft: '2%',
                          gap: '16px',
                          marginRight: "2%"
                        }}
                      >
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(1)}
                        >
                          Quant
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(2)}
                        >
                          Reasoning
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(3)}
                        >
                          GK
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(4)}
                        >
                          English
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(5)}
                        >
                          CA
                        </Button>




                      </Stack>
                    </TabPanel>

                  </Tabs>



                </TabPanel>


              </Tabs>
            )
          })}






          <Grid style={{
            maxWidth: "1300px",
            maxHeight: "311%",
            marginTop: '7%',
            margin: '70px auto',
            textAlign: 'center',
          }}>

            {(testseries.testseries.test_series_content.category[this.state.activeButtonId].exam !== undefined &&
              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage !== undefined &&
              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject !== undefined &&
              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage !== undefined &&
              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage[this.state.activeButtonId3].mini_content.chapter !== undefined &&
              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage[this.state.activeButtonId3].mini_content.chapter[this.state.examIndex1].lesson !== undefined &&
              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage[this.state.activeButtonId3].mini_content.chapter[this.state.examIndex1].lesson[this.state.activeButtonId5].quiz !== undefined) &&
              testseries.testseries.test_series_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject[this.state.activeButtonId2].minipackage[this.state.activeButtonId3].mini_content.chapter[this.state.examIndex1].lesson[this.state.activeButtonId5].quiz.map((e, index) => {
                return (
                  <Grid className='papercard-container'>

                    <Grid style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <Typography
                        sx={{ fontSize: 15, fontWeight: "bold", textAlign: "left" }}
                      >
                        {/* SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I) */}
                        {e.quiz_name}
                      </Typography>

                      <Grid style={{ display: "flex", gap: "10px" }}>
                        <Box style={{ display: "flex", gap: "10px" }}>
                          <HelpIcon style={{ color: "#72717D", fontstyle: "6px" }} />
                          <Box sx={{ color: "#72717D", fontweight: "400" }}>
                            {e.questions.length} Questions
                          </Box>

                        </Box>
                        <Box style={{ display: "flex", gap: "10px" }}>
                          <CreditScoreIcon style={{ color: "#72717D", fontStyle: "smaller" }} />
                          <Box sx={{ color: "#72717D", fontweight: "400" }}>
                            {e.questions.length} Marks
                          </Box>

                        </Box>
                        <Box style={{ display: "flex", gap: "10px" }}>
                          <AccessTimeFilledIcon style={{ color: "#72717D", fontStyle: "smaller" }} />
                          <Box sx={{ color: "#72717D", fontweight: "400" }}>
                            Time: 90 Mins
                          </Box>

                        </Box>
                      </Grid>

                      <Grid style={{ display: "flex", gap: "10px" }}>
                        <button style={{ border: "none", color: "red", background: "none" }}>English</button>
                        <button style={{ border: "none", color: " red", background: "none" }} > Hindi</button>
                      </Grid>
                    </Grid>


                    <a href="/instruction">
                      <Grid style={{ marginTop: "24px" }}>
                        <Button onClick={() => {this.setModalVisible(true)
                        this.props.viewExamQuestion(e._id)
                        console.log("quiz_idddd", e._id)}}
                         className='start-now-btn' variant='contained'> Start Now</Button>
                
                      </Grid>
                    </a>
            

                  </Grid>
                )
              })}


            {/* {this.state.Testseriesviewdetails.map((Testseriesviewdetails, index) => (
              <Grid className='papercard-container'>
                <Grid style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Typography
                    sx={{ fontSize: 15, fontWeight: "bold", textAlign: "left" }}
                  >
                    {Testseriesviewdetails.title}
                  </Typography>
                  <Grid style={{ display: "flex", gap: "10px" }}>
                    <Box style={{ display: "flex", gap: "10px" }}>
                      <HelpIcon style={{ color: "#72717D", fontstyle: "6px" }} />
                      <Box sx={{ color: "#72717D", fontweight: "400" }}>
                        {Testseriesviewdetails.Qn}
                      </Box>

                    </Box>
                    <Box style={{ display: "flex", gap: "10px" }}>
                      <CreditScoreIcon style={{ color: "#72717D", fontStyle: "smaller" }} />
                      <Box sx={{ color: "#72717D", fontweight: "400" }}>
                        {Testseriesviewdetails.mark}
                      </Box>

                    </Box>
                    <Box style={{ display: "flex", gap: "10px" }}>
                      <AccessTimeFilledIcon style={{ color: "#72717D", fontStyle: "smaller" }} />
                      <Box sx={{ color: "#72717D", fontweight: "400" }}>
                        {Testseriesviewdetails.time}
                      </Box>

                    </Box>
                  </Grid>
                  <Grid style={{ display: "flex", gap: "10px" }}>
                    <button style={{ border: "none", color: "red", background: "none" }}>{Testseriesviewdetails.english}</button>
                    <button style={{ border: "none", color: " red", background: "none" }} >{Testseriesviewdetails.hindi}</button>
                  </Grid>
                </Grid>

                <Grid style={{ marginTop: "24px" }}>

                  <Button onClick={() => this.setModalVisible(true)} className='start-now-btn' variant='contained' style={{ whiteSpace: "nowrap" }}>
                    {/* <Lopenico/> */}
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/unlockIcon.png?alt=media&token=5a673d60-5660-4e35-acad-6f1bdcdff2c3" alt="unlockicon" style={{ marginRight: "10px" }} />
                    Unlock Now
                  </Button>

                </Grid>


              </Grid>
            ))} */}
          </Grid>


        </div >




        {/* second part card */}

        {/* < Grid style={{ */}
        {/* // maxWidth: "1300px",
          // maxHeight: "311%",
          // marginTop: '79%',
          // margin: '70px auto',
          // textAlign: 'center',



        }
        }> */}

        {/* <Tabs> */}
        {/* <TabList className="test-series-tab">
              <Tab className="testseries-tab-tier ">For Tier 1</Tab>
              <Tab className="testseries-tab-tier">For Tier 2</Tab>

            </TabList> */}


        {/* <TabPanel className="tab-boxs">
              <Grid container>
                <Grid item xs={1.9}></Grid> */}


        {/* <Grid> */}
        {/* <Tabs className="test-series-two-tab" > */}
        {/* <TabList className="test-series-two">
                      <Tab className="second-tab-two">Chapter Test</Tab>
                      <Tab className="second-tab-two">Sectional Test</Tab>
                      <Tab className="second-tab-two">Full Length Mock Test</Tab>
                      <Tab className="second-tab-two">Mini Mock</Tab>
                      <Tab className="second-tab-two">Level Up </Tab>

                    </TabList> */}
        {/* chapter tabpanel  */}
        {/* <TabPanel >
                      <Stack
                        direction="row"
                        sx={{

                          alignItems: 'center',
                          borderRadius: '5px',
                          marginLeft: '2%',
                          gap: '16px',
                          marginRight: "2%"
                        }}
                      >
                        <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                          className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(1)}
                        >
                          Quant
                        </Button>
                        <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                          className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(2)}
                        >
                          Reasoning
                        </Button>
                        <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                          className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(3)}
                        >
                          GK
                        </Button>
                        <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                          className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(4)}
                        >
                          English
                        </Button>
                        <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                          className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(5)}
                        >
                          CA
                        </Button>




                      </Stack>
                    </TabPanel> */}

        {/* sectional test panel */}
        {/* <TabPanel >
                      <Stack
                        direction="row"
                        sx={{

                          alignItems: 'center',
                          borderRadius: '5px',
                          marginLeft: '2%',
                          gap: '16px',
                          marginRight: "2%"
                        }}
                      >
                        <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                          className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(1)}
                        >
                          Quant
                        </Button>
                        <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                          className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(2)}
                        >
                          Reasoning
                        </Button>
                        <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                          className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(3)}
                        >
                          GK
                        </Button>
                        <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                          className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(4)}
                        >
                          English
                        </Button>
                        <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                          className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(5)}
                        >
                          CA
                        </Button>




                      </Stack>
                    </TabPanel> */}

        {/* Full Length mock test panel */}
        <TabPanel>

        </TabPanel>

        {/* mini mock panel here */}
        <TabPanel>

        </TabPanel>

        {/* Level Up panel here  */}
        {/* <TabPanel >
                      <Stack
                        direction="row"
                        sx={{

                          alignItems: 'center',
                          borderRadius: '5px',
                          marginLeft: '2%',
                          gap: '16px',
                          marginRight: "2%"
                        }}
                      >
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(1)}
                        >
                          Quant
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(2)}
                        >
                          Reasoning
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(3)}
                        >
                          GK
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(4)}
                        >
                          English
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(5)}
                        >
                          CA
                        </Button>




                      </Stack>
                    </TabPanel> */}
        {/* </Tabs> */}
        {/* </Grid> */}

        {/* <Grid item xs={0.5}></Grid>
              </Grid>
            </TabPanel> */}

        {/* <TabPanel className="tab-boxs">
              <Grid container>
                <Grid item xs={4}></Grid> */}


        {/* <Grid> */}
        {/* <Tabs className="test-series-two-tab" > */}
        {/* <TabList className="test-series-two">
                      <Tab className="second-tab-two">Chapter Test</Tab>
                      <Tab className="second-tab-two">Previous Year Test</Tab>
                      <Tab className="second-tab-two">Section Test</Tab>
                      <Tab className="second-tab-two">Full Length Mock Test</Tab>
                      <Tab className="second-tab-two">Level Up </Tab>

                    </TabList> */}
        {/* chapter tabpanel  */}
        {/* <TabPanel >
                      <Stack
                        direction="row"
                        sx={{

                          alignItems: 'center',
                          borderRadius: '5px',
                          marginLeft: '2%',
                          gap: '16px',
                          marginRight: "2%"
                        }}
                      >
                        <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                          className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(1)}
                        >
                          Quant
                        </Button>
                        <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                          className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(2)}
                        >
                          Reasoning
                        </Button>
                        <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                          className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(3)}
                        >
                          GK
                        </Button>
                        <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                          className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(4)}
                        >
                          English
                        </Button>
                        <Button style={{ width: "150px", backgroundColor: "#6257CD" }}
                          className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(5)}
                        >
                          CA
                        </Button>




                      </Stack>
                    </TabPanel> */}

        {/* sectional test panel */}
        {/* <TabPanel >
                      <Stack
                        direction="row"
                        sx={{

                          alignItems: 'center',
                          borderRadius: '5px',
                          marginLeft: '2%',
                          gap: '16px',
                          marginRight: "2%"
                        }}
                      >
                        <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                          className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(1)}
                        >
                          Quant
                        </Button>
                        <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                          className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(2)}
                        >
                          Reasoning
                        </Button>
                        <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                          className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(3)}
                        >
                          GK
                        </Button>
                        <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                          className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(4)}
                        >
                          English
                        </Button>
                        <Button style={{ width: "150px", textTransfrom: "capitalize" }}
                          className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(5)}
                        >
                          CA
                        </Button>




                      </Stack>
                    </TabPanel> */}

        {/* Full Length mock test panel */}
        <TabPanel>

        </TabPanel>

        {/* mini mock panel here */}
        <TabPanel>

        </TabPanel>

        {/* Level Up panel here  */}
        {/* <TabPanel >
                      <Stack
                        direction="row"
                        sx={{

                          alignItems: 'center',
                          borderRadius: '5px',
                          marginLeft: '2%',
                          gap: '16px',
                          marginRight: "2%"
                        }}
                      >
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(1)}
                        >
                          Quant
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(2)}
                        >
                          Reasoning
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(3)}
                        >
                          GK
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}

                          variant="contained"
                          onClick={() => this.handleButtonClick(4)}
                        >
                          English
                        </Button>
                        <Button style={{ width: "150px" }}
                          className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                          sx={{ ml: 1 }}
                          variant="contained"
                          onClick={() => this.handleButtonClick(5)}
                        >
                          CA
                        </Button>




                      </Stack>
                    </TabPanel> */}
        {/* </Tabs> */}
        {/* </Grid> */}

        {/* <Grid item xs={0.5}></Grid>
              </Grid>
            </TabPanel> */}

        {/* </Tabs> */}


        {/* </Grid> */}

        {/* <Grid style={{
          maxWidth: "1300px",
          maxHeight: "311%",
          marginTop: '7%',
          margin: '70px auto',
          textAlign: 'center',
        }}> */}

        {/* {this.state.Testseriesviewdetails2.map((Testseriesviewdetails2, index) => (
            // <Grid className='papercard-container'>
            //   <Grid style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            //     <Typography
            //       sx={{ fontSize: 15, fontWeight: "bold", textAlign: "left" }}
            //     >
            //       {Testseriesviewdetails2.title1}
            //     </Typography>
            //     <Grid style={{ display: "flex", gap: "10px" }}>
            //       <Box style={{ display: "flex", gap: "10px" }}>
            //         <HelpIcon style={{ color: "#72717D", fontstyle: "6px" }} />
            //         <Box sx={{ color: "#72717D", fontweight: "400" }}>
            //           {Testseriesviewdetails2.Qn1}
            //         </Box>

            //       </Box>
            //       <Box style={{ display: "flex", gap: "10px" }}>
            //         <CreditScoreIcon style={{ color: "#72717D", fontStyle: "smaller" }} />
            //         <Box sx={{ color: "#72717D", fontweight: "400" }}>
            //           {Testseriesviewdetails2.mark1}
            //         </Box>

            //       </Box>
            //       <Box style={{ display: "flex", gap: "10px" }}>
            //         <AccessTimeFilledIcon style={{ color: "#72717D", fontStyle: "smaller" }} />
            //         <Box sx={{ color: "#72717D", fontweight: "400" }}>
            //           {Testseriesviewdetails2.time1}
            //         </Box>

            //       </Box>
            //     </Grid>
            //     <Grid style={{ display: "flex", gap: "10px" }}>
            //       <button style={{ border: "none", color: "red", background: "none" }}>{Testseriesviewdetails2.english1}</button>
            //       <button style={{ border: "none", color: " red", background: "none" }} >{Testseriesviewdetails2.hindi1}</button>
            //     </Grid>
            //   </Grid>

            //   <Grid style={{ marginTop: "24px" }}>

            //     <Button className='start-now-btn' variant='contained' style={{ whiteSpace: "nowrap" }}>
            //       {/* <Lopenico/> */}
        {/* //       <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/unlockIcon.png?alt=media&token=5a673d60-5660-4e35-acad-6f1bdcdff2c3" alt="unlockicon" style={{ marginRight: "10px" }} />
            //       Unlock Now
            //     </Button> */}

        {/* //   </Grid> */}


        {/* // </Grid>
          ))}
        </Grid> */}




        <Dialog
          open={modalVisible}
          onClose={!modalVisible}
          // className="modal2"
          // overlayClassName="Overlay"
          style={{ marginTop: "50px", overflowY: "hidden" }}
        >
          <div
            className="modallogin"
            style={{ padding: "14px 142px 242px 142px" }}
          >
            <div style={{ flexDirection: "row", display: "flex" }}>

              <div style={{ marginTop: "50px" }}>

                <img src={Logo} style={{ marginLeft: "75px" }} />
                <Typography style={{ clear: "both", display: "inline-block", overflow: "hidden", whiteSpace: "nowrap", fontWeight: "bolder", fontSize: 22, marginLeft: "35px", marginTop: "20px" }}>Get Started with Olanger! </Typography>
              </div>
              <IconButton style={{ height: 40, width: 40, marginLeft: 100 }}
                onClick={() => this.setModalVisible(!modalVisible)}

              >
                <CloseIcon />
              </IconButton>
            </div>
            <div
              className="cccc"
            >
              <TextField
                id="input-with-icon-textfield"
                // label="TextField"
                size="small"
                style={{ width: "90%", padding: "40px 20px 22px 12px", marginLeft: "26px" }}
                placeholder="Please enter your mobile number or Email ID"
                onChange={(e) => { this.setState({ login_id: e.target.value }) }}

                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Mobile} height={24} width={24} />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <Button style={{ background: "#6C60E1", width: "400px", color: "#fff", height: "40px", fontWeight: "lighter", marginLeft: "40px", textTransform: "capitalize" }}
                onClick={() => { this.props.phone_login(this.state.login_id) }}
              >Get OTP</Button>
              <TextField
                // id="input-with-icon-textfield"
                // label="TextField"
                size="small"
                style={{ width: "90%", padding: "14px 14px 22px 12px", marginLeft: "26px" }}
                placeholder="Please the enter the OTP"
                type="number"
                onChange={(e) => { this.setState({ otp: e.target.value }) }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <AccountCircle /> */}
                      <img src={Otp} height={24} width={24} />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <Button style={{ backgroundColor: "white", textTransform: "capitalize", textDecoration: "underline", marginTop: "-20px" }}
                onClick={() => { this.props.send_otp(this.state.login_id) }}
              >
                <Typography style={{ fontSize: 14, marginLeft: "33px" }}>Resend OTP</Typography>
              </Button>
              <Button style={{ background: "#6C60E1", width: "400px", color: "#fff", height: "40px", fontWeight: "lighter", marginLeft: "40px", textTransform: "capitalize", marginBottom: "10PX" }}
                onClick={() => { this.props.verify_otp(this.state.login_id, this.state.otp) }}

              >Continue</Button>

            </div>


            {/* <div className="modal-button">
                            <Button onClick={() => this.setModalVisible(!modalVisible)} className="modal-button1 speaker_btn">close</Button>
                          </div> */}
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginLeft: "30%", marginTop: "-5%", marginBottom: "10%" }}>
            <center style={{ display: "flex", flexDirection: "row" }}>


              <Typography style={{ fontSize: 14, fontWeight: 600 }}>Don’t have an account? </Typography>
              <Button onClick={() => {
                this.setModalVisible1(true);
                this.setModalVisible(false);
              }} style={{ backgroundColor: "white", textTransform: "capitalize", textDecoration: "underline", marginTop: "-6px" }}>
                <Typography style={{ fontSize: 14, marginLeft: "10px" }}>Sign Up</Typography>
              </Button>

            </center>


          </div>
        </Dialog>



      </div >


    )
  }
}


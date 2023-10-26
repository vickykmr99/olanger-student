/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack, Liste } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CurrencyRupee } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import "../../Coursedetails/Component/coursedetails.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Pagination from '@mui/material/Pagination';
import "./course.css";
// import moment from "moment";

export default class Coursedetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButtonIndex: 0,
      activeTab: "All",
      index: -1,
      clickIndex: "",
      allClick: true,
      pcategory_id: "",
      packageIndex: "",
      page: 0,
      setPage: 0,
      rowsPerPage: 9,
      setRowsPerPage: "",
      anchorEl: null,
      open: false,
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

      combinedata: [
        {
          Combinetitle: "SSC + Railway + Banking ",
          Combinedescription: "All SSC exams in one package",
          Combineduration: "Duration : 1 year",
          Combinetarget: "(Target 2023-24)",
          Combinelessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Combinebenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Combineoldprice: "12,000",
          Combinenewprice: "8000",
          CombinebuttonText: "View Details",


        },
        {
          Combinetitle: "SSC + Railway ",
          Combinedescription: "All SSC exams in one package",
          Combineduration: "Duration : 1 year",
          Combinetarget: "(Target 2023-24)",
          Combinelessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Combinebenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Combineoldprice: "12,000",
          Combinenewprice: "8000",
          CombinebuttonText: "View Details",


        },
        {
          Combinetitle: "SSC + Railway + Banking ",
          Combinedescription: "All SSC exams in one package",
          Combineduration: "Duration : 1 year",
          Combinetarget: "(Target 2023-24)",
          Combinelessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Combinebenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Combineoldprice: "12,000",
          Combinenewprice: "8000",
          CombinebuttonText: "View Details",


        },
        {
          Combinetitle: "Railway + Banking ",
          Combinedescription: "All SSC exams in one package",
          Combineduration: "Duration : 1 year",
          Combinetarget: "(Target 2023-24)",
          Combinelessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Combinebenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Combineoldprice: "12,000",
          Combinenewprice: "8000",
          CombinebuttonText: "View Details",


        },


      ],

      powerdata: [
        {
          Powertitle: "SSC  ",
          Powerdescription: "All SSC exams in one package",
          Powerduration: "Duration : 1 year",
          Powertarget: "(Target 2023-24)",
          Powerlessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Powerbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Poweroldprice: "12,000",
          Powernewprice: "8000",
          PowerbuttonText: "View Details",


        },
        {
          Powertitle: "SSC",
          Powerdescription: "All SSC exams in one package",
          Powerduration: "Duration : 1 year",
          Powertarget: "(Target 2023-24)",
          Powerlessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Powerbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Poweroldprice: "12,000",
          Powernewprice: "8000",
          PowerbuttonText: "View Details",


        },
        {
          Powertitle: " Railway",
          Powerdescription: "All SSC exams in one package",
          Powerduration: "Duration : 1 year",
          Powertarget: "(Target 2023-24)",
          Powerlessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Powerbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Poweroldprice: "12,000",
          Powernewprice: "8000",
          PowerbuttonText: "View Details",


        },
        {
          Powertitle: " Banking",
          Powerdescription: "All SSC exams in one package",
          Powerduration: "Duration : 1 year",
          Powertarget: "(Target 2023-24)",
          Powerlessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Powerbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Poweroldprice: "12,000",
          Powernewprice: "8000",
          PowerbuttonText: "View Details",


        },


      ],

      focusdata: [
        {
          Focustitle: "SSC CGL For Tier 1 & tier 2 ",
          Focusdescription: "All SSC exams in one package",
          Focusduration: "Duration : 1 year",
          Focustarget: "(Target 2023-24)",
          Focuslessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Focusbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Focusoldprice: "12,000",
          Focusnewprice: "8000",
          FocusbuttonText: "View Details",


        },
        {
          Focustitle: "SSC CGL For Tier 1 & tier 2 ",
          Focusdescription: "All SSC exams in one package",
          Focusduration: "Duration : 1 year",
          Focustarget: "(Target 2023-24)",
          Focuslessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Focusbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Focusoldprice: "12,000",
          Focusnewprice: "8000",
          FocusbuttonText: "View Details",


        },
        {
          Focustitle: "SSC CGL For Tier 1 & tier 2 ",
          Focusdescription: "All SSC exams in one package",
          Focusduration: "Duration : 1 year",
          Focustarget: "(Target 2023-24)",
          Focuslessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Focusbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Focusoldprice: "12,000",
          Focusnewprice: "8000",
          FocusbuttonText: "View Details",


        },
        {
          Focustitle: "SSC CHSL For Tier 1 & tier 2 ",
          Focusdescription: "All SSC exams in one package",
          Focusduration: "Duration : 1 year",
          Focustarget: "(Target 2023-24)",
          Focuslessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Focusbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Focusoldprice: "12,000",
          Focusnewprice: "8000",
          FocusbuttonText: "View Details",


        },


      ],

      studentspdata: [
        {
          Studentsptitle: "SSC GK For Tier 1 & tier 2 ",
          Studentspdescription: "All SSC exams in one package",
          Studentspduration: "Duration : 1 year",
          Studentsptarget: "(Target 2023-24)",
          Studentsplessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Studentspbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Studentspoldprice: "12,000",
          Studentspnewprice: "8000",
          StudentspbuttonText: "View Details",


        },
        {
          Studentsptitle: "SSC GK For Tier 1 & tier 2 ",
          Studentspdescription: "All SSC exams in one package",
          Studentspduration: "Duration : 1 year",
          Studentsptarget: "(Target 2023-24)",
          Studentsplessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Studentspbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Studentspoldprice: "12,000",
          Studentspnewprice: "8000",
          StudentspbuttonText: "View Details",


        },
        {
          Studentsptitle: "SSC GK For Tier 1 & tier 2 ",
          Studentspdescription: "All SSC exams in one package",
          Studentspduration: "Duration : 1 year",
          Studentsptarget: "(Target 2023-24)",
          Studentsplessonbenefit: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          Studentspbenefit: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          Studentspoldprice: "12,000",
          Studentspnewprice: "8000",
          StudentspbuttonText: "View Details",


        },
      ]

    };
  }
  componentDidMount() {
    this.props.viewAllPackageGroupBypCategory();
    this.props.viewAllCategory();
    this.props.viewAllPackage(this.state.page, this.state.rowsPerPage);
    console.log('packcom', this.props.coursedetails.all_package)
  }

  render() {

    const { activeTab } = this.state;
    const {
      coursedetails,
      home,
      snackbar,
      close_snack_bar
    } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const handleChangePage = (event, newPage) => {
      this.props.viewAllPackage(newPage - 1, this.state.rowsPerPage);
      this.setState({
        page: newPage,
      });
    };

    return (
      <Grid className="coursepage">

        <Grid className="main-container-course">

          <Grid className="sidebar-category">

            <Typography
              marginLeft='1%'
              style={{ color: 'var(--nuetrals-nuetrals-n-900, #141226)', fontSize: '2rem', fontWeight: 600, marginBottom: '5%' }}>
              Courses
            </Typography>

            <Grid style={{ width: "100%", marginTop: "2%" }} >
              <Grid className="testseriessidebar" style={{ paddingRight: '30px', paddingLeft: '30px' }}>
                <a
                  style={this.state.allClick ? {
                    color: '#3E30C2',
                    fontWeight: 700,
                    borderBottom: "0.1875rem solid #F96255",
                    WebkitTextFillColor: "#3E30C2",
                  } : {}}
                  onClick={() => {
                    this.setState({ allClick: true, clickIndex: "" })
                    this.props.searchPackage(coursedetails.all_package, "")
                  }}>All</a>
                {Array.isArray(this.props.testseries.test_series_category) &&
                  this.props.testseries.test_series_category.map((item, index) => {
                    return (
                      <a
                        style={this.state.clickIndex === index ? {
                          color: '#3E30C2',
                          fontWeight: 700,
                          borderBottom: "0.1875rem solid #F96255",
                          WebkitTextFillColor: "#3E30C2",
                        } : {}}
                        onClick={() => {
                          this.setState({ clickIndex: index, allClick: false })
                          this.props.searchPackage(coursedetails.all_package, item.category_name)
                        }}>{item.category_name}</a>
                    )
                  })}

              </Grid>
            </Grid>
          </Grid>



          <Grid className="right-cards-part">

            <Tabs>
              <TabList className="course-tab">
                <Grid container direction={"row"} >
                  <Grid e xs={3} style={{ display: "flex", gap: "17px" }}>
                    <Tab
                      className={`${activeTab === "All" ? "tab-n" : "tab-m"}`}
                      onClick={() => {
                        this.setState({ activeTab: "All" });
                        this.props.searchPackage(coursedetails.all_package, "")
                      }}
                    >All</Tab>

                    {Array.isArray(coursedetails.all_package_by_pcategory) && coursedetails.all_package_by_pcategory.map((e, index) => {
                      return (
                        <Tab value={e._id}
                          className={`${activeTab === e.packagecategory_name ? "tab-n" : "tab-m"}`}
                          onClick={() => {
                            this.setState({ activeTab: e.packagecategory_name, pcategory_id: e._id, packageIndex: index });
                            console.log("combined_id", e._id)
                          }}
                        >{e.packagecategory_name}</Tab>
                      );
                    })}
                  </Grid>
                </Grid>
              </TabList>


              <TabPanel className="tab-cards">

                <Grid
                  className="contain-c" style={{marginTop: "-20px"}}
                  mt={2}>

                  {Array.isArray(coursedetails.search_package) && coursedetails.search_package.map((e) => {
                    // console.log("hiiiiiii", coursedetails.search_package)
                    return (
                      <Card
                        variant="outlined"
                        sx={{
                          // maxwidth: "311px",
                          borderRadius: "20.9494px",
                          height: "20rem",
                          // paddingBottom: "2%",
                          // height: "281.77px",
                          marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)"
                        }}
                      >
                        <CardContent>

                          <Typography
                            sx={{ fontSize: 18, fontWeight: "700" }}
                            gutterBottom
                            textAlign="center"
                          >
                            {e.package_name !== undefined && e.package_name}
                          </Typography>
                          <Typography
                            style={{ fontSize: "13px", color: "blue", marginLeft: "5%", marginTop: "-1%" }}
                          >
                            ({e.packagecategory_name !== undefined && e.packagecategory_name})
                          </Typography>

                          <Typography
                            sx={{ fontSize: '0.8rem', marginTop: "3%" }}
                            style={{ display: "flex", justifyContent: "center", alignes: "center", fontWeight: "500" }}
                            gutterBottom
                            textAlign="center"
                          >  <AccessTimeIcon style={{ color: '#F96255', fontSize: '18px' }} /> Duration : {e.package_duration !== undefined && e.package_duration}  <span style={{ color: "#F96255", fontWeight: "600" }}>(Target {(new Date().getFullYear())}-{(new Date().getFullYear()) + parseInt(e.package_duration)})</span>
                          </Typography>
                          <Card className="cards" variant="outlined" sx={{ borderRadius: "16px", border: "2px solid lightgray" }} style={{ width: "100%", height: "1%" }}>
                            <CardContent style={{ width: "100%" }}>
                              <Typography
                                sx={{ fontSize: 14 }}
                                gutterBottom
                                textAlign="center"
                              >

                                {e.package_desc}

                              </Typography>

                              <Typography sx={{ fontSize: 11 }} style={{ width: "100%", textAlign: "center" }}>
                                (Video Lessons + PDFs + Quizzes + Doubt Clear)
                              </Typography>
                            </CardContent>

                          </Card>
                          <Typography style={{ fontSize: '10px', textAlign: "center" }}>Supported by Examys ai & Course Training</Typography>


                        </CardContent>
                        <CardActions
                          style={{ justifyContent: "space-between", gap: "10px", marginTop: "0%", marginBottom: "5%", paddingBottom: "29px" }}
                        >
                          <Box style={{ display: "flex", justifyContent: "space-around" }}>
                            <Typography
                              style={{ display: "flex", justifyContent: "center", alignes: "center", textDecoration: "line-through", color: "#72717D" }}
                              textAlign="center"
                              sx={{ fontWeight: "bold" }}
                            ><CurrencyRupee style={{ fontSize: "14px", color: "#72717D" }} />
                              {e.package_price}
                            </Typography>

                            <Typography
                              style={{ display: "flex", justifyContent: "center", alignes: "center", color: "green" }}
                              textAlign="center"
                              sx={{ fontWeight: "bold" }}
                            ><CurrencyRupee style={{ fontSize: "14px" }} marginTop="10%" />
                              {e.discounted_price}
                            </Typography>
                          </Box>
                          <Link to="/CourseviewDetail"
                            onClick={() => {
                              // this.props.setPackage(e);
                              this.props.setPackageId(e._id);
                              this.props.setPackageName(e.package_name);
                              this.props.setPackageValiditi(e.package_duration);
                              this.props.setPackagePrice(e.package_price);
                              this.props.setPackageDiscountPrice(e.discounted_price);
                              // this.props.setPackageSubjectName(e.package_content.category.subject.subject_name);
                            }}>
                            <button className="view-btn">View Details</button>
                          </Link>
                        </CardActions>
                      </Card>
                    );
                  })}
                </Grid>

              </TabPanel>


              {Array.isArray(coursedetails.all_package_by_pcategory) && coursedetails.all_package_by_pcategory.map((e, index) => {
                return (
                  <TabPanel className="tab-cards">

                    <Grid
                      className="contain-c" style={{marginTop: "-1px"}}
                      mt={2}>


                      {Array.isArray(coursedetails.search_package) && coursedetails.search_package.map((e, index) => {
                        if (this.state.pcategory_id === e.packagecategory_id) {
                          return (

                            // <Grid e md={4} xs={6}>
                            <Card
                              key={index}
                              variant="outlined"
                              sx={{
                                // maxwidth: "311px",
                                borderRadius: "20.9494px",
                                height: "90%",
                                // paddingBottom: "2%",
                                // height: "281.77px",
                                borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)"
                              }}
                            >
                              <CardContent>
                                <Typography
                                  sx={{ fontSize: 18, fontWeight: "700" }}
                                  gutterBottom
                                  textAlign="center"
                                >
                                  {e.package_name !== undefined && e.package_name}
                                </Typography>
                                <Typography style={{ fontSize: "13px", color: "blue", marginLeft: "5%", marginTop: "-1%" }}>({e.packagecategory_name !== undefined && e.packagecategory_name})</Typography>

                                <Typography
                                  sx={{ fontSize: 14, marginTop: "3%" }}
                                  style={{ display: "flex", justifyContent: "center", alignes: "center", fontWeight: "500" }}
                                  gutterBottom
                                  textAlign="center"
                                >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>

                                  Duration : {e.package_duration !== undefined && e.package_duration}  <span style={{ color: "#F96255", fontWeight: "600" }}>(Target {(new Date().getFullYear())}-{(new Date().getFullYear()) + parseInt(e.package_duration)})</span>
                                </Typography>
                                <Card className="cards" variant="outlined" sx={{ borderRadius: "16px", border: "2px solid lightgray" }} style={{ width: "100%", height: "1%" }}>
                                  <CardContent style={{ width: "100%" }}>
                                    <Typography
                                      sx={{ fontSize: 14 }}
                                      gutterBottom
                                      textAlign="center"
                                    >

                                      {e.package_desc}

                                    </Typography>
                                    <Typography sx={{ fontSize: 11 }} style={{ width: "100%", textAlign: "center" }}>
                                      (Video Lessons + PDFs + Quizzes + Doubt Clear)


                                    </Typography>
                                  </CardContent>

                                </Card>
                                <Typography style={{ fontSize: '10px' }}>Supported by Examys ai & Course Training</Typography>


                              </CardContent>
                              <CardActions
                                style={{ justifyContent: "space-between", gap: "10px", marginTop: "10%", marginBottom: "5%", paddingBottom: "29px" }}
                              >
                                <Box style={{ display: "flex", justifyContent: "center" }}>
                                  <Typography
                                    style={{ display: "flex", justifyContent: "center", alignes: "center", textDecoration: "line-through", color: "#72717D" }}
                                    textAlign="center"
                                    sx={{ fontWeight: "bold" }}
                                  ><CurrencyRupee style={{ fontSize: "14px", color: "#72717D" }} />
                                    {e.package_price}
                                  </Typography>

                                  <Typography
                                    style={{ display: "flex", justifyContent: "center", alignes: "center", color: "green" }}
                                    textAlign="center"
                                    sx={{ fontWeight: "bold" }}
                                  ><CurrencyRupee style={{ fontSize: "14px" }} marginTop="10%" />
                                    {e.discounted_price}
                                  </Typography>
                                </Box>
                                <Link to="/viewdetails">
                                  <button className="view-btn"
                                    onClick={() => {
                                      this.props.setPackage(e);
                                      this.props.setPackageId(e._id);
                                      this.props.setPackageName(e.package_name);
                                      this.props.setPackageValiditi(e.package_duration);
                                      this.props.setPackagePrice(e.package_price);
                                      this.props.setPackageDiscountPrice(e.discounted_price);
                                      this.props.setPackageCategory(e.packagecategory_name);
                                      // this.props.setPackageSubjectName(e.package_content.category.subject.subject_name);
                                    }}
                                  >View Details</button>
                                </Link>
                              </CardActions>
                            </Card>
                          );
                        }
                      })}
                    </Grid>
                  </TabPanel>
                );
              })}

            </Tabs>

            <div style={{ display: "flex", justifyContent: "flex-end", margin: "2% 2% 2% 0%" }}>
              <Pagination
                count={parseInt(coursedetails.package_length / 9) + 1}
                siblingCount={0}
                size="small"
                onChange={handleChangePage}
              />
            </div>

          </Grid>


        </Grid>

      </Grid>
    );
  }
}
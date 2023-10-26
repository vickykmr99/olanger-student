import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./multicard.css"
import { Card, Typography, Box, Grid, Link } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CurrencyRupee } from "@mui/icons-material";
import Tabs from '@mui/material/Tabs';
// import  {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../../CourseAdvantages/Component/focuspacks.css";
// import FocusTabcategory from "../../CourseAdvantages/Component/tabpackagecat";


class focuspackhome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      category_id: "",


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
      ]
    };
  }


  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  componentDidMount() {
    // this.props.viewAllPackageGroupByCategory(this.props.home.category_id);
    // console.log("caaacacacca", this.props.home.all_category)
  }

  render() {
    const { value } = this.state;
    const { home } = this.props
    const data = [
      {

        titlestd: "SSC CGl Tier 1 & tier 2 ",
        focusstd: "(Focus Package)",
        descriptionstd: "All SSC exams in one package",
        durationstd: "Duration : 1 year",
        targetstd: "(Target 2023-24)",
        lessonbenefitstd: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
        benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
        suppstd: "Supported by ",
        suppstd1: "examys ai ",
        suppstd2: "& ",
        oldpricestd: "12,000",
        newpricestd: "8000",
        buttonTextstd: "View Details"
      },
      {

        titlestd: "SSC CGl Tier 1 & tier 2 ",
        focusstd: "(Focus Package)",
        descriptionstd: "All SSC exams in one package",
        durationstd: "Duration : 1 year",
        targetstd: "(Target 2023-24)",
        lessonbenefitstd: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
        benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
        suppstd: "Supported by ",
        suppstd1: "examys ai ",
        suppstd2: "& ",
        oldpricestd: "12,000",
        newpricestd: "8000",
        buttonTextstd: "View Details"
      },
      {

        titlestd: "SSC CGl Tier 1 & tier 2 ",
        focusstd: "(Focus Package)",
        descriptionstd: "All SSC exams in one package",
        durationstd: "Duration : 1 year",
        targetstd: "(Target 2023-24)",
        lessonbenefitstd: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
        benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
        suppstd: "Supported by ",
        suppstd1: "examys ai ",
        suppstd2: "& ",
        oldpricestd: "12,000",
        newpricestd: "8000",
        buttonTextstd: "View Details"
      },
      {

        titlestd: "SSC CGl Tier 1 & tier 2 ",
        focusstd: "(Focus Package)",
        descriptionstd: "All SSC exams in one package",
        durationstd: "Duration : 1 year",
        targetstd: "(Target 2023-24)",
        lessonbenefitstd: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
        benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
        suppstd: "Supported by ",
        suppstd1: "examys ai ",
        suppstd2: "& ",
        oldpricestd: "12,000",
        newpricestd: "8000",
        buttonTextstd: "View Details"
      },
      {

        titlestd: "SSC CGl Tier 1 & tier 2 ",
        focusstd: "(Focus Package)",
        descriptionstd: "All SSC exams in one package",
        durationstd: "Duration : 1 year",
        targetstd: "(Target 2023-24)",
        lessonbenefitstd: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
        benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
        suppstd: "Supported by ",
        suppstd1: "examys ai ",
        suppstd2: "& ",
        oldpricestd: "12,000",
        newpricestd: "8000",
        buttonTextstd: "View Details"
      },
      {

        titlestd: "SSC CGl Tier 1 & tier 2 ",
        focusstd: "(Focus Package)",
        descriptionstd: "All SSC exams in one package",
        durationstd: "Duration : 1 year",
        targetstd: "(Target 2023-24)",
        lessonbenefitstd: " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
        benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
        suppstd: "Supported by ",
        suppstd1: "examys ai ",
        suppstd2: "& ",
        oldpricestd: "12,000",
        newpricestd: "8000",
        buttonTextstd: "View Details"
      },
    ];

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },

      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <>

        <Grid>


          {/* <Box sx={{ marginLeft: "10%", width: "80%" }}>
            <Carousel responsive={responsive}>

            

              {this.state.tabdata.map((item, index) => {
                return (
                  <button className='tab-list-t'>
                    {item.categoryname}
                  </button>
                )

              })}

             



             

            </Carousel>
          </Box> */}

          {/* <FocusTabcategory/> */}

          <Grid style={{ marginLeft: "2%", marginRight: "3%" }}>

            {/* focus package section */}
            <div className="App" style={{ marginTop: "2%" }}>
              <Grid style={{ display: "flex" }}>
                <Typography style={{ fontSize: "24px", fontWeight: "600", marginLeft: "3%" }}>Focus Package </Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography style={{ fontSize: "24px", fontStyle: "italic" }}>
                    (Explore All power package)
                  </Typography>
                </Link>

              </Grid>

              <div style={{ position: "relative", marginTop: "4%" }}>
                <Carousel responsive={responsive}>
                  {home.all_package_by_category.filter(el => el.packagecategory_name === "Focus Package").map((item, index) => {
                    console.log("ccfdffffffffffffffffff", home.all_package_by_category.filter(el => el.packagecategory_name === "Focus Package"))
                    return (
                      <Box sx={{ maxWidth: 530, maxHeight: 350, margin: 2, border: "1.5px solid black", borderRadius: "10.9494px", }}>
                        <Card
                          variant="outlined"
                          sx={{
                            borderRadius: "10.9494px",
                            // marginTop: "20px",
                            // borderColor: "black",
                            width: "auto",
                            boxShadow:
                              "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)",

                            // marginLeft: "5%",
                          }}
                        >
                          <CardContent>
                            <Typography
                              sx={{ fontSize: "18.85px", fontWeight: "600" }}
                              gutterBottom
                              textAlign="center"
                            >
                              {item.package_name}
                            </Typography>
                            <Typography
                              style={{
                                fontSize: "13px",
                                color: "#6C60E1",
                                marginLeft: "20%",
                                fontStyle: "italic",
                                fontWeight: "500",
                              }}
                            >
                              {item.packagecategory_name}
                            </Typography>

                            <Typography
                              sx={{ fontSize: 14 }}
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "500",
                              }}
                              gutterBottom
                              textAlign="center"
                            >
                              {" "}
                              <span
                                style={{ color: "red", fontSize: "5px" }}
                                sx={{ fontSize: 1 }}
                              >
                                <AccessTimeIcon />
                              </span>
                              Duration: {" "}
                              <span style={{ color: "#F96255", fontWeight: "600" }}>
                                {item.package_duration}
                              </span>
                            </Typography>
                            <Card
                              className="cards"
                              variant="outlined"
                              sx={{
                                borderRadius: "16px",
                                border: "2px solid lightgray",
                              }}
                              style={{ width: "100%" }}
                            >
                              <CardContent style={{ width: "100%" }}>
                                <Typography
                                  sx={{
                                    fontSize: 14,
                                    fontWeight: "400",
                                    lineHeight: "23.04px",
                                  }}
                                  gutterBottom
                                  textAlign="center"
                                >
                                  {item.package_desc}
                                </Typography>

                                <Typography
                                  sx={{ fontSize: 11 }}
                                  style={{
                                    width: "100%",
                                    color: "grey",
                                    fontWeight: "500",
                                  }}
                                >
                                  (Video Lessons + PDFs + Quizzes + Doubt Clear)
                                </Typography>
                              </CardContent>
                            </Card>
                            <Typography
                              style={{
                                fontSize: "11px",
                                marginLeft: "7%",
                                fontWeight: "500",
                                color: "#4A4958",
                              }}
                            >
                              Supported by examys ai & Course journey
                            </Typography>
                          </CardContent>

                          <CardActions
                            style={{ justifyContent: "space-between", gap: "10px", display: "flex" }}
                          >
                            <Box
                              style={{ display: "flex", justifyContent: "center", width: "200px" }}
                            >
                              <Typography
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  textDecoration: "line-through",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "grey",
                                }}
                                textAlign="center"
                                sx={{ fontWeight: "bold" }}
                              >
                                <CurrencyRupee
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "grey",
                                    // marginLeft:"10%"
                                  }}
                                />
                                {item.package_price}
                              </Typography>

                              <Typography
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "green",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                                textAlign="center"
                                sx={{ fontWeight: "bold" }}
                              >
                                <CurrencyRupee
                                  marginTop="10%"
                                  style={{ fontSize: "14px", fontWeight: "500" }}
                                />
                                {item.discounted_price}
                              </Typography>

                            </Box>
                            <Link to="/viewdetails" style={{ textDecoration: "none" }}>
                              <button variant="contained" style={{ padding: "5px", fontWeight: "600", marginLeft: "-5%", fontSize: 14, width: "100%", marginRight: "15%" }} className="btn ctrl">
                                View Details
                              </button>
                            </Link>
                          </CardActions>
                        </Card>
                      </Box>
                      // </div>

                    )
                  })}
                </Carousel>
              </div>
            </div>


            {/* power package section */}
            <div className="App" style={{ marginTop: "2%" }}>
              <Grid style={{ display: "flex" }}>
                <Typography style={{ fontSize: "24px", fontWeight: "600", marginLeft: "3%" }}>Power Package </Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography style={{ fontSize: "24px", fontStyle: "italic" }}>
                    (Explore All power package)
                  </Typography>
                </Link>

              </Grid>

              <div style={{ position: "relative", marginTop: "4%" }}>
                <Carousel responsive={responsive}>
                  {home.all_package_by_category.filter(el => el.packagecategory_name === "Power Package").map((item1, index) => {
                    console.log("ppppppppppppppppppppppp", home.all_package_by_category.filter(el => el.packagecategory_name === "Power Package"))
                    return (
                      // <div className='card'  >
                      <Box sx={{ maxWidth: 530, maxHeight: 350, margin: 2, border: "1.5px solid black", borderRadius: "10.9494px", }}>
                        <Card
                          variant="outlined"
                          sx={{
                            borderRadius: "10.9494px",
                            // marginTop: "20px",
                            // borderColor: "black",
                            width: "auto",
                            boxShadow:
                              "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)",

                            // marginLeft: "5%",
                          }}
                        >
                          <CardContent>
                            <Typography
                              sx={{ fontSize: "18.85px", fontWeight: "600" }}
                              gutterBottom
                              textAlign="center"
                            >
                              {item1.package_name}
                            </Typography>
                            <Typography
                              style={{
                                fontSize: "13px",
                                color: "#6C60E1",
                                marginLeft: "20%",
                                fontStyle: "italic",
                                fontWeight: "500",
                              }}
                            >
                              {item1.packagecategory_name}
                            </Typography>

                            <Typography
                              sx={{ fontSize: 14 }}
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "500",
                              }}
                              gutterBottom
                              textAlign="center"
                            >
                              {" "}
                              <span
                                style={{ color: "red", fontSize: "5px" }}
                                sx={{ fontSize: 1 }}
                              >
                                <AccessTimeIcon />
                              </span>
                              Duration: {" "}
                              <span style={{ color: "#F96255", fontWeight: "600" }}>
                                {item1.package_duration}
                              </span>
                            </Typography>
                            <Card
                              className="cards"
                              variant="outlined"
                              sx={{
                                borderRadius: "16px",
                                border: "2px solid lightgray",
                              }}
                              style={{ width: "100%" }}
                            >
                              <CardContent style={{ width: "100%" }}>
                                <Typography
                                  sx={{
                                    fontSize: 14,
                                    fontWeight: "400",
                                    lineHeight: "23.04px",
                                  }}
                                  gutterBottom
                                  textAlign="center"
                                >
                                  {item1.package_desc}
                                </Typography>

                                <Typography
                                  sx={{ fontSize: 11 }}
                                  style={{
                                    width: "100%",
                                    color: "grey",
                                    fontWeight: "500",
                                  }}
                                >
                                  (Video Lessons + PDFs + Quizzes + Doubt Clear)
                                </Typography>
                              </CardContent>
                            </Card>
                            <Typography
                              style={{
                                fontSize: "11px",
                                marginLeft: "7%",
                                fontWeight: "500",
                                color: "#4A4958",
                              }}
                            >
                              Supported by examys ai & Course journey
                            </Typography>
                          </CardContent>

                          <CardActions
                            style={{ justifyContent: "space-between", gap: "10px", display: "flex" }}
                          >
                            <Box
                              style={{ display: "flex", justifyContent: "center", width: "200px" }}
                            >
                              <Typography
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  textDecoration: "line-through",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "grey",
                                }}
                                textAlign="center"
                                sx={{ fontWeight: "bold" }}
                              >
                                <CurrencyRupee
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "grey",
                                    // marginLeft:"10%"
                                  }}
                                />
                                {item1.package_price}
                              </Typography>

                              <Typography
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "green",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                                textAlign="center"
                                sx={{ fontWeight: "bold" }}
                              >
                                <CurrencyRupee
                                  marginTop="10%"
                                  style={{ fontSize: "14px", fontWeight: "500" }}
                                />
                                {item1.discounted_price}
                              </Typography>

                            </Box>
                            <Link to="/viewdetails" style={{ textDecoration: "none" }}>
                              <button variant="contained" style={{ padding: "5px", fontWeight: "600", marginLeft: "-5%", fontSize: 14, width: "100%", marginRight: "15%" }} className="btn ctrl">
                                View Details
                              </button>
                            </Link>
                          </CardActions>
                        </Card>
                      </Box>
                      // </div>
                    )
                  })
                  }
                </Carousel>
              </div>
            </div>



            {/* Combined package section */}
            <div className="App" style={{ marginTop: "2%" }}>
              <Grid style={{ display: "flex" }}>
                <Typography style={{ fontSize: "24px", fontWeight: "600", marginLeft: "3%" }}>Combined Package </Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography style={{ fontSize: "24px", fontStyle: "italic" }}>
                    (Explore All power package)
                  </Typography>
                </Link>

              </Grid>

              <div style={{ position: "relative", marginTop: "4%" }}>
                <Carousel responsive={responsive}>
                  {home.all_package_by_category.filter(el => el.packagecategory_name === "Combined Package").map((item2, index) => {
                    console.log("ppppppppppppppppppppppp", home.all_package_by_category.filter(el => el.packagecategory_name === "Combined Package"))
                    return (
                      // <div className='card'  >
                      <Box sx={{ maxWidth: 530, maxHeight: 350, margin: 2, border: "1.5px solid black", borderRadius: "10.9494px", }}>
                        <Card
                          variant="outlined"
                          sx={{
                            borderRadius: "10.9494px",
                            // marginTop: "20px",
                            // borderColor: "black",
                            width: "auto",
                            boxShadow:
                              "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)",

                            // marginLeft: "5%",
                          }}
                        >
                          <CardContent>
                            <Typography
                              sx={{ fontSize: "18.85px", fontWeight: "600" }}
                              gutterBottom
                              textAlign="center"
                            >
                              {item2.package_name}
                            </Typography>
                            <Typography
                              style={{
                                fontSize: "13px",
                                color: "#6C60E1",
                                marginLeft: "20%",
                                fontStyle: "italic",
                                fontWeight: "500",
                              }}
                            >
                              {item2.packagecategory_name}
                            </Typography>

                            <Typography
                              sx={{ fontSize: 14 }}
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "500",
                              }}
                              gutterBottom
                              textAlign="center"
                            >
                              {" "}
                              <span
                                style={{ color: "red", fontSize: "5px" }}
                                sx={{ fontSize: 1 }}
                              >
                                <AccessTimeIcon />
                              </span>
                              Duration :{" "}
                              <span style={{ color: "#F96255", fontWeight: "600" }}>
                                {item2.package_duration}
                              </span>
                            </Typography>
                            <Card
                              className="cards"
                              variant="outlined"
                              sx={{
                                borderRadius: "16px",
                                border: "2px solid lightgray",
                              }}
                              style={{ width: "100%" }}
                            >

                              <CardContent style={{ width: "100%" }}>
                                <Typography
                                  sx={{
                                    fontSize: 14,
                                    fontWeight: "400",
                                    lineHeight: "23.04px",
                                  }}
                                  gutterBottom
                                  textAlign="center"
                                >
                                  {item2.package_desc}
                                </Typography>

                                <Typography
                                  sx={{ fontSize: 11 }}
                                  style={{
                                    width: "100%",
                                    color: "grey",
                                    fontWeight: "500",
                                  }}
                                >
                                  (Video Lessons + PDFs + Quizzes + Doubt Clear)
                                </Typography>
                              </CardContent>
                            </Card>
                            <Typography
                              style={{
                                fontSize: "11px",
                                marginLeft: "7%",
                                fontWeight: "500",
                                color: "#4A4958",
                              }}
                            >
                              Supported by examys ai & Course journey
                            </Typography>
                          </CardContent>

                          <CardActions
                            style={{ justifyContent: "space-between", gap: "10px", display: "flex" }}
                          >
                            <Box
                              style={{ display: "flex", justifyContent: "center", width: "200px" }}
                            >
                              <Typography
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  textDecoration: "line-through",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "grey",
                                }}
                                textAlign="center"
                                sx={{ fontWeight: "bold" }}
                              >
                                <CurrencyRupee
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "grey",
                                    // marginLeft:"10%"
                                  }}
                                />
                                {item2.package_price}
                              </Typography>

                              <Typography
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "green",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                                textAlign="center"
                                sx={{ fontWeight: "bold" }}
                              >
                                <CurrencyRupee
                                  marginTop="10%"
                                  style={{ fontSize: "14px", fontWeight: "500" }}
                                />
                                {item2.discounted_price}
                              </Typography>

                            </Box>
                            <Link to="/Viewdetails" style={{ textDecoration: "none" }}>
                              <button variant="contained" style={{ padding: "5px", fontWeight: "600", marginLeft: "-5%", fontSize: 14, width: "100%", marginRight: "15%" }} className="btn ctrl">
                                View Details
                              </button>
                            </Link>
                          </CardActions>
                        </Card>
                      </Box>
                      // </div>
                    )
                  })}
                </Carousel>
              </div>
            </div>

          </Grid>
        </Grid>
      </>
    );
  }
}

export default focuspackhome;
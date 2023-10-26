import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./multicard.css"
import { Card, Typography, Box, Grid, Link, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CurrencyRupee } from "@mui/icons-material";
import image1 from "../../../../images/profile-tict.png";




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

const MultiCard = (props) => {
  
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



      <Grid container style={{ marginTop: "3%" }}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <Grid
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "75px",
              backgroundColor: "#FBDCD9",
              padding: "24px",
              border: "2px",
            }}
          >
            <img
              style={{
                alignSelf: "center",
                marginLeft: "4%",
                marginTop: "5%",
                width: "72px",
                height: "72px",
              }}
              src={image1}
            />
          </Grid>
          <Grid>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "32px",
                fontWeight: "600",
                lineHeight: "48px",
              }}
            >
              Students Special
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "28px",
                fontWeight: "600",
                lineHeight: "42px",
              }}
            >
              Prepare Govt. job with Semister
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "20.8px",
              }}
            >
              Make your foundation strong while in college and when you pass
              out, be ready for govt. exams.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "5%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <Grid>
            <Typography className="midheaing">Are you a student?:</Typography>
            <Typography className="middesc">
              Are you continuing your study?
            </Typography>
            <Typography className="middesc">
              Examys rolls out special course for you.
            </Typography>
          </Grid>

          <Grid className="listctrl">
            <Typography className="midheaing">Each course contains:</Typography>
            <ul>
              <li className="middesc" style={{ lineHeight: 2 }}>
                <span
                  style={{
                    color: "#201E31",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px",
                    fontFamily: "poppins",
                  }}
                >
                  Extended
                </span>{" "}
                Foundation
              </li>
              <li className="middesc" style={{ lineHeight: 2 }}>
                In-depth Course & Trend questions <br />
                powered by
                <span
                  style={{
                    color: "#201E31",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px",
                    fontFamily: "poppins",
                  }}
                >
                  Examys ai
                </span>
              </li>
              <li className="middesc" style={{ lineHeight: 2 }}>
                Previous year paper
              </li>
              <li className="middesc" style={{ lineHeight: 2 }}>
                Test Series
              </li>
            </ul>
          </Grid>

          <Grid>
            <Typography className="midheaing">
              Special Course & Validity:
            </Typography>
            <Typography className="middesc">
              Selected focus/power/Combined Packages{" "}
            </Typography>
            <Typography className="middesc">
              Course Validity - 1/2/3 Years
            </Typography>
          </Grid>
        </Grid>

        {/* card slider here */}




      </Grid>





      {/* //carousel */}
      <Grid style={{ marginLeft: "3%", marginRight: "4%" }}>

        <div style={{ position: "relative", marginTop: "2%" }}>
          <Carousel responsive={responsive}>
            
              {Array.isArray(props.home.all_package_by_category) && props.home.all_package_by_category.map((item, index) => {
                console.log("tttpppppttttttttttttpppppp",props.home.all_package_by_category)
                return (
                // <div className='card'>
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
                       Duration:{ " "}
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
              )})
            }
          </Carousel>
        </div>

        <center>
          <Button style={{
            color: "#FFF",

            /* Heading / H2 - Bold */
            fontFamily: "Poppins",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "600",
            // left: "40%",
            lineHeight: "normal",
            display: "flex",
            padding: "8px 6px",
            alignItems: "center",
            borderRadius: "8px",
            background: "#3E30C2",
          }} variant="contained">Explore More</Button>
        </center>
      </Grid>





    </>
  )
}

export default MultiCard;
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
// import image1 from  "../../../../images/profile-tick.jpeg";
import image1 from "../../../../images/profile-tict.png";
import "../../Student/Components/studentspecial.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import { CurrencyRupee } from "@mui/icons-material";
export default class studentspecial extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.viewStudentSpecial();
    console.log(this.props.studentspecial.student_special)
  }
  render() {
    return (
      <Grid pt="65px" container style={{ marginTop: "10%", marginBottom: "10%" }}>
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
              <li className="middesc" style={{ lineHeight: 2 }}><span style={{ color: "#201E31", fontSize: '16px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px', fontFamily: 'poppins' }}>Extended</span> Foundation</li>
              <li className="middesc" style={{ lineHeight: 2 }}>In-depth Course & Trend questions{" "}
                <br />
                powered by<span style={{ color: "#201E31", fontSize: '16px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px', fontFamily: 'poppins' }}>Examys ai</span></li>
              <li className="middesc" style={{ lineHeight: 2 }}>Previous year paper</li>
              <li className="middesc" style={{ lineHeight: 2 }}>Test Series</li>
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


        {/* video section */}
        <Grid item xs={12} style={{ marginTop: "5%", }}>
          <center>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#340101",
                width: "300px",
                height: "74px",
                gap: "8px",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "26px",
                }}
              >
                Video Section
              </Typography>
            </Button>
          </center>
        </Grid>

        <Grid container spacing={1} display={"flex"} direction="row" style={{ background: "linear-gradient(180deg, #FFF 0%, #ECF3F9 100%)" }}>
          {Array.isArray(this.props.studentspecial.student_special) && this.props.studentspecial.student_special.map((item) => {
            return (
              <Grid item xs={6} sm={4} md={3} m={0}>
                <Box sx={{ maxWidth: 530, margin: "1%" }}>
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: "20.9494px",
                      marginTop: "20px",
                      borderColor: "black",
                      boxShadow:
                        "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)",
                      border: "1.5px solid black",
                      marginLeft: "5%",
                    }}
                  >
                    <CardContent>
                      {/* <Box style={{marginLeft:"6%"}}> */}
                      <Typography
                        sx={{ fontSize: "100%", marginLeft: "8%", fontWeight: "600" }}
                        gutterBottom

                      >
                        {item.package_name}
                      </Typography>

                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "#6C60E1",

                          fontStyle: "italic",
                          fontWeight: "500",
                          marginLeft: "8%"
                        }}
                      >
                        {item.packagecategory_name}
                      </Typography>
                      {/* </Box> */}
                      <Typography
                        sx={{ fontSize: "85%" }}
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
                          style={{ color: "red", fontSize: "5px", }}
                          sx={{ fontSize: 1 }}
                        >
                          <AccessTimeIcon />{" "}
                        </span>
                        Duration : {item.package_duration !== undefined && item.package_duration}  <span style={{ color: "#F96255", fontWeight: "600" }}>(Target {(new Date().getFullYear())}-{(new Date().getFullYear()) + parseInt(item.package_duration)})</span>
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
                              fontWeight: "500",
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
                              textAlign: "center"
                            }}
                          >
                            (Video Lessons + PDFs + Quizzes + Doubt Clear)
                          </Typography>
                        </CardContent>
                      </Card>

                      <Typography
                        style={{ textAlign: "center" }}
                      >

                        <span style={{
                          fontSize: "11px",

                          color: "#4A4958",
                        }}>Supported by </span>

                        <span style={{
                          fontSize: "11px",
                          fontWeight: "500",
                          color: "#4A4958",
                        }}>
                          <strong>examys ai </strong>
                        </span>

                        <span style={{
                          fontSize: "11px",
                          color: "#4A4958",

                        }}>"& "</span>

                        <span style={{
                          fontSize: "11px",
                          fontWeight: "500",
                          color: "#4A4958",
                        }}>
                          <strong>Course journey</strong>
                        </span>

                      </Typography>
                    </CardContent>

                    <CardActions
                      style={{ justifyContent: "space-between", gap: "10px", display: "flex" }}
                    >
                      <Box
                        style={{ display: "flex", justifyContent: "center" }}
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
                          {item.discounted_price}
                        </Typography>

                        <Typography
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "green",
                            fontSize: "14px",
                            fontWeight: "500",
                            marginLeft: "8px",
                          }}
                          textAlign="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          <CurrencyRupee
                            marginTop="10%"
                            style={{ fontSize: "14px", fontWeight: 600, }}
                          />
                          {item.package_price}
                        </Typography>

                      </Box>
                      <Link to="/viewdetails" style={{ textDecoration: "none" }}>
                        <button variant="contained" style={{ padding: "5px", fontWeight: "600", marginLeft: "-5%", fontSize: 14 }} className="btn ctrl"
                          onClick={() => {
                            // this.props.setPackageDetails(item)
                            this.props.setPackage(item);
                            this.props.setPackageId(item._id);
                          }}
                        >
                          View Details
                        </button>
                      </Link>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}
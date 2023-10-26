/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Container, List, ListItemText, Stack, Grid, Dialog, IconButton, InputAdornment, TextField } from '@mui/material';
import VideocamIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MessageIcon from '@mui/icons-material/Message';
import DescriptionIcon from '@mui/icons-material/Description';
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import "../../Coursedetails/Component/foundation.css";
import Otp from "../../../../images/navbar/otp-icon 1.svg";
import Mobile from "../../../../images/navbar/mobile-phone-icon.svg";
import Logo from "../../../../images/navbar/logo_olanger.png";
import CloseIcon from '@mui/icons-material/Close';

// import  from '@mui/material/Box';


export class courseDE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      buttonText: 'Click',
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }


  componentDidMount() {
    // console.log("length",
    //   Array.isArray(this.props.coursedetails.minipack) &&
    //   this.props.coursedetails.minipack.reduce((s, m) => {
    //     return s + (m.mini_content.chapter.reduce((total, c) => {
    //       return total + (c.lesson.reduce((summ, v) => {
    //         return total + (v.videolength === undefined ? 0 : v.videolength)
    //       }, 0));
    //     }, 0));
    //   }, 0)
    // )
    // console.log("data", this.props.coursedetails.minipack);
    this.props.viewPackageById(this.props.coursedetails.package_id)
  }

  render() {
    const { modalVisible } = this.state;
    return (

      <Grid style={{ marginBottom: "10%", marginTop: "14%", }}>

        <center>
          <Grid >
            <Grid style={{ padding: "12px", border: "1px solid blue", borderRadius: "6px", width: "40%" }} >
              <Grid className="card-pay-sec">
                <Typography className="cardhead">
                  {this.props.coursedetails.package_name}{" "}
                  <span className="focus-pack-tag">( {this.props.coursedetails.pack_id.packagecategory_name} )</span>
                </Typography>
                <Typography style={{ marginLeft: "5%", fontWeight: "400", fontSize: "14px" }}>
                  Validity - {this.props.coursedetails.package_duration}
                </Typography>
              </Grid>

              <Divider
                style={{
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginTop: "2%",
                  borderWidth: 1,
                  borderBottom: "1px solid black",
                }}
              />

              <center>
                <Button
                  variant="Contained"
                  style={{
                    backgroundColor: "#E43334",
                    color: "white",
                    fontSize: "12px",
                    height: "25px",
                    marginLeft: "19%",
                    width: "14%",
                    borderRadius: "2px",
                    marginTop: "3%",
                    whiteSpace: "nowrap",
                    // paddingLeft:"10px",
                  }}
                >
                  {parseInt((this.props.coursedetails.discounted_price) / (this.props.coursedetails.package_price) * 100)}% OFF
                </Button>
              </center>

              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // gap:"40px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    style={{ marginLeft: "2%" }}
                    control={<Radio />}
                  />
                  <Typography
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      marginTop: "7%",
                      whiteSpace: "nowrap",
                      width: "100%",
                      marginLeft: "-5%",
                    }}
                  >
                    {this.props.coursedetails.package_duration} course
                  </Typography>
                </Grid>
                <Typography
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: "Poppins",
                    marginTop: "2%",
                    color: "#72717D",
                    // textDecorationLine: "line-through",
                  }}
                >
                  ₹ {this.props.coursedetails.package_price}
                </Typography>

                <Typography
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#3E3D4D",
                    fontFamily: "Poppins",
                    marginRight: "5%",
                    marginTop: "2%",
                  }}
                >
                  ₹ {this.props.coursedetails.discounted_price}
                </Typography>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >


              </Grid>

              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Grid style={{ marginLeft: "10%" }}>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#4A4958",
                      fontWeight: 400,
                      fontFamily: "Poppins",
                      marginTop: "8%",
                      width: "100%",
                    }}
                  >
                    Offer on 1st purchase
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    marginRight: "6%",
                    marginTop: "3%",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#E43334",
                      fontWeight: 400,
                      width: "100%",
                      fontFamily: "Poppins",
                    }}
                  >
                    - ₹ 100
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Grid style={{ marginLeft: "10%" }}>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#4A4958",
                      fontWeight: 400,
                      fontFamily: "Poppins",
                      marginTop: "8%",
                      width: "100%",
                    }}
                  >
                    Referral Offer
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    marginRight: "6%",
                    marginTop: "3%",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#E43334",
                      fontWeight: 400,
                      width: "100%",
                      fontFamily: "Poppins",
                    }}
                  >
                    - ₹ 200
                  </Typography>
                </Grid>
              </Grid>


              <Divider
                style={{
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginTop: "2%",
                  borderWidth: 1,
                  borderBottom: "1px solid black",
                }}
              />

              <Grid className="bottom-cardpart">
                <Typography
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#201E31",
                    // fontFamily: "Poppins",
                    // marginTop: "10%",
                    whiteSpace: "nowrap",
                    // width: "100%",
                  }}
                >
                  Total Amount
                </Typography>

                <Typography
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    // width: "100%",
                    fontFamily: "Poppins",
                    border: "2px solid #6257CD",
                    borderRadius: "5px",
                    padding: " 7px 20px",
                    boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  ₹ {this.props.coursedetails.discounted_price - 100 - 200}
                </Typography>
              </Grid>




            </Grid>
            <Grid style={{ marginTop: "3%", marginBottom: "3%", width: "40%" }}>
              <button onClick={() => this.setModalVisible(true)} variant="contained" style={{ width: "100%", borderRadius: "7px", border: "none", color: "white" }} className="buy-course">Buy Now</button>
            </Grid>
          </Grid>
        </center>


        <center>
          <Grid style={{ width: "70%" }}>


            <Box sx={
              {
                display: 'flex',
                padding: ' 8px14px',
                flexDirection: "column",
                borderRadius: "5px",
                background: "#EEECFE",
                justifContent: "center",
                alignItems: "flex-start",
                gap: "8px",
                alignSelf: "stretch",


              }
            }>
              <Typography variant='h6' sx={{
                color: "#141226",
                fontFamily: "Poppins",
                padding: "10px",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
              }}>
                Foundation contains {this.props.coursedetails.minipack === undefined ? '0' : Array.isArray(this.props.coursedetails.minipack) &&
                  this.props.coursedetails.minipack.reduce((summ, m) => (
                    summ + m.mini_content.chapter.length
                  ), 0)} chapters covering whole syllabus of
                {this.props.coursedetails.minipack === undefined ? ' _____ ' : Array.isArray(this.props.coursedetails.minipack) && this.props.coursedetails.minipack.map((m, index) => (
                  <>
                    {m.mini_content.chapter.map((e, index) => {
                      return (
                        <span> {e.chapter_name}, </span>
                      )
                    })}
                  </>
                )
                )}
                which have {this.props.coursedetails.minipack === undefined ? '0' : Array.isArray(this.props.coursedetails.minipack) &&
                  this.props.coursedetails.minipack.reduce((s, m) => {
                    return s + (m.mini_content.chapter.reduce((total, c) => {
                      return total + (c.lesson.reduce((summ, v) => {
                        return total + (v.videolength === undefined ? 0 : v.videolength)
                      }, 0));
                    }, 0));
                  }, 0)
                } videos, {this.props.coursedetails.minipack === undefined ? '0' : Array.isArray(this.props.coursedetails.minipack) &&
                  this.props.coursedetails.minipack.reduce((s, m) => {
                    return s + (m.mini_content.chapter.reduce((total, c) => {
                      return total + (c.lesson.reduce((summ, v) => {
                        return total + (v.pdflength === undefined ? 0 : v.pdflength)
                      }, 0));
                    }, 0));
                  }, 0)} pdf, {this.props.coursedetails.minipack === undefined ? '0' : Array.isArray(this.props.coursedetails.minipack) &&
                    this.props.coursedetails.minipack.reduce((s, m) => {
                      return s + (m.mini_content.chapter.reduce((total, c) => {
                        return total + (c.lesson.reduce((summ, v) => {
                          return total + (v.quizlength === undefined ? 0 : v.quizlength)
                        }, 0));
                      }, 0));
                    }, 0)} quizzes
              </Typography>
            </Box>


            <Box style={{ display: "flex", padding: "10px", border: "1px solid lightgray" }}>
              <Typography sx={{ width: '53%', fontWeight: "600", textAlign: "left", flexShrink: 0 }}>
                How to start your journey
              </Typography>
              <Button variant="outlined" style={{ marginLeft: "5%", border: "1px solid #3E30C2", color: "#3E30C2", textTransform: "capitalize" }}><VideocamIcon style={{ color: "black", marginRight: "7px" }} />   1 video</Button>
            </Box>
            {Array.isArray
              (this.props.coursedetails.minipack)
              && this.props.coursedetails.minipack.map((m, index) => {
                return (
                  <>
                    {Array.isArray
                      (m.mini_content.chapter)
                      && m.mini_content.chapter.map((e, index) => {
                        return (
                          <Accordion >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                              <Typography sx={{ width: '53%', fontWeight: "600", textAlign: "left", flexShrink: 0 }}>
                                {e.chapter_name}</Typography>

                              <Box style={{ display: "flex", gap: "45px", alignItems: "center" }}>
                                <List spacing={2}
                                  sx={{
                                    display: "flex",
                                    gap: "30px",
                                    justifyContent: "space-between",

                                  }}>
                                  <Typography sx={{
                                    color: "#626262",
                                    fontFamily: "Poppins",
                                    fontSize: "12px",
                                    display: "flex",
                                    alignItems: 'center',
                                    fontstyle: "normal",
                                    fontWeight: "400",
                                  }}>
                                    <VideocamIcon /> {e.lesson.reduce((total, c) => total + (c.videolength === undefined ? 0 : c.videolength), 0)} video Lessons
                                  </Typography>
                                  <Typography sx={{
                                    color: "#626262",
                                    fontFamily: "Poppins",
                                    fontSize: "12px",
                                    display: "flex",
                                    alignItems: 'center',
                                    fontstyle: "normal",
                                    fontWeight: "400",
                                  }}>
                                    <DescriptionIcon /> {e.lesson.reduce((total, c) => total + (c.pdflength === undefined ? 0 : c.pdflength), 0)} PDF
                                  </Typography>
                                  <Typography sx={{
                                    color: "#626262",
                                    fontFamily: "Poppins",
                                    fontSize: "12px",
                                    fontstyle: "normal",
                                    display: "flex",
                                    alignItems: 'center',
                                    fontWeight: "400",
                                  }}>
                                    <MessageIcon /> {e.lesson.reduce((total, c) => total + (c.quizlength === undefined ? 0 : c.quizlength), 0)} Quiz
                                  </Typography>
                                </List>

                              </Box>



                            </AccordionSummary>
                            <AccordionDetails>
                              <Stack spacing={1}>
                                {Array.isArray(e.lesson) && e.lesson.map((a, index) => {
                                  return (
                                    <Box style={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                                      <Typography variant='body1' style={{ textAlign: "left", fontSize: "13px", fontWeight: "400" }}>{index + 1}. {a.lesson_name}</Typography>
                                      <List style={{ gap: "20px", display: "flex" }}>
                                        <Typography variant='a' style={{ fontSize: "13px", borderBottom: "1px solid blue" }}>{a.videolength === undefined ? '0' : a.videolength} Video  </Typography>
                                        <Typography variant='a' style={{ fontSize: "13px", borderBottom: "1px solid blue" }}>{a.pdflength === undefined ? '0' : a.pdflength} PDF </Typography>
                                        <Typography variant='a' style={{ fontSize: "13px", borderBottom: "1px solid blue" }}>{a.quizlength === undefined ? '0' : a.quizlength} Quiz</Typography>
                                      </List>
                                    </Box>
                                  );
                                })
                                }
                              </Stack>
                            </AccordionDetails>
                          </Accordion>
                        );
                      })
                    }
                  </>
                );
              })
            }
          </Grid>
        </center>

        <Dialog
          open={modalVisible}
          onClose={!modalVisible}
          // className="modal2"
          // overlayClassName="Overlay"
          style={{ marginTop: "50px", overflowX: "hidden" }}
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
              <IconButton style={{ height: 40, width: 40, marginLeft: 80 }}
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

      </Grid>

    )
  }
}

export default courseDE
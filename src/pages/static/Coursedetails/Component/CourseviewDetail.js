import React, { Component } from "react";
import { Grid, Typography, Button, Box, Link, Stack, RadioGroup } from "@mui/material";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import "../../Coursedetails/Component/courseviewdetail.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Otp from "../../../../images/navbar/otp-icon 1.svg";
import Mobile from "../../../../images/navbar/mobile-phone-icon.svg";
import Logo from "../../../../images/navbar/logo_olanger.png";
import CloseIcon from '@mui/icons-material/Close';
import {
  IconButton,
  Dialog,
} from "@mui/material";

class CourseviewDetail extends Component {
  constructor(props) {
    super(props);

    // this.state = { activeButtonId: 2 };

    this.state = {
      showradiobtn: false,
      modalVisible: false,
      activeButtonId: 0,
      activeButtonId1: 0,
      activeButtonId2: 0,
      stageActive: 0,
      examIndex: 0,

    };


  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  componentDidMount() {
    console.log("data", this.props.coursedetails)
    this.props.viewPackageById(this.props.coursedetails.package_id)
    // console.log("tireee", this.props.coursedetails.all_package[0].package_content.category[0].exam[0].stage[0].stage_name
    // )
    console.log("hjggdshghds",this.props.coursedetails.pack_id)


  }

  handleButtonClick = (buttonId) => {
    console.log(buttonId)
    this.setState({ activeButtonId: buttonId });
  };

  render() {
    const { activeButtonId, examIndex, activeButtonId1, activeButtonId2 } = this.state;
    const { selected, modalVisible, modalVisible1 } = this.state;
    const { coursedetails } = this.props
    return (
      <Grid>

        {/* first section */}

        <Grid
          container
          display={"flex"}
          //direction="row"
          className='gridcontainer'

        // direction="row"
        // className="gridcontainer"
        >
          <Grid container display={"flex"} direction="row" spacing={2}>
            {/* <Grid item xs={1}></Grid> */}

            <Grid item xs={0.5}></Grid>

            <Grid item xs={5.5} className="viewdetcard">
              <Grid className="card-pay-sec">
                <Typography className="cardhead">
                  {/* SSC CHSL Tier I & II 2023{" "} */}
                  {this.props.coursedetails.package_name}
                  <span className="focus-pack-tag"> ( {this.props.coursedetails.pack_id !== undefined && this.props.coursedetails.pack_id.packagecategory_name} )</span>
                </Typography>
                <Typography style={{ marginLeft: "5%", fontWeight: "400", fontSize: "14px" }}>
                  Validity -   {this.props.coursedetails.package_duration}
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
                  }}
                >
                  {parseInt((this.props.coursedetails.discounted_price) / (this.props.coursedetails.package_price) * 100)}% OFF
                </Button>
              </center>

              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
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
                <Grid style={{ marginLeft: "10%" }}>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#4A4958",
                      fontWeight: 400,
                      // fontFamily: "Poppins",
                      marginTop: "8%",
                      width: "100%",
                    }}
                  >
                    Your Discount
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    marginRight: "6%",
                    marginTop: "3%",
                  }}
                >
                  <Typography

                    onClick={() => this.setModalVisible(true)}

                    style={{
                      fontSize: 14,
                      color: "#E43334",
                      fontWeight: 400,
                      width: "100%",
                      cursor: "pointer",
                      // fontFamily: "Poppins",
                    }}
                  >
                    Apply Coupon
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
                  ₹ {this.props.coursedetails.discounted_price}
                </Typography>
              </Grid>

              <Grid className="btn-container">
                <Button onClick={() => this.setModalVisible(true)} variant="contained" className="buy-course">Buy Course</Button>
              </Grid>


            </Grid>
            <Grid item xs={5.5}>
              <Grid className="right-offer-details">
                <Typography className="offer-d">Offer Details</Typography>
                <Grid className="offer-details-sec">

                  <Typography style={{ color: "#72717D" }}>
                    <strong style={{ textDecoration: "underline", color: "#3E3D4D" }}>For new user:</strong> Lunching week offer -{" "}
                    <span className="flat-percentage">Flat 50% off</span>
                    <br />
                    and Offers on 1st Purchase -{" "}
                    <span className="examy-color">EXAMYS100 </span> (You are
                    saving ₹100 on 1 Year Course)
                    <br />
                    <Button
                      onClick={() => {
                        this.setState({ showradiobtn: !this.state.showradiobtn })
                      }}
                    >
                      {" "}
                      <span className="more-offer"> more offers</span>
                    </Button>
                  </Typography>
                  {this.state.showradiobtn && (

                    <Grid style={{ marginLeft: '2%' }}>
                      <RadioGroup defaultValue='100'>
                        <Typography>
                          <FormControlLabel style={{ marginTop: '1%' }} value="100" control={<Radio />} />
                          <span className="more-offer1">EXAMYS100 Save</span> ₹100
                          on 1 Year Course
                        </Typography>
                        <Typography>
                          <FormControlLabel style={{ marginTop: '1%' }} value="75" control={<Radio />} />
                          <span className="more-offer1">EXAMYS75 Save</span> ₹75 on
                          6 months Course
                        </Typography>
                        <Typography>
                          <FormControlLabel style={{ marginTop: '1%' }} value="50" control={<Radio />} />
                          <span className="more-offer1">EXAMYS50 Save</span> ₹50 on
                          3 months Course
                        </Typography>
                        <Typography>
                          <FormControlLabel style={{ marginTop: '1%' }} value="200" control={<Radio />} />
                          <span className="more-offer1">EXAMYS200 Save</span> ₹200
                          on 2 Year Course
                        </Typography>
                      </RadioGroup>
                    </Grid>
                  )}
                </Grid>
                <Grid className="new-referral-sec">
                  <Typography style={{ color: "#72717D" }}>
                    <strong style={{ textDecoration: "underline" }}>For new referral User: </strong> Lunching week offer -{" "}
                    <span className="flat-percentage">Flat 50% off</span>
                    <br />
                    and Offers on 1st Purchase +{" "}
                    <span className="examy-color">
                      {" "}
                      Referral offer of ₹200.
                    </span>{" "}
                    (You are saving ₹100 +₹200
                    <Typography> =₹300 on 1 Year Course)</Typography>
                    <br />
                  </Typography>
                </Grid>
                <Grid className="existing-usr-sec">
                  <Typography style={{ color: "#72717D" }}>
                    <strong style={{ textDecoration: "underline" }}>Offer for existing user: </strong>
                    Lunching week offer -{" "}
                    <span className="flat-percentage">Flat 50% off</span>
                    <br />

                    Be an examysFirst member @ ₹49 and get 20% off on course & 10%
                    on Test pass <br />
                    for 3 years.(You are saving ₹600 on 1 Year Course)
                    <br />
                    <span className="more-offer" onClick={() => this.setModalVisible(true)} >
                      {" "}
                      Get examys First Membership.
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>

        </Grid>

        {/* second section */}

        <Grid className="target-part">
          <Typography className="target-text-part">
            <span className="target-text orange-textcolor">Target</span>    {this.props.coursedetails.package_name}
          </Typography>
          <Typography>
            Validity - {this.props.coursedetails.package_duration}
            (Target <span className="orange-textcolor">{(new Date().getFullYear())}-{(new Date().getFullYear()) + parseInt(this.props.coursedetails.package_duration)}</span>)
          </Typography>
        </Grid>

        {/* tab here */}

        <Grid >
          <center>
            <Stack
              className="target-tab-part"
              direction="row"
              justifyContent="center"
              sx={{
                marginLeft: "5%"

              }}
            >
              {(Array.isArray(coursedetails.pack_id.package_content.category !== undefined && coursedetails.pack_id.package_content.category) || coursedetails.pack_id.package_content.category.length > 1) && coursedetails.pack_id.package_content.category.map((e, index) => {
                return (
                  e.exam !== undefined && e.exam.map((el1, index2) => {
                    return (
                      <Button style={{ textTransform: "capitalize", width: "180px", padding: "10px", border: "1px solid lightgray", borderRadius: "6px", backgroundColor: "#6257CD" }}

                        className={` ${activeButtonId === index ? 'arrows arrow-bottom' : 'arrow'}`}
                        sx={{ ml: 1 }}

                        variant="contained"
                        onClick={() => {
                          this.setState({ activeButtonId: index, examIndex: index2 })
                          console.log(activeButtonId, examIndex)

                        }}
                      >
                        {e.category_name + " " + el1.exam_name}
                      </Button>
                    )
                  })
                )


              })
              }

            </Stack>
          </center>
        </Grid>

        <Grid className="second-target-section  ">

          <Grid>
            {(coursedetails.pack_id.package_content.category[this.state.activeButtonId].exam !== undefined &&
              coursedetails.pack_id.package_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage !== undefined &&
              coursedetails.pack_id.package_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject !== undefined) &&
              coursedetails.pack_id.package_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage[this.state.activeButtonId1].subject.map((e, index) => {
                return (
                  <Grid style={{ marginTop: '20%' }}>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                      <Typography className="topic-listname qactive" onChange={() => {
                        this.setState({ activeButtonId2: index })
                        // console.log(activeButtonId1)
                      }}> {e.subject_name}</Typography>
                    </Link>
                  </Grid>
                );
              })}

          </Grid>


          <Grid className="right-tab-sec">
            <Tabs>

              <TabList className="course-target-tab">
                {(coursedetails.pack_id.package_content.category[this.state.activeButtonId].exam !== undefined &&
                  coursedetails.pack_id.package_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage !== undefined) &&
                  coursedetails.pack_id.package_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage.map((e, index) => {
                    return (
                      <Tab className="tab-tier active" onClick={() => {
                        this.setState({ activeButtonId1: index })
                        // console.log(activeButtonId1)
                      }}>
                        {e.stage_name}
                      </Tab>
                    )
                  })}
              </TabList>


              {Array.isArray(coursedetails.pack_id.package_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage) &&
                coursedetails.pack_id.package_content.category[this.state.activeButtonId].exam[this.state.examIndex].stage.map((e, index) => {
                  console.log(e)
                  return (
                    <TabPanel className="tab-boxs">
                      <Grid className="tab-box-grid">
                        <a href="/foundation" style={{ textDecoration: "none", color: "black" }}>
                          {/* {Array.isArray(e.subject[this.state.activeButtonId2].minipackage) &&
                            e.subject[this.state.activeButtonId2].minipackage.map((m, index) => {
                              console.log(e)
                              return ( */}
                          <Box className="tab-box-data"
                            onClick={() => {
                              this.props.setMiniPack(e.subject[this.state.activeButtonId2].minipackage);
                            }}
                          >
                            <Typography className="text-wid">Foundation +  <br />In Depth Course</Typography>
                          </Box>
                          {/* )
                             })} */}
                        </a>
                        <a href="/foundation" style={{ textDecoration: "none", color: "black" }}>
                          <Box className="tab-box-data">
                            <Typography className="text-wid">Previous year pdf Discussion</Typography>
                          </Box>
                        </a>
                        <a href="/examysaiGpt" style={{ textDecoration: "none", color: "black" }}>
                          <Box className="tab-box-data">
                            <Typography className="text-wid">Trend Question Analysis By Examys ai</Typography>
                          </Box>
                        </a>
                        <a href="/Testseries" style={{ textDecoration: "none", color: "black" }}>
                          <Box className="tab-box-data">
                            <Typography className="text-wid">Test Series</Typography>
                          </Box>
                        </a>
                      </Grid>
                    </TabPanel>
                  )
                })}

            </Tabs>
          </Grid>
        </Grid>


        <Grid className="bottom-support-text">
          <Typography className="supported-tag">Courses Supported By</Typography>
          <Grid className="grid-support-tags">
            {/* <Link style={{textDecoration:"none"}}> */}
            <Grid className="cour-tag" >
              {/* <Button className="newtag">new</Button> */}
              {/* <img src={Newtag} className="newtag" /> */}

              <Button
                className="newtag"
                variant="Contained"
                style={{ backgroundColor: "#029F11", color: "white", fontSize: "10px", height: "15px", borderRadius: 300, width: "40px" }}>New</Button>
              <Typography className="bottom-word-p">“My Course Journey”</Typography>
            </Grid>
            {/* </Link>  */}
            <Typography className="bottom-word-p">Team & Course design Story</Typography>
            <Typography className="bottom-word-p">Chsl jobs, syllabus & patterns etc</Typography>
            <Typography className="bottom-word-p">FAQ</Typography>
          </Grid>

        </Grid>













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

                <img src={Logo} alt="" style={{ marginLeft: "75px" }} />
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
                      <img src={Mobile} alt="" height={24} width={24} />
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
                      <img src={Otp} alt="" height={24} width={24} />
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


        <Grid style={{ marginBottom: "5%" }}></Grid>

      </Grid>
    );
  }
}

export default CourseviewDetail;
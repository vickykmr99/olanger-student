import { Typography, Grid, Button, RadioGroup, TextField } from "@mui/material";
import React, { Component } from "react";
import "../../Coursedetails/Component/viewdetails.css";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import InputAdornment from '@mui/material/InputAdornment';
import Otp from "../../../../images/navbar/otp-icon 1.svg";
import Mobile from "../../../../images/navbar/mobile-phone-icon.svg";
import Logo from "../../../../images/navbar/logo_olanger.png";
import {
  IconButton,
  Dialog,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

class viewdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showradiobtn: false,
      modalVisible: false,
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    console.log(this.props.studentspecial)
  }
  render() {
    const { modalVisible } = this.state;
    return (
      <Grid
        container
        display={"flex"}
        //c
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
                {this.props.studentspecial.package_name}
                <span className="focus-pack-tag"> ( {this.props.studentspecial.packagecategory_name} )</span>
              </Typography>
              <Typography style={{ marginLeft: "5%", fontWeight: "400", fontSize: "14px" }}>
                Validity -   {this.props.studentspecial.package_duration}
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
                {parseInt((this.props.studentspecial.discounted_price) / (this.props.studentspecial.package_price) * 100)}% OFF
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
                  {this.props.studentspecial.package_duration} course
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
                ₹ {this.props.studentspecial.package_price}
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
                ₹ {this.props.studentspecial.discounted_price}
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
                ₹ {this.props.studentspecial.discounted_price}
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

                <img src={Logo} alt='' style={{ marginLeft: "75px" }} />
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
      </Grid>
    );
  }
}

export default viewdetails;
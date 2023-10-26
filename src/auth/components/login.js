import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Snackbar from "../../common/snackbar/components/snackbar";
import "../styles/style.scss";
import LoaderCon from "../../common/loader/containers/loader_cont";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import PhoneInput from "react-phone-input-2";
import OtpTimer from "otp-timer";
// import Naveen from "../../pages/static/AboutConclave/Naveen.png";
import ReCAPTCHA from "react-google-recaptcha";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   LoadCanvasTemplateNoReload,
//   validateCaptcha,
// } from "react-simple-captcha";

// import Bgg from '../../images/static/bggg.jpeg'
// import Link from '@mui/material/Link';
class Login extends Component {
  constructor(props) {
    super(props);
    this.recaptchaRef = React.createRef();
    this.state = {
      email: "",
      password: "",
      active: false,
      phone: "",
      otp: Math.floor(Math.random() * (999999 - 100000)) + 100000,
      otpcheck: "",
      disab: true,
      recaptcha: "",
      token:""
    };
  }
  componentDidMount() {
    // loadCaptchaEnginge(6);
  }
  render() {
    const { login, setEmail, setPwd, login_email, snackbar, close_snack_bar,setOTPActive } =
      this.props;

    if (login.user_id !== "") {
      return <Navigate to="/" />;
    }
    console.log(this.state.phone);
    return (
      <div>
        <Grid className="login-background">
          <Grid container spacing={10} justifyContent="space-evenly">
            <Grid item xs={12} md={4}>
              <Card className="login_card">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    to="/"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>

                  <Typography style={{ color: "red" }}>Login</Typography>
                </Breadcrumbs>
                {/* <img
                  src={"https://www.skyyriderelectric.com/public/image/logo1.png"}
                  alt="no_img" style={{ height: 100 }}
                /> */}
                <Typography className="login_heading">LOG IN</Typography>
                <Grid container justify="center" className="gridPhoneContainer">
                  <div item xs={12} className="phoneContainer">
                    <PhoneInput
                      countryCodeEditable={false}
                      className="phonenumber"
                      label="PHONE"
                      type="number"
                      id="outlined-email-input"
                      autocompleteSearch
                      country={"in"}
                      autoFormat="false"
                      margin="normal"
                      variant="outlined"
                      required={true}
                      value={this.state.phone}
                      onChange={(phone) => {
                        setOTPActive(false);
                        this.setState({ phone:phone,status:false })
                      }}
                    />
                      
                  </div>
                  {login.active && (
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-password-input"
                        className="passwordclass"
                        label="OTP"
                        style={{
                          height: 40,
                          width: "100%",
                          maxWidth: "300px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        required={true}
                        value={this.state.otpcheck}
                        onChange={(event) => {
                          this.setState({
                           
                            otpcheck: event.target.value,
                          });
                        }}
                      // onKeyPress={event => {
                      //   if (event.key === 'Enter' && login.email !== "" && login.password !== "") {
                      //     login_email(login)
                      //   }
                      // }}
                      />
                    </Grid>
                  )}

                  {login.active && (
                    <Grid container>
                      <p style={{ fontSize: 12, marginTop: 10, marginLeft: "4%", }}> Submit the OTP entered into your Mobile/Email to login</p>
                      <Grid
                        item
                        xs={5}
                        style={{
                          marginTop: 10,
                          justifyItems: "center",
                          // paddingBottom: 10,
                        }}
                      >
                        <OtpTimer
                          seconds={30}
                          minutes={0}

                          text="Resend OTP in:"
                          background={"white"}
                          ButtonText="Resend OTP"
                          buttonColor="black"
                          resend={() => {
                            login_email(this.state.phone, this.state.otp);

                          }}

                        />

                      </Grid>
                      <Grid item xs={5}>

                        {/* <Button variant="text" size="small" color="inherit" disabled={this.state.disab} style={{ fontSize: 12, height: 45 }}> Resend OTP</Button> */}
                      </Grid>

                    </Grid>
                  )}
                  <br />
                  <br />
                  <br />
                  <Grid container style={{ paddingBottom: 10 }}>
                    <div className="register-form-captcha">
                      {/* <input
                        value={this.state.recaptcha}
                        placeholder="Enter Captcha"
                        type="text"
                        style={{ width: "50%" }}
                        onChange={(e) => {
                          this.setState({ recaptcha: e.target.value });
                        }}
                      /><br/> */}
                      {login.active===false &&<ReCAPTCHA
                        ref={this.recaptchaRef}
                        onChange={(token)=>{this.setState({token:token})}}
                        onExpired={(e)=>{this.setState({token:""})}}
                        sitekey={"6LfM7ewiAAAAAOQKDIjBmKTOQwLHZ53m9UtuLZNT"}
                        // size="invisible"
                        // theme="light"
                      />}
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <br />

                    {login.active ? (
                      <Button
                        disabled={(this.state.otpcheck === "") ? true : false}
                        id="outlined-email-input"
                        variant="contained"
                        color="error"

                        className="login-button"
                        style={{ marginTop: -70 }}
                        margin="normal"
                        onClick={() => {
                          // if (!this.state.token) {
                            this.props.login_verify_otp(this.state.phone, this.state.otpcheck);
                          // }
                        }}
                      >
                        Log IN
                      </Button>
                    ) : (
                      <Button
                        disabled={this.state.phone.length > 4 && this.state.token!=="" ? false : true}
                        id="outlined-email-input"
                        variant="contained"
                        color="error"

                        className="login-button"

                        margin="normal"
                        onClick={() => {
                          // const captchaToken = this.recaptchaRef.current.executeAsync();
                          // this.recaptchaRef.current.reset();
                          // loadCaptchaEnginge(6);
                          if(this.state.token!==""){
                            login_email(this.state.phone, this.state.token);
                            this.setState({ active: true, recaptcha: "" });
                          }
                         


                        }}
                      >
                        Send OTP
                      </Button>
                    )}
                  </Grid>

                  <Grid container justifyContent="center">
                    <div className="reg_btn">
                      {/* <p>Did not receive OTP ? Resend now</p> */}
                      <p style={{ marginTop: "5px" }}>
                        Not yet registered ?
                        <Link to="/registration">Click to register now</Link>
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            {/* <img src={Naveen} className={login.active ? "naveen_image image-margin-auto" : "naveen_image"} /> */}
          </Grid>
          <LoaderCon />
          <Snackbar
            open={snackbar.response_received}
            close_snack_bar={close_snack_bar}
            message={snackbar.message}
          />
          <div className="comebg">COME, JOIN THE JUGGERNAUT</div>
        </Grid>
      </div>
    );
  }
}
// class Login extends Component {
//     render(){
//         return(
//             <div>
//                 helloooooooooooooooooo
//             </div>
//         )
//     }
// }

export default Login;
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
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  componentDidMount() {
    this.props.clear_login()
    // if (localStorage.getItem('socus_token') !== null) {
    //   return <Redirect to="/" />
    // }
  }
  render() {
    const {
      login,
      setEmail,
      setPwd,
      login_email,
      snackbar,
      close_snack_bar,
    } = this.props;

    if (login.user_id !== "") {
      return <Navigate to="/dashboard" />
    }

    return (
      <div>
        <Grid className="login-background">
          <Grid container spacing={10} justify="center">
            <Grid className="form-center" >
              <Card className="login_card">
                {/* <img
                  src={"https://www.skyyriderelectric.com/public/image/logo1.png"}
                  alt="no_img" style={{ height: 100 }}
                /> */}
                <Typography className="login_heading">
                  REGISTRATION
                  </Typography>
                <Grid container justify="center">
                  <Grid item xs={12} >
                    <TextField
                      id="outlined-email-input"
                      label="Full Name"
                      type="text"
                      fullWidth={true}
                      margin="normal"
                      variant="outlined"
                      autoComplete={false}
                      required={true}
                      value={login.email}
                      onChange={(event) => { setEmail(event.target.value); }}
                      onKeyPress={event => {
                        if (event.key === 'Enter' && login.email !== "" && login.password !== "") {
                          login_email(login)
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      id="outlined-password-input"
                      label="Mobile"
                      type="number"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      required={true}
                      value={login.password}
                      autoComplete={false}
                      onChange={(event) => {
                        setPwd(event.target.value);
                      }}
                      onKeyPress={event => {
                        if (event.key === 'Enter' && login.email !== "" && login.password !== "") {
                          login_email(login)
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      id="outlined-password-input"
                      label="Email"
                      type="email"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      autoComplete={false}
                      required={true}
                      value={login.password}
                      onChange={(event) => {
                        setPwd(event.target.value);
                      }}
                      onKeyPress={event => {
                        if (event.key === 'Enter' && login.email !== "" && login.password !== "") {
                          login_email(login)
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      id="outlined-password-input"
                      label="Industry Name"
                      type="email"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      required={true}
                      autoComplete={false}
                      value={login.password}
                      onChange={(event) => {
                        setPwd(event.target.value);
                      }}
                      onKeyPress={event => {
                        if (event.key === 'Enter' && login.email !== "" && login.password !== "") {
                          login_email(login)
                        }
                      }}
                    />
                  </Grid>    
                  <br /><br /><br />
                  <Grid item xs={12}>
                    <br />
                    <Button
                      disabled={(login.email === "" || login.password === "") ? true : false}
                      id="outlined-email-input"
                      variant="contained"
                      color="primary"
                      autoComplete={false}
                      fullWidth
                      margin="normal"
                      onClick={() => { login_email(login) }}
                    >
                      Log In
                      </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <LoaderCon />
          <Snackbar
            open={snackbar.response_received}
            close_snack_bar={close_snack_bar}
            message={snackbar.message}
          />
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

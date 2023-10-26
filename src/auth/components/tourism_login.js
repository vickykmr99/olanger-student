import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem"
import Snackbar from "../../common/snackbar/components/snackbar";
import "../styles/style.scss";
import LoaderCon from "../../common/loader/containers/loader_cont";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      active: false,
      phone: "",
      test:""
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
      tourism_login,
      snackbar,
      close_snack_bar,
    } = this.props;

    if (login.user_id !== "") {
      return <Navigate to="/dashboard" />
    }

    return (
      <div>
        <Grid className="login-background">
          <Grid container spacing={10} justifyContent="center">
            <Grid item md={4} xs={12} >
              <Card className="login_card">
                {/* <img
                  src={"https://www.skyyriderelectric.com/public/image/logo1.png"}
                  alt="no_img" style={{ height: 100 }}
                /> */}
                <Typography className="login_heading">
                  Tourism LOGIN
                </Typography>
                <Grid container justify="center">
                  <Grid item xs={12} >
                    <TextField
                      id="outlined-email-input"
                      label="User Name"
                      type="text"
                      fullWidth={true}
                      onChange={(e)=>{this.setState({email:e.target.value})}}
                      margin="normal"
                      variant="outlined"
                      required={true}
                    />
                  </Grid>
                  
                  <Grid item xs={12} >
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      fullWidth={true}
                      margin="normal"
                      variant="outlined"
                      required={true}
                      onChange={(e)=>{this.setState({password:e.target.value})}}
                    />
                  </Grid>
                  
                  <br /><br /><br />
                  <Grid item xs={12}>
                    <br />
                    <Button
                      // disabled={(login.email === "" || login.password === "") ? true : false}
                      id="outlined-email-input"
                      variant="contained"
                      color="error"
                      fullWidth
                      margin="normal"
                      onClick={() => { tourism_login(this.state.email,this.state.password) }}
                    >
                      LOGIN
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
import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/login";
import {
  close_snack_bar
} from "../../common/snackbar/action";
import {
  setLogin,
  set_home,
  setEmail,
  setPwd,
  login_email,
  login_verify_otp,
  setOTPActive
  // setLogin,
  // googleLogin
} from "../actions";
export class Controller extends Component {
  render() {
    return (
      <Login {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    setLogin: (mobile) => {
      dispatch(setLogin(mobile))
    },
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    setEmail: (payload) => {
      dispatch(setEmail(payload));
    },
    setPwd: (payload) => {
      dispatch(setPwd(payload));
    },
    setOTPActive: (payload) => {
      dispatch(setOTPActive(payload));
    },
    login_email: (phone,token) => {
      dispatch(login_email(phone,token));
    },
    // setLogin: (type, email, user_token, profile_img) => {
    //   dispatch(setLogin(type, email, user_token, profile_img));
    // },
    set_home: () => {
      dispatch(set_home())
    },
    login_verify_otp: (phone, otp) => {
      dispatch(login_verify_otp(phone,otp))
    },
    // googleLogin: () => {
    //   dispatch(googleLogin())
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
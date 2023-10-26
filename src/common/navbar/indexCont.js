import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../navbar/index";
import {
  close_snack_bar
} from "../snackbar/action";
import {
   
  clear_login,
  phone_login,
  send_otp,
  Createstudent,
  verify_otp,
  social_login,
  // setLogin,
  googleLogin,
  facebookLogin
  // setstudentLogin,
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
    common: store.common,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    clear_login: () => {
      dispatch(clear_login())
    },
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    phone_login: (login_id) => {
      dispatch(phone_login(login_id));
    },
    send_otp: (login_id) => {
      dispatch(send_otp(login_id));
    },
    Createstudent: (student_name,login_id) => {
      dispatch(Createstudent(student_name,login_id));
    },
    verify_otp: (login_id, otp) => {
      dispatch(verify_otp(login_id, otp));
    },
    facebookLogin: () => {
      dispatch(facebookLogin());
    },
    googleLogin: () => {
      dispatch(googleLogin());
    },
   
    social_login: (login_id, otp) => {
      dispatch(social_login(login_id, otp));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
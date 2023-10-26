import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/superadmin_login";
import {
  close_snack_bar
} from "../../common/snackbar/action";
import {
  setLogin,
  set_home,
  setEmail,
  setPwd,
  login_email,
  clear_login,
  super_login
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
    clear_login: () => {
      dispatch(clear_login())
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
    super_login: (email,password) => {
      dispatch(super_login(email,password));
    },
    setLogin: (type, email, user_token, profile_img) => {
      dispatch(setLogin(type, email, user_token, profile_img));
    },
    set_home: () => {
      dispatch(set_home())
    },
    // googleLogin: () => {
    //   dispatch(googleLogin())
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
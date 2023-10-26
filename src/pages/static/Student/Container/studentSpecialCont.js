import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../Components/studentspecial";

import {
  viewStudentSpecial,
  // googleLogin
} from "../Action";

import {
  setPackageId,
  setPackage,
} from '../../Coursedetails/action'


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
    studentspecial: store.studentspecial,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    viewStudentSpecial: () => {
      dispatch(viewStudentSpecial())
    },
    setPackage: (payload) => {
      dispatch(setPackage(payload))
    },
    setPackageId: (payload) => {
      dispatch(setPackageId(payload))
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, { Component } from "react";
import { connect } from "react-redux";
import Viewdetails from "../Component/viewdetails";
import {

  viewAllPackageGroupBypCategory,
 
} from "../action";

export class Controller extends Component {
  render() {
    return (
      <Viewdetails {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {

    snackbar: store.snackbar,
    common: store.common,
    home: store.home,
    coursedetails: store.coursedetails,
    testseries: store.testseries,
    studentspecial:store.studentspecial


  };
};
export const mapDispatchToProps = dispatch => {
  return {

    viewAllPackageGroupBypCategory: () => {
      dispatch(viewAllPackageGroupBypCategory())
    },

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
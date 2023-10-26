import React, { Component } from "react";
import { connect } from "react-redux";
import Courses from "../Component/Courses";
import {

  viewAllPackageGroupByCategory
} from "../action";
export class Controller extends Component {
  render() {
    return (
      <Courses {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    
    snackbar: store.snackbar,
    common: store.common,
    home: store.home,

  };
};
export const mapDispatchToProps = dispatch => {
  return {
  
    viewAllPackageGroupByCategory: (category_id) => {
        dispatch(viewAllPackageGroupByCategory(category_id))
      },
 
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
import React, { Component } from "react";
import { connect } from "react-redux";
import CourseBtn from "../Component/coursebtn";


import {

    viewAllCategory,
    set_category_id,
    viewAllPackageGroupByCategory
} from "../action";
export class Controller extends Component {
  render() {
    return (
      <CourseBtn {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    
    snackbar: store.snackbar,
    home: store.home

  };
};
export const mapDispatchToProps = dispatch => {
  return {
  
    viewAllCategory: () => {
        dispatch(viewAllCategory())
      },
      set_category_id: (payload) => {
        dispatch(set_category_id(payload))
      },
      viewAllPackageGroupByCategory: (category_id) => {
        dispatch(viewAllPackageGroupByCategory(category_id))
      },
 
 
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
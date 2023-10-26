import React, { Component } from "react";
import { connect } from "react-redux";
import TabPackageCat from "../Component/tabpackagecat";


import {
  viewAllCategory,
  set_category_id,
  viewAllPackageGroupByCategory
} from "../action";
export class Controller extends Component {
  render() {
    return (
      <TabPackageCat {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    
    snackbar: store.snackbar,
    home: store.home,
    common: store.common,

  };
};
export const mapDispatchToProps = dispatch => {
  return {
  
    viewAllCategory: (category_id) => {
      dispatch(viewAllCategory(category_id))
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
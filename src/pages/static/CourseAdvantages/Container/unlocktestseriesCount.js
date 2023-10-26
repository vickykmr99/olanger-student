import React, { Component } from "react";
import { connect } from "react-redux";
import Unlocktestseries from "../Component/unlocktestseries";
import {

  viewAllPackageGroupByCategory,
  viewAllPackageById,
  set_package_id
} from "../action";
export class Controller extends Component {
  render() {
    return (
      <Unlocktestseries {...this.props} />
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
      viewAllPackageById: (package_id) => {
        dispatch(viewAllPackageById(package_id))
      },
      set_package_id: (payload) => {
        dispatch(set_package_id(payload))
      },
 
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
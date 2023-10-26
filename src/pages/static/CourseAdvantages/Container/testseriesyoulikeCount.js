import React, { Component } from "react";
import { connect } from "react-redux";
import Testseriesyoulike from "../Component/testseriesyoulike";
import {

  viewTestSeriesByCategory,
  viewAllPackageById,
  set_package_id,
  viewAllCategory
} from "../action";
export class Controller extends Component {
  render() {
    return (
      <Testseriesyoulike {...this.props} />
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
  
    viewTestSeriesByCategory: (category_id) => {
        dispatch(viewTestSeriesByCategory(category_id))
      },
      viewAllPackageById: (package_id) => {
        dispatch(viewAllPackageById(package_id))
      },
      set_package_id: (payload) => {
        dispatch(set_package_id(payload))
      },
      viewAllCategory: (category_id) => {
        dispatch(viewAllCategory(category_id))
      },
 
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
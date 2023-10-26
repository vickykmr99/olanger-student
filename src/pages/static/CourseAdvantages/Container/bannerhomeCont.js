import React, { Component } from "react";
import { connect } from "react-redux";
import BannerHome from "../Component/bannerhome";


import {

  viewAllBanner
} from "../action";
export class Controller extends Component {
  render() {
    return (
      <BannerHome {...this.props} />
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
  
    viewAllBanner: () => {
      dispatch(viewAllBanner())
    },
 
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
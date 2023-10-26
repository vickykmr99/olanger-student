import React, { Component } from "react";
import { connect } from "react-redux";
import Score from "../Component/score";

export class Controller extends Component {
  render() {
    return (
      <Score {...this.props} />
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
  
   
 
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
import React, { Component } from "react";
import { connect } from "react-redux";
import Learningpath from "../Component/learningpath";

export class Controller extends Component {
  render() {
    return (
      <Learningpath {...this.props} />
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
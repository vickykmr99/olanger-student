import React, { Component } from "react";
import { connect } from "react-redux";
import CardPart from "../Component/CardPart";

export class Controller extends Component {
  render() {
    return (
      <CardPart {...this.props} />
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
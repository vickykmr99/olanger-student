import React, { Component } from "react";
import { connect } from "react-redux";
import Instruction from "../Components/instruction";


import {
    viewExamQuestion,
} from "../action";
export class Controller extends Component {
  render() {
    return (
      <Instruction {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    
    snackbar: store.snackbar,
    Instruction: store.Instruction

  };
};
export const mapDispatchToProps = dispatch => {
  return {
  
    viewExamQuestion: (quiz_id) => {
        dispatch(viewExamQuestion(quiz_id))
      },
   
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
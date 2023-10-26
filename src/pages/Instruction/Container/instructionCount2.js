import React, { Component } from "react";
import { connect } from "react-redux";
import Instructionpage2 from "../Components/instructionpage2";


import {
    viewExamQuestion,
} from "../action";
export class Controller extends Component {
  render() {
    return (
      <Instructionpage2 {...this.props} />
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
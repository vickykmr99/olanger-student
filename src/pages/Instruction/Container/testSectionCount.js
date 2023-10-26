import React, { Component } from "react";
import { connect } from "react-redux";
import Testsection from "../Components/testsection";


import {
    viewExamQuestion,
    // setExamQuestionByQuiz
} from "../action";
export class Controller extends Component {
  render() {
    return (
      <Testsection {...this.props} />
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
      // setExamQuestionByQuiz: (payload) => {
      //   dispatch(setExamQuestionByQuiz(payload))
      // },
   
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
import {
    SET_EXAM_QUESTION
  
  } from "./constant";
  const initial_state = {
    all_question_by_quiz:[],
  
  
  
  };
  export default function reducer(state = initial_state, action) {
    switch (action.type) {

       
        case SET_EXAM_QUESTION:
          console.log("gggggggggggggggggggggggggg",action.payload)
        return state = { ...state, all_question_by_quiz: action.payload };
  
  
      default:
        return state;
    }
  }
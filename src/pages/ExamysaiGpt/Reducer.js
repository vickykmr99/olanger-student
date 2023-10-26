import {
    SET_TEST_SERIES,
    SET_TEST_SERIES_ID
  
  } from "./constant";
  const initial_state = {
  
    test_series_id: '',
    test_series: [],

  };
  export default function reducer(state = initial_state, action) {
    switch (action.type) {
  
      case SET_TEST_SERIES_ID:
        console.log("id", action.payload)
        return {
          ...state,
          test_series_id: action.payload
        };
      case SET_TEST_SERIES:
        console.log("series", action.payload)
        return {
          ...state,
          test_series: action.payload
        };
  
      default:
        return state;
    }
  }
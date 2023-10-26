import {

  SET_PACKAGE_BY_PCATEGORY,
  PACKAGE_CATEGORY,
  PACKAGE_CATEGORY_BY_ID,
  PACKAGES,
  SET_VIDEO_LENGTH,
  SET_PACKAGE_ID,
  SET_PACKAGE_NAME,
  SET_PACKAGE_VALIDITY,
  SET_PACKAGE_PRICE,
  SET_PACKAGE_DISCOUNT,
  SET_PACKAGE_SUBJECT_NAME,
  SEARCH_PACKAGE,
  PACKAGE_BY_ID,
  EXAM_BY_ID,
  SET_PACKAGE_CATEGORY,
  SET_PACKAGE,
  SET_MINI_PACKAGE

} from "./constant";
const initial_state = {

  all_package_by_pcategory: [],
  package_category: [],
  package_category_by_id: [],
  all_package: [],
  package_length: 0,
  package_id: '',
  packcategory: '',
  package_name: "",
  package_duration: "",
  package_price: "",
  discounted_price: "",
  subject_name: "",
  search_package: [],
  pack_id: [],
  exams: [],
  minipack: []
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {

    case SET_PACKAGE_BY_PCATEGORY:
      return state = { ...state, all_package_by_pcategory: action.payload };
    case PACKAGE_BY_ID:
      return state = { ...state, pack_id: action.payload };
    case PACKAGE_CATEGORY:
      return state = { ...state, package_category: action.payload };
    case PACKAGE_CATEGORY_BY_ID:
      return state = { ...state, package_category_by_id: action.payload };
    case PACKAGES:
      console.log("ALLPACKAGEEEE", action.payload.data)
      return state = { ...state, all_package: action.payload.data, package_length: action.payload.count, search_package: action.payload.data };
    case SET_VIDEO_LENGTH:
      return state = { ...state, video_length: action.payload };
    case SET_PACKAGE_ID:
      console.log("xf", action.payload)
      return state = { ...state, package_id: action.payload };
    case SET_PACKAGE:
      console.log("hello", action.payload)
      return state = { ...state, package: action.payload };

    case SET_PACKAGE_NAME:
      console.log("packagename", action.payload)
      return {
        ...state,
        package_name: action.payload
      };

    case SET_PACKAGE_VALIDITY:
      return {
        ...state,
        package_duration: action.payload
      };

    case SET_PACKAGE_PRICE:
      return {
        ...state,
        package_price: action.payload
      };

    case SET_PACKAGE_DISCOUNT:
      return {
        ...state,
        discounted_price: action.payload
      };
    case SEARCH_PACKAGE:
      console.log("ss", action.payload)
      return state = { ...state, search_package: action.payload };

    case SET_PACKAGE_SUBJECT_NAME:

      return {
        ...state,
        subject_name: action.payload
      };
    case EXAM_BY_ID:

      return {
        ...state,
        exams: action.payload
      };
    case SET_PACKAGE_CATEGORY:
      console.log("packagecategory", action.payload)
      return {
        ...state,
        packcategory: action.payload
      };
    case SET_MINI_PACKAGE:
      console.log("packagecategory", action.payload)
      return {
        ...state,
        minipack: action.payload
      };


    default:
      return state;
  }
}
import {
  // NEWIMAGE_UPLOAD,
  LOGIN,
  LOGOUT,
  SET_ALL_ORG,
  SET_ORG_ID,
  SETLOGINID,
  SETOTP,

} from "./constant";
const initial_state = {
  // admin_id: "",
  user_id: "",
  email: "",
  type: "",
  mobile:"",
  isHome: true,
  mobileOpen: false,
  loginModal: false,
  successfull: false,
  otpmodal: false,
  active: false,
  organizations: [],
  login_id:"",
  student_name:"",
  otp:"",

};
export default function reducer(state = initial_state, action) {
  switch (action.type) {

    case LOGIN:
      return state = {
        ...state,
        isHome: false,
        email: action.payload.email,
        mobile: action.payload.mobile,
        user_id: action.payload._id,
        student_name: action.payload.student_name,
      
      };

    case LOGOUT:
      return state = {
        ...state,
        isHome: true,
        user_id: "",
        email: "",
        mobile:"",
        student_name: "",

      };

    case SET_ALL_ORG:
      return state = { ...state, organizations: action.payload};

    case SET_ORG_ID:
      return state = { ...state, org_id: action.payload};
      case SETLOGINID:
      return state = { ...state, login_id: action.payload};
      case SETOTP:
      return state = { ...state, otp: action.payload};
    // case OPEN_LOGIN_MODAL:
    //   return { ...state, loginModal: true };

    default:
      return state;
  }
}

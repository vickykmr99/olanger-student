import {
  SET_EMAIL,
  SET_PASSWORD,
  // NEWIMAGE_UPLOAD,
  SET_NAME,
  LOGIN,
  LOGOUT,
  HANDLEDRAWER,
  HANDLEDRAWER1,
  SET_HOME,
  CLEAR_LOGIN,
  OPEN_LOGIN_MODAL,
  REGISTRATION,
  SUCESSFUL,
  VERIFY_OTP,
  IMAGE_UPLOAD,
  SUPERLOGIN,
  ADMINLOGIN,
  SETALL,
  TOURISMLOGIN,
  ALL_HOTELS,
  SETACTIVE
} from "./constant";
const initial_state = {
  all_hotels: [],
  email: "",
  isHome: true,
  token: "",
  name: "",
  mobile: "",
  organization_id: "",
  type: "",
  profile_img: "",
  mobileOpen: false,
  user_id: "",
  company_id: "",
  registration: [],
  loginModal: false,
  successfull: false,
  otpmodal: false,
  user_token: "",
  department_id: "",
  department_name: "",
  active: false
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_EMAIL:
      return state = { ...state, email: action.payload };
    case SET_PASSWORD:
      return state = { ...state, password: action.payload };
    case REGISTRATION:
      return state = { ...state, registration: action.payload };
    case CLEAR_LOGIN:
      return state = { ...state, email: "", password: "" };
    case SUCESSFUL:
      return state = { ...state, successfull: action.payload };
    case SETACTIVE:
      return state = { ...state, active: action.payload };
    case VERIFY_OTP:
      return state = { ...state, otpmodal: action.payload };

    case ALL_HOTELS:
      return (state = { ...state, all_hotels: action.payload });

    case LOGIN:
      return state = {
        ...state,
        isHome: false,
        mobile: action.payload,
      };
    case SUPERLOGIN:
      return state = {
        ...state,
        isHome: false,
        mobile: action.payload.email,
        user_token: action.payload.super_token,
        type: 'SA'
      };
    case TOURISMLOGIN:
      return state = {
        ...state,
        isHome: false,
        mobile: action.payload.mobile,
        user_token: action.payload.tourism_token,
        type: 'T'
      };
    case ADMINLOGIN:
      return state = {
        ...state,
        isHome: false,
        mobile: action.payload,
        user_token: action.payload.depart_token,
        department_id: action.payload.department_id,
        department_name: action.payload.department_name,
        type: "A"
      };
    case SETALL:
      return state = {
        ...state,
        isHome: false,
        mobile: action.payload.mobile,
        user_token: action.payload.user_token,
        department_id: action.payload.department_id,
        department_name: action.payload.department_name,
        type: action.payload.type
      };
    case LOGOUT:
      return state = {
        ...state,
        user_token: "",
        mobile: "",
        department_id: "",
        type: "",

        isHome: true
      };
    case HANDLEDRAWER:
      return state = { ...state, mobileOpen: action.payload };
    case HANDLEDRAWER1:
      return state = { ...state, data: action.payload };
    case SET_HOME:
      return state = { ...state, isHome: true };
    case OPEN_LOGIN_MODAL:
      return { ...state, loginModal: true };

    default:
      return state;
  }
}

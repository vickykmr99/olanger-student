import {
    LOGIN,
    LOGOUT,
    SET_ALL_ORG,
    SET_ORG_ID,
    HANDLEDRAWER,
    CLEAR_LOGIN,
    SETLOGINID,
    SETOTP,
} from "./constant";
import UNIVERSAL from "../config/config";
import { setLoader, unsetLoader } from "../common/loader/action";
import { set_snack_bar } from "../common/snackbar/action";
// import { signInWithGoogle } from '<path-to-api-file>';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";


export function phone_login(login_id) {
    return (dispatch) => {
      dispatch(setLoader());
      return fetch(UNIVERSAL.BASEURL + "phone_login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login_id: login_id,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status) {
            // console.log(responseJson.result);
            dispatch({ type: SETLOGINID, payload: responseJson.result.login_id });
            dispatch(set_snack_bar(true, responseJson.message));
          } else {
            dispatch(set_snack_bar(responseJson.status, responseJson.message));
          }
          dispatch(unsetLoader());
          console.log(responseJson.message)
          dispatch(set_snack_bar(true, responseJson.message));
  
        })
        .catch((error) => {
          dispatch(unsetLoader());
          dispatch(set_snack_bar(true, "Check Your Internet Connection"));
          console.error(error);
        });
    };
  }


  export function send_otp(login_id) {
    return (dispatch) => {
      dispatch(setLoader());
      return fetch(UNIVERSAL.BASEURL + "send_otp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login_id: login_id,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status) {
            // console.log("asilaaaaaaaaaaaaaaaa",responseJson.result);
            dispatch({ type: SETOTP, payload: responseJson.result.otp });
            console.log(responseJson.result.otp)
            dispatch(set_snack_bar(true, responseJson.message));
          } else {
            dispatch(set_snack_bar(responseJson.status, responseJson.message));
          }
          dispatch(unsetLoader());
          console.log(responseJson.message)
          dispatch(set_snack_bar(true, responseJson.message));
  
        })
        .catch((error) => {
          dispatch(unsetLoader());
          dispatch(set_snack_bar(true, "Check Your Internet Connection"));
          console.error(error);
        });
    };
  }






export function clear_login() {
    return {
        type: CLEAR_LOGIN,
    };
}


export function setstudentLogin(payload) {
    localStorage.setItem("user_id", payload._id);
    localStorage.setItem("name", payload.student_name);
    localStorage.setItem("email", payload.email);
    localStorage.setItem("mobile no", payload.mobile);

    return {
        type: LOGIN,
        payload: payload,
    };
}


export function handleDrawerToggle(mobileOpen) {
    mobileOpen = !mobileOpen;
    return {
        type: HANDLEDRAWER,
        payload: mobileOpen,
    };
}
export function onLogout() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("mobile no");
    return {
        type: LOGOUT,
    };
}

// export function update_image(newphoto,user_id) {
//     return (dispatch) => {
//         // dispatch(setLoader());
//         return fetch(UNIVERSAL.BASEURL + "image_upload", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 // "Content-Type": "application/json",
//             },
//             body: newphoto,
//             user_id:user_id,
//             file: {
//                 photo: newphoto
//             }
//         }).then((response) => response.json())
//             .then((responseJson) => {
//                 console.log(responseJson)
//                 if (responseJson.status) {
//                     dispatch(send_otp(false))
//                     dispatch(successfull(true))
//                     // dispatch(set_snack_bar(responseJson.status, "Password Changed Successfully"));
//                 } else {
//                     dispatch(set_snack_bar(responseJson.status, responseJson.message));
//                 }
//                 dispatch(unsetLoader());
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }
// }


export function Createstudent(student_name,login_id) {
  return (dispatch) => {
      dispatch(setLoader());
      return fetch(UNIVERSAL.BASEURL + "add_student", {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            student_name:student_name,
            login_id: login_id,
          })
      })
          .then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson);
              if (responseJson.status) {
                  // dispatch(viewAllBanner());
              } else {
              }
              dispatch(unsetLoader());
              dispatch(set_snack_bar(true, responseJson.message));

          })
          .catch((error) => {
              dispatch(unsetLoader());
              dispatch(set_snack_bar(true, "Check Your Internet Connection"));
              console.error(error);
          });
  };
}
export function verify_otp(login_id, otp) {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "verify_otp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login_id: login_id,
        otp: otp,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          // if (responseJson.result.type === "A" || responseJson.result.type === "SA") {
          dispatch(setstudentLogin(responseJson.result));
          // dispatch(closeLoginModal());
          // } else {
          dispatch(set_snack_bar(true, responseJson.message));
          dispatch(setstudentLogin( responseJson.result));
          console.log(responseJson.result);
          // dispatch(setcontactforotp(contact_num));
          // console.log(contact_num);
          // }
        } else {
          dispatch(set_snack_bar(responseJson.status, responseJson.message));
        }
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, responseJson.message));

      })
      .catch((error) => {
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, "Check Your Internet Connection"));
        console.error(error);
      });
  };
}

// export const loginWithGoogle = () => {
//   return (dispatch) => {
//     dispatch({ type: 'GOOGLE_LOGIN_REQUEST' });
//     signInWithGoogle()
//       .then((response) => {
//         dispatch({
//           type: 'GOOGLE_LOGIN_SUCCESS',
//           payload: response
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: 'GOOGLE_LOGIN_FAILURE',
//           payload: error
//         });
//       });
//   };
// };


export function googleLogin() {
  return (dispatch) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // firebase
    // .auth()
    signInWithPopup(auth, provider)
      .then((res) => {
        let payload = {
          name: res.user.displayName,
          email: res.user.email,
          contact_no: res.user.phoneNumber,
          profile_pic: res.user.photoURL
        };
        dispatch(social_login(payload));
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function facebookLogin() {
  return (dispatch) => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    // firebase
    //   .auth()
    signInWithPopup(auth, provider)
      .then((res) => {
        // var credential = res.credential;

        // The signed-in user info.
        var user = res.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var accessToken = credential.accessToken;
        let payload = {
          name: user.displayName,
          email: user.email,
          contact_no: user.phoneNumber,
          profile_pic: user.photoURL

        };
        dispatch(social_login(payload));
        console.log(user);
        console.log("true")

      })
      .catch((error) => {
        console.log(error);
        if (error.email != null || error.email !== "") {
          let payload = {
            // name: user.displayName,
            email: error.email,
            // contact_no: user.phoneNumber,
            // profile_pic:user.photoURL

          };
          // dispatch(social_login(payload));
        }

        // console.log("error")
      });
  };
}

export function social_login(login) {
  // console.log("social_login", login);
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "social_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: login.email,
        name: login.name,
        contact_num: login.contact_num,
        profile_pic: login.profile_pic,
        type: "U",
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        if (responseJson.status) {
          // if (responseJson.result.type === "A" || responseJson.result.type === "SA") {
          // dispatch(setLogin(responseJson.result));
          // dispatch(closeLoginModal());
          // } else {
          dispatch(set_snack_bar(true, responseJson.message));
          // }
        } else {
          dispatch(set_snack_bar(responseJson.status, responseJson.message));
        }
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, responseJson.message));

      })
      .catch((error) => {
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, "Check Your Internet Connection"));
        console.error(error);
      });
  };
}




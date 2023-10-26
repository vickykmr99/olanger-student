import {
    LOGIN,
    LOGOUT,
    NEWIMAGE_UPLOAD,
    HANDLEDRAWER,
    SET_HOME,
    SET_EMAIL,
    SET_PASSWORD,
    CLEAR_LOGIN,
    REGISTRATION,
    SUCESSFUL,
    VERIFY_OTP,
    SUPERLOGIN,
    ADMINLOGIN,
    SETALL,
    ALL_HOTELS,
    TOURISMLOGIN,
    SETACTIVE
} from "./constant";
import UNIVERSAL from "../config/config";
import { setLoader, unsetLoader } from "../common/loader/action";
import { set_snack_bar } from "../common/snackbar/action";
// import { redirect} from "react-router-dom"
// import { RedirectFunction } from "react-router-dom";
// import firebase from "firebase"

export function setEmail(payload) {
    return {
        type: SET_EMAIL,
        payload: payload,
    };
}
export function setPwd(payload) {
    return {
        type: SET_PASSWORD,
        payload: payload,
    };
}
export function login_email(phone, token) {
    return (dispatch) => {
        dispatch(setLoader());
        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "login_otp", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: phone,
                token: token
                // otp: otp,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    dispatch({ type: SETACTIVE, payload: responseJson.status })
                    dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    dispatch(unsetLoader());
                } else {
                    alert("No Registration Found! Please Register First");
                    dispatch({ type: SETACTIVE, payload: responseJson.status })
                    dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function admin_login(email, password) {
    return (dispatch) => {
        dispatch(setLoader());
        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "login_department", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.result.length !== 0) {
                    dispatch(setAdminLogin(responseJson.result[0]))
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    // dispatch(unsetLoader());
                } else {
                    dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function super_login(email, password) {
    return (dispatch) => {
        dispatch(setLoader());
        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "login_superadmin", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.result.length !== 0) {
                    // <redirect to="/"/>
                    // console.log(responseJson)
                    dispatch(setSuperLogin(responseJson.result[0]))
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    dispatch(unsetLoader());
                } else {
                    dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function tourism_login(email, password) {
    return (dispatch) => {
        dispatch(setLoader());
        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "login_tourism", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {
                    // console.log(responseJson)
                    dispatch(setTourismLogin(responseJson.result[0]))
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    dispatch(unsetLoader());
                } else {
                    dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function register_otp(phone, salutation, firstName, lastName, email, token) {
    return (dispatch) => {
        dispatch(setLoader());
        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "register_otp", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: phone,
                salutation: salutation,
                firstname: firstName,
                lastname: lastName,
                email: email,
                token: token
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {
                    dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    dispatch(send_otp(true))
                    dispatch(unsetLoader());
                } else {
                    alert(responseJson.message);
                    // dispatch(set_snack_bar(responseJson.status, ));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function login_verify_otp(phone, otp) {
    return (dispatch) => {
        dispatch(setLoader());
        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "login_verify_otp", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: phone,
                otp: otp,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.result.hasOwnProperty("event")) {
                    console.log(responseJson.result);
                    dispatch(setLogin(responseJson.result.user_id));
                    dispatch(setRegistration(responseJson.result.event));
                    dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    // dispatch(unsetLoader());
                } else {
                    alert(responseJson.message);
                    dispatch(set_snack_bar(responseJson.status, "Invalid credential"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function view_user_registration(phone) {
    return (dispatch) => {
        dispatch(setLoader());
        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "view_user_registration", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: phone,
                // otp:otp
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    dispatch(setRegistration(responseJson.result.event));
                } else {
                    dispatch(set_snack_bar(responseJson.status, "OTP could not be Sent"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    }
}


export function view_all_hotels(token) {
    return (dispatch) => {
        dispatch(setLoader());
        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "view_all_hotels", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                super_token: token,
            },
            body: JSON.stringify({
                // mobile: phone,
                // otp: otp,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status) {
                    dispatch({ type: ALL_HOTELS, payload: responseJson.result });
                    // dispatch(setFilter(responseJson.result))
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    // dispatch(unsetLoader());
                } else {
                    dispatch({ type: ALL_HOTELS, payload: [] });
                    // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

// export function view_user_registration(phone) {
//     return (dispatch) => {
//         dispatch(setLoader());
//         // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
//         return fetch(UNIVERSAL.BASEURL + "view_user_registration", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 mobile: phone,
//                 // otp:otp
//             }),
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 if (responseJson.status) {
//                     // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
//                     dispatch(setRegistration(responseJson.result[0].event));
//                     console.log(responseJson.result[0].event, "logindata");
//                 } else {
//                     dispatch(set_snack_bar(responseJson.status, "OTP could not be Sent"));
//                 }
//                 dispatch(unsetLoader());
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };
// }
export function clear_login() {
    return {
        type: CLEAR_LOGIN,
    };
}
export function set_home() {
    return {
        type: SET_HOME,
    };
}
export function setLogin(payload) {
    localStorage.setItem("mio_mobile", payload);
    // localStorage.setItem('qubi7_token', payload.user_token);
    // localStorage.setItem('sre_name', payload.name);
    // localStorage.setItem('sre_profile_pic', payload.profile_pic);
    // localStorage.setItem('sre_user_id', payload._id);
    // localStorage.setItem('qubi7_company_id', payload.company_id);
    // localStorage.setItem('taxopliance_organization_id', payload.organization_id);
    return {
        type: LOGIN,
        payload: payload,
    };
}
export function setSuperLogin(payload) {
    console.log(payload)
    localStorage.setItem("mio_mobile", payload.email);
    localStorage.setItem("mio_token", payload.super_token);
    localStorage.setItem("mio_type", 'SA');

    return {
        type: SUPERLOGIN,
        payload: payload,
    };
}
export function setTourismLogin(payload) {
    localStorage.setItem("mio_mobile", payload.mobile);
    localStorage.setItem("mio_token", payload.tourism_token);
    localStorage.setItem("mio_type", 'T');

    return {
        type: TOURISMLOGIN,
        payload: payload,
    };
}
export function setall(payload) {
    localStorage.setItem("mio_mobile", payload.mobile);
    localStorage.setItem("mio_token", payload.user_token);
    localStorage.setItem("mio_type", payload.type);
    localStorage.setItem("mio_department_id", payload.department_id);
    localStorage.setItem("mio_department_name", payload.department_name);

    return {
        type: SETALL,
        payload: payload,
    };
}
export function setAdminLogin(payload) {
    localStorage.setItem("mio_mobile", payload.mobile);
    localStorage.setItem("mio_token", payload.depart_token);
    localStorage.setItem("mio_type", 'A');
    localStorage.setItem("mio_department_id", payload.department_id);
    localStorage.setItem("mio_department_name", payload.department_name);
    // localStorage.setItem('qubi7_token', payload.user_token);
    // localStorage.setItem('sre_name', payload.name);
    // localStorage.setItem('sre_profile_pic', payload.profile_pic);
    // localStorage.setItem('sre_user_id', payload._id);
    // localStorage.setItem('qubi7_company_id', payload.company_id);
    // localStorage.setItem('taxopliance_organization_id', payload.organization_id);
    return {
        type: ADMINLOGIN,
        payload: payload,
    };
}

export function setRegistration(payload) {
    return {
        type: REGISTRATION,
        payload: payload,
    };
}
export function setOTPActive(payload) {
    return {
        type: SETACTIVE,
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
    localStorage.removeItem("mio_type");
    localStorage.removeItem("mio_mobile");
    localStorage.removeItem("mio_token");
    localStorage.removeItem("mio_department_id");
    // localStorage.removeItem("qubi7_company_id");
    return {
        type: LOGOUT,
    };
}
export function successfull(payload) {
    return {
        type: SUCESSFUL,
        payload: payload,
    };
}
export function send_otp(payload) {
    return {
        type: VERIFY_OTP,
        payload: payload
    }
}
export function register(mobile, gender, country, state, profile_pic, pincode, city, type, industry, designation, event, address, source, otp, salutation, firstname, lastname) {
    return (dispatch) => {
        console.log(event)
        var payload = [];
        let reader = new FileReader();
        reader.readAsDataURL(profile_pic)
        let formData = new FormData();
        formData.append('photo', profile_pic);
        formData.append('mobile', mobile);
        event.forEach((element, index) => {
            var obj = JSON.parse(element);
            console.log(obj);

            payload.push(obj);
            console.log(payload)
            if (index == event.length - 1) {
                dispatch(registernow(mobile, gender, country, state, formData, pincode, city, type, industry, designation, payload, address, source, otp, salutation, firstname, lastname));
            }
        })
    }
}
export function registernow(mobile, gender, country, state, profile_pic, pincode, city, type, industry, designation, event, address, source, otp, salutation, firstname, lastname) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "verify_otp", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: mobile,
                country: country,
                gender: gender,
                state: state,
                city: city,
                pincode: pincode,
                type: type,
                company_name: industry,
                designation: designation,
                address: address,
                source: source,
                event: event,
                otp: otp,
                salutation: salutation,
                firstname: firstname,
                lastname: lastname
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {
                    dispatch(image_upload(profile_pic, mobile))

                    // dispatch(set_snack_bar(responseJson.status, "Password Changed Successfully"));
                } else {
                    // alert("Invalid User");
                    dispatch(set_snack_bar(true, responseJson.message));
                }
                // dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

// export function registernow(mobile, gender, country, state,profile_pic, pincode, city, type, industry, designation, event, address, source, otp,salutation,firstname,lastname) {
//     return (dispatch) => {
//         dispatch(setLoader());
//         return fetch(UNIVERSAL.BASEURL + "verify_otp", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 mobile: mobile,
//                 country: country,
//                 gender: gender,
//                 state: state,
//                 city: city,
//                 pincode: pincode,
//                 type: type,
//                 company_name: industry,
//                 designation: designation,
//                 address: address,
//                 source: source,
//                 event: event,
//                 otp: otp,
//                 salutation:salutation,
//                 firstname:firstname,
//                 lastname:lastname
//             }),
//         }).then((response) => response.json())
//             .then((responseJson) => {
//                 console.log(responseJson)
//                 if (responseJson.status) {
//                     dispatch(image_upload(profile_pic,mobile))

//                     // dispatch(set_snack_bar(responseJson.status, "Password Changed Successfully"));
//                 } else {
//                     dispatch(set_snack_bar(responseJson.status, responseJson.message));
//                 }
//                 // dispatch(unsetLoader());
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }
// }




export function image_upload(profile_pic, mobile) {
    return (dispatch) => {
        // dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "image_upload", {
            method: "POST",
            headers: {
                Accept: "application/json",
                // "Content-Type": "application/json",
            },
            body: profile_pic,
            file: {
                photo: profile_pic
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {
                    dispatch(send_otp(false))
                    dispatch(successfull(true))
                    // dispatch(set_snack_bar(responseJson.status, "Password Changed Successfully"));
                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
export function update_image(newphoto,user_id) {
    return (dispatch) => {
        // dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "image_upload", {
            method: "POST",
            headers: {
                Accept: "application/json",
                // "Content-Type": "application/json",
            },
            body: newphoto,
            user_id:user_id,
            file: {
                photo: newphoto
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {
                    dispatch(send_otp(false))
                    dispatch(successfull(true))
                    // dispatch(set_snack_bar(responseJson.status, "Password Changed Successfully"));
                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    }
}



// export function check_login_params() {
//     if (localStorage.getItem("user_token") !== null) {
//         return (dispatch) => {
//             dispatch(setLogin(localStorage.getItem("type"), localStorage.getItem("email"), localStorage.getItem("user_token"), localStorage.getItem("profile_img"), localStorage.getItem("name")))
//             if (!firebase.apps.length) {
//                 firebase.initializeApp(firebase_config);
//             }
//         }
//     }
// }

// export const openLoginModal = () => {
//     const loginStatus = localStorage.getItem("skyyrider_user_id");
//     if (loginStatus)
//         return {
//             type: CLOSE_LOGIN_MODAL
//         }
//     return {
//         type: OPEN_LOGIN_MODAL
//     }
// }

// export const closeLoginModal = () => ({
//     type: CLOSE_LOGIN_MODAL
// })

// export const googleLogin = () => dispatch => {
//     dispatch(setLoader());
//     const provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)
//         .then(res => {
//             const user = res.user;
//             console.log(user);
//             dispatch(socialLogin(user.email, user.photoURL))
//         })
//         .catch(err => {
//             console.error(err);
//         })
// }

// export const socialLogin = (email, profilepic) => dispatch => {

//     fetch(UNIVERSAL.BASEURL + "login_social", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({email, profilepic})
//     })
//         .then(res => res.json())
//         .then(res => {
//             if (res.status) {
//                 dispatch(setLogin(res.result))
//                 dispatch(closeLoginModal());
//                 dispatch(set_snack_bar(true, res.message));
//             } else {
//                 dispatch(set_snack_bar(res.status, res.message));
//             }
//             dispatch(unsetLoader())
//         })
// }


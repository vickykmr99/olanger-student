import { STUDENT_SPECIAL, SET_PACKAGE_DETAILS ,SET_PACKAGE_NAME,SET_PACKAGE_CATEGORY_NAME,SET_PACKAGE_VALIDITY,SET_PACKAGE_PRICE,SET_PACKAGE_DISCOUNT_PRICE} from './Constant'
import UNIVERSAL from "../../../config/config";
import { setLoader, unsetLoader } from "../../../common/loader/action";

//-------------------------------------------view_allpackage_group_by_pcategory-----------------------------//


export function viewStudentSpecial() {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_student_special", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("rsempnicd", responseJson)

                if (responseJson.status) {
                    console.log(responseJson.result)
                    dispatch({ type: STUDENT_SPECIAL, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: STUDENT_SPECIAL, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function setPackageDetails(payload) {
    console.log("chapters", payload)
    return {
        type: SET_PACKAGE_DETAILS,
        payload: payload,
    }
}

export function setPackageName(payload) {
    return {
        type: SET_PACKAGE_NAME,
        payload: payload,
    }
}

export function setPackageCategortName(payload) {
    return {
        type: SET_PACKAGE_CATEGORY_NAME,
        payload: payload,
    }
}

export function setPackageValidity(payload) {
    return {
        type: SET_PACKAGE_VALIDITY,
        payload: payload,
    }
}
export function setPackagePrice(payload) {
    return {
        type: SET_PACKAGE_PRICE,
        payload: payload,
    }
}

export function setPackageDiscountPrice(payload) {
    return {
        type: SET_PACKAGE_DISCOUNT_PRICE,
        payload: payload,
    }
}
/* eslint-disable no-lone-blocks */
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
    SET_PACKAGE_CATEGORY,
    SEARCH_PACKAGE,
    PACKAGE_BY_ID,
    EXAM_BY_ID,
    SET_PACKAGE,
    SET_MINI_PACKAGE
    

} from "./constant";
import UNIVERSAL from "../../../config/config";
import { setLoader, unsetLoader } from "../../../common/loader/action";

//--------------------------------------------------serach for course--------------------------------------------------------//
export function searchPackage(all_package, e) {
    return (dispatch) => {
        console.log("inn", e);
        if (e === "") {
            dispatch({ type: SEARCH_PACKAGE, payload: all_package });
        } else {
            const newArray = all_package.map((packageItem) => {
                const filteredCategories = packageItem.package_content.category.filter((el) => {
                    // Compare category names (case-insensitive)
                    return el.category_name.toLowerCase().includes(e.toLowerCase());
                });

                // Update the package_item with the filtered categories
                const updatedPackageItem = { ...packageItem, package_content: { ...packageItem.package_content, category: filteredCategories } };

                return updatedPackageItem;
            });
            dispatch({ type: SEARCH_PACKAGE, payload: newArray });
            console.log('search', newArray);
        }
    };
}


//-------------------------------------------------ViewAll PackageGroup By Package Category-------------------------------------//
export function viewAllPackageGroupBypCategory() {
    return (dispatch) => {
        console.log("packbycat")
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_allpackage_group_by_pcategory", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("packCategory", responseJson)

                if (responseJson.status) {
                    dispatch({ type: SET_PACKAGE_BY_PCATEGORY, payload: responseJson.result });

                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: SET_PACKAGE_BY_PCATEGORY, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };



}

//---------------------------------------------------------ViewAll Package Category---------------------------------------------//
export function viewAllPackagecategory() {
    return (dispatch) => {
        console.log("dkjfgrdjfj")
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_packagecategory", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("pCategory", responseJson)

                if (responseJson.status) {
                    dispatch({ type: PACKAGE_CATEGORY, payload: responseJson.result });

                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: PACKAGE_CATEGORY, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };



}

//---------------------------------------------------------ViewAll Package Category---------------------------------------------//
export function viewPackageByPackageCategoryId(packagecategory_id) {
    return (dispatch) => {
        console.log("dkjfgrdjfj")
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_package_by_packagecategory_id", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                packagecategory_id: packagecategory_id
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("pCategory", responseJson)

                if (responseJson.status) {
                    dispatch({ type: PACKAGE_CATEGORY_BY_ID, payload: responseJson.result });

                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: PACKAGE_CATEGORY_BY_ID, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };



}

//-----------------------------------------------------------ViewAll Package----------------------------------------------------//
export function viewAllPackage(page_number, rowper_page) {
    return (dispatch) => {
        console.log("pack", page_number, rowper_page)
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_package", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                page_number: page_number,
                rowper_page: rowper_page

            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("allpackes", responseJson)

                if (responseJson.status) {
                    dispatch({ type: PACKAGES, payload: { data: responseJson.result, count: responseJson.length } });

                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: PACKAGES, payload: { data: [], count: 0 } })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };

}

//-----------------------------------------------------------Video Length----------------------------------------------------//
export function VideoCount(lesson) {
    var videolength = 0;
    for (var i = 0; i < lesson.length; i++) {
        videolength = lesson.video.length + videolength;
    }
    return {
        type: SET_VIDEO_LENGTH,
        payload: videolength
    }
};

//-----------------------------------------------------------Package id----------------------------------------------------//
export function setPackageId(payload) {
    console.log("nn", payload)
    return {
        type: SET_PACKAGE_ID,
        payload: payload,
    };
}

//-----------------------------------------------------------Package----------------------------------------------------//
export function setPackage(payload) {
    console.log("nn", payload)
    return {
        type: SET_PACKAGE,
        payload: payload,
    };
}


export function setPackageName(payload) {
    return {
        type: SET_PACKAGE_NAME,
        payload: payload,
    };
}

export function setPackageValiditi(payload) {
    return {
        type: SET_PACKAGE_VALIDITY,
        payload: payload,
    };
}

export function setPackagePrice(payload) {
    return {
        type: SET_PACKAGE_PRICE,
        payload: payload,
    };
}

export function setPackageDiscountPrice(payload) {
    return {
        type: SET_PACKAGE_DISCOUNT,
        payload: payload,
    };
}

export function setPackageSubjectName(payload) {
    return {
        type: SET_PACKAGE_SUBJECT_NAME,
        payload: payload,
    };
}

export function setPackageCategory(payload) {
    return {
        type: SET_PACKAGE_CATEGORY,
        payload: payload,
    };
}

export function setMiniPack(payload) {
    return {
        type: SET_MINI_PACKAGE,
        payload: payload,
    };
}

//---------------------------------------------------------View_package_by_id---------------------------------------------//
export function viewPackageById(package_id) {
    return (dispatch) => {
        // console.log("packbyID")
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_package_by_id", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                package_id: package_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("packID", responseJson)
                if (responseJson.status) {
                    dispatch({ type: PACKAGE_BY_ID, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: PACKAGE_BY_ID, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

{/*-------------------------------------------view_exam_by_id--------------------------------------*/}
export function viewExamById(exam_id) {
    return (dispatch) => {
        // console.log("packbyID")
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_exam_by_id", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                exam_id: exam_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("packID", responseJson)
                if (responseJson.status) {
                    dispatch({ type: EXAM_BY_ID, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: EXAM_BY_ID, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

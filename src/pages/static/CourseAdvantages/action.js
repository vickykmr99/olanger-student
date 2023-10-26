import {
    SET_BANNER,
    SET_CATEGORY,
    SET_PACKAGE_BY_CATEGORY,
    SET_CATEGORY_ID,
    SET_PACKAGE_ID,
    SET_PACKAGE_BY_PACKAGEID,
    SET_CATEGORY_BY_PACKAGEID,
    SET_EXAM_BY_PACKAGEID,
    SET_STAGE_BY_PACKAGEID,
    SET_SUBJECT_BY_PACKAGEID,
    SET_MINIPACKAGE_BY_PACKAGEID,
    SET_CHAPTER_BY_PACKAGEID,
    SET_LESSON_BY_PACKAGEID,
    SET_VIDEO_BY_PACKAGEID,
    SET_PDF_BY_PACKAGEID,
    SET_QUIZ_BY_PACKAGEID,
    SET_TESTSERIES_BY_CATEGORY,


} from "./constant";
import UNIVERSAL from "../../../config/config";
import { setLoader, unsetLoader } from "../../../common/loader/action";




export function viewAllBanner() {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_banner", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },


        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("rsempnicd", responseJson)

                if (responseJson.status) {
                    dispatch({ type: SET_BANNER, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: SET_BANNER, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function viewAllCategory(_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_category", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("rsempnicd", responseJson.result[0]._id)

                if (responseJson.status) {
                    dispatch({ type: SET_CATEGORY, payload: responseJson.result });
                    dispatch(viewAllPackageGroupByCategory(responseJson.result[0]._id));
                    console.log("iddd", responseJson.result[0]._id);
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: SET_CATEGORY, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function viewAllPackageGroupByCategory(category_id) {
    console.log("dkjfgrdjfj", category_id)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_package_by_category", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category_id: category_id,
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("asillllllllllllllllllllllllllllllllll", responseJson)

                if (responseJson.status) {
                    dispatch({ type: SET_PACKAGE_BY_CATEGORY, payload: responseJson.result });

                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: SET_PACKAGE_BY_CATEGORY, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function viewTestSeriesByCategory(category_id) {
    console.log("tttttttttttttttttttttt", category_id)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_test_series_by_category", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category_id: category_id,
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("ccccccccccccccaaaaddddddddddddddddvvvv", responseJson)

                if (responseJson.status) {
                    dispatch({ type: SET_TESTSERIES_BY_CATEGORY, payload: responseJson.result });

                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: SET_TESTSERIES_BY_CATEGORY, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function set_category_id(payload) {
    console.log("asinuidf", payload)
    return {
        type: SET_CATEGORY_ID,
        payload: payload,
    };
}
export function viewAllPackageById(package_id) {
    // console.log("dkjfgrdjfj",category_id)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_package_by_id", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                package_id: package_id,
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("asila 1", responseJson.result.package_content.category[0].exam);
                console.log("package_id", responseJson.result._id);

                if (responseJson.status) {
                    dispatch({ type: SET_PACKAGE_BY_PACKAGEID, payload: responseJson.result });
                    dispatch({ type: SET_CATEGORY_BY_PACKAGEID, payload: responseJson.result.package_content.category });
                    console.log("cat............gory", responseJson.result.package_content.category)
                    // dispatch({ type: SET_EXAM_BY_PACKAGEID, payload: responseJson.result.package_content.category.exam });
                    // dispatch({ type: SET_STAGE_BY_PACKAGEID, payload: responseJson.result.package_content.category.exam.stage });
                    // dispatch({ type: SET_SUBJECT_BY_PACKAGEID, payload: responseJson.result.package_content.category.exam.stage.subject });
                    // dispatch({ type: SET_MINIPACKAGE_BY_PACKAGEID, payload: responseJson.result.package_content.category.exam.stage.subject.minipackage });
                    // dispatch({ type: SET_CHAPTER_BY_PACKAGEID, payload: responseJson.result.package_content.category.exam.stage.subject.minipackage.chapter });
                    // dispatch({ type: SET_LESSON_BY_PACKAGEID, payload: responseJson.result.package_content.category.exam.stage.subject.minipackage.chapter.lesson });
                    // dispatch({ type: SET_VIDEO_BY_PACKAGEID, payload: responseJson.result.package_content.category.exam.stage.subject.minipackage.chapter.lesson.video });
                    // dispatch({ type: SET_PDF_BY_PACKAGEID, payload: responseJson.result.package_content.category.exam.stage.subject.minipackage.chapter.lesson.pdf });
                    // dispatch({ type: SET_QUIZ_BY_PACKAGEID, payload: responseJson.result.package_content.category.exam.stage.subject.minipackage.chapter.lesson.pdf.quiz });
                    // dispatch({ type: SET_PACKAGE_ID, payload: responseJson.result._id  });


                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: SET_PACKAGE_BY_PACKAGEID, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function set_package_id(payload) {
    console.log("asinuidf", payload)
    return {
        type: SET_PACKAGE_ID,
        payload: payload,
    };
}




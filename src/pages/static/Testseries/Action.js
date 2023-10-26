import { VIEW_TEST_SERIES_BY_CATEGORY, VIEW_ALL_TEST_SERIES, SET_TESTSERIES_ID, SET_TESTSERIES, SEARCH_TESTSERIES } from './Constant'
import UNIVERSAL from "../../../config/config";
import { setLoader, unsetLoader } from "../../../common/loader/action";

//----------------------------------------------------------------------search bar--------------------------------------------------//
export function searchTestseries(all_testSeries, e, type) {
    return (dispatch) => {
        if (e === '') {
            dispatch({ type: SEARCH_TESTSERIES, payload: all_testSeries });
        }
        else if (type === "search") {
            const newArray = all_testSeries.map((packageItem) => {
                const filteredCategories = packageItem.test_series_content.category.filter((el) => {
                    // Compare category names (case-insensitive)
                    return el.category_name.toLowerCase().includes(e.toLowerCase());
                });
                // Update the package_item with the filtered categories
                const updatedPackageItem = { ...packageItem, test_series_content: { ...packageItem.test_series_content, category: filteredCategories } };
                return updatedPackageItem;
            });
            dispatch({ type: SEARCH_TESTSERIES, payload: newArray });
        }
        else if (type === "category") {
            const newArray = all_testSeries.filter((el) => {
                return (el.category_name.toLowerCase().includes(e.toLowerCase()));
            })
            dispatch({ type: SEARCH_TESTSERIES, payload: newArray })
        }
    };
}

//-----------------------------------------------------------------------all test series--------------------------------------//
export function viewAllCategory() {
    return (dispatch) => {
        console.log("cate")
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + 'view_all_category', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("Category", responseJson)
                if (responseJson.status) {
                    dispatch({ type: VIEW_TEST_SERIES_BY_CATEGORY, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: VIEW_TEST_SERIES_BY_CATEGORY, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

//-----------------------------------------------------------view all test--------------------------------//
export function viewAllTestSeries() {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_test_series_admin", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("TESTS", responseJson)

                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_TEST_SERIES, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: VIEW_ALL_TEST_SERIES, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

//------------------------------------------------------------Testseries id-----------------------------------------------------//
export function setTestseriesId(payload) {
    console.log("nn", payload)
    return {
        type: SET_TESTSERIES_ID,
        payload: payload,
    };
}

//---------------------------------------------------------------Testseries-----------------------------------------------------//
export function setTestseries(payload) {
    console.log("nn", payload)
    return {
        type: SET_TESTSERIES,
        payload: payload,
    };
}

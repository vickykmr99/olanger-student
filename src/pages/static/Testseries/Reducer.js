import {

    VIEW_TEST_SERIES_BY_CATEGORY, VIEW_ALL_TEST_SERIES, SET_TESTSERIES, SET_TESTSERIES_ID, SEARCH_TESTSERIES,

} from "./Constant";
const initial_state = {

    test_series_category: [],
    all_testSeries: [],
    testseries: [],
    testseries_id: "",
    search_testseries: []

};
export default function reducer(state = initial_state, action) {
    switch (action.type) {

        //CATEGORY DRAWERS
        case VIEW_TEST_SERIES_BY_CATEGORY:
            console.log('sercat', action.payload)
            return state = { ...state, test_series_category: action.payload };

        //DEFAULT TEST SERIES BOARD   
        case VIEW_ALL_TEST_SERIES:
            console.log("test", action.payload)
            return state = { ...state, all_testSeries: action.payload, search_testseries: action.payload };

        case SET_TESTSERIES_ID:
            // console.log("xf", action.payload)
            return state = { ...state, testseries_id: action.payload };
        case SET_TESTSERIES:
            // console.log("ss", action.payload)
            return state = { ...state, testseries: action.payload };
        case SEARCH_TESTSERIES:
            // console.log("", action.payload)
            return state = { ...state, search_testseries: action.payload };
        default:
            return state;
    }
}
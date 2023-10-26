/* eslint-disable no-lone-blocks */
import {
    SET_TEST_SERIES,
    SET_TEST_SERIES_ID

} from "./constant";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";


export function setTestSeriesId(payload) {
    return {
        type: SET_TEST_SERIES_ID,
        payload: payload,
    };
}

export function setTestSeries(payload) {
    return {
        type: SET_TEST_SERIES,
        payload: payload,
    };
}

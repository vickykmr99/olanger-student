import React, { Component } from "react";
import { connect } from "react-redux";
import ExamysaiGPT from "../Components/ExamysaiGpt";
import {
    viewAllPackage
} from "../../static/Coursedetails/action";
import {
    viewAllCategory
} from "../../static/Testseries/Action";

import { setTestSeries, setTestSeriesId } from '../Action'

export class Controller extends Component {
    render() {
        return (
            <ExamysaiGPT {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {

        snackbar: store.snackbar,
        common: store.common,
        home: store.home,
        coursedetails: store.coursedetails,
        testseries: store.testseries,
        studentspecial: store.studentspecial


    };
};
export const mapDispatchToProps = dispatch => {
    return {

        viewAllPackage: (page_number, rowper_page) => {
            dispatch(viewAllPackage(page_number, rowper_page))
        },
        viewAllCategory: () => {
            dispatch(viewAllCategory())
        },
        setTestSeries: (payload) => {
            dispatch(setTestSeries(payload))
        },
        setTestSeriesId: (payload) => {
            dispatch(setTestSeriesId(payload))
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
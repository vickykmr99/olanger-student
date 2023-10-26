import React, { Component } from "react";
import { connect } from "react-redux";
import Testseries from "../Component/testseries";

import {
    viewAllCategory,
    viewAllTestSeries,
    setTestseriesId,
    setTestseries,
    searchTestseries
} from '../Action'

export class Controller extends Component {
    render() {
        return (
            <Testseries {...this.props} />
        );
    }
};

export const mapStateToProps = store => {
    return {

        testseries: store.testseries,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        viewAllCategory: () => {
            dispatch(viewAllCategory())
        },
        viewAllTestSeries: () => {
            dispatch(viewAllTestSeries())
        },
        setTestseriesId: (payload) => {
            dispatch(setTestseriesId(payload))
        },
        setTestseries: (payload) => {
            dispatch(setTestseries(payload))
        },
        searchTestseries: (all_testSeries, e, type) => {
            dispatch(searchTestseries(all_testSeries, e, type))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
import React, { Component } from "react";
import { connect } from "react-redux";
import Testseries2 from "../Component/Testseriesviewdetails";

import {
    viewAllCategory,
    viewAllTestSeries,
    setTestseriesId,
    setTestseries,
} from '../Action'
import {
     viewExamQuestion
} from '../../../Instruction/action'


export class Controller extends Component {
    render() {
        return (
            <Testseries2 {...this.props} />
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
        viewExamQuestion: (quiz_id) => {
            dispatch(viewExamQuestion(quiz_id))
          },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
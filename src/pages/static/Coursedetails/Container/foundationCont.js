import React, { Component } from "react";
import { connect } from "react-redux";
import Foundation from "../Component/foundation";
import {
    viewPackageById,
} from "../action";

export class Controller extends Component {
    render() {
        return (
            <Foundation {...this.props} />
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

        viewPackageById: (package_id) => {
            dispatch(viewPackageById(package_id))
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
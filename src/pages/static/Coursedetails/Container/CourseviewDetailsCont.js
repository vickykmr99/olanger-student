import React, { Component } from "react";
import { connect } from "react-redux";
import CourseviewDetail from "../Component/CourseviewDetail";
import {

  viewAllPackageGroupBypCategory,
  viewAllPackage,
  viewAllPackagecategory,
  setPackageId,
  // setPackage
  viewPackageById,
  viewExamById,
  setMiniPack

} from "../action";
import {
  viewAllCategory,
  set_package_id,
  set_category_id,
  viewAllPackageGroupByCategory

} from "../../CourseAdvantages/action";
export class Controller extends Component {
  render() {
    return (
      <CourseviewDetail {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {

    snackbar: store.snackbar,
    common: store.common,
    home: store.home,
    coursedetails: store.coursedetails,

  };
};
export const mapDispatchToProps = dispatch => {
  return {

    viewAllPackageGroupBypCategory: () => {
      dispatch(viewAllPackageGroupBypCategory())
    },
    viewAllPackage: (page_number, rowper_page) => {
      dispatch(viewAllPackage(page_number, rowper_page))
    },
    viewAllPackagecategory: () => {
      dispatch(viewAllPackagecategory())
    },
    viewAllCategory: () => {
      dispatch(viewAllCategory())
    },
    viewPackageById: (package_id) => {
      dispatch(viewPackageById(package_id))
    },
    setPackageId: (payload) => {
      dispatch(setPackageId(payload))
    },
    set_package_id: (payload) => {
      dispatch(set_package_id(payload))
    },
    set_category_id: (payload) => {
      dispatch(set_category_id(payload))
    },
    viewAllPackageGroupByCategory: (category_id) => {
      dispatch(viewAllPackageGroupByCategory(category_id))
    },
    viewExamById: (exam_id) => {
      dispatch(viewExamById(exam_id))
    },
    setMiniPack: (payload) => {
      dispatch(setMiniPack(payload))
    },



  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
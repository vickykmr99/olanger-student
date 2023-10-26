import React, { Component } from "react";
import { connect } from "react-redux";
import CourseDetails from "../Component/Coursedetails";
import {

  viewAllPackageGroupBypCategory,
  viewAllPackage,
  viewAllPackagecategory,
  setPackageId,
  setPackage,
  setPackageName,
  setPackageValiditi,
  setPackagePrice,
  setPackageDiscountPrice,
  setPackageSubjectName,
  searchPackage,
  setPackageCategory

} from "../action";
import {
  set_package_id,
  set_category_id,
  viewAllPackageGroupByCategory,


} from "../../CourseAdvantages/action";

import { viewAllCategory } from "../../Testseries/Action"
export class Controller extends Component {
  render() {
    return (
      <CourseDetails {...this.props} />
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
    setPackage: (payload) => {
      dispatch(setPackage(payload))
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

    setPackageName: (payload) => {
      dispatch(setPackageName(payload))
    },

    setPackageValiditi: (payload) => {
      dispatch(setPackageValiditi(payload))
    },
    setPackageCategory: (payload) => {
      dispatch(setPackageCategory(payload))
    },

    setPackagePrice: (payload) => {
      dispatch(setPackagePrice(payload))
    },
    setPackageDiscountPrice: (payload) => {
      dispatch(setPackageDiscountPrice(payload))
    },
    setPackageSubjectName: (payload) => {
      dispatch(setPackageSubjectName(payload))
    },
    searchPackage: (all_package, e) => {
      dispatch(searchPackage(all_package, e))
    }






  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
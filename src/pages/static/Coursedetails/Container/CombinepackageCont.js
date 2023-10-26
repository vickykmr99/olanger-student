import React, { Component } from "react";
import { connect } from "react-redux";
import Combinepackage from "../Component/CombinePackage";
import {

  viewAllPackageGroupByCategory,
  viewAllPackageById,
  set_package_id
} from "../../CourseAdvantages/action";
import {
    viewAllPackageGroupBypCategory,
    VideoCount,
} from "../action"
export class Controller extends Component {
  render() {
    return (
      <Combinepackage {...this.props} />
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
  
    viewAllPackageGroupByCategory: (category_id) => {
        dispatch(viewAllPackageGroupByCategory(category_id))
      },
      viewAllPackageById: (package_id) => {
        dispatch(viewAllPackageById(package_id))
      },
      viewAllPackageGroupBypCategory: () => {
        dispatch(viewAllPackageGroupBypCategory())
      },
      set_package_id: () => {
        dispatch(set_package_id())
      },
      VideoCount: (lesson) => {
        dispatch(VideoCount(lesson))
      },
 
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import LoginController from "../components/controller";

//import { setAffiliates,setEmail, setPhone, setdescription,resetAffiliates,AffiliatesFunc,closeSnackbar} from "../../actions/affiliates/affiliates_action";
import {
  setLogin,
  setall
} from "../../auth/actions";
import {
  setstudentLogin
} from "../../common/actions"

export class Controller_con extends Component {

  render() {
    return (
      <LoginController {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
   
   login: store.login,
  };
};

export const mapDispatchToProps = dispatch => {
    return {
      setstudentLogin: (payload) => {
        dispatch(setstudentLogin(payload));
      },
      setall: (payload) => {
        dispatch(setall(payload));
      }
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Controller_con );
import React, { Component } from "react";
// import firebase from "firebase";
// import { firebase_config } from "../../constants/ActionTypes";

export default class LoginController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      page: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("user_id") !== null) {
      this.props.setstudentLogin({
        _id: localStorage.getItem("user_id"),
        mobile: localStorage.getItem("mobile no"),
        student_name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
      
      });

      // if (!firebase.apps.length) {
      //   firebase.initializeApp(firebase_config);
      // }
    }
  }

  render() {
    return (
      <div />


    );
  }
}

import React from "react";
import Icon from "@mui/material/Icon";
import {
  // Link,
  Navigate,
} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import "../../common/navbar/index.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "../styles/drawer.css";

export default class LG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  render() {
    const { login } = this.props;

    if (this.state.redirect === true) {
      return <Navigate to="/" />;
    }
    return (
      // <IconButton
      //   onClick={() => {
      //     localStorage.removeItem("qubi7_type");
      //     localStorage.removeItem("qubi7_name");
      //     localStorage.removeItem("qubi7_profile_pic");
      //     localStorage.removeItem("qubi7_user_id");
      //     localStorage.removeItem("qubi7_company_id");
      //     // localStorage.removeItem("taxopliance_organization_id");
      //     this.setState({redirect:true})
      //     this.props.onLogout()
      //   }}>
      //   <Icon style={{ color: "white" }}>power_settings_new</Icon>
      // </IconButton>

      <Button
        className="logout-button1"
        style={{ marginLeft: 30 }}
        color="error"
        variant="outlined"
        onClick={() => {
          localStorage.removeItem("mio_mobile");
          // localStorage.removeItem("sre_name");
          // localStorage.removeItem("qubi7_profile_pic");
          // localStorage.removeItem("sre_user_id");
          // localStorage.removeItem("qubi7_company_id");
          // localStorage.removeItem("taxopliance_organization_id");
          this.setState({ redirect: true });
          this.props.onLogout();
        }}

        // style={{
        //   position:"relative",
        //      height:"30px",
        //      width:"80px",
        //      border:"1px solid",
        //      borderRadius:"5px",
        //     background:"#fadde1",
        //     fontSize:"15px",
        //     left:"-100px"
        //     }}
      >
        {" "}
        Log Out
      </Button>
    );
  }
}

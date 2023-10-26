import React, { Component } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import HelpIcon from "@mui/icons-material/Help";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import Eclipse from "../../../images/eclipse.png";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import "../../ExamysaiGpt/Components/abnav.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import InputBase from "@mui/material/InputBase";
import { Grid } from "@mui/material";

export default class Abnav extends Component {
  render() {
    return (
      <AppBar style={{ backgroundColor: "white" }}>
        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%" }}>

          <img className="main-navbar-logo" src={Eclipse} alt="Loading..." />

          <Paper
            component="form"
            style={{
              display: "flex",
              width: "300px",
              height: "37px",
              marginLeft: "10%",
              marginTop: "1%",
              border: "1px solid rgba(142, 141, 151, 0.50)",
              backgroundColor: "none ",
            }}
          >
            <IconButton
              type="button"
              style={{
                p: "150px",
                color: "var(--nuetrals-nuetrals-n-300, #72717D)",
              }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              style={{
                ml: 5,
                flex: 1,
                fontSize: "15px",
                color: "var(--nuetrals-nuetrals-n-300, #72717D)",
                fontFamily: "Poppins",
              }}
              placeholder="search"
              inputProps={{ "aria-label": "search" }}
            />
          </Paper>
          <select
            name=""
            id=""
            className="index-select"
            style={{ fontSize: "15px", color: "#72717D", fontWeight: 600 }}
          >
            <option value="Exam List">Exam List</option>
          </select>
          {/* <Grid className="headerdivider" >
                                        </Grid> */}

          <Button variant="text" style={{ color: "#72717D", width: "200px", }} className="button-index">Refer & Earn</Button>
          {/* <Grid className="headerdivider1" >
                                        </Grid> */}

          <Button variant="text" style={{ color: "#72717D", width: "200px", }} className="button-index">Examy's first</Button>
          {/* <Grid className="headerdivider2" >
                                        </Grid> */}
          <Button variant="text" style={{ color: "#72717D", width: "200px", }} className="button-index">Coupon</Button>
          {/* <Grid className="headerdivider3" >
                                        </Grid> */}

          <Button variant="text" style={{ color: "#72717D", width: "220px", }} className="button-index">Download App</Button>


        </Grid>


        

      </AppBar>
    );
  }
}

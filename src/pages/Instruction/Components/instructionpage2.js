import React, { Component } from 'react'
import "../../Instruction/Components/instructionpage2.css";
import { Button, Container, Grid, Avatar, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import avatar from "../../../images/Iconpro.svg";
import WestIcon from '@mui/icons-material/West';
import InstructionNav from "../../../pages/Instruction/Components/instructionNav";
import Warning from "../../../images/exclamation-circle.svg";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from 'react-router-dom';
export default class instructionpage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: false,
    }
  }
  render() {
    return (
      <>

        <InstructionNav />

        <Grid className="instructionpage2-main">
          <Grid className="instructionpage2-leftside-container">
            <Typography className="ip2-heading" style={{ marginTop: "30px" }}> PYST 1: SSC CGL - Reasoning (Head On : 11 April 2022 Shift 1)</Typography>
            <Typography className="ip2-dd">Maximum Marks: 50</Typography>

            <Grid className="ip2-ddd">
              <Typography className="ip2-d">Duration:18 Mins</Typography>
              <Typography className="ip2-d">Read the following instruction carefully.</Typography>
              <Grid className="ip2-content">
                <Typography style={{ marginBottom: "10px" }}>1. This test having 25 total questions.</Typography>
                <Typography style={{ marginBottom: "10px" }}>2. Each question has 4 options out of which only one is correct.</Typography>
                <Typography style={{ marginBottom: "10px" }}>3. You have to finish the test in 18 minutes.</Typography>
                <Typography style={{ marginBottom: "10px" }}>4. You will be awarded 2 mark for each correct answer and 0.5 marks will be deducted for each wrong answer.</Typography>
                <Typography style={{ marginBottom: "10px" }}>5. There is no negative marking for the questions that you have not attempted. </Typography>
                <Typography style={{ marginBottom: "10px" }}>
                  6. You can write this test only once. Make sure that you complete the test before you submit the test and/or close the browser.
                </Typography>
              </Grid>

              <Grid className="instructionpage2-lastpart">
                <Grid>
                  <Typography className="ip2-d">Choose your default language
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label">-Select-</InputLabel>
                      <Select>

                        <MenuItem value="e">English</MenuItem>
                        <MenuItem value="h">Hindi</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                  <Typography className="ip2-redt">
                    Please note all questions will appear in your default language. This language can be changed for a particular question later on.
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className="ip2-d">Declaration:</Typography>
                  <Typography className='ip2-d10'><Checkbox />i have all the instructions careflly and have understood them. i agree not to cheat or use unfair means in this examination. i have understand that using unfair means of any sort for my own or someone else's advantage will lead to my immediate disqualification.</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid className="bottom-left-part2">
              <Grid className="instructionpage2-fixedbutton">
                <a href="/instruction" style={{ textDecoration: "none" }}>
                  <Grid>
                    <Button variant="contained" className="next-btnn">Previous</Button>
                  </Grid>
                </a>
                {/* <a href="/testsection" style={{textDecoration:"none"}}> */}
                <Grid>
                <Link to="/testsection">
                  <Button variant="contained" className="next-btnn"
                    onClick={() => {
                      this.setState({ warning: true });
                    }}>I am ready to begin</Button>
                    </Link>
                </Grid>
                {/* </a> */}


              </Grid>
            </Grid>
          </Grid>

          {/* right side */}
          <Grid className="instructionpage2-rightside-container">
            <Grid style={{ textAlign: "center", paddingTop: "70px" }}>
              {/* <Avatar src="/broken-image.jpg" className="instruction--page1-rightside-avtar1" /> */}
              <img src={avatar} className='avatar-logo' />
              <Typography className="user-name-instruction">Priya .Arya</Typography>
            </Grid>
          </Grid>

        </Grid>

        <Dialog
          open={this.state.warning} style={{}}>
          <Grid style={{ height: "250px", width: "520px" }}>

            <Box style={{ textAlign: "center" }}>
              <img src={Warning} style={{ marginTop: "2%" }} />
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{
                  fontFamily: "Inter",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 600,
                }}
              >
                Warning !
              </Typography>
              <Typography
                id="modal-modal-description"
                style={{
                  marginTop: "2%",
                  fontSize: "1rem",
                  fontFamily: "Inter",
                  display: "flex",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                Please accept terms and conditions before proceeding.
              </Typography>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "6%",
                }}
              >
                
                  <button
                    variant="contained"

                    onClick={() => {
                      this.setState({ warning: false });
                    }}
                    style={{
                      marginLeft: 10,
                      // width: "20%",
                      padding: "10px 28px",
                      border: "none",
                      backgroundColor: "#0000B3",
                      color: "white",
                      borderRadius: "8px",
                    }}
                  >
                    Ok

                  </button>
              
              </Box>
            </Box>
          </Grid>
        </Dialog>

      </>
    )
  }
}

import React, { Component } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Menu,
  MenuItem,
  Box,
  Grid,
  Button,
  Chip,
} from "@mui/material";
import Image1 from "../../../../images/Group 472.svg";
import Image2 from "../../../../images/Group 513.svg";
import Image3 from "../../../../images/Group 519.svg";
// import CardActions from "@mui/material/CardActions";

export default class TestEdge extends Component {
  render() {
    return (

      <div>
        <Box>
          <Typography variant="h4" component="h2" textAlign="center" marginTop="%" fontWeight={800}>

            Examys Mock Test

            <span style={{ borderBottom: "5px double #F88C29", color: "#141226" }}>  Edge{" "}</span>{" "}

          </Typography>
          <Grid>
            <Typography variant="h5" component="h2" textAlign="center" style={{ marginTop: "3%", fontWeight: "500" }}>
              Join Test series for 500 + exams with India's most advanced online
              Test Series Terminal <br />
              One Pass & Access to Unlimited Exams with
            </Typography>

          </Grid>

          <Grid style={{ textAlign: "center", margin: "1%" }}>
            <a href="testpasspro" style={{ textDecoration: "none" }}>
              <button
                variant="contained"
                // className="test-series-home-butnn"
                style={{ fontSize: "20px", color: "white", outline: "none", border: "none", padding: "7px 15px", borderRadius: "4px", fontWeight: "400", background: "#3E30C2" }}
              >
                Examys Test Pass pro+
              </button>
            </a>
          </Grid>
        </Box>

        {/* <Grid item xs={19} Grid container justifyContent="center" alignItems="center"
        > */}
          {/* <Grid>
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-around",
              }} > </Stack>


            <img style={{width:"100vw"}} src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/3Cards.png?alt=media&token=ce3a9c2e-96fe-425d-8e3f-d1c8f28c38db" alt="Img" />
          </Grid> */}

          {/* <Grid>
            <img src={}/>
          </Grid> */}

        {/* </Grid> */}

        <Grid style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: "30px", margin: "5%", marginTop: "7%" }}>
          <Grid  style={{textAlign:"center"}}>
            <img src={Image1} />

            <Grid style={{textAlign:"center",marginTop:"3%"}}>
              <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#141226",paddingBottom:"7px" }}>Personalised Recommendation</Typography>
              <Typography style={{ fontSize: "18px", fontWeight: "400", color: "#3E3D4D" ,padding:"0px 29px"}}>It traces strong and waek areas of your Test Journey & recommonds for improvement.
              </Typography>
            </Grid>
          </Grid>
          <Grid  style={{textAlign:"center"}}>
            <img src={Image2} />

            <Grid style={{textAlign:"center",marginTop:"3%"}}>
              <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#141226",paddingBottom:"7px" }}>Comprehensive approach to New Exam Pattern</Typography>
              <Typography style={{ fontSize: "18px", fontWeight: "400", color: "#3E3D4D" ,padding:"0px 29px"}}>Get mock tests (chapter-wise, sectional & full mock, mini mock, level-up mock, and many more), previous-year tests, trend tests, and live test series to maximize your score with an all-round approach.
              </Typography>
            </Grid>
          </Grid>
          <Grid style={{textAlign:"center"}}>
            <img src={Image3} />
            <Grid style={{textAlign:"center",marginTop:"3%"}}>
              <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#141226",paddingBottom:"7px" }}>Competitive Index</Typography>
              <Typography style={{ fontSize: "18px", fontWeight: "400", color: "#3E3D4D" ,padding:"0px 29px"}}>Gauge your strength after test so that You will have an edge over your competitors.

              </Typography>
            </Grid>
          </Grid>
        </Grid>

      </div>
    )
  }
}

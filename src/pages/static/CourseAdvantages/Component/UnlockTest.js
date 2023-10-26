import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Menu,
  MenuItem,
  Box,
  Grid,
  Chip,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import TranslateIcon from "@mui/icons-material/Translate";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Unlocktestimage from "../../../../images/Frame 7031.png";
import "./Courses.css"
export default class UnlockTest extends Component {
  render() {
    return (
      <div style={{background:"#F5FEFD",textAlign:"center",paddingBottom:"3%"}}>
        {/* <Grid container >
          <Grid item xs={6}  Grid container justifyContent="center" alignItems="center" marginTop="3%"
             >
            <Grid>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-around",
                }}
                
              >
                <Grid item xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <AssignmentTurnedInIcon style={{ color: '#3E30C2',fontSize:"40px", backgroundColor:"#FFDAD7",borderRadius:"50%",padding:"5px" }}/>
                    </div>

                    <Button color="inherit">
                      Undated Questions with latest exam pattern
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <TranslateIcon style={{ color: '#3E30C2',fontSize:"40px", backgroundColor:"#FFDAD7",borderRadius:"50%",padding:"5px" }}/>
                    </div>

                    <Button color="inherit">Multilingual Test </Button>
                  </Box>
                </Grid>
              </Stack>
            </Grid>
            <Grid>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-around",
                }}
                
              >
                <Grid item xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <SignalCellularAltIcon style={{ color: '#3E30C2',fontSize:"40px", backgroundColor:"#FFDAD7",borderRadius:"50%",padding:"5px" }}/>
                    </div>

                    <Button color="inherit">Performance Analysis & Rank</Button>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <NoteAddIcon style={{ color: '#3E30C2',fontSize:"40px", backgroundColor:"#FFDAD7",borderRadius:"50%",padding:"5px" }}/>
                    </div>

                    <Button color="inherit">
                      A paragraph of text with an unassigned link
                    </Button>
                  </Box>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={1} marginTop={6}>
            <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/images%2FGroup%20356.png?alt=media&token=c3055333-0ec7-460a-a542-0798db20a844" alt="Img"/>
          </Grid>
        </Grid> */}
      <img src={Unlocktestimage} style={{width:"100%",paddingRight:"6%",marginLeft:"6%",paddingTop:"3%"}}/>

        <CardActions style={{ justifyContent: "center", marginTop: "15px" }}>
          <Button variant="contained" style={{fontSize:"25px",backgroundColor: "#3E30C2"}}>Unlock Test Series Pass</Button>
        </CardActions>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Button, Stack, List, Grid, Link ,Typography ,Box} from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CreditScoreIcon from '@mui/icons-material/CreditScore';



class Subjectseriestest extends Component {

    constructor(props) {
        super(props);
        this.state = { activeButtonId: 2 };
        this.state = {
            modalVisible: false,
            isHidden: true,

            Testseriesviewdetails: [
                {
                    title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
                    Qn: "100 Questions ",
                    mark: "100 Marks",
                    time: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english: "English",
                    hindi: "Hindi",
                },
                {
                    title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
                    Qn: "100 Questions ",
                    mark: "100 Marks",
                    time: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english: "English",
                    hindi: "Hindi",
                },
                {
                    title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
                    Qn: "100 Questions ",
                    mark: "100 Marks",
                    time: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english: "English",
                    hindi: "Hindi",
                },
                {
                    title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
                    Qn: "100 Questions ",
                    mark: "100 Marks",
                    time: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english: "English",
                    hindi: "Hindi",
                },
                {
                    title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
                    Qn: "100 Questions ",
                    mark: "100 Marks",
                    time: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english: "English",
                    hindi: "Hindi",
                },
            ],
            Testseriesviewdetails2: [
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
                {
                    title1: "English Language Sectional Test - 1",
                    Qn1: "100 Questions ",
                    mark1: "100 Marks",
                    time1: "Time: 90 Mins",
                    // btntext: "Unlock Now",
                    english1: "English",
                    hindi1: "Hindi",
                },
            ]


        }
    }



    handleButtonClick = (buttonId) => {
        this.setState({ activeButtonId: buttonId });
      };
    




    render() {
        const { activeButtonId } = this.state;
        return (

            <Grid style={{marginTop:"10%"}}> 
            <Grid style={{textAlign:"center"}}>

                <Typography
                    sx={{ fontSize: 29, fontWeight: "bold" }}
                    gutterBottom
                    textAlign="center"
                    marginTop="-1%"
                >
                    SSC CHSL Test Series For 2022 Exams (New Pattern)
                </Typography>

                <Grid style={{textAlign:"center"}}>
                    <button style={{background:"#3E30C2",padding:"8px", color:"white",border:"1px solid lightgray"}}>Previous Year Test</button>
                    <Grid style={{textAlign:"center",marginLeft:"21%"}}>

                        <Stack
                            direction="row"
                            sx={{
                                // justifyContent: 'left',
                                alignItems: 'center',
                                borderRadius: '5px',
                                paddingTop: '25px',
                                // marginLeft: '2%',
                                gap: '16px',
                                // marginRight: "2%"
                            }}
                        >
                            <Button style={{ width: "80px" }}
                                className={` ${activeButtonId === 1 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(1)}
                            >
                                2023
                            </Button>
                            <Button style={{ width: "80px" }}
                                className={` ${activeButtonId === 2 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(2)}
                            >
                                2022
                            </Button>
                            <Button style={{ width: "80px" }}
                                className={` ${activeButtonId === 3 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(3)}
                            >
                                2021
                            </Button>
                            <Button style={{ width: "80px" }}
                                className={` ${activeButtonId === 4 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(4)}
                            >
                                2020
                            </Button>
                            <Button style={{ width: "80px" }}
                                className={` ${activeButtonId === 5 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(5)}
                            >
                                2019
                            </Button>
                            <Button style={{ width: "80px" }}
                                className={` ${activeButtonId === 6 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}
                                variant="contained"
                                onClick={() => this.handleButtonClick(6)}
                            >
                                2018
                            </Button>

                            <Button style={{ width: "80px" }}
                                className={` ${activeButtonId === 7 ? 'arrows arrow-bottom' : 'arrow'}`} onClick={() => this.handleButtonClick(7)} sx={{ ml: 1 }}
                                variant="contained">
                                2017
                            </Button>
                            <Button style={{ width: "80px" }}
                                className={` ${activeButtonId === 8 ? 'arrows arrow-bottom' : 'arrow'}`}
                                sx={{ ml: 1 }}

                                variant="contained"
                                onClick={() => this.handleButtonClick(8)}
                            >
                                2016
                            </Button>

                        </Stack>
                    </Grid>
                </Grid>

            </Grid>

            {/* cards here */}

            <Grid style={{
          maxWidth: "1300px",
          maxHeight: "311%",
          marginTop: '7%',
          margin: '70px auto',
          textAlign: 'center',
        }}>

          {this.state.Testseriesviewdetails2.map((Testseriesviewdetails2, index) => (
            <Grid className='papercard-container'>
              <Grid style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Typography
                  sx={{ fontSize: 15, fontWeight: "bold", textAlign: "left" }}
                >
                  {Testseriesviewdetails2.title1}
                </Typography>
                <Grid style={{ display: "flex", gap: "10px" }}>
                  <Box style={{ display: "flex", gap: "10px" }}>
                    <HelpIcon style={{ color: "#72717D", fontstyle: "6px" }} />
                    <Box sx={{ color: "#72717D", fontweight: "400" }}>
                      {Testseriesviewdetails2.Qn1}
                    </Box>

                  </Box>
                  <Box style={{ display: "flex", gap: "10px" }}>
                    <CreditScoreIcon style={{ color: "#72717D", fontStyle: "smaller" }} />
                    <Box sx={{ color: "#72717D", fontweight: "400" }}>
                      {Testseriesviewdetails2.mark1}
                    </Box>

                  </Box>
                  <Box style={{ display: "flex", gap: "10px" }}>
                    <AccessTimeFilledIcon style={{ color: "#72717D", fontStyle: "smaller" }} />
                    <Box sx={{ color: "#72717D", fontweight: "400" }}>
                      {Testseriesviewdetails2.time1}
                    </Box>

                  </Box>
                </Grid>
                <Grid style={{ display: "flex", gap: "10px" }}>
                  <button style={{ border: "none", color: "red", background: "none" }}>{Testseriesviewdetails2.english1}</button>
                  <button style={{ border: "none", color: " red", background: "none" }} >{Testseriesviewdetails2.hindi1}</button>
                </Grid>
              </Grid>

              <Grid style={{ marginTop: "24px" }}>

                <Button className='start-now-btn' variant='contained' style={{ whiteSpace: "nowrap" }}>
                  {/* <Lopenico/> */}
                  <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/unlockIcon.png?alt=media&token=5a673d60-5660-4e35-acad-6f1bdcdff2c3" alt="unlockicon" style={{ marginRight: "10px" }} />
                  Unlock Now
                </Button>

              </Grid>


            </Grid>
          ))}
              </Grid>
            </Grid>
        );
    }
}

export default Subjectseriestest;
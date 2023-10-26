import React, { Component } from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';
import { Stepper, Step, StepButton } from '@material-ui/core';

import Button from '@mui/material/Button';
import "./buynowpage.css"


export default class buynowpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      completed: {},

    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.handleStep = this.handleStep.bind(this);

  }

  toggleExpanded() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  handleStep(step) {
    return () => {
      this.setState({
        activeStep: step,
      }

      );
    };
  }



  render() {
    const { activeStep, completed, selected } = this.state;
    const steps = ['Your Plan', 'Log In', 'Payment'];

    const [orientation, setOrientation] = this.state = ('vertical');

    const { expanded } = this.state;
    return (
      <div>
        <Box sx={{ width: '60em', paddingTop: "2em", marginLeft: "19em" }}>
          <Stepper style={{ height: "20vh" }} nonLinear activeStep={activeStep} >
            {steps.map((label, index) => (
              <Step style={{}} key={label} completed={completed[index]}>
                <StepButton style={{ color: "#6257CD"}}
                  smooth to={`/paymentlastpage`} 
                  // className={`activeStep ${activeStep === { label } ? 'selected' : 'Log In'}`}
                   onClick={this.handleStep(index)}>
                  {this.state.selected !== "Log In"} {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div></div>
        </Box>

        <Box   >
          <Box sx={{ height: "34em", width: "100em", padding: "44px 88px", background: "linear-gradient(180deg, #C1DAF6 1%, rgba(193, 218, 246, 0.79) 0.1%, rgba(223, 250, 247, 0.56) 100%)" }}>
            <Box
              sx={{
                marginTop: "-1em",
                marginLeft: "8em",
                display: 'block',
                justifyContent: 'space-around',
                alignItems: 'right',

              }}
            >
              <Typography
                id="example-payment-channel-label"
                sx={{
                  paddingTop: "1.5em",
                  fontSize: 28,
                  color: 'black',
                  fontWeight: "bolder"
                }}

              >
                Olangar Test Pass

              </Typography>
              <Typography
                id="example-payment-channel-label"
                level="body2"
                fontSize="25px"
                fontWeight="xl"

              >
                One pass & access to unlimited exams
              </Typography>

            </Box>
            <Box sx={{ marginTop: -14 }}  >
              <RadioGroup
                aria-labelledby="example-payment-channel-label"
                overlay
                name="example-payment-channel"
                defaultValue="Lifetime Test Pass"

              >
                <Box >

                  <List
                    component="div"
                    variant="outlined"
                    orientation={orientation}
                    sx={{
                      mb: "2em",
                      borderRadius: '6px',
                      borderColor: "#7FBAFB",
                      boxshadow: " -2px -4px 10px rgba(79, 79, 79, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",

                      height: "80px",
                      fontWeight: "bolder",
                      backgroundColor: "white",
                      position: "relative",
                      width: "680px",
                      left: "42em",
                      top: 47,

                    }}

                  >
                    {['6 Months Test Pass '].map((value, index) => (
                      <React.Fragment key={value}>
                        {index !== 0 && <ListDivider />}
                        <ListItem>
                          <Radio id={value} value={value} label={value} />
                        </ListItem>
                        <ListItem sx={{ marginTop: "-2em", paddingLeft: "20em", display: "block" }}>
                          <Typography>
                            ₹999/-
                          </Typography>
                          <Typography sx={{ color: "red", fontWeight: "normal" }}>
                            50% OFF
                          </Typography>

                        </ListItem>
                        <ListItem>
                          <Typography sx={{
                            fontWeight: "bold",
                            marginLeft: "36em", marginTop: "-7em", border: "2px solid #6257CD", borderRadius: "5px", boxsizing: "borderbox", padding: "8px 16px",

                          }}>
                            ₹349
                          </Typography>
                        </ListItem>
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
                <Box  >
                  <List
                    component="div"
                    variant="outlined"
                    orientation={orientation}
                    sx={{
                      mb: "2em",
                      borderRadius: '6px',
                      boxshadow: " -2px -4px 10px rgba(79, 79, 79, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",

                      height: "80px",
                      borderColor: "#7FBAFB",
                      backgroundColor: "white",
                      position: "relative",
                      width: "680px",
                      left: "42em",
                      top: 47,
                      fontWeight: "bold"
                    }}
                    Style={{ Width: "1em" }}
                  >
                    {['12 Months Test Pass'].map((value, index) => (
                      <React.Fragment key={value}>
                        {index !== 0 && <ListDivider />}
                        <ListItem>
                          <Radio id={value} value={value} label={value} />
                        </ListItem>
                        <ListItem sx={{ marginTop: "-2em", paddingLeft: "20em", display: "block" }}>
                          <Typography>
                            ₹999/-
                          </Typography>
                          <Typography sx={{ color: "red", fontWeight: "normal" }}>
                            50% OFF
                          </Typography>

                        </ListItem>
                        <ListItem>
                          <Typography sx={{
                            fontWeight: "bold",
                            marginLeft: "36em", marginTop: "-7em", border: "2px solid #6257CD", borderRadius: "5px", boxsizing: "borderbox", padding: "8px 16px",

                          }}>
                            ₹349
                          </Typography>
                        </ListItem>
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
                <Box  >
                  <List
                    component="div"
                    variant="outlined"
                    orientation={orientation}
                    sx={{
                      Width: "10px",
                      borderRadius: '6px',
                      boxshadow: " -2px -4px 10px rgba(79, 79, 79, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",

                      borderColor: "#7FBAFB",
                      backgroundColor: "white",
                      position: "relative",
                      width: "680px",
                      left: "42em",
                      top: 47,
                      height: "80px",
                      fontWeight: "bold"
                    }}

                  >
                    {['Lifetime Test Pass'].map((value, index) => (
                      <React.Fragment key={value}>
                        {index !== 0 && <ListDivider />}
                        <ListItem>
                          <Radio id={value} value={value} label={value} />
                        </ListItem>
                        <ListItem sx={{ marginTop: "-2em", paddingLeft: "20em", display: "block" }}>
                          <Typography>
                            ₹999/-
                          </Typography>
                          <Typography sx={{ color: "red", fontWeight: "normal" }}>
                            50% OFF
                          </Typography>

                        </ListItem>
                        <ListItem>
                          <Typography sx={{
                            fontWeight: "bold",
                            marginLeft: "36em", marginTop: "-7em", border: "2px solid #6257CD", borderRadius: "5px", boxsizing: "borderbox", padding: "8px 16px",

                          }}>
                            ₹349
                          </Typography>
                        </ListItem>
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
              </RadioGroup>
            </Box>
            <div  ><Button style={{ marginLeft: "28.1em", fontWeight: "bold ", fontSize: "24px", marginTop: "3.5em", color: "white", width: " 685px", height: "58px", background: " #6257CD", border: "2px solid #6257CD ", textTransform: "capitalize" }}>
              Buy Olangar Test Pass</Button></div>
          </Box>
        </Box>
      </div>
    )
  }
}
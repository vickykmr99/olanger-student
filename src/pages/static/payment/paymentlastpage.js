import React, { Component } from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/joy/Typography';
import { Stepper, Step, StepButton } from '@material-ui/core';

import Button from '@mui/material/Button';
import "./buynowpage.css"


export default class paymentlastpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      completed: {},
      checkedItems: {},

    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.handleStep = this.handleStep.bind(this);

  }

  toggleExpanded() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }
  handleCheckboxChange(event) {
    const { name, checked } = event.target;

    this.setState((prevState) => ({
      checkedItems: {
        ...prevState.checkedItems,
        [name]: checked,
      },
    }));
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
    const { activeStep, completed } = this.state;
    const steps = ['Your Plan', 'Log In', 'Payment'];

    const [orientation, setOrientation] = this.state = ('vertical');
    const { checkedItems } = this.state;
   
    const { expanded } = this.state;
    return (
      <div>
        <Box sx={{height:"9vh", width: '60em',padding:"8em",marginLeft:"20em",marginTop:"-5em " }}>
        <Stepper  
        
        
        nonLinear activeStep={activeStep} >
        {steps.map((label, index) => (
          <Step  key={label} completed={completed[index]}>
            <StepButton  style={{bgcolor:"#6257CD"}}  onClick={this.handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
       <div></div>
    </Box>

        <Box   >
          <Box  sx={{ height: "20em", marginTop: "-12em", background: "#F2F9FF" }}>
            <Box
              sx={{
                marginTop: "10em",
                marginLeft: "8em",
                display: 'block',
                justifyContent: 'space-around',
                alignItems: 'right',
                

              }}
            >

            </Box>
            <Box sx={{ marginTop: -14, }}  >
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
                      borderRadius: '8px',
                      border: "1px solid #7FBAFB",
                      width: "656px",
                      height: "187px",
                      fontWeight: "bolder",
                      backgroundColor: "white",
                      position: "relative",
                      boxshadow: "-2px -1px 10px rgba(79, 79, 79, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                      left: "28em",
                      top: 40,
                     
                    }}

                  > <ListItem >
                  <Typography style={{textTransform:"capitalize",color:"black",fontWeight:"bold"}}>Your plan</Typography>
              </ListItem>
              <ListItem >
                  <Button style={{color:"#6257CD",textTransform:"capitalize",marginLeft:"36.8em",marginTop:"-7em"}}>Change Plan</Button>
              </ListItem>
                    {['Lifetime Test Pass '].map((value, index) => (
                      <React.Fragment key={value}>
                        {index !== 0 && <ListDivider />}
                        <ListItem style={{marginTop:"-2em",display:"block"}}>
                          <Radio id={value} value={value} label={value} />
                          <Typography style={{marginLeft:"2em" ,color:"#6257CD"}}>  Valid for 3 Years</Typography>
                        
                        </ListItem>
                        <ListItem sx={{marginTop: "-3.5em",  paddingLeft: "17em", display: "flex" }}>
                          <Typography style={{color:"#5C5C5C",fontWeight: "bold"}}>
                            ₹999/-
                          </Typography>
                          <Typography sx={{ color: "red", fontWeight: "bold" }}>
                            50% OFF
                          </Typography>

                        </ListItem>
                        <ListItem >
                           <Typography sx={{ fontFamily:"Calibri" ,marginTop: "-3em",  paddingLeft: "16em", display: "block",fontWeight:"nomal" }}>Coupon Applied successfully</Typography> 
                            </ListItem>
                        <ListItem style={{ display: "block",blockinline:"coloumn",marginLeft:"34em",marginTop:"-5em"}}>
                            <Typography >₹499/-</Typography>
                           
                            <Typography style={{color:"#6257CD",marginLeft:"-0.3em",borderbottom: "4px solid blue"}}> 
                                - ₹50/-
                                 <hr style={{height:"-5em",color:"#000000",paddingLeft:"1em",width:"4em",fontWeight:"bolder"}} />
                                  </Typography>

                            </ListItem>
                          <ListItem >
                         <Typography style={{marginLeft:"21em",width:"100%",marginTop:"-2em",fontWeight:"bold"}}>Total Amount</Typography>
                          <Typography sx={{fontWeight: "bold",
                           marginLeft: "-3%", marginTop: "-1.5em", border: "2px solid #6257CD", borderRadius: "5px", boxsizing: "borderbox", padding: "5px 16px",

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
            <div  ><Button style={{marginLeft:"31.5em",fontWeight:"bold ", fontSize:"20px",marginTop:"1.5em",color:"white",width:" 270px",height: "46px",background:" #6257CD",border:"2px solid #6257CD ",textTransform: "capitalize"}}>
            Proceed To Payment</Button></div>
          </Box>
        </Box>
        <Box   >
          <Box  sx={{ height: "17em", marginTop: "-6em", background: "#F2F9FF" }}>
            <Box
              sx={{
                marginTop: "10em",
                marginLeft: "8em",
                display: 'block',
                justifyContent: 'space-around',
                alignItems: 'right',
                

              }}
            >

            </Box>
            <Box sx={{ marginTop: -14, }}  >
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
                      borderRadius: '8px',
                      border: "1px solid #6257CD",
                      width: "550px",
                      height: "190px",
                    
                      backgroundColor: "white",
                      position: "relative",
                  
                      left: "32em",
                      top: 40,
                     
                    }}

                  > <div >
                            <FormGroup className="checkbox" >
        <FormControlLabel 
         labelPlacement="start"
          label="UPI"style={{ fontWeight:"bold" }}  
          control={
            <Checkbox 
              name="checkbox1"
              onChange={this.handleCheckboxChange}  />  } /></FormGroup><FormGroup className="checkbox">
        <FormControlLabel
          labelPlacement="start"
          label="Debit Card/Credit Card"
          control={
            <Checkbox
              name="checkbox2"
              onChange={this.handleCheckboxChange} />}/></FormGroup><FormGroup className="checkbox">
          <FormControlLabel
            labelPlacement="start"
          label="Net Banking "
          control={
            <Checkbox
              name="checkbox3"
              
              onChange={this.handleCheckboxChange}
            />
          }
        />  
      </FormGroup>
      <div  ><Button style={{marginLeft:"10em", fontSize:"19px",marginTop:"0.2em",color:"white",width:" 150px",height: "44px",background:" #6257CD",border:"2px solid #6257CD ",textTransform: "capitalize"}}>
       Pay ₹499/- </Button></div>
      </div>      
                  
                  </List>
                </Box>
              
              </RadioGroup>
            </Box>
            
          </Box>
        </Box>
      </div>
    )
  }
}
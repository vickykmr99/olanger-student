import React, { Component } from 'react'
import Typography from "@mui/material/Typography";
import {Button, Grid, List } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
// import { Tooltip, Button } from '@material-ui/core';
// import { VolumeMute } from '@material-ui/icons';
import HelpIcon from '@mui/icons-material/Help';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import "./pdfdetails.css";

export default class pdfdetails extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pdfdetails: [
  //       {
  //         title: "SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)",
  //         Qn: "100 Questions",
  //         marks: "100 Marks",
  //         Time: "Time: 90 Mins",
  //         buttontext1: "Question with Answer Pdf",
  //         buttontext2: "Question Pdf",
  //         language1: "(Enlish)",
  //         language2: "(Hindi)",

  //       },
  //     

  //     ],

  //   }
  // }

  render() {

   
    const Search = styled("div")(({ theme }) => ({
      position: "relative",

      borderRadius: "4px",
      backgroundColor: alpha(theme.palette.common.white, 0.15),

      marginRight: theme.spacing(2),

      width: "10%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "39%",
      },
    }));
    const SearchIconWrapper = styled("div")(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "14%",

        [theme.breakpoints.up("md")]: {
          width: "65ch",
        },
      },
    }));
    return (
      <div style={{
        maxWidth: "1400px",
        marginTop: '30px',
        margin: '70px auto',
        textAlign: 'center',
        

      }}>


        <Box className="pinkbox2" style={{ marginTop: "8%" }} >
          <Typography className='pinkboxtext2' sx={{ fontSize: 50 }}>Download Previous year PDF Questions and PDF solutions

          </Typography>
          <Search sx={{
            justifyContent: "space-around",
            mt: 1,
            boxShadow: 1,
            borderRadius: "5px",
            backgroundColor: "#fff"
          }} style={{
            marginLeft: "8%",
            marginTop: "275px",
            position: "absolute"
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              style={{ width: "100%" }}
              placeholder="Search for any previous year paper"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Typography
            sx={{ fontSize: 29 }}
            gutterBottom
            textAlign="right" style={{ marginTop: "5%", marginRight: "17%", position: "absolute" }}
          >
            <img style={{ marginLeft: " 360%" }} src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%2029.png?alt=media&token=8cd49f21-b9df-4551-a07b-fb8bbc9aaf74" alt="image" />
          </Typography>
        </Box>
        <button class="btnlanguage2" style={{ fontWeight: "bolder", color: "black", marginLeft: "-3%" }}>For Tier I</button>
        <button className="btnlanguage2" style={{ fontWeight: "bolder", color: "black", marginLeft: "2%" }} > For Tier II</button>

        <Box className="qn-yr-box">
          <Typography sx={{
            fontSize: 15,
            marginTop: "0%",
            fontWeight: "bold",
            justifyContent: "top",
          }}>Previous year question papers</Typography>
          <div >
            <button class="btnyr2" style={{ color: " #141226" }}>2022</button>
            <button className="btnyr2" style={{ color: " #141226" }} > 2021</button>
            <button class="btnyr2" style={{color: "#141226" }}>2020</button>
            <button class="btnyr2" style={{ color: " #141226" }}>2016</button>
            <button class="btnyr2" style={{color: " #141226", }}>2019</button>
            <button class="btnyr2" style={{color: " #141226" }}>2018</button>
            <button class="btnyr2" style={{color: " #141226" }}>2017</button>
          </div>
        </Box>
        <button style={{ fontWeigh: "bold", color: "white", background: "#228C22", border: "none", padding: "4px 12px", borderradius: "4px", marginRight: "75.5em", marginTop: "3%" }}>Free test</button>
    
        <div className='upperbox2' sx={{ maxwidth: "1268px", maxheight: "100px", boxshadow: "4px 4px 10px #EFEDFD",marginTop:"-3%" }}>
        {/* {this.state.pdfdetails.map((pdfdetails, index) => ( */}
              <Box  style={{display:"flex",flexDirection:"column"}}>
             
                <Typography 
                  sx={{ fontSize: 15, fontWeight: "bold" }}
                  gutterBottom
                  textAlign="left"
                  marginTop="2em"
                >
                  SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)
                </Typography>
                <div className='middlebox'>
                  <ListItem>

                    <HelpIcon style={{ color: "#72717D", fontstyle: "6px", position: "initial", marginleft: "5%" }} />

                    <ListItemText className='middleboxtext' sx={{ position: "relative", marginLeft: "3%", fontSize: 3, color: "#72717D", fontweight: "400", width: "150px" }}>
                    100 Questions
                    </ListItemText> </ListItem>
                  <ListItem >

                    <CreditScoreIcon style={{ color: "#72717D", position: "absolute", fontStyle: "smaller", marginLeft: "-46%" }} />

                    <ListItemText className='middleboxtext' sx={{ marginLeft: "-34%", fontSize: 3, width: "65px", color: "#72717D", fontweight: "400" }}>
                    100 Marks
                    </ListItemText> </ListItem>
                  <ListItem >

                    <AccessTimeFilledIcon style={{ marginleft: "-20%", color: "#72717D", position: "relative", fontStyle: "smaller" }} />


                    <ListItemText sx={{ fontSize: "3px", color: "#72717D", fontweight: "400", marginTop: "5px", marginLeft: "5px", width: "300px" }}>
                    Time: 90 Mins
                    </ListItemText> </ListItem>
                </div>
                <button class="btnlanguage3" style={{ fontWeigh: "bold", color: " #737FF5", }}>English</button>
                <button className="btnlanguage4" style={{ fontWeigh: "bold", color: " #737FF5"}} > Hindi</button>
                <div style={{ justifyContent: "space-between" }}>

                  <Button className='sidebtn1' style={{fontSize:"86%"}} > Question with Answer Pdf"</Button>
                  <Button className='sidebtn2' style={{fontSize:"86%"}}>Question Pdf </Button>
                </div>
              </Box>  


          {/* // ))} */}
          
        </div>
        <div className='upperbox' sx={{ maxwidth: "1264px", maxheight: "100px", boxshadow: "4px 4px 10px #EFEDFD"  }}>
        {/* {this.state.pdfdetails.map((pdfdetails, index) => ( */}
              <Box  style={{display:"flex",flexDirection:"column"}}>
                <Typography 
                  sx={{ fontSize: 15, fontWeight: "bold" }}
                  gutterBottom
                  textAlign="left"
                  marginTop="2em"
                >
                  SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)
                </Typography>
                <div className='middlebox'>
                  <ListItem>

                    <HelpIcon style={{ color: "#72717D", fontstyle: "6px", position: "initial", marginleft: "5%" }} />

                    <ListItemText className='middleboxtext' sx={{ position: "relative", marginLeft: "3%", fontSize: 3, color: "#72717D", fontweight: "400", width: "150px" }}>
                    100 Questions
                    </ListItemText> </ListItem>
                  <ListItem >

                    <CreditScoreIcon style={{ color: "#72717D", position: "absolute", fontStyle: "smaller", marginLeft: "-46%" }} />

                    <ListItemText className='middleboxtext' sx={{ marginLeft: "-34%", fontSize: 3, width: "65px", color: "#72717D", fontweight: "400" }}>
                    100 Marks
                    </ListItemText> </ListItem>
                  <ListItem >

                    <AccessTimeFilledIcon style={{ marginleft: "-20%", color: "#72717D", position: "relative", fontStyle: "smaller" }} />


                    <ListItemText sx={{ fontSize: "3px", color: "#72717D", fontweight: "400", marginTop: "5px", marginLeft: "5px", width: "300px" }}>
                    Time: 90 Mins
                    </ListItemText> </ListItem>
                </div>
                <button class="btnlanguage3" style={{ fontWeigh: "bold", color: " #737FF5", }}>English</button>
                <button className="btnlanguage4" style={{ fontWeigh: "bold", color: " #737FF5"}} > Hindi</button>
                <div style={{ justifyContent: "space-between" }}>

                  <Button className='sidebtn1' style={{fontSize:"86%"}} > Question with Answer Pdf"</Button>
                  <Button className='sidebtn2' style={{fontSize:"86%"}}>Question Pdf </Button>
                </div>
              </Box>  


          {/* // ))} */}
          
        </div>
        <div className='upperbox' sx={{ maxwidth: "1264px", maxheight: "100px", boxshadow: "4px 4px 10px #EFEDFD"  }}>
        {/* {this.state.pdfdetails.map((pdfdetails, index) => ( */}
              <Box  style={{display:"flex",flexDirection:"column"}}>
                <Typography 
                  sx={{ fontSize: 15, fontWeight: "bold" }}
                  gutterBottom
                  textAlign="left"
                  marginTop="2em"
                >
                  SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)
                </Typography>
                <div className='middlebox'>
                  <ListItem>

                    <HelpIcon style={{ color: "#72717D", fontstyle: "6px", position: "initial", marginleft: "5%" }} />

                    <ListItemText className='middleboxtext' sx={{ position: "relative", marginLeft: "3%", fontSize: 3, color: "#72717D", fontweight: "400", width: "150px" }}>
                    100 Questions
                    </ListItemText> </ListItem>
                  <ListItem >

                    <CreditScoreIcon style={{ color: "#72717D", position: "absolute", fontStyle: "smaller", marginLeft: "-46%" }} />

                    <ListItemText className='middleboxtext' sx={{ marginLeft: "-34%", fontSize: 3, width: "65px", color: "#72717D", fontweight: "400" }}>
                    100 Marks
                    </ListItemText> </ListItem>
                  <ListItem >

                    <AccessTimeFilledIcon style={{ marginleft: "-20%", color: "#72717D", position: "relative", fontStyle: "smaller" }} />


                    <ListItemText sx={{ fontSize: "3px", color: "#72717D", fontweight: "400", marginTop: "5px", marginLeft: "5px", width: "300px" }}>
                    Time: 90 Mins
                    </ListItemText> </ListItem>
                </div>
                <button class="btnlanguage3" style={{ fontWeigh: "bold", color: " #737FF5", }}>English</button>
                <button className="btnlanguage4" style={{ fontWeigh: "bold", color: " #737FF5"}} > Hindi</button>
                <div style={{ justifyContent: "space-between" }}>

                  <Button className='sidebtn1' style={{fontSize:"86%"}} > Question with Answer Pdf"</Button>
                  <Button className='sidebtn2' style={{fontSize:"86%"}}>Question Pdf </Button>
                </div>
              </Box>  


          {/* // ))} */}
          
        </div>
        <div className='upperbox' sx={{ maxwidth: "1264px", maxheight: "100px", boxshadow: "4px 4px 10px #EFEDFD"  }}>
        {/* {this.state.pdfdetails.map((pdfdetails, index) => ( */}
              <Box  style={{display:"flex",flexDirection:"column"}}>
                <Typography 
                  sx={{ fontSize: 15, fontWeight: "bold" }}
                  gutterBottom
                  textAlign="left"
                  marginTop="2em"
                >
                  SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)
                </Typography>
                <div className='middlebox'>
                  <ListItem>

                    <HelpIcon style={{ color: "#72717D", fontstyle: "6px", position: "initial", marginleft: "5%" }} />

                    <ListItemText className='middleboxtext' sx={{ position: "relative", marginLeft: "3%", fontSize: 3, color: "#72717D", fontweight: "400", width: "150px" }}>
                    100 Questions
                    </ListItemText> </ListItem>
                  <ListItem >

                    <CreditScoreIcon style={{ color: "#72717D", position: "absolute", fontStyle: "smaller", marginLeft: "-46%" }} />

                    <ListItemText className='middleboxtext' sx={{ marginLeft: "-34%", fontSize: 3, width: "65px", color: "#72717D", fontweight: "400" }}>
                    100 Marks
                    </ListItemText> </ListItem>
                  <ListItem >

                    <AccessTimeFilledIcon style={{ marginleft: "-20%", color: "#72717D", position: "relative", fontStyle: "smaller" }} />


                    <ListItemText sx={{ fontSize: "3px", color: "#72717D", fontweight: "400", marginTop: "5px", marginLeft: "5px", width: "300px" }}>
                    Time: 90 Mins
                    </ListItemText> </ListItem>
                </div>
                <button class="btnlanguage3" style={{ fontWeigh: "bold", color: " #737FF5", }}>English</button>
                <button className="btnlanguage4" style={{ fontWeigh: "bold", color: " #737FF5"}} > Hindi</button>
                <div style={{ justifyContent: "space-between" }}>

                  <Button className='sidebtn1' style={{fontSize:"86%"}} > Question with Answer Pdf"</Button>
                  <Button className='sidebtn2' style={{fontSize:"86%"}}>Question Pdf </Button>
                </div>
              </Box>  


          {/* // ))} */}
          
        </div>
        <div className='upperbox' sx={{ maxwidth: "1264px", maxheight: "100px", boxshadow: "4px 4px 10px #EFEDFD"  }}>
        {/* {this.state.pdfdetails.map((pdfdetails, index) => ( */}
              <Box  style={{display:"flex",flexDirection:"column"}}>
                <Typography 
                  sx={{ fontSize: 15, fontWeight: "bold" }}
                  gutterBottom
                  textAlign="left"
                  marginTop="2em"
                >
                  SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)
                </Typography>
                <div className='middlebox'>
                  <ListItem>

                    <HelpIcon style={{ color: "#72717D", fontstyle: "6px", position: "initial", marginleft: "5%" }} />

                    <ListItemText className='middleboxtext' sx={{ position: "relative", marginLeft: "3%", fontSize: 3, color: "#72717D", fontweight: "400", width: "150px" }}>
                    100 Questions
                    </ListItemText> </ListItem>
                  <ListItem >

                    <CreditScoreIcon style={{ color: "#72717D", position: "absolute", fontStyle: "smaller", marginLeft: "-46%" }} />

                    <ListItemText className='middleboxtext' sx={{ marginLeft: "-34%", fontSize: 3, width: "65px", color: "#72717D", fontweight: "400" }}>
                    100 Marks
                    </ListItemText> </ListItem>
                  <ListItem >

                    <AccessTimeFilledIcon style={{ marginleft: "-20%", color: "#72717D", position: "relative", fontStyle: "smaller" }} />


                    <ListItemText sx={{ fontSize: "3px", color: "#72717D", fontweight: "400", marginTop: "5px", marginLeft: "5px", width: "300px" }}>
                    Time: 90 Mins
                    </ListItemText> </ListItem>
                </div>
                <button class="btnlanguage3" style={{ fontWeigh: "bold", color: " #737FF5", }}>English</button>
                <button className="btnlanguage4" style={{ fontWeigh: "bold", color: " #737FF5"}} > Hindi</button>
                <div style={{ justifyContent: "space-between" }}>

                  <Button className='sidebtn1' style={{fontSize:"86%"}} > Question with Answer Pdf"</Button>
                  <Button className='sidebtn2' style={{fontSize:"86%"}}>Question Pdf </Button>
                </div>
              </Box>  


          {/* // ))} */}
          
        </div>
        <div className='upperbox' sx={{ maxwidth: "1264px", maxheight: "100px", boxshadow: "4px 4px 10px #EFEDFD"  }}>
        {/* {this.state.pdfdetails.map((pdfdetails, index) => ( */}
              <Box  style={{display:"flex",flexDirection:"column"}}>
                <Typography 
                  sx={{ fontSize: 15, fontWeight: "bold" }}
                  gutterBottom
                  textAlign="left"
                  marginTop="2em"
                >
                  SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)
                </Typography>
                <div className='middlebox'>
                  <ListItem>

                    <HelpIcon style={{ color: "#72717D", fontstyle: "6px", position: "initial", marginleft: "5%" }} />

                    <ListItemText className='middleboxtext' sx={{ position: "relative", marginLeft: "3%", fontSize: 3, color: "#72717D", fontweight: "400", width: "150px" }}>
                    100 Questions
                    </ListItemText> </ListItem>
                  <ListItem >

                    <CreditScoreIcon style={{ color: "#72717D", position: "absolute", fontStyle: "smaller", marginLeft: "-46%" }} />

                    <ListItemText className='middleboxtext' sx={{ marginLeft: "-34%", fontSize: 3, width: "65px", color: "#72717D", fontweight: "400" }}>
                    100 Marks
                    </ListItemText> </ListItem>
                  <ListItem >

                    <AccessTimeFilledIcon style={{ marginleft: "-20%", color: "#72717D", position: "relative", fontStyle: "smaller" }} />


                    <ListItemText sx={{ fontSize: "3px", color: "#72717D", fontweight: "400", marginTop: "5px", marginLeft: "5px", width: "300px" }}>
                    Time: 90 Mins
                    </ListItemText> </ListItem>
                </div>
                <button class="btnlanguage3" style={{ fontWeigh: "bold", color: " #737FF5", }}>English</button>
                <button className="btnlanguage4" style={{ fontWeigh: "bold", color: " #737FF5"}} > Hindi</button>
                <div style={{ justifyContent: "space-between" }}>

                  <Button className='sidebtn1' style={{fontSize:"86%"}} > Question with Answer Pdf"</Button>
                  <Button className='sidebtn2' style={{fontSize:"86%"}}>Question Pdf </Button>
                </div>
              </Box>  


          {/* // ))} */}
          
        </div>
        <div className='upperbox' sx={{ maxwidth: "1264px", maxheight: "100px", boxshadow: "4px 4px 10px #EFEDFD"  }}>
        {/* {this.state.pdfdetails.map((pdfdetails, index) => ( */}
              <Box  style={{display:"flex",flexDirection:"column"}}>
                <Typography 
                  sx={{ fontSize: 15, fontWeight: "bold" }}
                  gutterBottom
                  textAlign="left"
                  marginTop="2em"
                >
                  SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)
                </Typography>
                <div className='middlebox'>
                  <ListItem>

                    <HelpIcon style={{ color: "#72717D", fontstyle: "6px", position: "initial", marginleft: "5%" }} />

                    <ListItemText className='middleboxtext' sx={{ position: "relative", marginLeft: "3%", fontSize: 3, color: "#72717D", fontweight: "400", width: "150px" }}>
                    100 Questions
                    </ListItemText> </ListItem>
                  <ListItem >

                    <CreditScoreIcon style={{ color: "#72717D", position: "absolute", fontStyle: "smaller", marginLeft: "-46%" }} />

                    <ListItemText className='middleboxtext' sx={{ marginLeft: "-34%", fontSize: 3, width: "65px", color: "#72717D", fontweight: "400" }}>
                    100 Marks
                    </ListItemText> </ListItem>
                  <ListItem >

                    <AccessTimeFilledIcon style={{ marginleft: "-20%", color: "#72717D", position: "relative", fontStyle: "smaller" }} />


                    <ListItemText sx={{ fontSize: "3px", color: "#72717D", fontweight: "400", marginTop: "5px", marginLeft: "5px", width: "300px" }}>
                    Time: 90 Mins
                    </ListItemText> </ListItem>
                </div>
                <button class="btnlanguage3" style={{ fontWeigh: "bold", color: " #737FF5", }}>English</button>
                <button className="btnlanguage4" style={{ fontWeigh: "bold", color: " #737FF5"}} > Hindi</button>
                <div style={{ justifyContent: "space-between" }}>

                  <Button className='sidebtn1' style={{fontSize:"86%"}} > Question with Answer Pdf"</Button>
                  <Button className='sidebtn2' style={{fontSize:"86%"}}>Question Pdf </Button>
                </div>
              </Box>  


          {/* // ))} */}


        </div>

        <button style={{ fontWeigh: "bold", color: "white", background: "#228C22", border: "none", padding: "4px 12px", borderradius: "4px", marginRight: "75.5em", marginTop: "3%" }}>Free test</button>

        <div className='upperbox3' sx={{ maxwidth: "1264px", maxheight: "100px", boxshadow: "4px 4px 10px #EFEDFD"  }}>
        {/* {this.state.pdfdetails.map((pdfdetails, index) => ( */}
        
              <Box  style={{display:"flex",flexDirection:"column"}}>
                <Typography 
                  sx={{ fontSize: 15, fontWeight: "bold" }}
                  gutterBottom
                  textAlign="left"
                  marginTop="2em"
                >
                  SSC CHSL Previous Paper Full Test (Held on 22.07.2022 Shift - I)
                </Typography>
                <div className='middlebox'>
                  <ListItem>

                    <HelpIcon style={{ color: "#72717D", fontstyle: "6px", position: "initial", marginleft: "5%" }} />

                    <ListItemText className='middleboxtext' sx={{ position: "relative", marginLeft: "3%", fontSize: 3, color: "#72717D", fontweight: "400", width: "150px" }}>
                    100 Questions
                    </ListItemText> </ListItem>
                  <ListItem >

                    <CreditScoreIcon style={{ color: "#72717D", position: "absolute", fontStyle: "smaller", marginLeft: "-46%" }} />

                    <ListItemText className='middleboxtext' sx={{ marginLeft: "-34%", fontSize: 3, width: "65px", color: "#72717D", fontweight: "400" }}>
                    100 Marks
                    </ListItemText> </ListItem>
                  <ListItem >

                    <AccessTimeFilledIcon style={{ marginleft: "-20%", color: "#72717D", position: "relative", fontStyle: "smaller" }} />


                    <ListItemText sx={{ fontSize: "3px", color: "#72717D", fontweight: "400", marginTop: "5px", marginLeft: "5px", width: "300px" }}>
                    Time: 90 Mins
                    </ListItemText> </ListItem>
                </div>
                <button class="btnlanguage3" style={{ fontWeigh: "bold", color: " #737FF5", }}>English</button>
                <button className="btnlanguage4" style={{ fontWeigh: "bold", color: " #737FF5"}} > Hindi</button>
                <div style={{ justifyContent: "space-between" }}>

                  <Button className='sidebtn1' style={{fontSize:"86%"}} > Question with Answer Pdf"</Button>
                  <Button className='sidebtn2' style={{fontSize:"86%"}}>Question Pdf </Button>
                </div>
              </Box>  


          {/* // ))} */}
          
        </div>
        </div>
    

    )
  }
}

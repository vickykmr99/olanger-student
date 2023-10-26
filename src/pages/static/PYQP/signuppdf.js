import React, { Component } from 'react'
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";

import "./signuppdf.css";
export default class signuppdf extends Component {
  constructor(props) {
    super(props);
   
    this.state = { activeButtonId: 1,

      // signuppdf: [
      //   {
      //     title: "SSC CHSL Prev. Year Questions PDF and Solution  ",
      //     buttontext1: "Question with Answer Pdf",
      //     buttontext2: "Question Pdf",

      //   },
      //   {
      //     title: "SSC CHSL Prev. Year Questions PDF and Solution  ",
      //     buttontext1: "Question with Answer Pdf",
      //     buttontext2: "Question Pdf",

      //   },
      //   {
      //     title: "SSC CHSL Prev. Year Questions PDF and Solution  ",
      //     buttontext1: "Question with Answer Pdf",
      //     buttontext2: "Question Pdf",

      //   },
      //   {
      //     title: "SSC CHSL Prev. Year Questions PDF and Solution  ",
      //     buttontext1: "Question with Answer Pdf",
      //     buttontext2: "Question Pdf",

      //   },
      //   {
      //     title: "SSC CHSL Prev. Year Questions PDF and Solution  ",
      //     buttontext1: "Question with Answer Pdf",
      //     buttontext2: "Question Pdf",

      //   },

      // ]
    }
  }

  handleButtonClick = (buttonId) => {
    this.setState({ activeButtonId: buttonId });
  };
  render() {
    const { activeButtonId } = this.state;

    return (

      <div className='menu' style={{marginTop:"20px"}}  >
        <Grid item xs={59} Grid container
        >
          <Grid 
           marginTop="150px"
             direction="row"
             marginLeft="84px">
           
            <img src=" https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Frame%207859.png?alt=media&token=e5c720aa-7a4a-420d-848f-f463e8c95535" alt="Img" />
          </Grid></Grid>
        <Box sx={{
          background: "rgba(238, 236, 254, 0.9)",
          borderRadius: "10px",
          position: "absolute",
          width: "1319px",
          height: "100px",
          left: "100px",
          top: "300px"
        }}>

          <Stack
            direction="row"
            sx={{
              justifyContent: 'left',
              alignItems: 'center',
             
              paddingTop: '25px',
              marginLeft: '120px',
              gap: '10px',
            }}
          >
            <Button
              className={` ${activeButtonId === 1 ? 'arrows3 arrow3-bottom3' : 'arrow3'}`}
              sx={{ ml: 1 }}

              variant="contained"
              onClick={() => this.handleButtonClick(1)}
            >
              2021
            </Button>
            <Button
              className={` ${activeButtonId === 2 ? 'arrows3 arrow3-bottom3' : 'arrow3'}`}
              sx={{ ml: 1 }}

              variant="contained"
              onClick={() => this.handleButtonClick(2)}
            >
              2021
            </Button>
            <Button
              className={` ${activeButtonId === 3 ? 'arrows3 arrow3-bottom3' : 'arrow3'}`}
              sx={{ ml: 1 }}

              variant="contained"
              onClick={() => this.handleButtonClick(3)}
            >
              2020
            </Button>
            <Button
              className={` ${activeButtonId === 4 ? 'arrows3 arrow3-bottom3' : 'arrow3'}`}
              sx={{ ml: 1 }}

              variant="contained"
              onClick={() => this.handleButtonClick(4)}
            >
              2019
            </Button>
            <Button
              className={` ${activeButtonId === 5 ? 'arrows3 arrow3-bottom3' : 'arrow3'}`}
              sx={{ ml: 1 }}
              variant="contained"
              onClick={() => this.handleButtonClick(5)}
            >
              2018
            </Button>
            <Button
              className={` ${activeButtonId === 6 ? 'arrows3 arrow3-bottom3' : 'arrow3'}`}
              sx={{ ml: 1 }}
              variant="contained"
              onClick={() => this.handleButtonClick(6)}
            >
              2017
            </Button>
            <Button className={` ${activeButtonId === 7 ? 'arrows3 arrow3-bottom3' : 'arrow3'}`} onClick={() => this.handleButtonClick(7)} sx={{ ml: 1 }}
              variant="contained">
              2016
            </Button>
            <Button className={` ${activeButtonId === 8 ? 'arrows3 arrow3-bottom3' : 'arrow3'}`} onClick={() => this.handleButtonClick(8)} sx={{ ml: 1 }}
              variant="contained">
              2015
            </Button>

          </Stack>
        </Box>
        <div  >
        <Box className='pdfupperbox' sx={{

background: "#E8EAFE",

position: "relative",
width: "1319px",
height: "51px",
left: " 100px",
top: 183
}} style={{  border: "none", borderRadius: "8px" }} >

<div style={{ boxshadow:"5px 5px 5px rgba(1, 1, 1, 1.2)",direction: "row", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "left", padding: "15px" }}>
<Typography sx={{fontSize:"18px", fontWeight: "bold", color: "#3E3D4D",  textTransform: "capitalize",marginTop:"-1px",marginLeft:"-862px"}} > <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=e07882c5-7ba0-4bf8-b779-bf0c50a93c77" alt="image" /> SSC CHSL Prev. Year Questions PDF and Solution  </Typography>
<Button  style={{position: "absolute",width: "218px",height: "31px",left: "921px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question and Answer Pdf</Button>
   <Button style={{position: "absolute",width: "120px",height: "31px",left: "1161px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question Pdf</Button>
</div>
               </Box>
               <Box className='pdfupperbox' sx={{

background: "#E8EAFE",
boxshadow:"5px 5px 5px rgba(0, 0, 0, 0.2)",
position: "relative",
width: "1319px",
height: "51px",
left: " 100px",
top: 190
}} style={{  border: "none", borderRadius: "8px" }} >

<div style={{ boxshadow:"5px 5px 5px rgba(1, 1, 1, 1.2)",direction: "row", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "left", padding: "15px" }}>
<Typography sx={{fontSize:"18px", fontWeight: "bold", color: "#3E3D4D",  textTransform: "capitalize",marginTop:"-1px",marginLeft:"-862px"}} > <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=e07882c5-7ba0-4bf8-b779-bf0c50a93c77" alt="image" /> SSC CHSL Prev. Year Questions PDF and Solution  </Typography>
<Button  style={{position: "absolute",width: "218px",height: "31px",left: "921px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question and Answer Pdf</Button>
   <Button style={{position: "absolute",width: "120px",height: "31px",left: "1161px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question Pdf</Button>
</div>
               </Box>
               <Box className='pdfupperbox' sx={{

background: "#E8EAFE",
boxshadow:"5px 5px 5px rgba(0, 0, 0, 0.2)",
position: "relative",
width: "1319px",
height: "51px",
left: " 100px",
top: "195px"
}} style={{  border: "none", borderRadius: "8px" }} >

<div style={{ boxshadow:"5px 5px 5px rgba(1, 1, 1, 1.2)",direction: "row", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "left", padding: "15px" }}>
<Typography sx={{fontSize:"18px", fontWeight: "bold", color: "#3E3D4D",  textTransform: "capitalize",marginTop:"-1px",marginLeft:"-862px"}} > <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=e07882c5-7ba0-4bf8-b779-bf0c50a93c77" alt="image" /> SSC CHSL Prev. Year Questions PDF and Solution  </Typography>
<Button  style={{position: "absolute",width: "218px",height: "31px",left: "921px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question and Answer Pdf</Button>
   <Button style={{position: "absolute",width: "120px",height: "31px",left: "1161px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question Pdf</Button>
</div>
               </Box>
               <Box className='pdfupperbox' sx={{

background: "#E8EAFE",
boxshadow:"5px 5px 5px rgba(0, 0, 0, 0.2)",
position: "relative",
width: "1319px",
height: "51px",
left: " 100px",
top: 200
}} style={{  border: "none", borderRadius: "8px" }} >

<div style={{ boxshadow:"5px 5px 5px rgba(1, 1, 1, 1.2)",direction: "row", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "left", padding: "15px" }}>
<Typography sx={{fontSize:"18px", fontWeight: "bold", color: "#3E3D4D",  textTransform: "capitalize",marginTop:"-1px",marginLeft:"-862px"}} > <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=e07882c5-7ba0-4bf8-b779-bf0c50a93c77" alt="image" /> SSC CHSL Prev. Year Questions PDF and Solution  </Typography>
<Button  style={{position: "absolute",width: "218px",height: "31px",left: "921px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question and Answer Pdf</Button>
   <Button style={{position: "absolute",width: "120px",height: "31px",left: "1161px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question Pdf</Button>
</div>
               </Box>
               <Box className='pdfupperbox' sx={{

background: "#E8EAFE",
boxshadow:"5px 5px 5px rgba(0, 0, 0, 0.2)",
position: "relative",
width: "1319px",
height: "51px",
left: " 100px",
top: 205
}} style={{  border: "none", borderRadius: "8px" }} >

<div style={{ boxshadow:"5px 5px 5px rgba(1, 1, 1, 1.2)",direction: "row", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "left", padding: "15px" }}>
<Typography sx={{fontSize:"18px", fontWeight: "bold", color: "#3E3D4D",  textTransform: "capitalize",marginTop:"-1px",marginLeft:"-862px"}} > <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=e07882c5-7ba0-4bf8-b779-bf0c50a93c77" alt="image" /> SSC CHSL Prev. Year Questions PDF and Solution  </Typography>
<Button  style={{position: "absolute",width: "218px",height: "31px",left: "921px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question and Answer Pdf</Button>
   <Button style={{position: "absolute",width: "120px",height: "31px",left: "1161px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question Pdf</Button>
</div>
               </Box>
               <Box className='pdfupperbox' sx={{

background: "#E8EAFE",
boxshadow:"5px 5px 5px rgba(0, 0, 0, 0.2)",
position: "relative",
width: "1319px",
height: "51px",
left: " 100px",
top: 210
}} style={{  border: "none", borderRadius: "8px" }} >

<div style={{ boxshadow:"5px 5px 5px rgba(1, 1, 1, 1.2)",direction: "row", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "left", padding: "15px" }}>
<Typography sx={{fontSize:"18px", fontWeight: "bold", color: "#3E3D4D",  textTransform: "capitalize",marginTop:"-1px",marginLeft:"-862px"}} > <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=e07882c5-7ba0-4bf8-b779-bf0c50a93c77" alt="image" /> SSC CHSL Prev. Year Questions PDF and Solution  </Typography>
<Button  style={{position: "absolute",width: "218px",height: "31px",left: "921px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question and Answer Pdf</Button>
   <Button style={{position: "absolute",width: "120px",height: "31px",left: "1161px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question Pdf</Button>
</div>

               </Box>
               <Box className='pdfupperbox' sx={{

background: "#E8EAFE",
boxshadow:"5px 5px 5px rgba(0, 0, 0, 0.2)",
position: "relative",
width: "1319px",
height: "51px",
left: " 100px",
top: 215
}} style={{  border: "none", borderRadius: "8px" }} >

<div style={{ boxshadow:"5px 5px 5px rgba(1, 1, 1, 1.2)",direction: "row", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "left", padding: "15px" }}>
<Typography sx={{fontSize:"18px", fontWeight: "bold", color: "#3E3D4D",  textTransform: "capitalize",marginTop:"-1px",marginLeft:"-862px"}} > <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=e07882c5-7ba0-4bf8-b779-bf0c50a93c77" alt="image" /> SSC CHSL Prev. Year Questions PDF and Solution  </Typography>
<Button  style={{position: "absolute",width: "218px",height: "31px",left: "921px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question and Answer Pdf</Button>
   <Button style={{position: "absolute",width: "120px",height: "31px",left: "1161px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question Pdf</Button>
</div>
               </Box>
               <Box className='pdfupperbox' sx={{

background: "#E8EAFE",
boxshadow:"5px 5px 5px rgba(0, 0, 0, 0.2)",
position: "relative",
width: "1319px",
height: "51px",
left: " 100px",
top: 220
}} style={{  border: "none", borderRadius: "8px" }} >

<div style={{ boxshadow:"5px 5px 5px rgba(1, 1, 1, 1.2)",direction: "row", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "left", padding: "15px" }}>
<Typography sx={{fontSize:"18px", fontWeight: "bold", color: "#3E3D4D",  textTransform: "capitalize",marginTop:"-1px",marginLeft:"-862px"}} > <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=e07882c5-7ba0-4bf8-b779-bf0c50a93c77" alt="image" /> SSC CHSL Prev. Year Questions PDF and Solution  </Typography>
<Button  style={{position: "absolute",width: "218px",height: "31px",left: "921px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question and Answer Pdf</Button>
   <Button style={{position: "absolute",width: "120px",height: "31px",left: "1161px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question Pdf</Button>
</div>
               </Box>
               <Box className='pdfupperbox' sx={{

background: "#E8EAFE",
boxshadow:"5px 5px 5px rgba(0, 0, 0, 0.2)",
position: "relative",
width: "1319px",
height: "51px",
left: " 100px",
top: 225
}} style={{  border: "none", borderRadius: "8px" }} >

<div style={{ boxshadow:"5px 5px 5px rgba(1, 1, 1, 1.2)",direction: "row", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "left", padding: "15px" }}>
<Typography sx={{fontSize:"18px", fontWeight: "bold", color: "#3E3D4D",  textTransform: "capitalize",marginTop:"-1px",marginLeft:"-862px"}} > <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=e07882c5-7ba0-4bf8-b779-bf0c50a93c77" alt="image" /> SSC CHSL Prev. Year Questions PDF and Solution  </Typography>
<Button  style={{position: "absolute",width: "218px",height: "31px",left: "921px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question and Answer Pdf</Button>
   <Button style={{position: "absolute",width: "120px",height: "31px",left: "1161px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question Pdf</Button>
</div>
               </Box>
               <Box className='pdfupperbox' sx={{

background: "#E8EAFE",
boxshadow:"5px 5px 5px rgba(0, 0, 0, 0.2)",
position: "relative",
width: "1319px",
height: "51px",
left: " 100px",
top: 230
}} style={{  border: "none", borderRadius: "8px" }} >

<div style={{ boxshadow:"5px 5px 5px rgba(1, 1, 1, 1.2)",direction: "row", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "left", padding: "15px" }}>
<Typography sx={{fontSize:"18px", fontWeight: "bold", color: "#3E3D4D",  textTransform: "capitalize",marginTop:"-1px",marginLeft:"-862px"}} > <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=e07882c5-7ba0-4bf8-b779-bf0c50a93c77" alt="image" /> SSC CHSL Prev. Year Questions PDF and Solution  </Typography>
<Button  style={{position: "absolute",width: "218px",height: "31px",left: "921px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question and Answer Pdf</Button>
   <Button style={{position: "absolute",width: "120px",height: "31px",left: "1161px",top: "10px", background: "#3E30C2" , borderradius: "6px" ,color:"white",fontSize:"12px"}}> Question Pdf</Button>
</div>
               </Box>
               </div>
      </div>
    )
  }
}


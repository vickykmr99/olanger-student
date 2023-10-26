import { CurrencyRupee, PaddingRounded } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import react, { Component } from 'react'
import "./course.css"
import { borderColor, borderRadius } from '@mui/system'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import GroupsIcon from '@mui/icons-material/Groups';
import "./course.css";
export default class prevyr extends Component {
    constructor(props) {
        super(props);
        this.state = { activeButtonId: 1 };
        this.state = {
            expanded: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.getPanelStyle = this.getPanelStyle.bind(this);
    }


    handleButtonClick = (buttonId) => {
        this.setState({ activeButtonId: buttonId });
    };

    handleChange(panel) {
        return (event, isExpanded) => {
            this.setState({
                expanded: isExpanded ? panel : false
            });
        };
    }

    getPanelStyle(panel) {
        return {
            border: this.state.expanded === panel ? '2px solid #6257CD' : 'none'
        };
    }
    render() {
        const { activeButtonId } = this.state;
        const { expanded } = this.state;
        return (
            <div className='responsive'  style={{ background: " #FFFFFF" }}>
                <Box sx={{
                    marginTop: "9%",
                    position: "relative",

                    height: "240px"
                }}>
                    <Box sx={{


                        position: "absolute",
                        width: "889px",
                        height: "150px",
                        left: " 275px",
                        top: "20px",
                        borderRadius: "8px"


                    }}>
                        <Stack
                            spacing={2}
                            direction="column"
                            sx={{
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "0px",
                                paddingTop: "25px",



                            }}
                        >
                            <Typography style={{

                                fontStyle: "normal",
                                fontWeight: " 600",
                                fontSize: "40px",
                                lineHeight: "36px",
                                margin: "-22px 0"
                            }}>
                                <span style={{ color: '#FF6B00', fontWeight: "bold" }}>Target </span>  SSC CHSL 2023

                            </Typography>

                        </Stack>
                    </Box>
                </Box>
                <Stack spacing={2}
                    direction="row"
                    sx={{
                        justifyContent: "space-evenly",
                        gap: "4px",
                        borderRadius: "0px",
                        padding: "1px",
                        marginTop: "-9%",
                        marginLeft: "-5%",

                    }}>
                    <button className='focustiers' style={{ border: "none", background: "white", fontWeight: "bold", fontSize: "28px" }}>For Tier 1</button>
                    <button className='focustiers' style={{ border: "none", background: "white", fontWeight: "bold", fontSize: "28px" }}> For Tier 2</button>
                </Stack>
                <Stack
                    spacing={2}
                    direction="row"
                    sx={{
                        justifyContent: "center",
                        borderRadius: "0px",
                        padding: "1px",
                        marginTop: "3%",
                        marginLeft: "-5%"
                    }}
                >

                    <Button
                        className={` ${activeButtonId === 1 ? 'arrows2 arrow-bottom2' : 'arrow2'}`}
                        sx={{ ml: 1 }}

                        variant="contained"
                        onClick={() => this.handleButtonClick(1)}
                    >
                        Quants
                    </Button>
                    <Button
                        className={` ${activeButtonId === 2 ? 'arrows2 arrow-bottom2' : 'arrow2'}`}
                        sx={{ ml: 1 }}
                        // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                        variant="contained"
                        onClick={() => this.handleButtonClick(2)}
                    >
                        GK
                    </Button>
                    <Button
                        className={` ${activeButtonId === 3 ? 'arrows2 arrow-bottom2' : 'arrow2'}`}
                        sx={{ ml: 1 }}

                        variant="contained"
                        onClick={() => this.handleButtonClick(3)}
                    >
                        Reasoning
                    </Button>
                    <Button
                        className={` ${activeButtonId === 4 ? 'arrows2 arrow-bottom2' : 'arrow2'}`}
                        sx={{ ml: 1 }}

                        variant="contained"
                        onClick={() => this.handleButtonClick(4)}
                    >
                        English
                    </Button>
                    <Button
                        className={` ${activeButtonId === 5 ? 'arrows2 arrow-bottom2' : 'arrow2'}`}
                        sx={{ ml: 1 }}
                        variant="contained"
                        onClick={() => this.handleButtonClick(5)}
                    >
                        Currents Affairs
                    </Button>
                    <Button
                        className={` ${activeButtonId === 6 ? 'arrows2 arrow-bottom2' : 'arrow2'}`}
                        sx={{ ml: 1 }}
                        variant="contained"
                        onClick={() => this.handleButtonClick(6)}
                    >
                        FAQ
                    </Button>


                </Stack>


                <div class="coursesidebar" style={{ height: "400px", marginTop: "-168px" }}>
                    <a href="#SSC">Foundation </a>

                    <a href="#SSC" >In-depth Course</a>
                    <a href="#services"  style={{ fontWeight: "bolder", WebkitTextFillColor: "#3E30C2", fontSize: "11px", fontfamily: 'Poppins', justifyContent: "center", border: "2px solid #3E30C2", borderRadius: "5px" }}>Prev. year Paper Discussion</a>
                    <a href="#Banking & Insurance">Trend Questions of last 3yrs </a>
                    <a href="#Teaching">Test Series</a>
                    <a href="#Defence">Doubt Clear</a>
                </div>
                <Box sx={{
                    backgroundColor: "#EEECFE",
                    position: "relative",
                    width: "757px",
                    height: "50px",
                    left: " 23.9%",
                    top: "40px"
                }}>

                    <div style={{ direction: "column", display: "flex", marginLeft: "220px", alignItems: "center", padding: "7px" }}>
                        <div>
                            <Typography style={{ boxsizing: "borderbox", width: "175px", height: "28px", border: "1px solid rgba(0, 0, 0, 0.25)", borderRadius: "4px", fontWeight: "bold", fontSize: "13px", textAlign: "center", paddingTop: "3px" }}>How to start your journey </Typography>

                        </div>
                        <div>
                            <button style={{ backgroundColor: "#EEECFE", textDecorationLine: "underline", textDecorationThickness: "1.5px", fontWeight: "bold", color: "#3E30C2", fontSize: "10px", width: "75px", height: "30px", border: "1px solid rgba(0, 0, 0, 0.25)", borderRadius: "7px" }}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />  1 Video</button>
                        </div>
                    </div>
                </Box>
                
                <Box sx={{
                
                backgroundColor: "white",
                position: "relative",
                width: "750px",
                left: " 24%",
                top: 47
            }} >
                <div>
                    <Accordion expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} style={this.getPanelStyle('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"

                        >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ marginRight: "49px" }}>
                                    <Button sx={{fontWeight:"bold", color: 'black', textTransform: "capitalize",width:"550px"}} >
                                    SSC CGL (Tier I ) 2022 Previous Paper pdf for quats (held on 22-07-22 shift I) 
                                    </Button>
                                </div>
                                <div style={{ display: "flex", gap: "500px", justifyContent: "space-between" }}>
                                    
                                  <Button sx={{ color: '#000000', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                        2 PDF
                                    </Button>
                                </div>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails >
                          
                            <div style={{ display: "flex", gap: "5px" }}>
     
                                <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize",marginLeft:"332px",marginTop:"-29px" }} >
                                    3PDF
                                </Button>
                            </div>
                          
                        </AccordionDetails>
                    </Accordion>
                  
                </div>
            </Box>
            <Box sx={{
                
                backgroundColor: "white",
                position: "relative",
                width: "750px",
                left: " 24%",
                top: 47
            }} >
                  <div style={{marginTop:"6px"}}>
                    <Accordion expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} style={this.getPanelStyle('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"

                        >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ marginRight: "49px" }}>
                                    <Button sx={{fontWeight:"bold", color: 'black', textTransform: "capitalize",width:"550px"}} >
                                    SSC CGL (Tier I ) 2022 Previous Paper pdf for quats (held on 22-07-22 shift I) 
                                    </Button>
                                </div>
                                <div style={{ display: "flex", gap: "500px", justifyContent: "space-between" }}>
                                    
                                  <Button sx={{ color: '#000000', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                        2 PDF
                                    </Button>
                                </div>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails >
                        <div style={{ display: "flex", gap: "5px" }}>
     
     <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize",marginLeft:"332px",marginTop:"-29px" }} >
         3PDF
     </Button>
                            </div>
                          
                        </AccordionDetails>
                    </Accordion>
                   
                </div>
            </Box>
            <Box sx={{
                
                backgroundColor: "white",
                position: "relative",
                width: "750px",
                left: " 24%",
                top: 47
            }} >
                  <div style={{marginTop:"6px"}}>
                    <Accordion expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} style={this.getPanelStyle('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"

                        >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ marginRight: "49px" }}>
                                    <Button sx={{fontWeight:"bold", color: 'black', textTransform: "capitalize",width:"550px"}} >
                                    SSC CGL (Tier I ) 2022 Previous Paper pdf for quats (held on 22-07-22 shift I) 
                                    </Button>
                                </div>
                                <div style={{ display: "flex", gap: "500px", justifyContent: "space-between" }}>
                                    
                                  <Button sx={{ color: '#000000', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                        2 PDF
                                    </Button>
                                </div>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails >
                        <div style={{ display: "flex", gap: "5px" }}>
     
     <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize",marginLeft:"332px",marginTop:"-29px" }} >
         3PDF
     </Button>
                            </div>
                          
                        </AccordionDetails>
                    </Accordion>
                   
                </div>
            </Box>
            <Box sx={{
                
                backgroundColor: "white",
                position: "relative",
                width: "750px",
                left: " 24%",
                top: 47
            }} >
                   <div style={{marginTop:"6px"}}>
                    <Accordion expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')} style={this.getPanelStyle('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"

                        >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ marginRight: "49px" }}>
                                    <Button sx={{fontWeight:"bold", color: 'black', textTransform: "capitalize",width:"550px"}} >
                                    SSC CGL (Tier I ) 2022 Previous Paper pdf for quats (held on 22-07-22 shift I) 
                                    </Button>
                                </div>
                                <div style={{ display: "flex", gap: "500px", justifyContent: "space-between" }}>
                                    
                                  <Button sx={{ color: '#000000', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                        2 PDF
                                    </Button>
                                </div>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails >
                        <div style={{ display: "flex", gap: "5px" }}>
     
     <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize",marginLeft:"332px",marginTop:"-29px" }} >
         3PDF
     </Button>
                            </div>
                          
                        </AccordionDetails>
                    </Accordion>
                   
                </div>
            </Box>
            <Box sx={{
                
                backgroundColor: "white",
                position: "relative",
                width: "750px",
                left: " 24%",
                top: 47
            }} >
                  <div style={{marginTop:"6px"}}>
                    <Accordion expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')} style={this.getPanelStyle('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5bh-content"
                            id="panel5bh-header"

                        >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ marginRight: "49px" }}>
                                    <Button sx={{fontWeight:"bold", color: 'black', textTransform: "capitalize",width:"550px"}} >
                                    SSC CGL (Tier I ) 2022 Previous Paper pdf for quats (held on 22-07-22 shift I) 
                                    </Button>
                                </div>
                                <div style={{ display: "flex", gap: "500px", justifyContent: "space-between" }}>
                                    
                                  <Button sx={{ color: '#000000', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                        2 PDF
                                    </Button>
                                </div>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails >
                        <div style={{ display: "flex", gap: "5px" }}>
     
     <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize",marginLeft:"332px",marginTop:"-29px" }} >
         3PDF
     </Button>
                            </div>
                          
                        </AccordionDetails>
                    </Accordion>
                   
                </div>
            </Box>
            <Box sx={{
                
                backgroundColor: "white",
                position: "relative",
                width: "750px",
                left: " 24%",
                top: 47
            }} >
                   <div style={{marginTop:"6px"}}>
                    <Accordion expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')} style={this.getPanelStyle('panel6')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"

                        >
                           <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ marginRight: "49px" }}>
                                    <Button sx={{fontWeight:"bold", color: 'black', textTransform: "capitalize",width:"550px"}} >
                                    SSC CGL (Tier I ) 2022 Previous Paper pdf for quats (held on 22-07-22 shift I) 
                                    </Button>
                                </div>
                                <div style={{ display: "flex", gap: "500px", justifyContent: "space-between" }}>
                                    
                                  <Button sx={{ color: '#000000', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                        2 PDF
                                    </Button>
                                </div>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails >
                        <div style={{ display: "flex", gap: "5px" }}>
     
                                <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize",marginLeft:"332px",marginTop:"-29px" }} >
                                    3PDF
                                </Button>
                            </div>
                          
                        </AccordionDetails>
                    </Accordion>
                    
                <div style={{marginTop:"6px"}}>
                    <Accordion expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')} style={this.getPanelStyle('panel7')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel7bh-content"
                            id="panel7bh-header"

                        >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ marginRight: "49px" }}>
                                    <Button sx={{fontWeight:"bold", color: 'black', textTransform: "capitalize",width:"550px"}} >
                                    SSC CGL (Tier I ) 2022 Previous Paper pdf for quats (held on 22-07-22 shift I) 
                                    </Button>
                                </div>
                                <div style={{ display: "flex", gap: "500px", justifyContent: "space-between" }}>
                                    
                                  <Button sx={{ color: '#000000', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                        2 PDF
                                    </Button>
                                </div>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails >
                        <div style={{ display: "flex", gap: "5px" }}>
     
     <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize",marginLeft:"332px",marginTop:"-29px" }} >
         3PDF
     </Button>
                            </div>
                          
                        </AccordionDetails>
                    </Accordion>
                   
                </div>
            
            

                 
                    <CardActions
                        style={{ justifyContent: "center" }}
                    >
                        <Button className='btn' variant="contained" sx={{ marginTop: "30px", width: "300px", height: "50px", fontSize: "17px", background: "#3E30C2" }}>Start Your Course</Button>
                    </CardActions>
                </div>
            </Box>
                <div className="coursesmallbox" style={{ display: "flex", marginLeft: "1150px", marginTop: "-546px" }}>
                    <Box sx={{ maxWidth: "140%" }} >
                        <Card className="imgbox"
                            variant="outlined"
                            sx={{
                                borderRadius: "0px",
                                width: "320px",

                                marginTop: "-20px",
                                boxShadow: "-2px -2px 10px #D8DFF8, 2px 2px 10px #D8DFF8",
                                backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Background.png?alt=media&token=bf10a5f5-0314-4149-a95f-daf6c59c9efc')",
                                backgroundSize: "350px",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            <CardContent>
                                <Box sx={{ justifyContent: "space-between", display: "flex" }}>
                                
                                    <Typography

                                        gutterBottom
                                        textAlign="center"
                                    >
                                        <Button className='side-arrrow' variant="contained" sx={{ backgroundColor: "#4578C8", borderRadius: "10px", position: "relative", width: "100%", height: "19px", fontSize: "7px", left: "-10%", boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}>SPECIAL OFFER</Button>

                                    </Typography>
                                    <Typography

                                        gutterBottom
                                        textAlign="center"
                                    >
                                        <Typography sx={{ marginTop: "3px", backgroundColor: "#FCB006", borderRadius: '3.9px', width: "58%", position: "relative", width: "108%", height: "22px", fontSize: "8px", color: "white", left: "-40%", border: "2px solid #FDB43C", boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}><CurrencyRupee />500/-OFF</Typography>

                                    </Typography>
                                    <Typography

                                        gutterBottom
                                        textAlign="center"
                                    >
                                        <Button className="btn" variant="contained" sx={{ borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "22px", fontSize: "9px", right: "-10%", boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}>Best Seller</Button>

                                    </Typography>
                                </Box>
                                <Box sx={{ justifyContent: "space-around", display: "flex", marginTop: "5%" }}>
                                    <Typography
                                        marginLeft="-19px" >

                                        <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20147.png?alt=media&token=bcf4e4fb-20a0-430f-ac82-10c0fdc9bbe0" alt="logo" />
                                    </Typography>
                                    <Typography sx={{ fontSize: "11.8px", fontWeight: "bold", marginTop: "15px" }}>
                                        <span style={{ color: "#3E30C2" }}> SSC CHSL Tier 1 & 2 </span>  (Target CHSL 2023)
                                        <Typography sx={{ fontSize: "11.8px", fontWeight: "bold" }}>
                                            1 year Course
                                        </Typography>
                                        <Typography sx={{ fontSize: "11.8px", fontWeight: "bold", color: "#3E30C2" }}>
                                            365 daya Validity
                                        </Typography>
                                        <Box sx={{ justifyContent: "space-between", display: "flex" }}>
                                            <Typography

                                                gutterBottom
                                                textAlign="center"
                                            >
                                                <Button disabled sx={{ color: "#919191", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "11.8px", textDecorationLine: "line-through" }}><CurrencyRupee />10000</Button>

                                            </Typography>
                                            <Typography

                                                gutterBottom
                                                textAlign="center"
                                            >
                                                <Typography sx={{ backgroundColor: "#FFCD5C", borderRadius: '3.9px', width: "58%", position: "relative", width: "130%", height: "19.01px", fontSize: "11.8px", border: "2px solid #FDB43C" }}>20 % OFF</Typography>

                                            </Typography>
                                            <Typography

                                                gutterBottom
                                                textAlign="center"
                                            >
                                                <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px" }}>8000</Button>

                                            </Typography>
                                        </Box>
                                        <Box sx={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>
                                            <Typography

                                                gutterBottom
                                                textAlign="center"
                                                sx={{ fontSize: "10px", color: "#000" }}
                                            >
                                                Special offer apllied successfully

                                            </Typography>

                                            <Typography

                                                gutterBottom
                                                textAlign="center"
                                            >

                                                <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px" }}><CurrencyRupee /> 8000</Button>
                                            
                                            </Typography>
                                        </Box>
                                        <Box sx={{ justifyContent: "right", display: "flex" }}>
                                            <Typography

                                                gutterBottom
                                                textAlign="center"
                                                sx={{ fontSize: "11.8px", color: "#000", fontWeight: "bold" }}
                                            >
                                                Total Amount

                                            </Typography>

                                            <Typography

                                                gutterBottom
                                                textAlign="center"
                                            >
                                                <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px", border: "2px solid #00ff00" }}>7500</Button>

                                            </Typography>
                                        </Box>
                                    </Typography>
                                </Box >

                            </CardContent>
                            <CardActions
                                style={{ justifyContent: "center" }}
                            >
                                <Button className='btn' variant="contained" sx={{ marginTop: "15px", fontSize: "13px", background: "#3E30C2" }}>Buy Olanger Course</Button>
                            </CardActions>
                        </Card>
                    </Box>

                </div>
            </div>
        )
    }
}

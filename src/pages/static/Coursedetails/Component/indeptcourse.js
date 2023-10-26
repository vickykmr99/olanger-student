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
export default class indepthcourse extends Component {
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
            <div className='responsive'  style={{background:" #FFFFFF"}}>
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
                        gap:"4px",
                        borderRadius: "0px",
                        padding: "1px",
                        marginTop: "-9%",
                        marginLeft: "-5%",
                       
                    }}>
                    <button className='focustiers'  style={{border:"none",background:"white",fontWeight:"bold",fontSize:"28px"}}>For Tier 1</button>
                    <button className='focustiers' style={{border:"none",background:"white",fontWeight:"bold",fontSize:"28px"}}> For Tier 2</button>
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

                <Box sx={{

                    backgroundColor: "#EEECFE",
                    position: "relative",
                    width: "757px",
                    height: "168px",
                    left: " 24%",
                    top: "40px"
                }}  >


                    <Stack 
                        direction="row"
                        sx={{
                            justifyContent: "top",
                            alignItems: "top",
                            borderRadius: "0px",
                           
                            marginLeft: "3%"
                        }}
                        style={{
                            width: "699px",
                            height: "162px",
                            fontfamily: 'Poppins',
                            fontstyle: "normal",
                          
                            lineheight: "21px",

                            textalign: "center",
                            lineBreak: "5px"
                        }}
                    >
                        <Typography style={{ fontWeight: "bold", fontSize: "17px",  marginTop: "20px", }}>In ‘In-depth course’, all chapter-wise questions are discussed along with patten analysis of last last5 years questions in PDF format follwed by quizzes. for every quiz, you will get your competative imperative index.</Typography>
                    </Stack>
                    <Stack 
                        direction="row"
                        sx={{ width: "690px",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "0px",
                            marginTop: "-3%",
                           

                        }}
                        style={{
                           
                            height: "50px",
                            fontfamily: 'Poppins',
                            fontstyle: "normal",
                            fontweight: "bold",
                            lineheight: "25px",
                             textalign: "center",
                        }}
                    >

                        <Typography style={{ width: "700px", fontWeight: "bold", fontSize: "17px",marginTop:"-69px" ,marginLeft:"23px"}}>‘In-depth course’ contains 20 chapters covering whole  syllabus of quants which have 50 pdfs and 60 quizzes  .</Typography>
                    </Stack> </Box>

                <div class="coursesidebar" style={{height:"400px",marginTop:"-168px"}}>
                    <a href="#SSC" >Foundation </a>

                    <a href="#SSC"  style={{  fontWeight: "bolder", WebkitTextFillColor: "#3E30C2", fontSize: "110%", fontfamily: 'Poppins', justifyContent: "center",border:"2px solid #3E30C2",borderRadius:"5px"
                    }}>In-depth Course</a>
                    <a href="#services">Prev. year Paper Discussion</a>
                    <a href="#Banking & Insurance">Trend Questions of last 3yrs </a>
                    <a href="#Teaching">Test Series</a>
                    <a href="#Defence">Doubt Clear</a>
                </div>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "65px",
                    left: " 24%",
                    top: 47
                }} style={{ border: "2.2px groove #6257CD", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", justifyContent: "space-around", gap: "1px", alignItems: "center", padding: "10px"}}>
                        <div>
                            <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>How to start your journey </Typography>

                        </div>
                        <div>
                            <button style={{ textDecorationLine: "underline", textDecorationThickness: "1.5px", fontWeight: "bold", color: "#3E30C2", fontSize: "13px", width: "95px", height: "36px", border: "solid 2px #3E30C2", borderRadius: "7px" }}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />  1 Video</button>
                        </div>
                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "750px",
                    left: " 24%",
                    top: 54
                }} >
                    <div>
                        <Accordion expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} style={this.getPanelStyle('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"

                            >
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginRight: "89px" }}>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} >
                                            Number Theory
                                        </Button>
                                    </div>
                                    <div style={{ display: "flex", gap: "72px", justifyContent: "space-between" }}>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Icon.png?alt=media&token=f5ed7e42-c464-4fa4-9a3a-bea68cec9f74" alt="icon" />}>
                                            2 video Lessons
                                        </Button>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                            2 PDF
                                        </Button>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(9).png?alt=media&token=12e4120f-61a9-4f99-89d8-a851f47b934b" alt="icon" />}>
                                            2 Quiz
                                        </Button>
                                    </div>
                                </div>




                            </AccordionSummary>
                            <AccordionDetails style={{ background: "#F9F9F9" }}>
                                <Typography>
                                    1. LCF & its application
                                </Typography>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1Quiz
                                    </Button>
                                </div>
                                <Typography sx={{ marginTop: "25px" }}>
                                    2. HCF & its application
                                </Typography>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1Quiz
                                    </Button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} style={this.getPanelStyle('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginRight: "120px" }}>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} >
                                            LCM & GCF
                                        </Button>
                                    </div>
                                    <div style={{ display: "flex", gap: "68px", justifyContent: "space-between" }}>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Icon.png?alt=media&token=f5ed7e42-c464-4fa4-9a3a-bea68cec9f74" alt="icon" />}>
                                            2 video Lessons
                                        </Button>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                            2 PDF
                                        </Button>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(9).png?alt=media&token=12e4120f-61a9-4f99-89d8-a851f47b934b" alt="icon" />}>
                                            2 Quiz
                                        </Button>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails style={{ background: "#F9F9F9" }}>
                                <Typography>
                                    1. LCF & its application
                                </Typography>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1Quiz
                                    </Button>
                                </div>
                                <Typography sx={{ marginTop: "25px" }}>
                                    2. HCF & its application
                                </Typography>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1Quiz
                                    </Button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} style={this.getPanelStyle('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginRight: "120px" }}>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} >
                                            LCM & GCF
                                        </Button>
                                    </div>
                                    <div style={{ display: "flex", gap: "68px", justifyContent: "space-between" }}>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Icon.png?alt=media&token=f5ed7e42-c464-4fa4-9a3a-bea68cec9f74" alt="icon" />}>
                                            2 video Lessons
                                        </Button>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                            2 PDF
                                        </Button>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(9).png?alt=media&token=12e4120f-61a9-4f99-89d8-a851f47b934b" alt="icon" />}>
                                            2 Quiz
                                        </Button>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails style={{ background: "#F9F9F9" }}>

                                <Typography>
                                    1. LCF & its application
                                </Typography>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1Quiz
                                    </Button>
                                </div>
                                <Typography sx={{ marginTop: "25px", textTransform: "capitalize" }}>
                                    2. HCF & its application
                                </Typography>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1Quiz
                                    </Button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')} style={this.getPanelStyle('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginRight: "144px" }}>
                                        <Button sx={{ color: '#626262', fontWeight: "bold", textTransform: "capitalize" }} >
                                            Algebra
                                        </Button>
                                    </div>
                                    <div style={{ display: "flex", gap: "68px", justifyContent: "space-between" }}>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Icon.png?alt=media&token=f5ed7e42-c464-4fa4-9a3a-bea68cec9f74" alt="icon" />}>
                                            2 video Lessons
                                        </Button>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                            2 PDF
                                        </Button>
                                        <Button sx={{ color: '#626262', textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(9).png?alt=media&token=12e4120f-61a9-4f99-89d8-a851f47b934b" alt="icon" />}>
                                            2 Quiz
                                        </Button>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails style={{ background: "#F9F9F9", textTransform: "capitalize" }}>
                                <Typography>
                                    1. LCF & its application
                                </Typography>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1Quiz
                                    </Button>
                                </div>
                                <Typography sx={{ marginTop: "25px", textTransform: "capitalize" }}>
                                    2. HCF & its application
                                </Typography>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1Quiz
                                    </Button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')} style={this.getPanelStyle('panel5')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel5bh-content"
                                id="panel5bh-header"
                            >
                                <div style={{ display: "flex", }}>
                                    <div style={{ marginRight: "28px" }}>
                                        <Button sx={{ color: '#626262', whiteSpace: "nowrap", overflow: "hidden", textOverflow: "clip", textTransform: "capitalize" }} >
                                            Percentage & Application
                                        </Button>
                                    </div>
                                    <div style={{ display: "flex", gap: "69px", justifyContent: "space-between" }}>
                                        <Button sx={{ color: '#626262', whiteSpace: "nowrap", overflow: "hidden", textOverflow: "clip", textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Icon.png?alt=media&token=f5ed7e42-c464-4fa4-9a3a-bea68cec9f74" alt="icon" />}>
                                            2 video Lessons
                                        </Button>
                                        <Button sx={{ color: '#626262', whiteSpace: "nowrap", overflow: "hidden", textOverflow: "clip", textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20609.png?alt=media&token=ca878dcd-9bbe-42ee-9fef-78b972c25ecb" alt="icon" />}>
                                            2 PDF
                                        </Button>
                                        <Button sx={{ color: '#626262', whiteSpace: "nowrap", overflow: "hidden", textOverflow: "clip", textTransform: "capitalize" }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(9).png?alt=media&token=12e4120f-61a9-4f99-89d8-a851f47b934b" alt="icon" />}>
                                            2 Quiz
                                        </Button>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails style={{ background: "#F9F9F9" }}>
                                <Typography>
                                    1. LCF & its application
                                </Typography>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1Quiz
                                    </Button>
                                </div>
                                <Typography sx={{ marginTop: "25px" }}>
                                    2. HCF & its application
                                </Typography>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px", textTransform: "capitalize" }} >
                                        1Quiz
                                    </Button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <CardActions
                                style={{ justifyContent: "center" }}
                            >
                                <Button className='btn'     variant="contained" sx={{marginTop: "30px" ,width:"300px",height:"50px",fontSize: "17px",background:"#3E30C2" }}>Start Your Course</Button>
                            </CardActions>
                    </div>
                </Box>
                <div className="coursesmallbox" style={{ display: "flex", marginLeft: "1150px", marginTop: "-570px" }}>
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
                                        <Button className='side-arrrow'  variant="contained" sx={{ backgroundColor: "#4578C8",borderRadius:"10px", position: "relative", width: "100%", height: "19px", fontSize: "7px",left:"-10%",boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}>SPECIAL OFFER</Button>

                                    </Typography>
                                    <Typography

                                        gutterBottom
                                        textAlign="center"
                                    >
                                       <Typography  sx={{marginTop:"3px", backgroundColor: "#FCB006", borderRadius: '3.9px', width: "58%", position: "relative", width: "108%", height: "22px", fontSize: "8px" ,color:"white",left:"-40%",border:"2px solid #FDB43C",boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}><CurrencyRupee />500/-OFF</Typography>

                                    </Typography>
                                    <Typography

                                        gutterBottom
                                        textAlign="center"
                                    >
                                        <Button className="btn" variant="contained" sx={{ borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "22px", fontSize: "9px",right:"-10%",boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}>Best Seller</Button>

                                    </Typography>
                                </Box>
                                <Box sx={{ justifyContent: "space-around", display: "flex", marginTop:"5%"}}>
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
                                                <Button disabled sx={{color:"#919191" ,borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "11.8px",textDecorationLine:"line-through" }}><CurrencyRupee />10000</Button>

                                            </Typography>
                                            <Typography

                                                gutterBottom
                                                textAlign="center"
                                            >
                                                <Typography  sx={{ backgroundColor: "#FFCD5C", borderRadius: '3.9px', width: "58%", position: "relative", width: "130%", height: "19.01px", fontSize: "11.8px",border:"2px solid #FDB43C" }}>20 % OFF</Typography>

                                            </Typography>
                                            <Typography

                                                gutterBottom
                                                textAlign="center"
                                            >
                                                <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px" }}>8000</Button>

                                            </Typography>
                                        </Box>
                                        <Box sx={{ justifyContent: "space-between", display: "flex",alignItems:"center" }}>
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
                                                <hr style={{ marginTop: "-3px", marginBottom: "0px", color: "#000" }} />
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
                                                <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px",border:"2px solid #00ff00" }}>7500</Button>

                                            </Typography>
                                        </Box>
                                    </Typography>
                                </Box >

                            </CardContent>
                            <CardActions
                                style={{ justifyContent: "center" }}
                            >
                                <Button className='btn'     variant="contained" sx={{marginTop: "15px" ,fontSize: "13px",background:"#3E30C2" }}>Buy Olanger Course</Button>
                            </CardActions>
                        </Card>
                    </Box>

                </div>
            </div>
        )
    }
}

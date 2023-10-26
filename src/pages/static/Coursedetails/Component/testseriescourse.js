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
export default class Testseriescourse extends Component {
    constructor(props) {
        super(props);
        this.state = { activeButtonId: 1 };

    }

    handleButtonClick = (buttonId) => {
        this.setState({ activeButtonId: buttonId });
    };

    render() {
        const { activeButtonId } = this.state;

        return (
            <div className='responsive' style={{ background: " #FFFFFF" }}>
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
                <Stack className='prevyrbtns'
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
                    height: "85px",
                    left: " 24%",
                    top: "40px"
                }}  >


                    <Stack spacing={2}
                        direction="row"
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "0px",
                            paddingTop: "40px",
                            marginLeft: "15%"
                        }}
                        style={{
                            width: "540px",
                            height: "42px",
                            fontfamily: 'Poppins',
                            fontstyle: "normal",

                            lineheight: "21px",

                            textalign: "center",
                            lineBreak: "5px"
                        }}
                    >
                        <Typography style={{ fontWeight: "bold", fontSize: "17px" }}>Here, 20 chapter-wise sets of previous years question are discussed in pdf format for better understanding of trend analysis.  </Typography>
                    </Stack>
                </Box>

                <div class="coursesidebar" style={{ height: "400px", marginTop: "-168px" }}>
                    <a href="#SSC">Foundation </a>

                    <a href="#SSC" >In-depth Course</a>
                    <a href="#services">Prev. year Paper Discussion</a>
                    <a href="#Banking & Insurance">Trend Questions of last 3yrs </a>
                    <a href="#Teaching" style={{
                        fontWeight: "bolder", WebkitTextFillColor: "#3E30C2", fontSize: "110%", fontfamily: 'Poppins', justifyContent: "center", border: "2px solid #3E30C2", borderRadius: "5px"
                    }}>Test Series</a>
                    <a href="#Defence">Doubt Clear</a>
                </div>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", alignItems: "center", paddingTop: "10px", marginLeft: "15px" }}>
                        <div>
                            <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>10 algebric question trends of last of last 3 years </Typography>

                        </div>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "center", padding: "15px" }}>
                        <Button sx={{ fontWeight: "bold", color: "#3E30C2", textDecoration: "underline", textDecorationColor: " #3E30C2", textDecorationThickness: "1.5px", textTransform: "capitalize", marginTop: "-15px" }} >1PDF</Button>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", alignItems: "center", paddingTop: "10px", marginLeft: "15px" }}>
                        <div>
                            <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>10 algebric question trends of last of last 3 years </Typography>

                        </div>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "center", padding: "15px" }}>
                        <Button sx={{ fontWeight: "bold", color: "#3E30C2", textDecoration: "underline", textDecorationColor: " #3E30C2", textDecorationThickness: "1.5px", textTransform: "capitalize", marginTop: "-15px" }} >1PDF</Button>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", alignItems: "center", paddingTop: "10px", marginLeft: "15px" }}>
                        <div>
                            <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>10 algebric question trends of last of last 3 years </Typography>

                        </div>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "center", padding: "15px" }}>
                        <Button sx={{ fontWeight: "bold", color: "#3E30C2", textDecoration: "underline", textDecorationColor: " #3E30C2", textDecorationThickness: "1.5px", textTransform: "capitalize", marginTop: "-15px" }} >1PDF</Button>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", alignItems: "center", paddingTop: "10px", marginLeft: "15px" }}>
                        <div>
                            <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>10 algebric question trends of last of last 3 years </Typography>

                        </div>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "center", padding: "15px" }}>
                        <Button sx={{ fontWeight: "bold", color: "#3E30C2", textDecoration: "underline", textDecorationColor: " #3E30C2", textDecorationThickness: "1.5px", textTransform: "capitalize", marginTop: "-15px" }} >1PDF</Button>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", alignItems: "center", paddingTop: "10px", marginLeft: "15px" }}>
                        <div>
                            <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>10 algebric question trends of last of last 3 years </Typography>

                        </div>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "center", padding: "15px" }}>
                        <Button sx={{ fontWeight: "bold", color: "#3E30C2", textDecoration: "underline", textDecorationColor: " #3E30C2", textDecorationThickness: "1.5px", textTransform: "capitalize", marginTop: "-15px" }} >1PDF</Button>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", alignItems: "center", paddingTop: "10px", marginLeft: "15px" }}>
                        <div>
                            <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>10 algebric question trends of last of last 3 years </Typography>

                        </div>

                    </div>
                </Box>
                <Box sx={{

                    backgroundColor: "white",
                    position: "relative",
                    width: "752px",
                    height: "46px",
                    left: " 24%",
                    top: 43
                }} style={{ border: "1.5px solid #8E8D97", borderRadius: "5px" }} >

                    <div style={{ direction: "column", display: "flex", justifyContent: "space-around", gap: "10px", alignItems: "center", padding: "15px" }}>
                        <Button sx={{ fontWeight: "bold", color: "#3E30C2", textDecoration: "underline", textDecorationColor: " #3E30C2", textDecorationThickness: "1.5px", textTransform: "capitalize", marginTop: "-15px" }} >1PDF</Button>

                    </div>
                </Box>


                <div className="coursesmallbox" style={{ display: "flex", marginLeft: "1150px", marginTop: "-575px" }}>
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
                                    {/* <Typography
                                        sx={{ fontSize: 14 }}
                                        gutterBottom
                                        textAlign="center"
                                    >

                                        <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20147.png?alt=media&token=bcf4e4fb-20a0-430f-ac82-10c0fdc9bbe0" alt="logo" />
                                    </Typography> */}
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
                <CardActions
                    style={{ justifyContent: "center" }}
                >
                    <Button className='btn' variant="contained" sx={{ marginTop: "350px", width: "300px", height: "50px", fontSize: "17px", background: "#3E30C2" }}>Start Your Course</Button>
                </CardActions>
            </div>
        )
    }
}

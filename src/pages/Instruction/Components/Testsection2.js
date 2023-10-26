import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import "../../../pages/Instruction/Components/testsection2.css"
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import RetestPofile from "../../../images/retest-prof.png";
import { Button, Typography, Grid, Stack, Switch } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
// import logo from "../../../images/logo.jpg";
import AnalyticsNavbar from "../../../pages/Instruction/Components/analyticsnav";
import Superfast from "../../../images/solar_smile-circle-bold.svg";
import Ontime from "../../../images/ontime.svg";
import Slow from "../../../images/slow.svg";
import OntimeNotcorrect from "../../../images/notcorrect.svg";
import Bookmark from "../../../images/bookmark.svg";
import Eye from "../../../images/eye.svg";
import Bodamas from "../../../images/Bodamas.webp";
import ThumbDown from "../../../images/thumb-down.svg";
import Thumbup from "../../../images/thumb-up.svg";
import Filterico from "../../../images/filter.svg";




const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 35,
    height: 18,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 16,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#8980E7',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

const qnnum = [
    { q1: '1' },
    { q1: '2' },
    { q1: '3' },
    { q1: '4' },
    { q1: '5' },
    { q1: '6' },
    { q1: '7' },
    { q1: '8' },
    { q1: '9' },
    { q1: '10' },
    { q1: '11' },
    { q1: '12' },
    { q1: '13' },
    { q1: '14' },
    { q1: '15' },
    { q1: '16' },
    { q1: '17' },
    { q1: '18' },
    { q1: '19' },
    { q1: '20' },
    { q1: '21' },
    { q1: '22' },
    { q1: '23' },
    { q1: '24' },
    { q1: '25' },
];


export default class Testsectionss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDiv1: false,
            showAttempt:false,

        };
    }
    toggleDivs = () => {
        this.setState({
            showDiv1: !this.state.showDiv1,

        });
    };

    toggleAttempt = () => {
        this.setState({
            showAttempt: !this.state.showAttempt,

        });
    };


    render() {
        return (
            <Grid style={{ width: '100%' }}>





                <AnalyticsNavbar />

                <Grid container display={'flex'}>
                    <Grid item xs={0.4}></Grid>

                    {/* Left Portion */}
                    <Grid mt={10} item xs={7.7}>


                        <Grid>
                            <Tabs>
                                <TabList style={{ marginTop: "2%", borderBottom: "2px solid lightgray", paddingBottom: "7px", listStyle: "none", display: "flex", gap: "15px" }}>
                                    <Tab className="tab-paper">Sections</Tab>
                                    <Tab className="tab-paper">General Intelligence</Tab>
                                    <Tab className="tab-paper">General Awareness</Tab>
                                    <Tab className="tab-paper">Quantitative Aptitude</Tab>
                                    <Tab className="tab-paper">English Comprehension</Tab>

                                </TabList>
                                <TabPanel >
                                    {/* question tab here */}
                                    <Grid style={{ display: "flex", padding: "12px 3px", borderBottom: "2px solid lightgray", marginBottom: "1%" }}>
                                        <Typography style={{ borderRight: "2px solid gray", paddingRight: "3px", color: "black" }}>Question no. 1</Typography>
                                        <Box style={{ borderRight: "2px solid gray", display: "flex", gap: "7px", padding: "0px 8px", alignItems: "center", justifyContent: "center" }}>
                                            <button className='skip-btn'>Skipped</button>
                                            <img src={OntimeNotcorrect} />
                                            <Box style={{ gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                <Typography>You:</Typography>
                                                <Typography style={{ color: "gray" }}>00:28</Typography>
                                            </Box>
                                            <Box style={{ gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                <Typography>Avg:</Typography>
                                                <Typography style={{ color: "gray" }}>00:43</Typography>
                                            </Box>
                                        </Box>

                                        <Box style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0px 12px" }}>
                                            <Typography>Marks</Typography>
                                            <button className='skip-btn'>Skipped</button>
                                            <Button variant='container' className='ansCorrect' style={{}}>30% answered correctly</Button>
                                            <Box style={{ gap: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <img src={Bookmark} />
                                                <Typography>Save</Typography>
                                            </Box>
                                            <Box style={{ gap: "8px", display: "flex" }}>
                                                <WarningIcon
                                                    style={{
                                                        color: '#72717D',
                                                        borderRadius: '2px',
                                                        fontWeight: '400',
                                                    }}
                                                />
                                                <Typography>Report</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    {/* question tab solution here  */}
                                    <Grid className="solution-part">
                                    <Grid >

                                        <Grid>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                By interchanging the two numbers 20 and 36, which of the following equations will be correct?
                                            </Typography>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                I. 55 + 42 – 36 × 20 ÷ 9 = 17
                                            </Typography>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                II. 20 ÷ 2 × 36 + 81 – 41 = 400
                                            </Typography>


                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel
                                                        value="1"
                                                        control={<Radio />}
                                                        label="Only I"
                                                    />
                                                    <FormControlLabel
                                                        value="2"
                                                        control={<Radio />}
                                                        label="Only II"
                                                    />
                                                    <FormControlLabel
                                                        value="3"
                                                        control={<Radio />}
                                                        label="Both I & II"
                                                    />
                                                    <FormControlLabel
                                                        value="4"
                                                        control={<Radio />}
                                                        label="Neither I & II"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>

                                        <Grid>
                                            {/* reattempted tag here  */}


                                            {this.state.showAttempt ? <Grid style={{ border: '1px solid #FFB1A7', marginTop: "4%", textAlign: "left", background: "#FFEFED", width: "35%", padding: '5px 10px ', borderRadius: "4px" }}>
                                                <Typography style={{ fontSize: "16px" }}>
                                                    Re-attempt mode: <strong>OFF</strong>
                                                </Typography>
                                                <Typography style={{ fontSize: "16px" }}>
                                                    Now you can't attempt the question
                                                </Typography>
                                            </Grid> :
                                                <Grid style={{ border: '1px solid #FFB1A7', marginTop: "4%", textAlign: "left", background: "#FFEFED", width: "35%", padding: '5px 10px ', borderRadius: "4px" }}>
                                                    <Typography style={{ fontSize: "16px" }}>
                                                        Re-attempt mode: <strong>ON</strong>
                                                    </Typography>
                                                    <Typography style={{ fontSize: "16px" }}>
                                                        Now you can Re-attempt the question
                                                    </Typography>
                                                </Grid>
                                            }


                                            {/* view solution button here */}

                                            {this.state.showDiv1 ? <Grid onClick={this.toggleDivs} style={{ marginTop: "2%", display: "flex", alignItems: "center", gap: "10px" }}>
                                                <Box style={{ cursor: "pointer", border: "1px solid gray", borderRadius: "5px", padding: "7px", gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                    <img src={Eye} />
                                                    <Typography onClick={this.toggleDivs}>Hide Solution</Typography>
                                                </Box>
                                                <Typography>
                                                    Click here to see the answer
                                                </Typography>
                                            </Grid> :
                                                <Grid onClick={this.toggleDivs} style={{ marginTop: "2%", display: "flex", alignItems: "center", gap: "10px" }}>
                                                    <Box style={{ cursor: "pointer", border: "1px solid gray", borderRadius: "5px", padding: "7px", gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                        <img src={Eye} />
                                                        <Typography onClick={this.toggleDivs}>View Solution</Typography>
                                                    </Box>
                                                    <Typography>
                                                        Click here to see the answer
                                                    </Typography>
                                                </Grid>
                                            }

                                        </Grid>
                                    </Grid>

                                    {/* question solution here */}
                                    {this.state.showDiv1 &&
                                        <Grid  style={{ marginTop: "1%" }}>
                                            <Typography>Solution</Typography>
                                            <Divider style={{ border: '0.1px solid black' }}></Divider>
                                            <Box style={{ marginTop: "2%",marginBottom:"1%", height: "100%", width: "100%" }}>
                                                <img src={Bodamas} />
                                            </Box>
                                            {/* solution txt here  */}
                                            <Grid style={{ border: "1px solid lightgray", padding: "15px" }}>
                                                <Box style={{  }}>
                                                    <Typography>Given equation I: 55 + 42 – 36 × 20 ÷ 9 = 17 Now, </Typography>
                                                    <Typography>if '20 and 36' are interchanged,then: </Typography>
                                                    <Typography>= 55 + 42 – 20 ×36 ÷ 9 = 17 </Typography>
                                                    <Typography>=55 + 42 –20  × 4 = 17 </Typography>
                                                    <Typography> =55 + 42 -80 = 17</Typography>
                                                    <Typography>=97-80 =17 </Typography>
                                                    <Typography> =17=17</Typography>
                                                    <Typography> <strong>LHS =RHS</strong> </Typography>
                                                </Box>
                                                <Box style={{ marginTop: "2%", marginBottom: "2%" }}>

                                                    <Typography>Given equation II: 20 ÷ 2 × 36 + 81 – 41 = 400  </Typography>
                                                    <Typography> Now, if '20 and 36' are interchanged, then:  </Typography>
                                                    <Typography>= 36 ÷ 2 × 20 + 81 – 41 = 400  </Typography>
                                                    <Typography> = 18 × 20 + 81 – 41 = 400  </Typography>
                                                    <Typography>  = 360 + 81 – 41 = 400 </Typography>
                                                    <Typography>= 441 – 41 = 400 </Typography>
                                                    <Typography> = 400 = 400</Typography>
                                                    <Typography><strong>LHS =RHS .</strong> </Typography>
                                                </Box>






                                                <Typography> Here, Both I and II are correct equation after interchanging the given symbol. </Typography>

                                                <Typography>Hence, the correct answer is <strong>"Option 3"</strong>.</Typography>

                                            </Grid>

                                            <Grid style={{ display: "flex", gap: "10px", marginTop: "2%" }}>
                                                <Typography>Was the solution helpful?</Typography>
                                                <button className='thumb'><img src={Thumbup} style={{ marginRight: "8px" }} />Yes</button>
                                                <button className='thumb'><img src={ThumbDown} style={{ marginRight: "8px" }} />No</button>
                                            </Grid>
                                        </Grid>}

                                        </Grid>
                                        {/* prev and next button here */}

                                    <Grid style={{ border:"1px solid gray ",padding:"6px",borderRadius:"7px",paddingLeft: "10px", display: "flex", justifyContent: "space-between",marginTop:"2%", alignItems: "center", width: "100%" }}>
                                        <button className='prev-btn c-btn'>Previous</button>
                                        <Box style={{display:"flex",alignItems:"center",gap:"8px"}}>
                                        Re-attempted Questions
                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }}   onClick={this.toggleAttempt} />
                                        </Box>
                                        <button className='next-btn c-btn'>Next</button>
                                    </Grid>

                                </TabPanel>

                                {/* general intelligence tabpanel */}
                                <TabPanel >
                                    {/* question tab here */}
                                    <Grid style={{ display: "flex", padding: "12px 3px", borderBottom: "2px solid lightgray", marginBottom: "1%" }}>
                                        <Typography style={{ borderRight: "2px solid gray", paddingRight: "3px", color: "black" }}>Question no. 1</Typography>
                                        <Box style={{ borderRight: "2px solid gray", display: "flex", gap: "7px", padding: "0px 8px", alignItems: "center", justifyContent: "center" }}>
                                            <button className='skip-btn'>Skipped</button>
                                            <img src={OntimeNotcorrect} />
                                            <Box style={{ gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                <Typography>You:</Typography>
                                                <Typography style={{ color: "gray" }}>00:28</Typography>
                                            </Box>
                                            <Box style={{ gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                <Typography>Avg:</Typography>
                                                <Typography style={{ color: "gray" }}>00:43</Typography>
                                            </Box>
                                        </Box>

                                        <Box style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0px 12px" }}>
                                            <Typography>Marks</Typography>
                                            <button className='skip-btn'>Skipped</button>
                                            <Button variant='container' className='ansCorrect' style={{}}>30% answered correctly</Button>
                                            <Box style={{ gap: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <img src={Bookmark} />
                                                <Typography>Save</Typography>
                                            </Box>
                                            <Box style={{ gap: "8px", display: "flex" }}>
                                                <WarningIcon
                                                    style={{
                                                        color: '#72717D',
                                                        borderRadius: '2px',
                                                        fontWeight: '400',
                                                    }}
                                                />
                                                <Typography>Report</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    {/* question tab solution here  */}
                                    <Grid className="solution-part">
                                    <Grid >

                                        <Grid>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                By interchanging the two numbers 20 and 36, which of the following equations will be correct?
                                            </Typography>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                I. 55 + 42 – 36 × 20 ÷ 9 = 17
                                            </Typography>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                II. 20 ÷ 2 × 36 + 81 – 41 = 400
                                            </Typography>


                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel
                                                        value="1"
                                                        control={<Radio />}
                                                        label="Only I"
                                                    />
                                                    <FormControlLabel
                                                        value="2"
                                                        control={<Radio />}
                                                        label="Only II"
                                                    />
                                                    <FormControlLabel
                                                        value="3"
                                                        control={<Radio />}
                                                        label="Both I & II"
                                                    />
                                                    <FormControlLabel
                                                        value="4"
                                                        control={<Radio />}
                                                        label="Neither I & II"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>

                                        <Grid>
                                            {/* reattempted tag here  */}


                                            {this.state.showAttempt ? <Grid style={{ border: '1px solid #FFB1A7', marginTop: "4%", textAlign: "left", background: "#FFEFED", width: "35%", padding: '5px 10px ', borderRadius: "4px" }}>
                                                <Typography style={{ fontSize: "16px" }}>
                                                    Re-attempt mode: <strong>OFF</strong>
                                                </Typography>
                                                <Typography style={{ fontSize: "16px" }}>
                                                    Now you can't attempt the question
                                                </Typography>
                                            </Grid> :
                                                <Grid style={{ border: '1px solid #FFB1A7', marginTop: "4%", textAlign: "left", background: "#FFEFED", width: "35%", padding: '5px 10px ', borderRadius: "4px" }}>
                                                    <Typography style={{ fontSize: "16px" }}>
                                                        Re-attempt mode: <strong>ON</strong>
                                                    </Typography>
                                                    <Typography style={{ fontSize: "16px" }}>
                                                        Now you can Re-attempt the question
                                                    </Typography>
                                                </Grid>
                                            }


                                            {/* view solution button here */}

                                            {this.state.showDiv1 ? <Grid onClick={this.toggleDivs} style={{ marginTop: "2%", display: "flex", alignItems: "center", gap: "10px" }}>
                                                <Box style={{ cursor: "pointer", border: "1px solid gray", borderRadius: "5px", padding: "7px", gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                    <img src={Eye} />
                                                    <Typography onClick={this.toggleDivs}>Hide Solution</Typography>
                                                </Box>
                                                <Typography>
                                                    Click here to see the answer
                                                </Typography>
                                            </Grid> :
                                                <Grid onClick={this.toggleDivs} style={{ marginTop: "2%", display: "flex", alignItems: "center", gap: "10px" }}>
                                                    <Box style={{ cursor: "pointer", border: "1px solid gray", borderRadius: "5px", padding: "7px", gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                        <img src={Eye} />
                                                        <Typography onClick={this.toggleDivs}>View Solution</Typography>
                                                    </Box>
                                                    <Typography>
                                                        Click here to see the answer
                                                    </Typography>
                                                </Grid>
                                            }

                                        </Grid>
                                    </Grid>

                                    {/* question solution here */}
                                    {this.state.showDiv1 &&
                                        <Grid  style={{ marginTop: "1%" }}>
                                            <Typography>Solution</Typography>
                                            <Divider style={{ border: '0.1px solid black' }}></Divider>
                                            <Box style={{ marginTop: "2%",marginBottom:"1%", height: "100%", width: "100%" }}>
                                                <img src={Bodamas} />
                                            </Box>
                                            {/* solution txt here  */}
                                            <Grid style={{ border: "1px solid lightgray", padding: "15px" }}>
                                                <Box style={{  }}>
                                                    <Typography>Given equation I: 55 + 42 – 36 × 20 ÷ 9 = 17 Now, </Typography>
                                                    <Typography>if '20 and 36' are interchanged,then: </Typography>
                                                    <Typography>= 55 + 42 – 20 ×36 ÷ 9 = 17 </Typography>
                                                    <Typography>=55 + 42 –20  × 4 = 17 </Typography>
                                                    <Typography> =55 + 42 -80 = 17</Typography>
                                                    <Typography>=97-80 =17 </Typography>
                                                    <Typography> =17=17</Typography>
                                                    <Typography> <strong>LHS =RHS</strong> </Typography>
                                                </Box>
                                                <Box style={{ marginTop: "2%", marginBottom: "2%" }}>

                                                    <Typography>Given equation II: 20 ÷ 2 × 36 + 81 – 41 = 400  </Typography>
                                                    <Typography> Now, if '20 and 36' are interchanged, then:  </Typography>
                                                    <Typography>= 36 ÷ 2 × 20 + 81 – 41 = 400  </Typography>
                                                    <Typography> = 18 × 20 + 81 – 41 = 400  </Typography>
                                                    <Typography>  = 360 + 81 – 41 = 400 </Typography>
                                                    <Typography>= 441 – 41 = 400 </Typography>
                                                    <Typography> = 400 = 400</Typography>
                                                    <Typography><strong>LHS =RHS .</strong> </Typography>
                                                </Box>






                                                <Typography> Here, Both I and II are correct equation after interchanging the given symbol. </Typography>

                                                <Typography>Hence, the correct answer is <strong>"Option 3"</strong>.</Typography>

                                            </Grid>

                                            <Grid style={{ display: "flex", gap: "10px", marginTop: "2%" }}>
                                                <Typography>Was the solution helpful?</Typography>
                                                <button className='thumb'><img src={Thumbup} style={{ marginRight: "8px" }} />Yes</button>
                                                <button className='thumb'><img src={ThumbDown} style={{ marginRight: "8px" }} />No</button>
                                            </Grid>
                                        </Grid>}

                                        </Grid>
                                        {/* prev and next button here */}

                                    <Grid style={{ border:"1px solid gray ",padding:"6px",borderRadius:"7px",paddingLeft: "10px", display: "flex", justifyContent: "space-between",marginTop:"2%", alignItems: "center", width: "100%" }}>
                                        <button className='prev-btn c-btn'>Previous</button>
                                        <Box style={{display:"flex",alignItems:"center",gap:"8px"}}>
                                        Re-attempted Questions
                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }}   onClick={this.toggleAttempt} />
                                        </Box>
                                        <button className='next-btn c-btn'>Next</button>
                                    </Grid>

                                </TabPanel>


                                {/* general Awarness tabpanel */}
                                <TabPanel >
                                    {/* question tab here */}
                                    <Grid style={{ display: "flex", padding: "12px 3px", borderBottom: "2px solid lightgray", marginBottom: "1%" }}>
                                        <Typography style={{ borderRight: "2px solid gray", paddingRight: "3px", color: "black" }}>Question no. 1</Typography>
                                        <Box style={{ borderRight: "2px solid gray", display: "flex", gap: "7px", padding: "0px 8px", alignItems: "center", justifyContent: "center" }}>
                                            <button className='skip-btn'>Skipped</button>
                                            <img src={OntimeNotcorrect} />
                                            <Box style={{ gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                <Typography>You:</Typography>
                                                <Typography style={{ color: "gray" }}>00:28</Typography>
                                            </Box>
                                            <Box style={{ gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                <Typography>Avg:</Typography>
                                                <Typography style={{ color: "gray" }}>00:43</Typography>
                                            </Box>
                                        </Box>

                                        <Box style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0px 12px" }}>
                                            <Typography>Marks</Typography>
                                            <button className='skip-btn'>Skipped</button>
                                            <Button variant='container' className='ansCorrect' style={{}}>30% answered correctly</Button>
                                            <Box style={{ gap: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <img src={Bookmark} />
                                                <Typography>Save</Typography>
                                            </Box>
                                            <Box style={{ gap: "8px", display: "flex" }}>
                                                <WarningIcon
                                                    style={{
                                                        color: '#72717D',
                                                        borderRadius: '2px',
                                                        fontWeight: '400',
                                                    }}
                                                />
                                                <Typography>Report</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    {/* question tab solution here  */}
                                    <Grid className="solution-part">
                                    <Grid >

                                        <Grid>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                By interchanging the two numbers 20 and 36, which of the following equations will be correct?
                                            </Typography>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                I. 55 + 42 – 36 × 20 ÷ 9 = 17
                                            </Typography>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                II. 20 ÷ 2 × 36 + 81 – 41 = 400
                                            </Typography>


                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel
                                                        value="1"
                                                        control={<Radio />}
                                                        label="Only I"
                                                    />
                                                    <FormControlLabel
                                                        value="2"
                                                        control={<Radio />}
                                                        label="Only II"
                                                    />
                                                    <FormControlLabel
                                                        value="3"
                                                        control={<Radio />}
                                                        label="Both I & II"
                                                    />
                                                    <FormControlLabel
                                                        value="4"
                                                        control={<Radio />}
                                                        label="Neither I & II"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>

                                        <Grid>
                                            {/* reattempted tag here  */}


                                            {this.state.showAttempt ? <Grid style={{ border: '1px solid #FFB1A7', marginTop: "4%", textAlign: "left", background: "#FFEFED", width: "35%", padding: '5px 10px ', borderRadius: "4px" }}>
                                                <Typography style={{ fontSize: "16px" }}>
                                                    Re-attempt mode: <strong>OFF</strong>
                                                </Typography>
                                                <Typography style={{ fontSize: "16px" }}>
                                                    Now you can't attempt the question
                                                </Typography>
                                            </Grid> :
                                                <Grid style={{ border: '1px solid #FFB1A7', marginTop: "4%", textAlign: "left", background: "#FFEFED", width: "35%", padding: '5px 10px ', borderRadius: "4px" }}>
                                                    <Typography style={{ fontSize: "16px" }}>
                                                        Re-attempt mode: <strong>ON</strong>
                                                    </Typography>
                                                    <Typography style={{ fontSize: "16px" }}>
                                                        Now you can Re-attempt the question
                                                    </Typography>
                                                </Grid>
                                            }


                                            {/* view solution button here */}

                                            {this.state.showDiv1 ? <Grid onClick={this.toggleDivs} style={{ marginTop: "2%", display: "flex", alignItems: "center", gap: "10px" }}>
                                                <Box style={{ cursor: "pointer", border: "1px solid gray", borderRadius: "5px", padding: "7px", gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                    <img src={Eye} />
                                                    <Typography onClick={this.toggleDivs}>Hide Solution</Typography>
                                                </Box>
                                                <Typography>
                                                    Click here to see the answer
                                                </Typography>
                                            </Grid> :
                                                <Grid onClick={this.toggleDivs} style={{ marginTop: "2%", display: "flex", alignItems: "center", gap: "10px" }}>
                                                    <Box style={{ cursor: "pointer", border: "1px solid gray", borderRadius: "5px", padding: "7px", gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                        <img src={Eye} />
                                                        <Typography onClick={this.toggleDivs}>View Solution</Typography>
                                                    </Box>
                                                    <Typography>
                                                        Click here to see the answer
                                                    </Typography>
                                                </Grid>
                                            }

                                        </Grid>
                                    </Grid>

                                    {/* question solution here */}
                                    {this.state.showDiv1 &&
                                        <Grid  style={{ marginTop: "1%" }}>
                                            <Typography>Solution</Typography>
                                            <Divider style={{ border: '0.1px solid black' }}></Divider>
                                            <Box style={{ marginTop: "2%",marginBottom:"1%", height: "100%", width: "100%" }}>
                                                <img src={Bodamas} />
                                            </Box>
                                            {/* solution txt here  */}
                                            <Grid style={{ border: "1px solid lightgray", padding: "15px" }}>
                                                <Box style={{  }}>
                                                    <Typography>Given equation I: 55 + 42 – 36 × 20 ÷ 9 = 17 Now, </Typography>
                                                    <Typography>if '20 and 36' are interchanged,then: </Typography>
                                                    <Typography>= 55 + 42 – 20 ×36 ÷ 9 = 17 </Typography>
                                                    <Typography>=55 + 42 –20  × 4 = 17 </Typography>
                                                    <Typography> =55 + 42 -80 = 17</Typography>
                                                    <Typography>=97-80 =17 </Typography>
                                                    <Typography> =17=17</Typography>
                                                    <Typography> <strong>LHS =RHS</strong> </Typography>
                                                </Box>
                                                <Box style={{ marginTop: "2%", marginBottom: "2%" }}>

                                                    <Typography>Given equation II: 20 ÷ 2 × 36 + 81 – 41 = 400  </Typography>
                                                    <Typography> Now, if '20 and 36' are interchanged, then:  </Typography>
                                                    <Typography>= 36 ÷ 2 × 20 + 81 – 41 = 400  </Typography>
                                                    <Typography> = 18 × 20 + 81 – 41 = 400  </Typography>
                                                    <Typography>  = 360 + 81 – 41 = 400 </Typography>
                                                    <Typography>= 441 – 41 = 400 </Typography>
                                                    <Typography> = 400 = 400</Typography>
                                                    <Typography><strong>LHS =RHS .</strong> </Typography>
                                                </Box>






                                                <Typography> Here, Both I and II are correct equation after interchanging the given symbol. </Typography>

                                                <Typography>Hence, the correct answer is <strong>"Option 3"</strong>.</Typography>

                                            </Grid>

                                            <Grid style={{ display: "flex", gap: "10px", marginTop: "2%" }}>
                                                <Typography>Was the solution helpful?</Typography>
                                                <button className='thumb'><img src={Thumbup} style={{ marginRight: "8px" }} />Yes</button>
                                                <button className='thumb'><img src={ThumbDown} style={{ marginRight: "8px" }} />No</button>
                                            </Grid>
                                        </Grid>}

                                        </Grid>
                                        {/* prev and next button here */}

                                    <Grid style={{ border:"1px solid gray ",padding:"6px",borderRadius:"7px",paddingLeft: "10px", display: "flex", justifyContent: "space-between",marginTop:"2%", alignItems: "center", width: "100%" }}>
                                        <button className='prev-btn c-btn'>Previous</button>
                                        <Box style={{display:"flex",alignItems:"center",gap:"8px"}}>
                                        Re-attempted Questions
                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }}   onClick={this.toggleAttempt} />
                                        </Box>
                                        <button className='next-btn c-btn'>Next</button>
                                    </Grid>

                                </TabPanel>

                                {/* Quantative aptitude tabpanel */}

                                <TabPanel >
                                    {/* question tab here */}
                                    <Grid style={{ display: "flex", padding: "12px 3px", borderBottom: "2px solid lightgray", marginBottom: "1%" }}>
                                        <Typography style={{ borderRight: "2px solid gray", paddingRight: "3px", color: "black" }}>Question no. 1</Typography>
                                        <Box style={{ borderRight: "2px solid gray", display: "flex", gap: "7px", padding: "0px 8px", alignItems: "center", justifyContent: "center" }}>
                                            <button className='skip-btn'>Skipped</button>
                                            <img src={OntimeNotcorrect} />
                                            <Box style={{ gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                <Typography>You:</Typography>
                                                <Typography style={{ color: "gray" }}>00:28</Typography>
                                            </Box>
                                            <Box style={{ gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                <Typography>Avg:</Typography>
                                                <Typography style={{ color: "gray" }}>00:43</Typography>
                                            </Box>
                                        </Box>

                                        <Box style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0px 12px" }}>
                                            <Typography>Marks</Typography>
                                            <button className='skip-btn'>Skipped</button>
                                            <Button variant='container' className='ansCorrect' style={{}}>30% answered correctly</Button>
                                            <Box style={{ gap: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <img src={Bookmark} />
                                                <Typography>Save</Typography>
                                            </Box>
                                            <Box style={{ gap: "8px", display: "flex" }}>
                                                <WarningIcon
                                                    style={{
                                                        color: '#72717D',
                                                        borderRadius: '2px',
                                                        fontWeight: '400',
                                                    }}
                                                />
                                                <Typography>Report</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    {/* question tab solution here  */}
                                    <Grid className="solution-part">
                                    <Grid >

                                        <Grid>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                By interchanging the two numbers 20 and 36, which of the following equations will be correct?
                                            </Typography>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                I. 55 + 42 – 36 × 20 ÷ 9 = 17
                                            </Typography>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                II. 20 ÷ 2 × 36 + 81 – 41 = 400
                                            </Typography>


                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel
                                                        value="1"
                                                        control={<Radio />}
                                                        label="Only I"
                                                    />
                                                    <FormControlLabel
                                                        value="2"
                                                        control={<Radio />}
                                                        label="Only II"
                                                    />
                                                    <FormControlLabel
                                                        value="3"
                                                        control={<Radio />}
                                                        label="Both I & II"
                                                    />
                                                    <FormControlLabel
                                                        value="4"
                                                        control={<Radio />}
                                                        label="Neither I & II"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>

                                        <Grid>
                                            {/* reattempted tag here  */}


                                            {this.state.showAttempt ? <Grid style={{ border: '1px solid #FFB1A7', marginTop: "4%", textAlign: "left", background: "#FFEFED", width: "35%", padding: '5px 10px ', borderRadius: "4px" }}>
                                                <Typography style={{ fontSize: "16px" }}>
                                                    Re-attempt mode: <strong>OFF</strong>
                                                </Typography>
                                                <Typography style={{ fontSize: "16px" }}>
                                                    Now you can't attempt the question
                                                </Typography>
                                            </Grid> :
                                                <Grid style={{ border: '1px solid #FFB1A7', marginTop: "4%", textAlign: "left", background: "#FFEFED", width: "35%", padding: '5px 10px ', borderRadius: "4px" }}>
                                                    <Typography style={{ fontSize: "16px" }}>
                                                        Re-attempt mode: <strong>ON</strong>
                                                    </Typography>
                                                    <Typography style={{ fontSize: "16px" }}>
                                                        Now you can Re-attempt the question
                                                    </Typography>
                                                </Grid>
                                            }


                                            {/* view solution button here */}

                                            {this.state.showDiv1 ? <Grid onClick={this.toggleDivs} style={{ marginTop: "2%", display: "flex", alignItems: "center", gap: "10px" }}>
                                                <Box style={{ cursor: "pointer", border: "1px solid gray", borderRadius: "5px", padding: "7px", gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                    <img src={Eye} />
                                                    <Typography onClick={this.toggleDivs}>Hide Solution</Typography>
                                                </Box>
                                                <Typography>
                                                    Click here to see the answer
                                                </Typography>
                                            </Grid> :
                                                <Grid onClick={this.toggleDivs} style={{ marginTop: "2%", display: "flex", alignItems: "center", gap: "10px" }}>
                                                    <Box style={{ cursor: "pointer", border: "1px solid gray", borderRadius: "5px", padding: "7px", gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                        <img src={Eye} />
                                                        <Typography onClick={this.toggleDivs}>View Solution</Typography>
                                                    </Box>
                                                    <Typography>
                                                        Click here to see the answer
                                                    </Typography>
                                                </Grid>
                                            }

                                        </Grid>
                                    </Grid>

                                    {/* question solution here */}
                                    {this.state.showDiv1 &&
                                        <Grid  style={{ marginTop: "1%" }}>
                                            <Typography>Solution</Typography>
                                            <Divider style={{ border: '0.1px solid black' }}></Divider>
                                            <Box style={{ marginTop: "2%",marginBottom:"1%", height: "100%", width: "100%" }}>
                                                <img src={Bodamas} />
                                            </Box>
                                            {/* solution txt here  */}
                                            <Grid style={{ border: "1px solid lightgray", padding: "15px" }}>
                                                <Box style={{  }}>
                                                    <Typography>Given equation I: 55 + 42 – 36 × 20 ÷ 9 = 17 Now, </Typography>
                                                    <Typography>if '20 and 36' are interchanged,then: </Typography>
                                                    <Typography>= 55 + 42 – 20 ×36 ÷ 9 = 17 </Typography>
                                                    <Typography>=55 + 42 –20  × 4 = 17 </Typography>
                                                    <Typography> =55 + 42 -80 = 17</Typography>
                                                    <Typography>=97-80 =17 </Typography>
                                                    <Typography> =17=17</Typography>
                                                    <Typography> <strong>LHS =RHS</strong> </Typography>
                                                </Box>
                                                <Box style={{ marginTop: "2%", marginBottom: "2%" }}>

                                                    <Typography>Given equation II: 20 ÷ 2 × 36 + 81 – 41 = 400  </Typography>
                                                    <Typography> Now, if '20 and 36' are interchanged, then:  </Typography>
                                                    <Typography>= 36 ÷ 2 × 20 + 81 – 41 = 400  </Typography>
                                                    <Typography> = 18 × 20 + 81 – 41 = 400  </Typography>
                                                    <Typography>  = 360 + 81 – 41 = 400 </Typography>
                                                    <Typography>= 441 – 41 = 400 </Typography>
                                                    <Typography> = 400 = 400</Typography>
                                                    <Typography><strong>LHS =RHS .</strong> </Typography>
                                                </Box>






                                                <Typography> Here, Both I and II are correct equation after interchanging the given symbol. </Typography>

                                                <Typography>Hence, the correct answer is <strong>"Option 3"</strong>.</Typography>

                                            </Grid>

                                            <Grid style={{ display: "flex", gap: "10px", marginTop: "2%" }}>
                                                <Typography>Was the solution helpful?</Typography>
                                                <button className='thumb'><img src={Thumbup} style={{ marginRight: "8px" }} />Yes</button>
                                                <button className='thumb'><img src={ThumbDown} style={{ marginRight: "8px" }} />No</button>
                                            </Grid>
                                        </Grid>}

                                        </Grid>
                                        {/* prev and next button here */}

                                    <Grid style={{ border:"1px solid gray ",padding:"6px",borderRadius:"7px",paddingLeft: "10px", display: "flex", justifyContent: "space-between",marginTop:"2%", alignItems: "center", width: "100%" }}>
                                        <button className='prev-btn c-btn'>Previous</button>
                                        <Box style={{display:"flex",alignItems:"center",gap:"8px"}}>
                                        Re-attempted Questions
                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }}   onClick={this.toggleAttempt} />
                                        </Box>
                                        <button className='next-btn c-btn'>Next</button>
                                    </Grid>

                                </TabPanel>

                                {/* english comprehension */}

                                <TabPanel >
                                    {/* question tab here */}
                                    <Grid style={{ display: "flex", padding: "12px 3px", borderBottom: "2px solid lightgray", marginBottom: "1%" }}>
                                        <Typography style={{ borderRight: "2px solid gray", paddingRight: "3px", color: "black" }}>Question no. 1</Typography>
                                        <Box style={{ borderRight: "2px solid gray", display: "flex", gap: "7px", padding: "0px 8px", alignItems: "center", justifyContent: "center" }}>
                                            <button className='skip-btn'>Skipped</button>
                                            <img src={OntimeNotcorrect} />
                                            <Box style={{ gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                <Typography>You:</Typography>
                                                <Typography style={{ color: "gray" }}>00:28</Typography>
                                            </Box>
                                            <Box style={{ gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                <Typography>Avg:</Typography>
                                                <Typography style={{ color: "gray" }}>00:43</Typography>
                                            </Box>
                                        </Box>

                                        <Box style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0px 12px" }}>
                                            <Typography>Marks</Typography>
                                            <button className='skip-btn'>Skipped</button>
                                            <Button variant='container' className='ansCorrect' style={{}}>30% answered correctly</Button>
                                            <Box style={{ gap: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <img src={Bookmark} />
                                                <Typography>Save</Typography>
                                            </Box>
                                            <Box style={{ gap: "8px", display: "flex" }}>
                                                <WarningIcon
                                                    style={{
                                                        color: '#72717D',
                                                        borderRadius: '2px',
                                                        fontWeight: '400',
                                                    }}
                                                />
                                                <Typography>Report</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    {/* question tab solution here  */}
                                    <Grid className="solution-part">
                                    <Grid >

                                        <Grid>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                By interchanging the two numbers 20 and 36, which of the following equations will be correct?
                                            </Typography>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                I. 55 + 42 – 36 × 20 ÷ 9 = 17
                                            </Typography>
                                            <Typography style={{ fontWeight: '400', fontSize: '16px', fontFamily: 'Poppins' }}>
                                                II. 20 ÷ 2 × 36 + 81 – 41 = 400
                                            </Typography>


                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel
                                                        value="1"
                                                        control={<Radio />}
                                                        label="Only I"
                                                    />
                                                    <FormControlLabel
                                                        value="2"
                                                        control={<Radio />}
                                                        label="Only II"
                                                    />
                                                    <FormControlLabel
                                                        value="3"
                                                        control={<Radio />}
                                                        label="Both I & II"
                                                    />
                                                    <FormControlLabel
                                                        value="4"
                                                        control={<Radio />}
                                                        label="Neither I & II"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>

                                        <Grid>
                                            {/* reattempted tag here  */}


                                            {this.state.showAttempt ? <Grid style={{ border: '1px solid #FFB1A7', marginTop: "4%", textAlign: "left", background: "#FFEFED", width: "35%", padding: '5px 10px ', borderRadius: "4px" }}>
                                                <Typography style={{ fontSize: "16px" }}>
                                                    Re-attempt mode: <strong>OFF</strong>
                                                </Typography>
                                                <Typography style={{ fontSize: "16px" }}>
                                                    Now you can't attempt the question
                                                </Typography>
                                            </Grid> :
                                                <Grid style={{ border: '1px solid #FFB1A7', marginTop: "4%", textAlign: "left", background: "#FFEFED", width: "35%", padding: '5px 10px ', borderRadius: "4px" }}>
                                                    <Typography style={{ fontSize: "16px" }}>
                                                        Re-attempt mode: <strong>ON</strong>
                                                    </Typography>
                                                    <Typography style={{ fontSize: "16px" }}>
                                                        Now you can Re-attempt the question
                                                    </Typography>
                                                </Grid>
                                            }


                                            {/* view solution button here */}

                                            {this.state.showDiv1 ? <Grid onClick={this.toggleDivs} style={{ marginTop: "2%", display: "flex", alignItems: "center", gap: "10px" }}>
                                                <Box style={{ cursor: "pointer", border: "1px solid gray", borderRadius: "5px", padding: "7px", gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                    <img src={Eye} />
                                                    <Typography onClick={this.toggleDivs}>Hide Solution</Typography>
                                                </Box>
                                                <Typography>
                                                    Click here to see the answer
                                                </Typography>
                                            </Grid> :
                                                <Grid onClick={this.toggleDivs} style={{ marginTop: "2%", display: "flex", alignItems: "center", gap: "10px" }}>
                                                    <Box style={{ cursor: "pointer", border: "1px solid gray", borderRadius: "5px", padding: "7px", gap: "8px", display: "flex", textAlign: "center", justifyContent: "center" }}>
                                                        <img src={Eye} />
                                                        <Typography onClick={this.toggleDivs}>View Solution</Typography>
                                                    </Box>
                                                    <Typography>
                                                        Click here to see the answer
                                                    </Typography>
                                                </Grid>
                                            }

                                        </Grid>
                                    </Grid>

                                    {/* question solution here */}
                                    {this.state.showDiv1 &&
                                        <Grid  style={{ marginTop: "1%" }}>
                                            <Typography>Solution</Typography>
                                            <Divider style={{ border: '0.1px solid black' }}></Divider>
                                            <Box style={{ marginTop: "2%",marginBottom:"1%", height: "100%", width: "100%" }}>
                                                <img src={Bodamas} />
                                            </Box>
                                            {/* solution txt here  */}
                                            <Grid style={{ border: "1px solid lightgray", padding: "15px" }}>
                                                <Box style={{  }}>
                                                    <Typography>Given equation I: 55 + 42 – 36 × 20 ÷ 9 = 17 Now, </Typography>
                                                    <Typography>if '20 and 36' are interchanged,then: </Typography>
                                                    <Typography>= 55 + 42 – 20 ×36 ÷ 9 = 17 </Typography>
                                                    <Typography>=55 + 42 –20  × 4 = 17 </Typography>
                                                    <Typography> =55 + 42 -80 = 17</Typography>
                                                    <Typography>=97-80 =17 </Typography>
                                                    <Typography> =17=17</Typography>
                                                    <Typography> <strong>LHS =RHS</strong> </Typography>
                                                </Box>
                                                <Box style={{ marginTop: "2%", marginBottom: "2%" }}>

                                                    <Typography>Given equation II: 20 ÷ 2 × 36 + 81 – 41 = 400  </Typography>
                                                    <Typography> Now, if '20 and 36' are interchanged, then:  </Typography>
                                                    <Typography>= 36 ÷ 2 × 20 + 81 – 41 = 400  </Typography>
                                                    <Typography> = 18 × 20 + 81 – 41 = 400  </Typography>
                                                    <Typography>  = 360 + 81 – 41 = 400 </Typography>
                                                    <Typography>= 441 – 41 = 400 </Typography>
                                                    <Typography> = 400 = 400</Typography>
                                                    <Typography><strong>LHS =RHS .</strong> </Typography>
                                                </Box>






                                                <Typography> Here, Both I and II are correct equation after interchanging the given symbol. </Typography>

                                                <Typography>Hence, the correct answer is <strong>"Option 3"</strong>.</Typography>

                                            </Grid>

                                            <Grid style={{ display: "flex", gap: "10px", marginTop: "2%" }}>
                                                <Typography>Was the solution helpful?</Typography>
                                                <button className='thumb'><img src={Thumbup} style={{ marginRight: "8px" }} />Yes</button>
                                                <button className='thumb'><img src={ThumbDown} style={{ marginRight: "8px" }} />No</button>
                                            </Grid>
                                        </Grid>}

                                        </Grid>
                                        {/* prev and next button here */}

                                    <Grid style={{ border:"1px solid gray ",padding:"6px",borderRadius:"7px",paddingLeft: "10px", display: "flex", justifyContent: "space-between",marginTop:"2%", alignItems: "center", width: "100%" }}>
                                        <button className='prev-btn c-btn'>Previous</button>
                                        <Box style={{display:"flex",alignItems:"center",gap:"8px"}}>
                                        Re-attempted Questions
                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }}   onClick={this.toggleAttempt} />
                                        </Box>
                                        <button className='next-btn c-btn'>Next</button>
                                    </Grid>

                                </TabPanel>
                            </Tabs>
                        </Grid>





                    </Grid>

                    {/* Right Portion */}
                    <Grid
                        mt={10}
                        item
                        xs={3.5}
                        style={{ position: 'relative', backgroundColor: '#F3F2FF' }}
                    >
                        <Grid style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0px 20px"}}>
                        <Grid
                            display={'flex'}
                            style={{ alignItems: 'center', marginTop: '3%' }}
                        >
                            <img style={{ borderRadius: "48px" }} src={RetestPofile} alt="Profile" />
                            <Typography style={{ marginLeft: '3%', fontFamily: 'Poppins' ,whiteSpace:"nowrap"}}>Dalai Lama</Typography>
                        </Grid>
                        <Grid style={{gap:"10px",display:"flex"}}>
                            <img src={Filterico}/>
                             Filter
                        </Grid>
                        </Grid>

                        <Grid
                            display={'flex'}
                            style={{
                                alignItems: 'center',
                                marginTop: '7%',
                                justifyContent: 'space-between',
                                marginLeft: '5%',
                                marginRight: '4%',
                                fontFamily: 'Poppins',
                            }}
                        >
                            <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography
                                    style={{

                                        backgroundColor: '#008000',
                                        textAlign: 'center',
                                        borderRadius: '14px',
                                        padding: '6px 18px',
                                        color: '#fff',
                                        fontFamily: 'Poppins',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    2
                                </Typography>
                                <Typography style={{ fontSize: '12px', fontFamily: 'Poppins', margin: '3px 0px 0px 3px' }}>Correct</Typography>
                            </Grid>


                            <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography
                                    style={{
                                        width: '35px',
                                        border: '1px solid black',
                                        textAlign: 'center',
                                        padding: '6px 24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    2
                                </Typography>
                                <Typography style={{ fontSize: '12px', fontFamily: 'Poppins', margin: '3px 0px 0px 3px' }}>Unattempted</Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            display={'flex'}
                            style={{
                                alignItems: 'center',
                                marginTop: '7%',
                                justifyContent: 'space-between',
                                marginLeft: '5%',
                                marginRight: '4%',
                            }}
                        >
                            <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography
                                    style={{
                                        // padding: '8px 10px',
                                        // backgroundColor: '#C80303',
                                        // textAlign: 'center',
                                        // borderRadius: '14px',
                                        // display: 'flex',
                                        // justifyContent:'center',
                                        // alignItems: 'center',
                                        // color: '#FFFFFF'

                                        backgroundColor: '#C80303',
                                        textAlign: 'center',
                                        borderRadius: '14px',
                                        padding: '6px 18px',
                                        color: '#FFFFFF',
                                        fontFamily: 'Poppins',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >

                                    2


                                </Typography>
                                <Typography style={{ fontSize: '12px', fontFamily: 'Poppins', margin: '3px 0px 0px 3px' }}>
                                    Incorrect
                                </Typography>
                            </Grid>
                            <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography
                                    style={{
                                        padding: '6px 18px',
                                        backgroundColor: '#D89323',
                                        textAlign: 'center',
                                        borderRadius: '14px',

                                        color: '#FFFFFF',
                                    }}
                                >
                                    2
                                </Typography>
                                <Typography style={{ fontSize: '12px', fontFamily: 'Poppins', margin: '3px 0px 0px 3px' }}>Partially Correct</Typography>
                            </Grid>
                        </Grid>

                        <Divider style={{ border: '0.1px solid black', marginTop: '2%' }}></Divider>

                        {/* speed indicator here */}
                        <Grid>
                            <Typography style={{ padding: "12px" }}> Speed Indicator</Typography>
                            <Grid style={{ display: "flex", justifyContent: "space-around", paddingBottom: "7px" }}>
                                <Box style={{ textAlign: "center" }}>
                                    <img src={Superfast} />
                                    <Typography style={{ fontSize: "10px" }}>Superfast</Typography>
                                </Box>
                                <Box style={{ textAlign: "center" }}>
                                    <img src={Ontime} />
                                    <Typography style={{ fontSize: "10px" }}>On Time</Typography>
                                </Box>
                                <Box style={{ textAlign: "center" }}>
                                    <img src={Slow} />
                                    <Typography style={{ fontSize: "10px" }}>Slow</Typography>
                                </Box>
                                <Box style={{ textAlign: "center" }}>
                                    <img src={OntimeNotcorrect} />
                                    <Typography style={{ fontSize: "10px" }}>On time but not correct</Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Divider style={{ border: '0.1px solid black' }}></Divider>


                        {/* section english comp.. */}
                        <Grid container style={{ backgroundColor: 'white', marginTop: '5%' }}>
                            <Grid container>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={9.6}>
                                    <Typography style={{ marginTop: "2%", padding: "7px", color: '#141226', fontSize: '18px', fontWeight: '400', backgroundColor: '#A8A2DD', fontFamily: 'Poppins' }}>
                                        <strong>Sections:</strong> English Comprehension
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container display={'flex'} justifyContent={'center'} style={{}}>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={11}>
                                    <Grid container style={{ marginTop: '1%' }} spacing={0.5}>
                                        {qnnum.map((item, index) => {
                                            return (
                                                <Grid key={index} item xs={2.1} style={{ backgroundColor: '#fff' }}>
                                                    <Typography className='' style={{ border: '1px solid black', textAlign: 'center', display: 'flex', width: '60.8px', padding: '8px 16px', border: '1px solid #3E3D4D', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                        {item.q1}
                                                    </Typography>

                                                </Grid>

                                            );
                                        })}
                                        {/* <Button sx={{ width: '16.8px', borderRadius: '24px', border: '1px solid #6257CD', backgroundColor: "#008000", padding: '8px 16px', display: 'flex', alignItems: 'center', flexDirection: "column", justifyContent: 'center' }}><Typography sx={{ color: '#FFF', textAlign: 'center', fontFamily: 'poppins', fontSize: '12px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>1</Typography></Button> */}

                                        <Grid item xs={0.5}></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={0.5}></Grid>
                            </Grid>
                        </Grid>

                        {/* right button part  */}
                        <Grid container style={{ marginTop: '7%', display: "flex", justifyContent: "space-between", padding: "4px 14px" }}>

                        <Link to="/questionpaper">
                            <Button variant="contained" size="small" style={{ fontWeight: "400", backgroundColor: '#9D94EB', color: "black", padding: '4px 8px', fontSize: '14px', lineHeight: '21px', whiteSpace: 'nowrap', height: '36px', fontFamily: 'Poppins' }}>
                                Question Paper
                            </Button>
                           </Link>

                            <a href="/submitsection" style={{textDecoration:"none"}}>
                            <Button variant="contained" size="small" style={{ fontWeight: "400", padding: '4px 8px', backgroundColor: '#9D94EB', color: "black", fontSize: '14px', lineHeight: '21px', fontFamily: 'Poppins', height: '36px' }}>
                                Summary
                            </Button>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>




            </Grid>
        )
    }
}

import React, { Component } from 'react'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import ola from "../../../images/ola.png";
import Rating from '@mui/material/Rating';
import { Grid, Card } from "@mui/material";
import "../../Instruction/Components/Testseriesnav.css";
import Frame from "../../../images/frame.png";
import Score from "../../../images/Score.png";
import Percentile1 from "../../../images/Percentile  (1).png";
import Percentile2 from "../../../images/Percentile  (2).png";
import Rank from "../../../images/Ellipse 237.png";
import Attempt from "../../../images/Attempt.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import Slider from '@mui/material/Slider';
import { styled } from "@mui/material/styles";
import Sectional from "../../../pages/Instruction/Components/sectional";
// import ChartQuestion from "../../../pages/Instruction/Components/chartQuestion";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';



const marks = [
    {
        value: 0,
        label: '-20',
    },
    {
        value: 10,
        label: '2',
    },
    {
        value: 20,
        label: '24',
    },
    {
        value: 30,
        label: '46',
    },
    {
        value: 40,
        label: '68',
    },
    {
        value: 50,
        label: '90',
    },
    {
        value: 60,
        label: '112',
    },
    {
        value: 70,
        label: '134',
    },
    {
        value: 80,
        label: '178',
    },
    {
        value: 90,
        label: '200',
    },
];


// function valuetext(value) {
//     return `${value}`;
// }





const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
    width: "200px",
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#72717d" : "#FBBC28",
    },
}));


export default class Testseriesnav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 10,
            update: 15,

            weakcarddata: [
                {
                    // number:"1",
                    // subject:"Analogy"
                    button: '1'

                },
                {
                    button: '2'

                },
                {
                    button: '3'

                },




            ],
            ratedata: [
                {
                    number: "1",
                    img: Rank,
                    name: 'Subhasmita',
                    score: "4000/5000"

                },
                {
                    number: "2",
                    img: Rank,
                    name: 'Subhasmita',
                    score: "4000/5000"

                },
                {
                    number: "3",
                    img: Rank,
                    name: 'Subhasmita',
                    score: "4000/5000"

                },




            ],
            weakchaptercarddata: [
                {
                    chapter: "Analogy",
                    correct: "correct",
                    correctpercentage: "10%",
                },
                {
                    chapter: "Series",
                    correct: "correct",
                    correctpercentage: "10%",
                },
                {
                    chapter: "Puzzle",
                    correct: "correct",
                    correctpercentage: "10%",
                },
            ],
            AVGchaptercarddata: [
                {
                    AVGchapter: "Non verbal Reasoning",
                    AVGcorrect: "correct",
                    AVGcorrectpercentage: "10%",
                },

            ],
            Unauthchaptercarddata: [
                {
                    Unauthchapter: "Non verbal Reasoning",
                    Unauthcorrect: "correct",
                    Unauthpercentage: "10%",
                },
                {
                    Unauthchapter: "Coding Decoding",
                    Unauthcorrect: "correct",
                    Unauthpercentage: "10%",
                },
                {
                    Unauthchapter: "Vocabulary",
                    Unauthcorrect: "correct",
                    Unauthpercentage: "10%",
                },
                {
                    Unauthchapter: "Non verbal Reasoning",
                    Unauthcorrect: "correct",
                    Unauthpercentage: "10%",
                },
                {
                    Unauthchapter: "Coding Decoding",
                    Unauthcorrect: "correct",
                    Unauthpercentage: "10%",
                },
                {
                    Unauthchapter: "Vocabulary",
                    Unauthcorrect: "correct",
                    Unauthpercentage: "10%",
                },
                {
                    Unauthchapter: "Non verbal Reasoning",
                    Unauthcorrect: "correct",
                    Unauthpercentage: "10%",
                },
                {
                    Unauthchapter: "Coding Decoding",
                    Unauthcorrect: "correct",
                    Unauthpercentage: "10%",
                },
                {
                    Unauthchapter: "Vocabulary",
                    Unauthcorrect: "correct",
                    Unauthpercentage: "10%",
                },
            ],



            comparedata: [
                {
                    toppr: " You",
                    comparescore: "-0.5/50",
                    compareaccuracy: "18.18%",
                    comparecorrect: "2 / 100",
                    comparewrong: "04:30/60 min",
                    comparetime: "01:24 / 60 mins"
                },
                {
                    toppr: " Topper",
                    comparescore: "5/50",
                    compareaccuracy: "2/25",
                    comparecorrect: "0%",
                    comparewrong: "04:30/60 min",
                    comparetime: "01:24 / 60 mins"
                },
                {
                    toppr: " Avg",
                    comparescore: "5/50",
                    compareaccuracy: "2/25",
                    comparecorrect: "0%",
                    comparewrong: "04:30/60 min",
                    comparetime: "01:24 / 60 mins"
                },


            ],

            generaldata: [
                {
                    generaltoppr: " You",
                    generalscore: "-0.5/50",
                    generalaccuracy: "18.18%",
                    generalcorrect: "2 / 100",
                    generalwrong: "04:30/60 min",
                    generaltime: "01:24 / 60 mins"
                },
                {
                    generaltoppr: " Topper",
                    generalscore: "-0.5/50",
                    generalaccuracy: "18.18%",
                    generalcorrect: "2 / 100",
                    generalwrong: "04:30/60 min",
                    generaltime: "01:24 / 60 mins"
                },
                {
                    generaltoppr: " Avg",
                    generalscore: "-0.5/50",
                    generalaccuracy: "18.18%",
                    generalcorrect: "2 / 100",
                    generalwrong: "04:30/60 min",
                    generaltime: "01:24 / 60 mins"
                },


            ],

            awarnessdata: [
                {
                    awarnesstoppr: " You",
                    awarnessscore: "-0.5/50",
                    awarnessaccuracy: "18.18%",
                    awarnesscorrect: "2 / 100",
                    awarnesswrong: "04:30/60 min",
                    awarnesstime: "01:24 / 60 mins"
                },
                {
                    awarnesstoppr: " Topper",
                    awarnessscore: "5/50",
                    awarnessaccuracy: "20/25",
                    awarnesscorrect: "0%",
                    awarnesswrong: "04:30/60 min",
                    awarnesstime: "01:24 / 60 mins"
                },
                {
                    awarnesstoppr: " Avg",
                    awarnessscore: "5/50",
                    awarnessaccuracy: "2/25",
                    awarnesscorrect: "0%",
                    awarnesswrong: "04:30/60 min",
                    awarnesstime: "01:24 / 60 mins"
                },


            ],

            quantativedata: [
                {
                    quantativetoppr: " You",
                    quantativescore: "-0.5/50",
                    quantativeaccuracy: "18.18%",
                    quantativecorrect: "0 / 100",
                    quantativewrong: "04:30/60 min",
                    quantativetime: "01:24 / 60 mins"
                },
                {
                    quantativetoppr: " Topper",
                    quantativescore: "5/50",
                    quantativeaccuracy: "2/25",
                    quantativecorrect: "0%",
                    quantativewrong: "04:30/60 min",
                    quantativetime: "01:24 / 60 mins"
                },
                {
                    quantativetoppr: " Avg",
                    quantativescore: "5/50",
                    quantativeaccuracy: "2/25",
                    quantativecorrect: "0%",
                    quantativewrong: "04:30/60 min",
                    quantativetime: "01:24 / 60 mins"
                },


            ],

            englishdata: [
                {
                    englishtoppr: " You",
                    englishscore: "-0.5/50",
                    englishaccuracy: "18.18%",
                    englishcorrect: "2 / 100",
                    englishwrong: "04:30/60 min",
                    englishtime: "01:24 / 60 mins"
                },
                {
                    englishtoppr: " Topper",
                    englishscore: "7/50",
                    englishaccuracy: "2/25",
                    englishcorrect: "0%",
                    englishwrong: "04:30/60 min",
                    englishtime: "01:24 / 60 mins"
                },
                {
                    englishtoppr: " Avg",
                    englishscore: "5/50",
                    englishaccuracy: "2/25",
                    englishcorrect: "0%",
                    englishwrong: "04:30/60 min",
                    englishtime: "01:24 / 60 mins"
                },


            ]

        };

        this.chartSetting = {
            yAxis: [
                {
                    // label: 'rainfall (mm)',
                    tickCount: 5,
                },
            ],
            width: 800,
            height: 500,
            sx: {
                [`.${axisClasses.left} .${axisClasses.label}`]: {
                    transform: 'rotate(-90deg) translate(0px, -20px)',
                },
            },
        };

        this.dataset = [
            {
                Incorrect: 29,
                Correct: 57,
                Skipped: 86,
                subject: "General Intell..and Reasoning'",
            },
            {
                Incorrect: 59,
                Correct: 60,
                Skipped: 105,

                subject: 'General Awareness',
            },
            {
                Incorrect: 65,
                Correct: 60,
                Skipped: 106,

                subject: 'Quantitative Aptitude',
            },
            {
                Incorrect: 47,
                Correct: 53,
                Skipped: 106,
                subject: 'English Comprehension',
            },
        ];

        this.valueFormatter = (value) => `${value}`;

    }


    valueLabelFormat = (value) => {
        const units = ['Rank '];
        let unitIndex = 0;
        let scaledValue = value;

        while (scaledValue >= 1024 && unitIndex < units.length - 1) {
            unitIndex += 1;
            scaledValue /= 1015;
        }

        return `   ${units[unitIndex]} ${scaledValue} `;
    };

    calculateValue = (value) => {
        return 2 ** value;
    };

    handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            this.setState({ value: newValue });
        }

        this.setState({ update: this.state.value });
    };


    render() {
        const { value, update } = this.state;
        // const colorScheme = ['#FF5733', '#42A5F5', '#090909'];
        return (
            <>

                {/* navbar here */}

                <AppBar position="static" style={{ backgroundColor: "white", width: "100%", height: "120px", boxShadow: "none" }}>
                    <Toolbar style={{ marginTop: "30px", }}>


                        <Grid style={{ display: "flex", flexDirection: "row", width: "30%", justifyContent: "space-between", marginLeft: "3%", }}>
                            <Grid>
                                <img src={ola} style={{ width: "184px", }} />
                            </Grid>
                            <Grid>
                                <Typography style={{ color: "black", marginLeft: "5%", fontSize: "24px", fontWeight: 600, width: 350, marginTop: "6px" }}>
                                    SSC CGL: Full Test 1
                                </Typography>
                            </Grid>
                        </Grid>




                        <Grid style={{ display: "flex", flexDirection: "row", width: "65%", justifyContent: "space-evenly" }}>
                            <Grid style={{ marginLeft: "300px", }}>
                                <Box style={{

                                    width: "230px", height: "32px", backgroundColor: "#8E8D9780", borderRadius: "4px",
                                }}>




                                    <Grid style={{ display: "flex", flexDirection: "row"}}>

                                        <Typography style={{ color: "black", fontSize: "16px", fontWeight: 600, marginTop: "6px" }}>
                                            Rate the Test
                                        </Typography>

                                        <Rating className='rating' defaultValue={.5} style={{ color: "#faaf00", marginTop: "6px" }} />


                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid>
                            <a href='/testsection2' style={{textDecoration:"none"}}>
                                    <Button variant="text" style={{ color: "#6257CD", fontSize: "16px", width: "120px", marginTop: "4px" }}>

                                        Go To Test
                                    </Button>
                                </a>
                            </Grid>
                            <Grid>
                                <Typography style={{ color: "black", fontSize: "16px", marginTop: "4px" }}>
                                    or

                                </Typography>
                            </Grid>
                            <Grid>
                                <Button variant="outlined" style={{ color: "#6257CD", borderColor: "#6257CD", height: "32px" }}>

                                    Solution
                                </Button>
                            </Grid>
                            <Grid>

                                <img src={Frame} style={{ width: "40px", height: "40px" }} />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                {/* banner part here */}

                <Card style={{ height: "20vh", width: "100%", backgroundColor: "#E4FDEF", boxShadow: "none" }}>
                    <center>

                        <Card style={{
                            width: "659px", marginTop: "30px", border: "none", paddingBottom: "20px",

                            borderRadius: "4px", boxShadow: "0px 8px 8px 0px #6257CD", border: "1px solid var(--primary-color-primarycolor-primary-color-600, #6257CD)",
                            background: "var(--BACKGROUND-COLOR-2, #EEECFE)"
                        }}>
                            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "2%", marginRight: "2%", marginTop: "3%" }}>

                                <Grid style={{}}>
                                    <Typography>
                                        Reflect on your past errors and use them as <br />
                                        opportunities to enhance your future performance.
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <a href='/testsection2' style={{textDecoration:"none"}}>
                                    <button variant="contained" className='Reattempt' >

                                        Reattempt Test
                                    </button>
                                    </a>
                                </Grid>
                            </Grid>
                        </Card>
                    </center>
                </Card>

                {/* overall performance here */}

                <Grid>
                    <Grid style={{ marginTop: "7%", marginLeft: "5%" }}>
                        <Typography className='Overall-Performance'>
                            Overall Performance Summary
                        </Typography>
                    </Grid>


                    <Card style={{ height: "20vh", marginTop: "2%", width: "90%", backgroundColor: "#F9F9F9", boxShadow: "none", marginLeft: "5%", marginRight: "5%" }}>




                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "5%", marginRight: "5%", marginTop: "3%" }}>


                            <Grid style={{ display: "flex", flexDirection: "row", width: "10%", justifyContent: "space-between", }}>
                                <Grid>
                                    <img src={Rank} style={{ width: "50px", height: "50px" }} />
                                </Grid>
                                <Grid style={{ marginLeft: "15px" }}>
                                    <Typography className='Rank1'>
                                        4567/5000
                                    </Typography>
                                    <Typography className='Rank'>
                                        Rank
                                    </Typography>


                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row", width: "10%", justifyContent: "space-between", }}>
                                <Grid>
                                    <img src={Attempt} style={{ width: "50px", height: "50px" }} />
                                </Grid>
                                <Grid style={{ marginLeft: "15px" }}>
                                    <Typography className='Rank1'>
                                        4/100
                                    </Typography>
                                    <Typography className='Rank'>
                                        Rank
                                    </Typography>


                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row", width: "10%", justifyContent: "space-between", }}>
                                <Grid>
                                    <img src={Score} style={{ width: "50px", height: "50px" }} />
                                </Grid>
                                <Grid style={{ marginLeft: "15px" }}>
                                    <Typography className='Rank1'>
                                        4567/5000
                                    </Typography>
                                    <Typography className='Rank'>
                                        Rank
                                    </Typography>


                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row", width: "10%", justifyContent: "space-between", }}>
                                <Grid>
                                    <img src={Percentile1} style={{ width: "50px", height: "50px" }} />
                                </Grid>
                                <Grid style={{ marginLeft: "15px" }}>
                                    <Typography className='Rank1'>
                                        5%
                                    </Typography>
                                    <Typography className='Rank'>
                                        Rank
                                    </Typography>


                                </Grid>
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row", width: "10%", justifyContent: "space-between", }}>
                                <Grid>
                                    <img src={Percentile2} style={{ width: "50px", height: "50px" }} />
                                </Grid>
                                <Grid style={{ marginLeft: "15px" }}>
                                    <Typography className='Rank1'>
                                        10%
                                    </Typography>
                                    <Typography className='Rank'>
                                        Rank
                                    </Typography>


                                </Grid>
                            </Grid>

                        </Grid>
                    </Card>
                </Grid>

                {/* //add a section here */}

                <Sectional />


                {/* your weakness and strengths here */}

                <Grid className="weakkk" style={{}}>

                    {/* left part here */}
                    <Grid className='leftp' >
                        <Typography className='Overall-Performance'>
                            Your Weakness and Strengths

                        </Typography>



                        <Tabs style={{ marginTop: "3%", marginLeft: "3%", width: "100%" }}>
                            <TabList className='weak'>
                                <Tab tab-tier active >Weak Chapters</Tab>
                                <Tab> Average Chapters</Tab>
                                <Tab> Uncategorized Chapters  </Tab>
                            </TabList>

                            <TabPanel >
                                <Grid className="d-tab">
                                    {this.state.weakchaptercarddata.map((item, index) => {
                                        return (
                                            <Card className='tabb' style={{ marginTop: "2%", marginLeft: "3%", border: " 1px solid var(--nuetrals-nuetrals-n-200, rgba(142, 141, 151, 0.50))", paddingBottom: "30px" }}>
                                                <Grid style={{ display: "flex", flexDirection: "row", marginTop: "3%", marginLeft: "8%", }}>

                                                    <Grid>
                                                        <Typography className='Overal-tab'>
                                                            {item.index}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid style={{ marginLeft: "15px" }}>
                                                        <Typography className='Overal-tab'>
                                                            {item.chapter}
                                                        </Typography>

                                                        <Grid
                                                            sx={{ flexGrow: 1 }}
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                columnGap: "18px",
                                                                justifyContent: "space-between",
                                                                paddingInlineStart: "0px",
                                                                marginBlock: "12px",
                                                                marginInline: "7px",
                                                            }}
                                                        >
                                                            <Typography className='Rank'>
                                                                {item.correct}
                                                            </Typography>
                                                            <BorderLinearProgress1 variant="determinate" value={10} />
                                                            {item.correctpercentage}


                                                            {this.state.weakcarddata.map((item) => {
                                                                return (
                                                                    <Box className="box-button">
                                                                        <Typography className='Overal-tab1'>
                                                                            {item.button}
                                                                        </Typography>
                                                                    </Box>
                                                                );
                                                            })}
                                                        </Grid>




                                                    </Grid>
                                                </Grid>




                                            </Card>
                                        )
                                    })}

                                </Grid>
                            </TabPanel>
                            <TabPanel >
                                <Grid className="d-tab">
                                    {this.state.AVGchaptercarddata.map((item, index) => {
                                        return (
                                            <Card className='tabb' style={{ marginTop: "2%", marginLeft: "3%", border: " 1px solid var(--nuetrals-nuetrals-n-200, rgba(142, 141, 151, 0.50))", paddingBottom: "30px" }}>
                                                <Grid style={{ display: "flex", flexDirection: "row", marginTop: "3%", marginLeft: "8%", }}>

                                                    <Grid>
                                                        <Typography className='Overal-tab'>
                                                            {item.index}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid style={{ marginLeft: "15px" }}>
                                                        <Typography className='Overal-tab'>
                                                            {item.AVGchapter}
                                                        </Typography>

                                                        <Grid
                                                            sx={{ flexGrow: 1 }}
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                columnGap: "18px",
                                                                justifyContent: "space-between",
                                                                paddingInlineStart: "0px",
                                                                marginBlock: "12px",
                                                                marginInline: "7px",
                                                            }}
                                                        >
                                                            <Typography className='Rank'>
                                                                {item.AVGcorrect}
                                                            </Typography>
                                                            <BorderLinearProgress1 variant="determinate" value={10} />
                                                            {item.AVGcorrectpercentage}


                                                            {this.state.weakcarddata.map((item) => {
                                                                return (
                                                                    <Box className="box-button">
                                                                        <Typography className='Overal-tab1'>
                                                                            {item.button}
                                                                        </Typography>
                                                                    </Box>
                                                                );
                                                            })}
                                                        </Grid>




                                                    </Grid>
                                                </Grid>




                                            </Card>
                                        )
                                    })}
                                </Grid>
                            </TabPanel>
                            <TabPanel>
                                <Grid className="d-tab">

                                    {this.state.Unauthchaptercarddata.map((item, index) => {
                                        return (
                                            <Card className='tabb' style={{ marginTop: "2%", marginLeft: "3%", border: " 1px solid var(--nuetrals-nuetrals-n-200, rgba(142, 141, 151, 0.50))", paddingBottom: "30px" }}>
                                                <Grid style={{ display: "flex", flexDirection: "row", marginTop: "3%", marginLeft: "8%", }}>

                                                    <Grid>
                                                        <Typography className='Overal-tab'>
                                                            {item.index}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid style={{ marginLeft: "15px" }}>
                                                        <Typography className='Overal-tab'>
                                                            {item.Unauthchapter}
                                                        </Typography>

                                                        <Grid
                                                            sx={{ flexGrow: 1 }}
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                columnGap: "18px",
                                                                justifyContent: "space-between",
                                                                paddingInlineStart: "0px",
                                                                marginBlock: "12px",
                                                                marginInline: "7px",
                                                            }}
                                                        >
                                                            <Typography className='Rank'>
                                                                {item.Unauthcorrect}
                                                            </Typography>
                                                            <BorderLinearProgress1 variant="determinate" value={10} />
                                                            {item.Unauthpercentage}


                                                            {this.state.weakcarddata.map((item) => {
                                                                return (
                                                                    <Box className="box-button">
                                                                        <Typography className='Overal-tab1'>
                                                                            {item.button}
                                                                        </Typography>
                                                                    </Box>
                                                                );
                                                            })}
                                                        </Grid>




                                                    </Grid>
                                                </Grid>




                                            </Card>
                                        )
                                    })}
                                </Grid>

                            </TabPanel>
                        </Tabs>

                        <Grid style={{ marginLeft: "6%", marginBottom: "3%", marginTop: "3%", borderRadius: "4px", border: "1px solid lightgray" }}>
                            <Box sx={{ width: 450, marginTop: '40px', padding: "20px", paddingRight: "10px" }}>
                                <Slider
                                    style={{ color: "#6257CD" }}
                                    value={this.state.value}
                                    step={10}
                                    scale={this.calculateValue}
                                    getAriaValueText={this.valueLabelFormat}
                                    valueLabelFormat={this.valueLabelFormat}
                                    onChange={this.handleChange}
                                    aria-label="Always visible"
                                    defaultValue={80}
                                    marks={marks}
                                    valueLabelDisplay="on"
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    {/* right part here */}

                    <Grid className='rightp'>
                        <Box style={{

                            width: "230px", height: "32px", backgroundColor: "#8E8D9780", borderRadius: "4px",
                        }}>




                            <Grid style={{ display: "flex", flexDirection: "row", }}>

                                <Typography style={{ color: "black", fontSize: "16px", fontWeight: 600, marginTop: "6px" }}>
                                    Rate the Test
                                </Typography>

                                <Rating className='rating' defaultValue={.5} style={{ color: "#faaf00", marginTop: "6px" }} />


                            </Grid>
                        </Box>



                        <Card style={{ width: "300px", marginTop: "20px", borderRadius: "16px", backgroundColor: "#F9F9F9", boxShadow: "none", paddingBottom: "30px" }}>

                            {this.state.ratedata.map((item) => {
                                return (
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "30px", }}>

                                        <Grid style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                            <Typography style={{ marginTop: "10px" }} className='Overal-tab'>
                                                {item.number}
                                            </Typography>

                                            <img src={item.img} style={{ width: "70px", height: "70px" }} />
                                        </Grid>
                                        <Grid style={{ marginLeft: "15px" }}>
                                            <Typography className='Rank1'>
                                                {item.name}
                                            </Typography>
                                            <Typography className='Rank'>
                                                {item.score}
                                            </Typography>


                                        </Grid>
                                    </Grid>

                                );
                            })}

                        </Card>
                    </Grid>

                </Grid>

                {/* compare with topper  */}


                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "3%", marginLeft: "5%", marginRight: "5%" }}>


                    <Grid style={{}}>
                        <Typography className='Overall-Performance'>
                            Compare With Topper
                        </Typography>



                        <Tabs style={{ marginTop: "3%", marginLeft: "2%", width: "100%" }}>
                            <TabList className='weak-second'>
                                <Tab tab-tier active >Overall</Tab>
                                <Tab> General intelligence and Reasoning</Tab>
                                <Tab> General Awareness  </Tab>
                                <Tab> Quantitative Aptitude </Tab>
                                <Tab> English Comprehension  </Tab>
                            </TabList>


                            <TabPanel>
                                <table style={{ width: "60%" }}>
                                    <tr style={{ background: "#8E8D9759" }}>
                                        <th className="section-table-headcell compare-cell"> </th>
                                        <th className="section-table-headcell compare-cell">Score</th>
                                        <th className="section-table-headcell compare-cell">Accuracy</th>
                                        <th className="section-table-headcell compare-cell">Correct</th>
                                        <th className="section-table-headcell compare-cell">Wrong</th>
                                        <th className="section-table-headcell compare-cell">Time</th>
                                    </tr>
                                    {this.state.comparedata.map((item, index) => {
                                        return (
                                            <tr >
                                                <td className="section-table-rowcell sec-part"> {item.toppr}</td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.comparescore}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.compareaccuracy}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.comparecorrect}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.comparewrong}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.comparetime}</div></td>

                                            </tr>
                                        );
                                    })}
                                </table>
                            </TabPanel>

                            <TabPanel>
                                <table style={{ width: "60%" }}>
                                    <tr style={{ background: "#8E8D9759" }}>
                                        <th className="section-table-headcell compare-cell"> </th>
                                        <th className="section-table-headcell compare-cell">Score</th>
                                        <th className="section-table-headcell compare-cell">Accuracy</th>
                                        <th className="section-table-headcell compare-cell">Correct</th>
                                        <th className="section-table-headcell compare-cell">Wrong</th>
                                        <th className="section-table-headcell compare-cell">Time</th>
                                    </tr>
                                    {this.state.generaldata.map((item, index) => {
                                        return (
                                            <tr >
                                                <td className="section-table-rowcell sec-part"> {item.generaltoppr}</td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.generalscore}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.generalaccuracy}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.generalcorrect}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.generalwrong}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.generaltime}</div></td>



                                            </tr>
                                        );
                                    })}
                                </table>
                            </TabPanel>

                            <TabPanel>
                                <table style={{ width: "60%" }}>
                                    <tr style={{ background: "#8E8D9759" }}>
                                        <th className="section-table-headcell compare-cell"> </th>
                                        <th className="section-table-headcell compare-cell">Score</th>
                                        <th className="section-table-headcell compare-cell">Accuracy</th>
                                        <th className="section-table-headcell compare-cell">Correct</th>
                                        <th className="section-table-headcell compare-cell">Wrong</th>
                                        <th className="section-table-headcell compare-cell">Time</th>
                                    </tr>
                                    {this.state.awarnessdata.map((item, index) => {
                                        return (
                                            <tr >
                                                <td className="section-table-rowcell sec-part"> {item.awarnesstoppr}</td>
                                                <td className="section-table-rowcell  progress-bar-container"> <div class="progress-bar" id="progress1">{item.awarnessscore} </div></td>
                                                <td className="section-table-rowcell  progress-bar-container"> <div class="progress-bar" id="progress1">{item.awarnessaccuracy} </div></td>
                                                <td className="section-table-rowcell  progress-bar-container"> <div class="progress-bar" id="progress1">{item.awarnesscorrect} </div></td>
                                                <td className="section-table-rowcell  progress-bar-container"> <div class="progress-bar" id="progress1">{item.awarnesswrong} </div></td>
                                                <td className="section-table-rowcell  progress-bar-container"> <div class="progress-bar" id="progress1">{item.awarnesstime} </div></td>



                                            </tr>
                                        );
                                    })}
                                </table>
                            </TabPanel>

                            <TabPanel>
                                <table style={{ width: "60%" }}>
                                    <tr style={{ background: "#8E8D9759" }}>
                                        <th className="section-table-headcell compare-cell"> </th>
                                        <th className="section-table-headcell compare-cell">Score</th>
                                        <th className="section-table-headcell compare-cell">Accuracy</th>
                                        <th className="section-table-headcell compare-cell">Correct</th>
                                        <th className="section-table-headcell compare-cell">Wrong</th>
                                        <th className="section-table-headcell compare-cell">Time</th>
                                    </tr>
                                    {this.state.quantativedata.map((item, index) => {
                                        return (
                                            <tr >
                                                <td className="section-table-rowcell"> {item.quantativetoppr}</td>
                                                <td className="section-table-rowcell progress-bar-container"><div class="progress-bar" id="progress1">{item.quantativescore}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"><div class="progress-bar" id="progress1">{item.quantativeaccuracy}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"><div class="progress-bar" id="progress1">{item.quantativecorrect}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"><div class="progress-bar" id="progress1">{item.quantativewrong}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"><div class="progress-bar" id="progress1">{item.quantativetime}</div></td>



                                            </tr>
                                        );
                                    })}
                                </table>
                            </TabPanel>


                            <TabPanel>
                                <table style={{ width: "60%" }}>
                                    <tr style={{ background: "#8E8D9759" }}>
                                        <th className="section-table-headcell compare-cell"> </th>
                                        <th className="section-table-headcell compare-cell">Score</th>
                                        <th className="section-table-headcell compare-cell">Accuracy</th>
                                        <th className="section-table-headcell compare-cell">Correct</th>
                                        <th className="section-table-headcell compare-cell">Wrong</th>
                                        <th className="section-table-headcell compare-cell">Time</th>
                                    </tr>
                                    {this.state.englishdata.map((item, index) => {
                                        return (
                                            <tr >
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1"> {item.englishtoppr}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.englishscore}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.englishaccuracy}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.englishcorrect}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.englishwrong}</div></td>
                                                <td className="section-table-rowcell progress-bar-container"> <div class="progress-bar" id="progress1">{item.englishtime}</div></td>



                                            </tr>
                                        );
                                    })}
                                </table>
                            </TabPanel>


                        </Tabs>
                    </Grid>



                </Grid>


                {/* chart  */}
                <Grid style={{ marginLeft: "6%", marginTop: "2%" }}>

                    <Typography className='Overall-Performance'>

                        Question Distribution
                    </Typography>

                    <BarChart
                        style={{}}
                        dataset={this.dataset}
                        xAxis={[{ scaleType: 'band', dataKey: 'subject' }]}
                        series={[
                            { dataKey: 'Incorrect', label: 'Incorrect', valueFormatter: this.valueFormatter },
                            { dataKey: 'Correct', label: 'Correct', valueFormatter: this.valueFormatter },
                            { dataKey: 'Skipped', label: 'Skipped', valueFormatter: this.valueFormatter },
                        ]}
                        {...this.chartSetting}
                    />
                </Grid>


            </>

        )
    }
}
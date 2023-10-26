import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Grid } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RetestPofile from "../../../images/retest-prof.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from '@mui/material/Button';
import '../../../pages/Instruction/Components/testsec.css';


export default class testsection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qnnum: [
                {
                    q1: "1",
                },
                {
                    q1: "2",
                },
                {
                    q1: "3",
                },
                {
                    q1: "4",
                },
                {
                    q1: "5",
                },
                {
                    q1: "6",
                },
                {
                    q1: "7",
                },
                {
                    q1: "8",
                },
                {
                    q1: "9",
                },
                {
                    q1: "10",
                },
                {
                    q1: "11",
                },
                {
                    q1: "12",
                },
                {
                    q1: "13",
                },
                {
                    q1: "14",
                },
                {
                    q1: "15",
                },
                {
                    q1: "16",
                },
                {
                    q1: "17",
                },
                {
                    q1: "18",
                },
                {
                    q1: "19",
                },
                {
                    q1: "20",
                },
                {
                    q1: "21",
                },
                {
                    q1: "22",
                },
                {
                    q1: "23",
                },
                {
                    q1: "24",
                },
                {
                    q1: "25",
                },
            ],
        };
    }
    componentDidMount() {
        // this.props.viewExamQuestion(this.props.Instruction.all_question_by_quiz);
        console.log("qqqqqqqqqqqq", this.props.Instruction.all_question_by_quiz)
    }
    render() {
        const { Instruction } = this.props
        return (
            <Grid style={{ width: "100%" }}>

                <Grid container display={"flex"}>
                    <Grid item xs={0.4}></Grid>

                    {/* Left Portion */}
                    <Grid mt={10} item xs={7.7}>
                        <Grid
                            display={"flex"}
                            style={{
                                height: "60px",
                                position: "relative",
                                backgroundColor: "#E2E1ED",
                            }}
                        >
                            <Typography
                                style={{
                                    marginTop: "2%",
                                    marginLeft: "0.5%",
                                    fontSize: "26px",
                                    fontWeight: "600",
                                    fontFamily: "Poppins",
                                }}
                                className="testsection"
                            >
                                SECTIONS
                            </Typography>
                            <Typography
                                style={{
                                    width: "80px",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    textAlign: "center",
                                    marginLeft: "8%",
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "24px",
                                    borderRadius: "6px",
                                    height: "30px",
                                    justifyContent: "center",
                                    marginTop: "2%",
                                }}
                            >
                                Test
                            </Typography>
                        </Grid>

                        <Grid
                            display={"flex"}
                            flexDirection={"row"}
                            style={{
                                justifyContent: "space-between",
                                marginTop: "1%",
                                gap: "2px",
                                marginBottom: "1%",
                            }}
                        >
                            <Typography
                                style={{
                                    marginTop: "4%",
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "20px",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Question No. 1
                            </Typography>

                            <Grid display={"flex"} style={{ gap: "11px", marginRight: "2%" }}>
                                <Typography
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                    }}
                                >
                                    Marks
                                </Typography>
                                <Typography
                                    style={{
                                        width: "50px",
                                        backgroundColor: "#27AE60",
                                        height: "25px",
                                        textAlign: "center",
                                        borderRadius: "5px",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                    }}
                                >
                                    +2
                                </Typography>
                                <Typography
                                    style={{
                                        width: "50px",
                                        backgroundColor: "#C0392B",
                                        height: "25px",
                                        textAlign: "center",
                                        borderRadius: "5px",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        fontFamily: "Poppins",
                                    }}
                                >
                                    -0.5
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                    }}
                                >
                                    Time
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                    }}
                                >
                                    00:19
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    view in
                                </Typography>
                                <select
                                    style={{
                                        height: "22px",
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                    }}
                                >
                                    <option value="English">English</option>
                                    <option value="English">Hindi</option>
                                </select>
                                <WarningIcon
                                    style={{
                                        color: "#72717D",
                                        borderRadius: "2px",
                                        fontWeight: "400",
                                    }}
                                />
                                <Typography
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                    }}
                                >
                                    Report
                                </Typography>
                            </Grid>
                        </Grid>

                        <Divider style={{ border: "0.1px solid black" }}></Divider>
                        {Array.isArray(Instruction.all_question_by_quiz) && Instruction.all_question_by_quiz.map((item, index) => {
                            console.log("questionsssssssss",Instruction.all_question_by_quiz)
                            return (
                                <Grid>
                                    <Typography style={{ fontWeight: "400", fontSize: "16px", fontFamily: "Poppins", }}>
                                        Select the correct option that indicates the arrangement of the
                                        given words in the order in which they appear in an English
                                        dictionary
                                        {/* {item.question_text} */}
                                    </Typography>
                                    {/* <Typography style={{ fontWeight: "400", fontSize: "16px", fontFamily: "Poppins", }}>
                                1.Petitionary
                            </Typography>
                            <Typography style={{ fontWeight: "400", fontSize: "16px", fontFamily: "Poppins", }}>
                                2.Petitioning
                            </Typography>
                            <Typography style={{ fontWeight: "400", fontSize: "16px", fontFamily: "Poppins", }}>
                                3.Petition
                            </Typography>
                            <Typography style={{ fontWeight: "400", fontSize: "16px", fontFamily: "Poppins", }}>
                                4.Petitioners
                            </Typography>
                            <Typography style={{ fontWeight: "400", fontSize: "16px", fontFamily: "Poppins", }}>
                                5.Petitioned
                            </Typography> */}

                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel
                                                value="1"
                                                control={<Radio />}
                                                label="3, 1, 4, 5, 2"
                                            />
                                            <FormControlLabel
                                                value="2"
                                                control={<Radio />}
                                                label="3, 1, 4, 5, 2"
                                            />
                                            <FormControlLabel
                                                value="3"
                                                control={<Radio />}
                                                label="4, 1, 2, 3, 5"
                                            />
                                            <FormControlLabel
                                                value="4"
                                                control={<Radio />}
                                                label="4, 1, 2, 3, 5"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            )
                        })}
                    </Grid>


                    {/* Right Portion */}
                    <Grid
                        mt={10}
                        item
                        xs={3.5}
                        style={{ position: "relative", backgroundColor: "#F3F2FF" }}
                    >
                        <Grid
                            display={"flex"}
                            style={{ alignItems: "center", marginLeft: "5%", marginTop: "4%" }}
                        >
                            <img src={RetestPofile} />
                            <Typography style={{ marginLeft: "3%", fontFamily: "Poppins" }}>Dalai Lama</Typography>
                        </Grid>

                        <Grid
                            display={"flex"}
                            style={{
                                alignItems: "center",
                                marginTop: "7%",
                                justifyContent: "space-between",
                                marginLeft: "5%",
                                marginRight: "4%",
                                fontFamily: "Poppins"
                            }}
                        >
                            <Grid style={{ display: "flex", flexDirection: "row" }}>
                                <Typography
                                    style={{
                                        width: "30px",
                                        backgroundColor: "#008000",
                                        textAlign: "center",
                                        borderRadius: "25px",
                                        height: "25px",
                                        color: "#fff",
                                        fontFamily: "Poppins"
                                    }}
                                >
                                    2
                                </Typography>
                                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>Answered</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row" }}>
                                <Typography
                                    style={{
                                        width: "30px",
                                        backgroundColor: "#6257CD",
                                        textAlign: "center",
                                        borderRadius: "25px",
                                        height: "25px",
                                        color: "#fff",
                                    }}
                                >
                                    2
                                </Typography>
                                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>Marked</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row" }}>
                                <Typography
                                    style={{
                                        width: "25px",
                                        border: "1px solid black",
                                        textAlign: "center",
                                        height: "25px",
                                    }}
                                >
                                    2
                                </Typography>
                                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>Not Visited</Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            display={"flex"}
                            style={{
                                alignItems: "center",
                                marginTop: "7%",
                                justifyContent: "space-between",
                                marginLeft: "5%",
                                marginRight: "4%",
                            }}
                        >
                            <Grid style={{ display: "flex", flexDirection: "row" }}>
                                <Typography
                                    style={{
                                        width: "35px",
                                        backgroundColor: "#6257CD",
                                        textAlign: "center",
                                        borderRadius: "25px",
                                        height: "25px",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography style={{ marginLeft: "15%", color: "#fff", fontFamily: "Poppins" }}>
                                        2
                                    </Typography>
                                    <CheckCircleIcon style={{ fontSize: "15px", color: "#fff" }} />
                                </Typography>
                                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>
                                    Marked & Answer
                                </Typography>
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row" }}>
                                <Typography
                                    style={{
                                        width: "30px",
                                        backgroundColor: "#C80303",
                                        textAlign: "center",
                                        borderRadius: "25px",
                                        height: "25px",
                                        color: "#fff",
                                    }}
                                >
                                    2
                                </Typography>
                                <Typography style={{ fontSize: "12px", fontFamily: "Poppins" }}>Not Answered</Typography>
                            </Grid>
                        </Grid>

                        <Divider
                            style={{ border: "0.1px solid black", marginTop: "2%" }}
                        ></Divider>

                        <Grid container style={{ backgroundColor: "", marginTop: "5%" }}>

                            <Grid container>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={9.6}>
                                    <Typography style={{ border: "1px solid black", backgroundColor: "#A8A2DD", fontFamily: "Poppins" }}><strong>Sections:</strong> English Comprehension</Typography>
                                </Grid>
                            </Grid>

                            <Grid container display={"flex"} justifyContent={"center"} style={{}}>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={11}>
                                    <Grid container style={{ marginTop: "1%" }} spacing={0.5}>

                                        {this.state.qnnum.map((item) => {
                                            return (
                                                <Grid item xs={2.1} style={{ backgroundColor: "#fff" }} >
                                                    <Typography style={{ border: "1px solid black", textAlign: "center" }}>
                                                        {item.q1}
                                                    </Typography>
                                                </Grid>
                                            );
                                        })}
                                        <Grid item xs={0.5}></Grid>

                                    </Grid>
                                </Grid>
                                <Grid item xs={.5}></Grid>
                            </Grid>
                        </Grid>

                        <Grid container style={{ marginTop: "7%" }}>
                            <Grid item xs={0.6}></Grid>
                            <a href="/questionpaper" style={{ textDecoration: "none" }}>
                                <Grid item xs={4} style={{ justifyContent: "space-between" }}>
                                    <Button variant="contained" size="small" style={{ backgroundColor: "#9D94EB", whiteSpace: "nowrap", height: "36px", fontFamily: "Poppins" }}>Question Paper</Button>
                                </Grid>
                            </a>
                            <Grid item xs={2.4}></Grid>
                            <a href="/instruction" style={{ textDecoration: "none" }}>
                                <Grid item xs={4}>
                                    <Button variant="contained" style={{ backgroundColor: "#9D94EB", width: "15px", fontFamily: "Poppins" }}>Instructions</Button>
                                </Grid>
                            </a>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </Grid>

                </Grid>



                <Grid container xs={12} style={{ marginTop: "4%", backgroundColor: "#F5F5F5", height: "50px", alignItems: "center" }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs>
                        <Button variant="outlined" size="medium">
                            <Typography style={{ color: "#000", fontFamily: "Poppins", fontSize: "14px" }}>Mark for Review & Next</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <Button variant="outlined" size="medium">
                            <Typography style={{ color: "#000", fontFamily: "Poppins", fontSize: "14px" }}>Clear Response</Typography>
                        </Button>
                    </Grid>

                    <Grid item xs>
                        <Button variant="contained" size="small" style={{ backgroundColor: "#3E30C2" }}>
                            <Typography style={{ color: "#000", fontFamily: "Poppins", fontSize: "14px" }}>Save & Next</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <a href="/submitsection" style={{ textDecoration: "none" }} >
                            <Button variant="contained" size="medium" style={{ backgroundColor: "#3E30C2" }}>
                                <Typography style={{ color: "#000", fontFamily: "Poppins", fontSize: "14px" }}>
                                    Submit Test
                                </Typography></Button>
                        </a>
                    </Grid>
                    <Grid item xs={0.4}></Grid>

                </Grid>
            </Grid>
        );
    }
}

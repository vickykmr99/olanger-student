import React, { Component } from 'react';
import { Grid, Typography, Button, Link } from '@mui/material'
import Divider from '@mui/material/Divider';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import examysai from "../../../images/examysai.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';


export default class ExamysaiGpt extends Component {
    state = {
        examysaidata: [
            {
                title: "CGL exam",


            },
            {
                title: "CHSL exam",

            },
            {
                title: " Multitasking (Non-Technical) exam",

            },
            {
                title: "Stenographers Grade 'C' & 'D' exam",


            },
            {
                title: "CPO exam",

            },
            {
                title: "JE exam",

            },
            {
                title: " Junior Hindi Translator exam",

            },
            {
                title: " GD exam",

            },
            {
                title: " JHT exam",

            },
            {
                title: " MTS exam",

            },

        ],
        railwayexamysaidata: [
            {
                title: "RRB Group D exam",


            },
            {
                title: "RRB NTPC exam",

            },
            {
                title: "RRB ALP exam",

            },
            {
                title: "RRB JE exam",


            },
            {
                title: "Goods Guard exam",

            },
            {
                title: "RPF constable exam",

            },
            {
                title: "Station Master exam",

            },
            {
                title: "Engineering sector exam",

            },
            {
                title: "Railway Services Grades exam",

            },
            {
                title: "RRB Ministerial and Isolated Categories exam",

            },
            {
                title: "RRB Paramedical exam",

            },
            {
                title: "RRB SSE exam",

            },
            {
                title: "Traffic Assistant exam",

            },

        ],
        bankingexamysaidata: [
            {
                title: "Civil Service Examinations exam",


            },
            {
                title: "Civil Service Fast Stream exam",

            },
            {
                title: "IBPS PO Exam",

            },
            {
                title: "IBPS Clerk Exam",


            },
            {
                title: "SBI PO Exam",

            },
            {
                title: "SBI Clerk Exam",

            },
            {
                title: "RBI Grade B Exam",

            },
            {
                title: "NABARD Grade A and Grade B Exam",

            },
            {
                title: "IBPS RRB Exam",

            },
            {
                title: "NICL AO Exam",

            },
            {
                title: "LIC AAO and ADO Exams",

            },
            {
                title: "UPSC Civil Services Examination",

            },

        ]
    };
    componentDidMount() {
        this.props.viewAllPackage(0, 18);
        this.props.viewAllCategory();
        console.log('packkkkkkkk', this.props.coursedetails.all_package)
    }
    render() {
        return (
            <>
                <Grid style={{ marginTop: "12%" }}>
                    <center >
                        <img src={examysai} style={{ width: "400px", height: "230px" }} />
                        <Typography style={{ fontSize: 16, fontWeight: 400, lineHeight: '24px', fontFamily: "Poppins", color: "#72717D", marginTop: "1%" }}>
                            Write a prompt to search Trend or predicted questions for any exam
                        </Typography>
                        <Paper
                            component="form"
                            style={{ display: "flex", width: "500px", height: "43px", marginTop: "1%", border: "1px solid rgba(142, 141, 151, 0.50)" }}
                        >
                            <IconButton
                                type="button"
                                style={{ p: "150px", color: "rgba(142, 141, 151, 0.50)" }}
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                style={{ ml: 5, flex: 1, fontSize: "15px", fontWeight: "700", color: "#8E8D97", fontFamily: "Poppins" }}
                                placeholder="trend questions for cgl exam"
                                inputProps={{ "aria-label": "trend questions for cgl exam" }}
                            />
                        </Paper>
                    </center>


                </Grid>

                {Array.isArray(this.props.testseries.test_series_category) &&
                    this.props.testseries.test_series_category.map((item, index) => {
                        return (
                            <Grid style={{ marginTop: "4%", marginLeft: "9%" }}>
                                <Typography style={{ fontSize: 18, fontWeight: 500, fontFamily: "Poppins", color: "#201E31" }}>
                                    {item.category_name}
                                </Typography>
                                <Grid container direction={'row'} spacing={2} style={{ margin: '1%' }}>
                                    {this.props.coursedetails.all_package.map((e) => (
                                        e.package_content.category.map((a) => {
                                            return (
                                                <>
                                                    {a.category_name === item.category_name &&
                                                        (Array.isArray(a.exam) && a.exam.map((examItem) => {
                                                            return (
                                                                <Grid item={4}>
                                                                    <a href='/ExamysaiGptdetailspage'>
                                                                        <Typography
                                                                            onClick={() => {
                                                                                this.props.setTestSeries(e);
                                                                                this.props.setTestSeriesId(e._id);
                                                                            }}
                                                                            style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#6C60E1" }}>
                                                                            {examItem.exam_name}
                                                                        </Typography>
                                                                    </a>
                                                                </Grid>
                                                            )
                                                        })
                                                        )}
                                                </>

                                            )
                                        }
                                        )
                                    ))}
                                </Grid>
                            </Grid >
                        );
                    })
                }
            </>
        )
    }
}

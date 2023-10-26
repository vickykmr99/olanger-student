import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import { Grid, Card } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
export default class Faq extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faqdata: [
                {

                    title: "What topics will this course cover?",
                    desc: "The course will cover a range of topics related to government exams, including general knowledge, current affairs, English language skills, reasoning, and mathematics."
                },
                // {

                //     title: "What topics will this course cover?",
                //     desc: "The course will cover a range of topics related to government exams, including general knowledge, current affairs, English language skills, reasoning, and mathematics."
                // },
                // {

                //     title: "What topics will this course cover?",
                //     desc: "The course will cover a range of topics related to government exams, including general knowledge, current affairs, English language skills, reasoning, and mathematics."
                // },
                // {

                //     title: "What topics will this course cover?",
                //     desc: "The course will cover a range of topics related to government exams, including general knowledge, current affairs, English language skills, reasoning, and mathematics."
                // },

            ]





        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            open: !prevState.open,
        }));
    };
    handleClicks = () => {
        this.setState(prevState => ({
            opens: !prevState.opens,
        }));
    };
    render() {
        const { open } = this.state;


        return (
            <>
                <Link to='/CourseviewDetail' style={{ textDecoration: "none" }} >
                    <ArrowBackIcon style={{ fontSize: "20px", color: "black", marginLeft: "7%", marginTop: "10%", fontWeight: 600 }} />
                </Link>
                <center>
                    <Typography style={{ fontWeight: "600", fontSize: "30px", marginTop: "30px" }}>
                        Frequently Asked Questions
                    </Typography>

                </center>




                {this.state.faqdata.map((faqdata) => (
                    <Card style={{
                        width: "70%", marginTop: "2%", marginLeft: "15%", borderRadius: "4px",
                        border: "1px solid var(--nuetrals-nuetrals-n-100, #FFF)", background: "#FFF",
                        boxShadow: "2px 2px 8px 0px rgba(86, 86, 86, 0.25)", paddingBottom: "15px",
                    }}>

                        <Grid onClick={this.handleClick} style={{ backgroundColor: "", display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "3%", marginRight: "3%" }}>
                            <Grid>

                                <Typography style={{ fontWeight: 400, fontSize: "15px", color: "#72717D", marginTop: "15px", }}>
                                    {faqdata.title}
                                </Typography>
                            </Grid>
                            <Grid>
                                {open ? <ExpandLess style={{ color: "black", marginTop: "15px", }} /> : <ExpandMore style={{ color: "black", marginTop: "15px", }} />}
                            </Grid>





                        </Grid>

                        {open &&

                            <Typography style={{ fontWeight: 400, fontSize: "16px", color: "#141226", marginLeft: "3%", marginRight: "3%" }}>

                                {faqdata.desc}
                                {open ? '' : ''}
                            </Typography>
                        }
                    </Card>
                ))}






                {/* Dear Redux Team,

Whoever is responsible for Redux on  CourseviewDetail page, paste the following 
code section into the appropriate location:(last section of CourseviewDetail page)
If there are any questions, please feel free to reach out to me directly....
Thank You...
HAPPY CODING 😊😊😊*/}


                <Typography style={{ marginLeft: "15%", fontWeight: 500, fontSize: "24px", color: "242121", fontFamily: "Poppins" }}>
                    Courses Supported by
                </Typography>

                <Grid style={{ marginTop: "2%", display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "17%", marginRight: "25%" }}>

                    <Link to='/Coursejourney'>
                        <Typography style={{ fontWeight: 500, fontSize: "16px", color: "#36C", fontFamily: "Poppins", textDecorationLine: "underline" }}>
                            “My Course Journey”
                        </Typography>
                    </Link>
                    <Link to=''>
                        <Typography style={{ fontWeight: 500, fontSize: "16px", color: "#36C", fontFamily: "Poppins" }}>
                            Team & Course design Story
                        </Typography>
                    </Link>
                    <Link to='/Examdetailnotification'>
                        <Typography style={{ fontWeight: 500, fontSize: "16px", color: "#36C", fontFamily: "Poppins" }}>
                            Chsl jobs, syllabus & patterns etc
                        </Typography>
                    </Link>
                    <Link to='/Faq'>
                        <Typography style={{ fontWeight: 500, fontSize: "16px", color: "#36C", fontFamily: "Poppins" }}>
                            FAQ
                        </Typography>
                    </Link>


                </Grid>


            </>
        )
    }
}

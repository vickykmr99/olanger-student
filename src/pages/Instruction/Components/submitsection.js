import React, { Component } from 'react'
import "../../Instruction/Components/submitsection.css";
import { Button, Grid, Typography, Card } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



export default class submitsection extends Component {
    constructor(props) {
        super(props);
        this.state = {


            submitdata: [
                {
                    section: "General Awareness",
                    noofquestions: "20",
                    Answered: "5",
                    NotAnswered: "4",
                    MarkedforReview: "7",
                    Notvisited: "4"

                },
                {
                    section: "General Awareness",
                    noofquestions: "20",
                    Answered: "5",
                    NotAnswered: "4",
                    MarkedforReview: "7",
                    Notvisited: "4"

                },
                {
                    section: "General Awareness",
                    noofquestions: "20",
                    Answered: "5",
                    NotAnswered: "4",
                    MarkedforReview: "7",
                    Notvisited: "4"

                },
                {
                    section: "General Awareness",
                    noofquestions: "20",
                    Answered: "5",
                    NotAnswered: "4",
                    MarkedforReview: "7",
                    Notvisited: "4"

                },
                {
                    section: "General Awareness",
                    noofquestions: "20",
                    Answered: "5",
                    NotAnswered: "4",
                    MarkedforReview: "7",
                    Notvisited: "4"

                },


            ],

        };
    }

    render() {
        return (
            <>
                <Card style={{ height:"100vh",width: "100%",backgroundColor:"black" }}>
                    <center>
                        <Card style={{ width: "75%", marginTop: "50px", border: "none", paddingBottom: "30px" }}>
                            <center>
                                <Typography style={{ marginTop: "50px", fontWeight: 600, fontSize: "18px" }}>Submit your test</Typography>

                            </center>
                            <center>

                                <Grid style={{ marginTop: "50px", }}>
                                    <TableContainer>
                                        <Table>
                                            <TableHead className="ss-th">
                                                <TableRow>
                                                    <TableCell align="Center">Section</TableCell>
                                                    <TableCell style={{ fontWeight: 600 }} align="Center">No. of questions</TableCell>
                                                    <TableCell style={{ fontWeight: 600 }} align="Center">Answered</TableCell>
                                                    <TableCell style={{ fontWeight: 600 }} align="Center">Not Answered</TableCell>
                                                    <TableCell style={{ fontWeight: 600 }} align="Center">Marked for Review</TableCell>
                                                    <TableCell style={{ fontWeight: 600 }} align="Center">Not visited</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody >
                                                {this.state.submitdata.map((item) => {

                                                    return (
                                                        <TableRow>

                                                            <TableCell align="Center">{item.section}</TableCell>
                                                            <TableCell align="Center">{item.noofquestions}</TableCell>
                                                            <TableCell align="Center">{item.Answered}</TableCell>
                                                            <TableCell align="Center">{item.NotAnswered}</TableCell>
                                                            <TableCell align="Center">{item.MarkedforReview}</TableCell>
                                                            <TableCell align="Center">{item.Notvisited}</TableCell>

                                                        </TableRow>
                                                    );
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </center>

                            <Grid className="ss-bm" >
                                <Button variant="contained" className="ssbtn">Close</Button>
                                <a href="/Testseriesnav">
                                <Button variant="contained" className="ssbtn">Submit</Button>
                                </a>
                            </Grid>
                        </Card>
                    </center>
                </Card>
            </>


        )
    }
}

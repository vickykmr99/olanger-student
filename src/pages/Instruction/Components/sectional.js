import { Typography, Grid, Box } from '@mui/material';
import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "../../../pages/Instruction/Components/sectional.css";


class overallper extends Component {



    constructor(props) {
        super(props);
        this.state = {

            sectionaldata: [
                {
                    sectionName: "General intelligence and Reasoning",
                    score: "5/50",
                    attempted: "2/25",
                    accuracy: "0%",
                    time: "04:30/60 min"
                },
                {
                    sectionName: "General Awareness",
                    score: "5/50",
                    attempted: "2/25",
                    accuracy: "0%",
                    time: "04:30/60 min"
                },
                {
                    sectionName: "Quantitative Aptitude",
                    score: "5/50",
                    attempted: "2/25",
                    accuracy: "0%",
                    time: "04:30/60 min"
                },
                {
                    sectionName: "English Comprehension",
                    score: "5/50",
                    attempted: "2/25",
                    accuracy: "0%",
                    time: "04:30/60 min"
                },
                {
                    sectionName: "Overall",
                    score: "5/50",
                    attempted: "2/25",
                    accuracy: "0%",
                    time: "04:30/60 min"
                },

            ]

        };
    }



    render() {
        return (
            <div>
                <div>
                    <Typography style={{
                        fontFamily: "Poppins",
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "36px",
                        letterSpacing: "0em",
                        marginLeft: "5%",
                        marginTop: "2%"
                    }}>Sectional Summary</Typography>
                    <Grid>
                        <Box>
                            <center>
                                <form style={{ gap: '10px' }}>
                                    <label>Estimate Cutoffs</label>

                                    <select style={{ marginLeft: "10px", outline: "none", color: "#6257CD", background: "none", border: "1px solid #6257CD", borderRadius: "2px", padding: '0px 6px ' }}>

                                        <option value="General">General</option>
                                        <option value="OBC">OBC</option>
                                        <option value="SC">SC</option>
                                        <option value="ST">ST</option>
                                        <option value="EWS">EWS</option>
                                    </select>

                                </form>
                            </center>

                        </Box>

                        <Box className="table-main-contain">
                            {/* <Table style={{border:"1px solid lightgray"}}>
                                <TableHead className="category-table-head">
                                    <TableRow  style={{borderLeft: 0,borderColor:"red"}}>
                                        <TableCell className="category-table-headcell">Section</TableCell>
                                        <TableCell className="category-table-headcell">Score</TableCell>
                                        <TableCell className="category-table-headcell">Attempted</TableCell>
                                        <TableCell className="category-table-headcell">Accuracy</TableCell>
                                        <TableCell className="category-table-headcell">Time</TableCell>

                                    </TableRow>
                                </TableHead>

                                <TableBody>


                                    {this.state.sectionaldata.map((item, index) => {
                                        return (
                                            <TableRow >
                                                <TableCell className="section-table-rowcell"> {item.sectionName}</TableCell>
                                                <TableCell className="section-table-rowcell">{item.score}</TableCell>
                                                <TableCell className="section-table-rowcell">{item.attempted}</TableCell>
                                                <TableCell className="section-table-rowcell">{item.accuracy}</TableCell>
                                                <TableCell className="section-table-rowcell">{item.time}</TableCell>

                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table> */}


                            <table style={{ width: "100%" }}>
                                <tr>
                                    <th className="section-table-headcell">Section</th>
                                    <th className="section-table-headcell">Score</th>
                                    <th className="section-table-headcell">Attempted</th>
                                    <th className="section-table-headcell">Accuracy</th>
                                    <th className="section-table-headcell">Time</th>
                                </tr>
                                {this.state.sectionaldata.map((item, index) => {
                                    return (
                                        <tr >
                                            <td className="section-table-rowcell sec-part"> {item.sectionName}
                                            </td>
                                            <td className="section-table-rowcell progress-bar-container">
 
                                                <div class="progress-bar" id="progress1">
                                                    {item.score}
                                                </div>


                                            </td>
                                            <td className="section-table-rowcell  progress-bar-container">
                                                <div class="progress-bar" id="progress1">
                                                    {item.attempted}</div>
                                            </td>
                                            <td className="section-table-rowcell  progress-bar-container">
                                                <div class="progress-bar" id="progress1">
                                                    {item.accuracy}</div>
                                            </td>
                                            <td className="section-table-rowcell  progress-bar-container">
                                                <div class="progress-bar" id="progress1">
                                                    {item.time}</div>
                                            </td>

                                        </tr>
                                    );
                                })}
                            </table>

                        </Box>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default overallper;
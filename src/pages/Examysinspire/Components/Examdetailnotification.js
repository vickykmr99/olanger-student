import React, { Component } from 'react';

import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Container,
    Typography,
    Grid,
} from "@mui/material"
// -----------------------import from material ui-------------------//

import "../../Examysinspire/examdetailnotify.css";











function createData(name, con) {
    return { name, con };
}

// function updateData(info, item) {
//     return {info, item };
// }



const rows = [
    createData('Notification Issued On', "30-06-2023",),
    createData('Notification Issued On', "30-06-2023",),
    createData('Application Started On', "30-06-2023",),
    createData('Last Date To Apply', "21-07-2023"),
    createData('Last date and time for receipt of online applications', "21-07-2023 (23:00)"),
    createData('Last date and time for generation of offline Challan', "23-07-2023 (23:00)"),
    createData('Last date for payment through Challan (during working hours of Bank)', "24-07-2023"),
    createData('Dates of ‘Window for Application Form Correction’ and online payment of Correction Charges', "26-07-2023 to 28-07-2023 (23:00)"),
    createData('Schedule of Computer Based Examination', "September 2023"),
];


const updaterows = [
    createData('Exam conducting body', "Staff Selection Commission",),
    createData('Examination name', "SSC MTS (Multi-Tasking Staff) and Havaldar (CBIC & CBN) 2023",),
    createData('Exam conducting for', "Group ‘C’ posts",),
    createData('Application dates', "30th June to 21st July 2023"),
    createData('Application mode', "Online"),
    createData('Vacancy', "MTS:- 1198 (approx. Havaldar in CBIC and CBN:- 360"),
    createData('Salary', "Pay Level-1 as per Pay Matrix of 7th Pay Commission."),
    createData('SSC MTS Notification 2023', " "),
    createData('Official Website', "https://ssc.nic.in/"),
    createData('SSC MTS Application Form 2023', " "),
    // createData('Official Website', "https://ssc.nic.in/"),
];


class Examdetailnotification extends Component {
    render() {
        return (
            <Grid>
                <Container className='main'>
                <Grid xs={12} container spacing={2} item>
                    <Grid mt={2} item style={{ border: '1px solid grey', height: "400px" }} lg={4} md={12} className="Grid_control">
                        <Typography className='typ'>SSC MTS RECRUITMENT 2023:</Typography>
                        <Typography className='typ'>SSC MTS IMPORTANT DATES 2023:</Typography>
                        <Typography className='typ'>SSC MTS UPDATES 2023:</Typography>
                        <Typography className='typ'>SSC MTS UPDATES 2023:</Typography>
                        <Typography className='typ'>ELIGIBILITY CRITERIA FOR SSC MTS 2023:</Typography>
                        <Typography className='typ'>EXAMINATION CENTRES OF SSC MTS 2023 EXAM:</Typography>
                        <Typography className='typ'>VACANCY DETAILS OF SSC MTS 2023:</Typography>
                        <Typography className='typ'>SSC MTS APPLICATION PROCEDURE 2023:</Typography>
                    </Grid>
                    <Grid item lg={8} md={12}>
                        <Grid >
                            <Typography align="center" className='first-headline'>SSC MTS Exam Notification Out 2023 : Eligibility Criteria & Vacancy</Typography>
                        </Grid>

                        <Typography className='tag-line'>SSC MTS RECRUITMENT 2023</Typography>
                       <Typography className='content-d'>SSC MTS notification 2023 has been published the Staff Selection Commission on 30th June 2023. The Staff Selection Commission will hold a competitive examination in the month of September, 2023 to recruit eligible candidates for the posts of Multi-Tasking (Non-Technical) Staff, and Havaldar (CBIC & CBN).
                        </Typography>
                       <Typography className='content-d'>
                            Interested and eligible candidates can apply for these posts by visiting the official website of the SSC from 30th June to 21st July 2023.
                            <strong style={{textDecorationLine:"underline",color:"#3E30C2"}}> SSC MTS Notification 2023 </strong> 
                             Before applying for the same candidates are advised to read this article, as we are providing you with detailed information about the SSC MTS examination here.
                        </Typography>
                       <Typography className='content-d'>
                            A General Central Service Group 'C' Non-Gazetted, Non-Ministerial post in various Ministries, Departments, Offices of the Government of India, and various Constitutional Bodies, Statutory Bodies, Tribunals, etc., in different States and Union Territories, are both recruited for through the national-level SSC MTS exam.
                        </Typography>


                        <Typography  className='tag-line'>
                        SSC MTS IMPORTANT DATES 2023
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table style={{backgroundColor:'#eeecfe'}} sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Event</TableCell>
                                        <TableCell align="right">Dates</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.con}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                        <Typography  className='tag-line'>SSC MTS UPDATES 2023</Typography>

                        {/* <TableContainer component={Paper}>
                            <Table style={{backgroundColor:'#eeecfe'}} sx={{ minWidth: 650 }} aria-label="simple table">
                         
                                <TableBody>
                                    {updaterows.map((row) => (
                                        <TableRow
                                            key={row.info}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.info}
                                            </TableCell>
                                            <TableCell align="right">{row.item}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer> */}

<TableContainer component={Paper}>
                            <Table style={{backgroundColor:'#eeecfe'}} sx={{ minWidth: 650 }} aria-label="simple table">
                                {/* <TableHead>
                                    <TableRow>
                                        <TableCell>Event</TableCell>
                                        <TableCell align="right">Dates</TableCell>
                                    </TableRow>
                                </TableHead> */}
                                <TableBody>
                                    {updaterows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.con}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
                
            </Container>
            <Grid>
                    <Typography className='more-details-footer'>For more details:=https://exampur.com/exam-content/ssc-mts-exam-notification-out-2023-eligibility-criteria-vacancy/#ssc-mts-recruitment-2023</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default Examdetailnotification;
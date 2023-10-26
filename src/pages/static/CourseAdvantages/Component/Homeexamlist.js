import React, { Component } from 'react';
import { Grid, Typography, Button, Link } from '@mui/material'
import Divider from '@mui/material/Divider';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
// import examysai from "../../../images/examysai.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';


export default class Homeexamlist extends Component {
    state = {
        examysaidata: [
            {
                title: "cgl exam",


            },
            {
                title: "cgl exam",

            },
            {
                title: "cgl exam",

            },
            {
                title: "chsl exam",


            },
            {
                title: "chsl exam",

            },
            {
                title: "chsl exam",

            },


        ],
        railwayexamysaidata: [
            {
                title: "RRB exam",


            },
            {
                title: "RRB exam",

            },
            {
                title: "RRB exam",

            },
            {
                title: "RRB G4 exam",


            },
            {
                title: "RRB exam",

            },
            {
                title: "RRB G4 exam",

            },
            {
                title: "RRB exam",

            },

        ],

        bankingexamysaidata: [
            {
                title: "IBPO exam",


            },
            {
                title: "SBI exam",

            },
            {
                title: "PO exam",

            },
            {
                title: "IBPO exam",


            },
            {
                title: "P0 exam",

            },
            {
                title: " SBI exam",

            },
            {
                title: "PO exam",

            },

        ]






    };
    render() {
        return (
            <>
                <Grid style={{ marginTop: "3%" }}>



                </Grid>



                <Grid style={{ marginTop: "1%", marginLeft: "10%" }}>
                <Typography style={{ fontSize: 18, fontWeight: 600, fontFamily: "Poppins", color: "#72717D", }}>
                       Exam List
                    </Typography>
                    

                    <Grid style={{ marginLeft: "%", marginTop: "1%", marginRight: "10%" }}>
                        <Grid item lg={12} md={12} style={{ marginLeft: "%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                         
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                           {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                               <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                   {railwayexamysaidata.title}
                               </Typography>


                           ))}



                       </Grid>
                    </Grid>
                </Grid>







             

                <Grid style={{ marginTop: "1%", marginLeft: "10%" }}>
                <Typography style={{ fontSize: 18, fontWeight: 600, fontFamily: "Poppins", color: "#72717D", }}>
                       Courses
                    </Typography>
                    

                    <Grid style={{ marginLeft: "%", marginTop: "1%", marginRight: "10%" }}>
                        <Grid item lg={12} md={12} style={{ marginLeft: "%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                         
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                           {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                               <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                   {railwayexamysaidata.title}
                               </Typography>


                           ))}



                       </Grid>
                    </Grid>
                </Grid>

                <Grid style={{ marginTop: "1%", marginLeft: "10%" }}>
                <Typography style={{ fontSize: 18, fontWeight: 600, fontFamily: "Poppins", color: "#72717D", }}>
                 Test Series
                    </Typography>
                    

                    <Grid style={{ marginLeft: "%", marginTop: "1%", marginRight: "10%" }}>
                        <Grid item lg={12} md={12} style={{ marginLeft: "%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                         
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                           {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                               <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                   {railwayexamysaidata.title}
                               </Typography>


                           ))}



                       </Grid>
                    </Grid>
                </Grid>

                <Grid style={{ marginTop: "1%", marginLeft: "10%" }}>
                <Typography style={{ fontSize: 18, fontWeight: 600, fontFamily: "Poppins", color: "#72717D", }}>
                       Student Special
                    </Typography>
                    

                    <Grid style={{ marginLeft: "%", marginTop: "1%", marginRight: "10%" }}>
                        <Grid item lg={12} md={12} style={{ marginLeft: "%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                         
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                           {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                               <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                   {railwayexamysaidata.title}
                               </Typography>


                           ))}



                       </Grid>
                    </Grid>
                </Grid>


                <Grid style={{ marginTop: "1%", marginLeft: "10%" }}>
                <Typography style={{ fontSize: 18, fontWeight: 600, fontFamily: "Poppins", color: "#72717D", }}>
                      Previous Year Test
                    </Typography>
                    

                    <Grid style={{ marginLeft: "%", marginTop: "1%", marginRight: "10%" }}>
                        <Grid item lg={12} md={12} style={{ marginLeft: "%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                         
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                            {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                                <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                    {railwayexamysaidata.title}
                                </Typography>


                            ))}



                        </Grid>
                        <Grid item lg={12} md={12} style={{ marginTop: "1%", display: "flex", flexDirection: "row", justifyContent: "space-between", }} >
                           
                           {this.state.railwayexamysaidata.map((railwayexamysaidata, index) => (

                               <Typography style={{ fontSize: 18, fontWeight: 400, fontFamily: "Poppins", color: "#72717D", }}>
                                   {railwayexamysaidata.title}
                               </Typography>


                           ))}



                       </Grid>
                    </Grid>
                </Grid>

               <Grid style={{padding:"2%"}}></Grid>


              

            </>
        )
    }
}

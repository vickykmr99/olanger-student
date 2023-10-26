import React, { Component } from 'react';
import { Grid, Typography, Button, FormControl, RadioGroup } from '@mui/material'
import "../../Testpasspro/Components/Testpasspro.css";
import Divider from '@mui/material/Divider';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
export default class Testpasspro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selected: '',
        };
    }

    handleSubmit = (event) => {
        console.log(this.state.value)
    };


    render() {
        return (
            <Grid className='testpasspro'>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", }}>
                    {/* left card  here*/}
                    <Grid className='testpassprocard'>
                        <center style={{ marginTop: 22 }}>
                            <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "25%", marginRight: "5%" }}>
                                <Typography style={{ fontSize: 18, fontWeight: 600, fontFamily: "Poppins", }}>
                                    Examys Test Pass
                                </Typography>
                                <Typography style={{ backgroundColor: "#C0392B", padding: "1%", marginTop: "5px", color: "white", fontSize: "12px", height: "20px", marginLeft: "3%" }}>Pro+</Typography>
                            </Grid>
                        </center>
                        <center>
                            <Typography style={{ fontSize: 14, marginTop: "2%", fontWeight: 600, fontFamily: "Poppins", color: "#FDB43C" }}>
                                one pass and access to unlimited exams
                            </Typography>
                            <Divider style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", borderWidth: 1, borderBottom: "2px solid gray" }} />
                        </center>
                        <center>
                            <Typography style={{ fontSize: 15, fontWeight: 600, fontFamily: "Poppins", lineHeight: 2 }}>
                                Systematic & Seamless Test experience
                            </Typography>
                        </center>
                        <center>
                            <Typography style={{ fontSize: 12, color: "#4A4958", fontWeight: 600, fontFamily: "Poppins", lineHeight: 2 }}>
                                Mock Tests + Prev. Year Tests + Trend Tests + Live Tests
                            </Typography>
                        </center>
                        <Grid style={{ display: "flex", flexDirection: "row", marginTop: "1%" }}>
                            <Grid style={{ marginLeft: "8%" }}>
                                <FiberManualRecordIcon style={{ fontSize: "5px" }} />
                            </Grid>

                            <Grid style={{}}>
                                <Typography style={{ fontSize: 15, marginLeft: "3%", color: "#4A4958", fontWeight: 500, fontFamily: "Poppins", width: "100%" }}>
                                    Unlimited Mock and Prev. Year tests
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex", flexDirection: "row", }}>
                            <Grid style={{ marginLeft: "8%" }}>
                                <FiberManualRecordIcon style={{ fontSize: "5px", }} />
                            </Grid>

                            <Grid style={{}}>
                                <Typography style={{ fontSize: 15, marginLeft: "5%", color: "#4A4958", fontWeight: 500, fontFamily: "Poppins", width: "100%" }}>
                                    Access to live tests
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex", flexDirection: "row", }}>
                            <Grid style={{ marginLeft: "8%" }}>
                                <FiberManualRecordIcon style={{ fontSize: "5px" }} />
                            </Grid>

                            <Grid style={{}}>
                                <Typography style={{ fontSize: 15, marginLeft: "5%", color: "#4A4958", fontWeight: 500, fontFamily: "Poppins", width: "100%" }}>
                                    Introducing Trend Tests
                                </Typography>
                            </Grid>
                            <Grid style={{ marginLeft: "5%" }}>
                                <button
                                    variant="Contained"
                                    style={{ backgroundColor: "#029F11", color: "white", fontSize: "10px", height: "15px", borderRadius: 50, width: "40px" }}>
                                    New
                                </button>
                            </Grid>
                        </Grid>
                        <Grid style={{ display: "flex", flexDirection: "row", }}>
                            <Grid style={{ marginLeft: "8%" }}>
                                <FiberManualRecordIcon style={{ fontSize: "5px" }} />
                            </Grid>

                            <Grid style={{}}>
                                <Typography style={{ fontSize: 15, marginLeft: "4%", color: "#4A4958", fontWeight: 500, fontFamily: "Poppins", width: "100%" }}>
                                    Re-attempt mode for all tests
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* right card here */}
                    <Grid style={{ marginTop: "3%", }}>
                        <Typography style={{ fontSize: 18, fontWeight: 600, fontFamily: "Poppins", }}>
                            Select Your Plan
                        </Typography>
                        <FormControl>
                            <RadioGroup
                                defaultValue="599"
                            >
                                <Grid className='testpassprocard1'>
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                                        <FormControlLabel style={{ marginLeft: "2%", }} value="499" control={<Radio />} />
                                        <Typography style={{ fontSize: 14, fontWeight: 600, fontFamily: "Poppins", marginTop: "2%", width: "100%", marginLeft: "-4%" }}>
                                            1 month pass pro +
                                        </Typography>
                                        <Typography style={{ fontSize: 14, fontWeight: 600, fontFamily: "Poppins", marginRight: "25%", marginTop: "2%", color: "#72717D", textDecorationLine: "line-through" }}>
                                            ₹2499
                                        </Typography>
                                        <Typography style={{ fontSize: 14, fontWeight: 400, color: "#141226", fontFamily: "Poppins", marginRight: "5%", marginTop: "2%" }}>
                                            ₹599
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        <Grid style={{ marginLeft: "10%", }}>
                                            <Typography style={{ fontSize: 14, color: "#72717D", fontWeight: 400, fontFamily: "Poppins", }}>
                                                Lunching week offer
                                            </Typography>
                                        </Grid>
                                        <Grid style=
                                            {{ marginRight: "6%", }}>
                                            <Typography style={{ fontSize: 14, color: "red", fontWeight: 400, width: "100%", fontFamily: "Poppins" }}>
                                                -₹50
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "7px" }}>
                                        <Grid style={{ marginLeft: "10%", }}>
                                            <Typography style={{ fontSize: 14, color: "#72717D", fontWeight: 400, fontFamily: "Poppins", }}>
                                                Referral Offer
                                            </Typography>
                                        </Grid>
                                        <Grid style=
                                            {{ marginRight: "6%", }}>
                                            <Typography style={{ fontSize: 14, color: "red", fontWeight: 400, width: "100%", fontFamily: "Poppins" }}>
                                                -₹50
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", borderWidth: 1, borderBottom: "2px solid gray" }} />

                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "10px", paddingBottom: "3%" }}>
                                        <Grid style={{ marginLeft: "10%", }}>
                                            <Typography style={{ fontSize: 18, fontWeight: 600, color: "#141226", fontFamily: "Poppins", }}>
                                                Total Amount
                                            </Typography>
                                        </Grid>
                                        <Grid style=
                                            {{ marginRight: "6%", }}>
                                            <Typography style={{ fontSize: 18, fontWeight: 600, width: "100%", color: "#141226", fontFamily: "Poppins" }}>
                                                ₹499
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid className='testpassprocard2'>
                                    <center>
                                        <Button
                                            variant="Contained"
                                            style={{ backgroundColor: "#6C60E1", color: "white", fontSize: "12px", height: "29px", marginLeft: "2%", width: "111px", marginTop: "-6%" }}>Best Seller</Button>
                                    </center>
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                                        <FormControlLabel style={{ marginLeft: "2%", }} value="599" control={<Radio />} />
                                        <Typography style={{ fontSize: 14, fontWeight: 600, fontFamily: "Poppins", marginTop: "2%", width: "100%", marginLeft: "-5%" }}>
                                            12 months pass pro +
                                        </Typography>
                                        <Typography style={{ fontSize: 14, fontWeight: 600, fontFamily: "Poppins", marginRight: "25%", marginTop: "2%", color: "#72717D", textDecorationLine: "line-through" }}>
                                            ₹2499
                                        </Typography>
                                        <Typography style={{ fontSize: 14, fontWeight: 400, color: "#141226", fontFamily: "Poppins", marginRight: "5%", marginTop: "2%" }}>
                                            ₹699
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        <Grid style={{ marginLeft: "10%", }}>
                                            <Typography style={{ fontSize: 14, color: "#72717D", fontWeight: 400, fontFamily: "Poppins", }}>
                                                Lunching week offer
                                            </Typography>
                                        </Grid>
                                        <Grid style=
                                            {{ marginRight: "6%", }}>
                                            <Typography style={{ fontSize: 14, color: "red", fontWeight: 400, width: "100%", fontFamily: "Poppins" }}>
                                                -₹50
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "7px" }}>
                                        <Grid style={{ marginLeft: "10%", }}>
                                            <Typography style={{ fontSize: 14, color: "#72717D", fontWeight: 400, fontFamily: "Poppins", }}>
                                                Referral Offer
                                            </Typography>
                                        </Grid>
                                        <Grid style=
                                            {{ marginRight: "6%", }}>
                                            <Typography style={{ fontSize: 14, color: "red", fontWeight: 400, width: "100%", fontFamily: "Poppins" }}>
                                                -₹50
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Divider style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", borderWidth: 1, borderBottom: "2px solid gray" }} />
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "10px", paddingBottom: "3%" }}>
                                        <Grid style={{ marginLeft: "10%", }}>
                                            <Typography style={{ fontSize: 18, fontWeight: 600, color: "#141226", fontFamily: "Poppins", }}>
                                                Total Amount
                                            </Typography>
                                        </Grid>
                                        <Grid style=
                                            {{ marginRight: "6%", }}>
                                            <Typography style={{ fontSize: 18, fontWeight: 600, width: "100%", color: "#141226", fontFamily: "Poppins" }}>
                                                ₹599
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid className='testpassprocard1'>
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "2%" }}>
                                        <FormControlLabel style={{ marginLeft: "2%", }} value="699" control={<Radio />} />
                                        <Typography style={{ fontSize: 14, fontWeight: 600, fontFamily: "Poppins", marginTop: "2%", width: "100%", marginLeft: "-5%" }}>
                                            36 months pass pro +
                                        </Typography>
                                        <Typography style={{ fontSize: 14, fontWeight: 600, fontFamily: "Poppins", marginRight: "25%", marginTop: "2%", color: "#72717D", textDecorationLine: "line-through" }}>
                                            ₹2499
                                        </Typography>
                                        <Typography style={{ fontSize: 14, fontWeight: 400, color: "#141226", fontFamily: "Poppins", marginRight: "5%", marginTop: "2%" }}>
                                            ₹799
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>


                                        <Grid style={{ marginLeft: "10%", }}>
                                            <Typography style={{ fontSize: 14, color: "#72717D", fontWeight: 400, fontFamily: "Poppins", }}>
                                                Lunching week offer
                                            </Typography>
                                        </Grid>
                                        <Grid style=
                                            {{ marginRight: "6%", }}>
                                            <Typography style={{ fontSize: 14, color: "red", fontWeight: 400, width: "100%", fontFamily: "Poppins" }}>
                                                -₹50
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "7px" }}>


                                        <Grid style={{ marginLeft: "10%", }}>
                                            <Typography style={{ fontSize: 14, color: "#72717D", fontWeight: 400, fontFamily: "Poppins", }}>
                                                Referral Offer
                                            </Typography>
                                        </Grid>
                                        <Grid style=
                                            {{ marginRight: "6%", }}>
                                            <Typography style={{ fontSize: 14, color: "red", fontWeight: 400, width: "100%", fontFamily: "Poppins" }}>
                                                -₹50
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Divider style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", borderWidth: 1, borderBottom: "2px solid gray" }} />
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "10px", paddingBottom: "3%" }}>


                                        <Grid style={{ marginLeft: "10%", }}>
                                            <Typography style={{ fontSize: 18, fontWeight: 600, color: "#141226", fontFamily: "Poppins", }}>
                                                Total Amount

                                            </Typography>
                                        </Grid>
                                        <Grid style=
                                            {{ marginRight: "6%", }}>
                                            <Typography style={{ fontSize: 18, fontWeight: 600, width: "100%", color: "#141226", fontFamily: "Poppins" }}>
                                                ₹699
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <center style={{ marginTop: "4%" }}>
                    <Button
                        type="submit"
                        onSubmit={this.handleSubmit()}
                        style={{ backgroundColor: "#3E30C2", color: "white", height: "40px", border: "none", fontSize: "18px", fontFamily: "Poppins", width: "200px", borderRadius: "8px", cursor: 'pointer' }}>
                        Proceed to Pay
                    </Button>
                </center>
            </Grid>
        )
    }
}

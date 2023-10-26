import React, { Component } from 'react';
import { Grid, Typography ,Button} from '@mui/material';
import cardelipse from "../../../../images/cardelipse.png";
// import "../../../pages/Examysinspire/Components/examysinspire.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default class examyinspsection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inspiredata: [
                {
                    no: "1",
                    title: "SBI Po Notification",
                    con: "Apply from 12.09.2023 to 12.09.2023",
                    cont: "Get course strategy, questions trend & more.",
                },
                {
                    no: "2",
                    title: "SBI Po Notification",
                    con: "Apply from 12.09.2023 to 12.09.2023",
                    cont: "Get course strategy, questions trend & more.",
                },
                {
                    no: "3",
                    title: "SBI Po Notification",
                    con: "Apply from 12.09.2023 to 12.09.2023",
                    cont: "Get course strategy, questions trend & more.",
                },
                {
                    no: "4",
                    title: "SBI Po Notification",
                    con: "Apply from 12.09.2023 to 12.09.2023",
                    cont: "Get course strategy, questions trend & more.",
                },
                {
                    no: "5",
                    title: "SBI Po Notification",
                    con: "Apply from 12.09.2023 to 12.09.2023",
                    cont: "Get course strategy, questions trend & more.",
                },
                {
                    no: "6",
                    title: "SBI Po Notification",
                    con: "Apply from 12.09.2023 to 12.09.2023",
                    cont: "Get course strategy, questions trend & more.",
                },
                {
                    no: "7",
                    title: "SBI Po Notification",
                    con: "Apply from 12.09.2023 to 12.09.2023",
                    cont: "Get course strategy, questions trend & more.",
                },
                {
                    no: "8",
                    title: "SBI Po Notification",
                    con: "Apply from 12.09.2023 to 12.09.2023",
                    cont: "Get course strategy, questions trend & more.",
                }
            ]
        }
    }
    render() {
        return (
            <Grid style={{ background: "#F8F8FF", paddingBottom: "2%" }}>
                <Grid style={{marginBottom:"2%"}}>
                    <Grid style={{ marginLeft: "5%", marginTop: "1%", paddingTop: "4%" }}>
                        <Typography style={{ fontFamily: "Poopins", fontSize: "28px", fontWeight: "600" }}>Recent exam notification</Typography>
                        <Typography style={{ fontFamily: "Poopins", fontSize: "20px", fontWeight: "400", }}>Make your preparation strong with examys Inspire</Typography>
                    </Grid>
                    
                    <Grid id="abc" mt={2} ml={8} mr={8} container spacing={1} gap={4} style={{ display: 'flex' }}>

                        {this.state.inspiredata.map((inspiredata, index) => (

                            <Grid className='abc' item xs={3.5}  >
                                <Grid>
                                    <img src={cardelipse} alt="" />
                                </Grid>
                                <Grid className='g_2'>
                                    <h2 className='gapctrl'>{inspiredata.title}</h2>
                                    <p className='gapctrl' style={{ lineHeight: "1.3" }}>{inspiredata.con}</p>
                                    <Typography className='gapctrl' style={{ lineHeight: "1.3" }}>{inspiredata.cont}</Typography>
                                </Grid>

                                <Grid style={{ cursor: "pointer" }}>
                                    <a href='/Examysinspiresecond' style={{ textDecoration: "none" }}>
                                        <KeyboardArrowRightIcon style={{ color: "#3E30C2" }} />
                                    </a>
                                </Grid>

                            </Grid>
                        ))}
                    </Grid>

                    
                </Grid>

                {/* this button used for see more notification  */}

                {/* <a href="/Examysinspire" style={{textDecoration:"none"}}>
                <Button style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    left: "40%",
                    lineHeight: "normal",
                    display: "flex",
                    padding: "8px 48px",
                    alignItems: "center",
                    borderRadius: "8px",
                    background: "#3E30C2",
                }} variant="contained">Explore All</Button>
                </a> */}

            </Grid>
        )
    }
}

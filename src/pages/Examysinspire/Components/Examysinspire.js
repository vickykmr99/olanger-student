import React, { Component } from 'react';
// import logo from "../Image/logo.png"
// import "./notification.css"
import { Container, Grid, Card, Typography, Link } from '@mui/material';
import cardelipse from "../../../images/cardelipse.png"
import "../../../pages/Examysinspire/Components/examysinspire.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';







export default class Examysinspire extends Component {

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

            <>
           
                <Grid className='inspire-bg'>
                    <Grid style={{margin:'25vh 5vw 0vh 5vw', }}>
                        <Grid style={{marginBottom:'20px', padding:'0px 0px 0px 5px'}}>
                            <Typography style={{fontSize:'28px', fontWeight:'600',color:'#242121',fontStyle:'normal',lineHeight:'normal'}}>Recent exam notification</Typography>
                            <Typography style={{color:'#4A4958', fontFamily:'poppins',fontSize:'20px', fontWeight:'400',fontStyle:'normal',lineHeight:'normal'}}>Make your preparation strong with examys Inspire</Typography>
                        </Grid>

                        <Grid style={{padding:'0px 0px 0px 10px'}}>
                            <Typography style={{fontSize:'20px', fontWeight:'600', lineHeight:'26px',color:'#141226'}}>Examys Inspire for upcoming Exams</Typography>
                            <Typography style={{fontSize:'16px', fontWeight:'400',lineHeight:'24px', color:'#3E3D4D',fontFamily:'poppins', fontStyle:'normal'}}>Make your preparation strong with Examys Inspire.</Typography>
                            <Typography style={{fontSize:'16px', fontWeight:'400',lineHeight:'24px', color:'#3E3D4D',fontFamily:'poppins', fontStyle:'normal'}}>o Exam details.</Typography>
                            <Typography style={{fontSize:'16px', fontWeight:'400',lineHeight:'24px', color:'#3E3D4D',fontFamily:'poppins', fontStyle:'normal'}}>o Preparation strategy & cut off.</Typography>
                            <Typography style={{fontSize:'16px', fontWeight:'400',lineHeight:'24px', color:'#3E3D4D',fontFamily:'poppins', fontStyle:'normal'}}>o Get questions trend by "Examys ai GPT".</Typography>
                            <Typography style={{fontSize:'16px', fontWeight:'400',lineHeight:'24px', color:'#3E3D4D',fontFamily:'poppins', fontStyle:'normal'}}>o Know your "Course Journey".</Typography>
                            <Typography style={{fontSize:'16px', fontWeight:'400',lineHeight:'24px', color:'#3E3D4D',fontFamily:'poppins', fontStyle:'normal'}}>o Courses & Test series for this exam</Typography>
                        </Grid>
                    </Grid>
                    <Grid id="abc" mt={7} ml={8} mr={8} container spacing={1} gap={4} style={{ display: 'flex' }}>

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
              
            </>


        )
    }
}        
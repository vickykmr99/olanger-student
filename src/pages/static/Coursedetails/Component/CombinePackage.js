import { Category, CurrencyRupee, PaddingRounded } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import react, { Component } from 'react'
import "./course.css"
import { borderColor, borderRadius } from '@mui/system'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import GroupsIcon from '@mui/icons-material/Groups';
import { useLocation } from 'react-router-dom';
import { Row } from 'react-bootstrap';







export default class CombinePackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      // package_id : this.state.data,
      activeButtonId: 1,
      package_id: "",
      packid: "",
      cat_index: 0,
      exam_index: 0,
      stage_index: 0,
      subject_index: 0,
      minipackage_index:0,
      total_video:0,
      total_pdf:0,
      total_quiz:0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.getPanelStyle = this.getPanelStyle.bind(this);
  }


  handleButtonClick = (buttonId) => {
    this.setState({ activeButtonId: buttonId });
  };

  handleChange(panel) {
    return (event, isExpanded) => {
      this.setState({
        expanded: isExpanded ? panel : false
      });
    };
  }

  // handleClick = () => {
  //   const data =


  //   this.props.setData(data);
  // }





  getPanelStyle(panel) {
    return {
      border: this.state.expanded === panel ? '2px solid #6257CD' : 'none'
    };
  }


  componentDidMount() {
    this.props.viewAllPackageById(this.props.home.package_id);
    // this.props.viewAllPackageById("644fab29261a21dae4eed7fa");
    // this.props.viewAllPackageById(this.state.packid);
    console.log("combine package", this.props.home.package_id)

  }
  render() {
    const {
      common,
      home,
      coursedetails,
      snackbar,
      close_snack_bar
    } = this.props;
    // console.log("hiiiiiiii", home.all_package_by_packageid)
    const { activeButtonId } = this.state;
    const { expanded } = this.state;
    // const packid = this.props.location.state.package_id;

    // const myData = location.state.data;

    return (
      <>

        {/* {home.all_package_by_packageid.package_content.map((c,index)=>( */}

        <div>



          <Box sx={{
            marginTop: "9%",
            position: "relative",
            backgroundColor: "#6257CD",
            height: "240px"
          }}>
            <Box sx={{
              background: "rgba(255, 255, 255, 0.61)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
              position: "absolute",
              width: "889px",
              height: "150px",
              left: " 275px",
              top: "20px",
              borderRadius: "8px"


            }}>
              <Stack
                spacing={2}
                direction="column"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0px",
                  paddingTop: "25px",



                }}
              >

                <Typography style={{

                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "36px",
                  lineHeight: "24px"
                }}>
                  <span style={{ color: '#FFF' }}>
                    {home.all_package_by_packageid.packagecategory_name}
                  </span>{home.all_package_by_packageid.package_name}
                  {/* {c.package_name} */}
                </Typography>
                <Typography style={{

                  fontStyle: "normal",
                  fontWeight: " 600",
                  fontSize: "24px",
                  lineHeight: "36px",
                  margin: "5px 0"
                }}>
                  <span style={{ color: '#FF6B00', fontWeight: "bold" }}>Target </span>  2023-24 (Validity - {home.all_package_by_packageid.package_duration})

                </Typography>




              </Stack>
            </Box>


            <Box sx={{
              background: "rgba(238, 236, 254, 0.9)",
              borderRadius: "8px",
              position: "absolute",
              width: "551px",
              height: "90px",
              left: " 444px",
              top: "115px"


            }}>


              {home.category_by_package_id.map((catagory, index) => (
                <div >
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "0px",
                      paddingTop: "25px",
                    }}
                  >

                    {/* <Button clasnname="btnborder" sx={{ ml: 1 }} style={{ color: "#000", backgroundColor: "#fff", border: "2px solid #6257CD" }} variant="contained">
                      {catagory.category_name}
                    </Button> */}
                    <Button clasnname="btnborder" sx={{ ml: 1 }} style={{ color: "#000", backgroundColor: "#fff", border: "2px solid #6257CD" }} variant="contained"
                      onClick={() => {
                        this.setState({ cat_index: index })
                        console.log(home.category_by_package_id[0].exam);
                        console.log(this.state.cat_index);
                      }}

                    >
                      {catagory.category_name}
                    </Button>
                    {/* <Button clasnname="btnborder" sx={{ ml: 1 }} style={{ color: "#000", backgroundColor: "#fff", border: "2px solid #6257CD" }} variant="contained">
                        Banking
                      </Button> */}
                  </Stack>
                </div>
              ))}
            </Box>
          </Box>
          {home.category_by_package_id[this.state.cat_index].exam !== undefined ?
            home.category_by_package_id[this.state.cat_index].exam.map((c, index) => (
              <div>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{
                    justifyContent: "center",
                    borderRadius: "0px",
                    padding: "5px",
                  }}
                >

                  <Button
                    className={` ${activeButtonId === 8 ? 'combinebutton-after' : 'combinebutton'}`}
                    sx={{ ml: 8 }}

                    variant="contained"
                    onClick={() => {
                      this.handleButtonClick(8);
                      this.setState({ exam_index: index })
                    }
                    }
                  >
                    {c.exam_name}
                  </Button>
                  {/* <Button
                className={` ${activeButtonId === 9 ? 'combinebutton-after' : 'combinebutton'}`}
                sx={{ ml: 9 }}
                
                variant="contained"
                onClick={() => this.handleButtonClick(9)}
              >
               CHSL
              </Button>
              <Button
                className={` ${activeButtonId === 10 ? 'combinebutton-after' : 'combinebutton'}`}
                sx={{ ml: 10 }}
                
                variant="contained"
                onClick={() => this.handleButtonClick(10)}
              >
                MTS
              </Button>
              <Button
                className={` ${activeButtonId === 11 ? 'combinebutton-after' : 'combinebutton'}`}
                sx={{ ml: 11 }}
                
                variant="contained"
                onClick={() => this.handleButtonClick(11)}
              >
               CPO
              </Button>
              <Button
                className={` ${activeButtonId === 12 ? 'combinebutton-after' : 'combinebutton'}`}
                sx={{ ml: 12 }}
                
                variant="contained"
                onClick={() => this.handleButtonClick(12)}
              >
               Stenographer
              </Button>
              <Button
                className={` ${activeButtonId === 13 ? 'combinebutton-after' : 'combinebutton'}`}
                sx={{ ml: 13 }}
                
                variant="contained"
                onClick={() => this.handleButtonClick(13)}
              >
              Scientific assistance
              </Button>
              <Button
                className={` ${activeButtonId === 14 ? 'combinebutton-after' : 'combinebutton'}`}
                sx={{ ml: 14 }}
                
                variant="contained"
                onClick={() => this.handleButtonClick(14)}
              >
               GD
              </Button>
              <Button
                className={` ${activeButtonId === 15 ? 'combinebutton-after' : 'combinebutton'}`}
                sx={{ ml: 15 }}
                
                variant="contained"
                onClick={() => this.handleButtonClick(15)}
              >
              Selection Post
              </Button> */}

                </Stack>

              </div>
            )) : ''}

          <Box sx={{
            backgroundColor: "#EEECFE",
            position: "relative",
            width: "551px",
            height: "90px",
            left: " 444px",
            top: "25px"
          }}>
            {home.category_by_package_id[this.state.cat_index].exam !== undefined ?
              home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage !== undefined ?
                home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage.map((c, index) => (
                  <div>
                    <Stack
                      spacing={2}
                      direction="row"
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "0px",
                        paddingTop: "25px",

                      }}
                    >

                      <Button clasnname="btnborder" sx={{ ml: 1 }} style={{ color: "#000", backgroundColor: "#fff", border: "2px solid #6257CD" }} variant="contained"
                        onClick={() => {
                          this.handleButtonClick(8);
                          // this.setState({ stage_index: index })
                        }

                        }
                      >
                        {/* Tier 1 */}
                        {c.stage_name}

                      </Button>
                      {/* <Button clasnname="btnborder" sx={{ ml: 1 }} style={{ color: "#000", backgroundColor: "#fff", border: "2px solid #6257CD" }} variant="contained">
                    Tier 1
                  </Button>
                  <Button clasnname="btnborder" sx={{ ml: 1 }} style={{ color: "#000", backgroundColor: "#fff", border: "2px solid #6257CD" }} variant="contained">
                    Tier 1
                  </Button> */}


                    </Stack>
                  </div>
                )) : '' : ''}

          </Box>
          {home.category_by_package_id[this.state.cat_index].exam !== undefined ?
            home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage !== undefined ?
              home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage[this.state.stage_index].subject !== undefined ?
                home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage[this.state.stage_index].subject.map((c, index) => (
                  <div>
                    <Stack
                      spacing={2}
                      direction="row"
                      sx={{
                        justifyContent: "center",
                        borderRadius: "0px",
                        padding: "5px",

                      }}
                    >
                      <Button
                        className={` ${activeButtonId === 1 ? 'combinebutton-after' : 'combinebutton'}`}
                        sx={{ ml: 1 }}

                        variant="contained"
                        onClick={() => {
                          this.handleButtonClick(1)
                          this.setState({ subject_index: index })
                        }}
                      >

                        {c.subject_name}
                      </Button>
                      {/* <Button
                  className={` ${activeButtonId === 2 ? 'combinebutton-after' : 'combinebutton'}`}
                  sx={{ ml: 1 }}
                  // style={{ color: '#000', backgroundColor: 'white', border: '1px solid #3E30C21' }}
                  variant="contained"
                  onClick={() => this.handleButtonClick(2)}
                >
                  GK
                </Button>
                <Button
                  className={` ${activeButtonId === 3 ? 'combinebutton-after' : 'combinebutton'}`}
                  sx={{ ml: 1 }}

                  variant="contained"
                  onClick={() => this.handleButtonClick(3)}
                >
                  Reasoning
                </Button>
                <Button
                  className={` ${activeButtonId === 4 ? 'combinebutton-after' : 'combinebutton'}`}
                  sx={{ ml: 1 }}

                  variant="contained"
                  onClick={() => this.handleButtonClick(4)}
                >
                  Reasoning

                </Button>
                <Button
                  className={` ${activeButtonId === 5 ? 'combinebutton-after' : 'combinebutton'}`}
                  sx={{ ml: 1 }}
                  variant="contained"
                  onClick={() => this.handleButtonClick(5)}
                >
                  English
                </Button>
                <Button
                  className={` ${activeButtonId === 6 ? 'combinebutton-after' : 'combinebutton'}`}
                  sx={{ ml: 1 }}
                  variant="contained"
                  onClick={() => this.handleButtonClick(6)}
                >
                  Current Affair
                </Button>
                <Button className={` ${activeButtonId === 7 ? 'combinebutton-after' : 'combinebutton'}`} onClick={() => this.handleButtonClick(7)} sx={{ ml: 1 }}
                  variant="contained">
                  Faq
                </Button> */}

                    </Stack>

                  </div>
                )) : '' : '' : ''}
          <Box sx={{

            backgroundColor: "#EEECFE",
            position: "relative",
            width: "849px",
            height: "41px",
            left: " 20%",
            top: "55px",


          }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0px",
                paddingTop: "10px",

              }}
            >
              <Typography style={{ fontWeight: "bold" }}>Here, the Foundation is same for all SSC Exams so, complete your foundation from any one exam.</Typography>
            </Stack>
          </Box>

          <Box sx={{

            backgroundColor: "white",
            position: "relative",
            width: "553px",
            height: "55px",
            left: " 29%",
            top: "75px"
          }} style={{ border: "1.5px groove #6257CD", borderRadius: "5px" }} >


            <Stack spacing={2}
              direction="row"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0px",
                paddingTop: "-4px",
                marginLeft: "3%"
              }}
              style={{
                width: "533px",
                height: "42px",
                fontfamily: 'Poppins',
                fontstyle: "normal",

                fontsize: "14px",
                lineheight: "21px",

                textalign: "center",
                lineBreak: "5px"
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>Foundation contains 20 chapters covering whole syllabus of quants   </Typography>
            </Stack>
            <Stack spacing={2}
              direction="row"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0px",
                paddingTop: "-4%",
                marginLeft: "2%",

              }}
              style={{
                width: "533px",
                height: "1px",
                fontfamily: 'Poppins',
                fontstyle: "normal",
                fontweight: "bold",
                fontsize: "14px",
                lineheight: "21px",

                textalign: "center",
              }}
            >

              <Typography style={{ fontWeight: "bold", fontSize: "15px" }}> have video, 50 pdf and 60 quizzes </Typography>
            </Stack> </Box>
          {
            home.category_by_package_id[this.state.cat_index].exam !== undefined ?
              home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage !== undefined ?
                home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage[this.state.stage_index].subject !== undefined ?
                  home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage[this.state.stage_index].subject[this.state.subject_index].minipackage !== undefined ?
                    home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage[this.state.stage_index].subject[this.state.subject_index].minipackage.map((c, index) => (
                      <div class="coursesidebar" >
                        <a href="#SSC" style={{
                          border: "1px dashed #3E30C2", borderWidth: "solid",
                          fontWeight: "bolder", WebkitTextFillColor: "#3E30C2", fontSize: "100%", fontfamily: 'Poppins', borderRadius: "6.88263px", justifyContent: "center"
                        }}
                        onClick={() => {
                          this.handleButtonClick(1)
                          this.setState({ minipackage_index: index })
                        }}
                        >
                          {c.minipackage_name}
                        </a>
                        {/* <a href="#SSC">{c.minipackage_name}</a> */}
                        {/* <a href="#services">Prev. year Paper Discussion</a>
          <a href="#Banking & Insurance">Trend Questions of last 3yrs </a>
          <a href="#Teaching">Test Series</a>
          <a href="#Defence">Doubt Clear</a> */}
                      </div>
                    )) : '' : '' : '' : ''}
          <Box sx={{

            backgroundColor: "white",
            position: "relative",
            width: "750px",
            height: "65px",
            left: " 24%",
            top: 115
          }} style={{ border: "2.2px groove #6257CD", borderRadius: "5px" }} >

            <div style={{ direction: "column", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
              <div>
                <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>How to start your journey </Typography>

              </div>
              <div>
                <button style={{ textDecorationLine: "underline", textDecorationThickness: "1.5px", fontWeight: "bold", color: "#3E30C2", fontSize: "13px", width: "95px", height: "36px", border: "solid 2px #3E30C2", borderRadius: "7px" }}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />  1 Video</button>
              </div>
            </div>
          </Box>
          <Box sx={{

            backgroundColor: "white",
            position: "relative",
            width: "750px",
            left: " 24%",
            top: 115
          }} >
            <div>
              {
                home.category_by_package_id[this.state.cat_index].exam !== undefined ?
                  home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage !== undefined ?
                    home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage[this.state.stage_index].subject !== undefined ?
                      home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage[this.state.stage_index].subject[this.state.subject_index].minipackage !== undefined ?
                        home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage[this.state.stage_index].subject[this.state.subject_index].minipackage[this.state.minipackage_index].mini_content !== undefined ?
                          home.category_by_package_id[this.state.cat_index].exam[this.state.exam_index].stage[this.state.stage_index].subject[this.state.subject_index].minipackage[this.state.minipackage_index].mini_content.chapter.map((c, index) => (
                            <div>
                              <Accordion expanded={expanded === index} onChange={this.handleChange(index)} style={this.getPanelStyle(index)}>

                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                                >
                                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginRight: "80px" }}>
                                      <Button sx={{ color: 'text.secondary' }} >
                                        {/* Number Theory */}
                                        {c.chapter_name}
                                      </Button>
                                    </div>
                                    <div style={{ display: "flex", gap: "68px", justifyContent: "space-between" }}>
                                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                                        {this.state.total_video} video Lessons
                                      </Button>
                                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                                        2 PDF
                                      </Button>
                                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                                        2 Quiz
                                      </Button>
                                    </div>
                                  </div>
                                </AccordionSummary>
                                <AccordionDetails style={{ background: "#F9F9F9" }}>
                                {c.lesson!==undefined?c.lesson.map((d, index) => (
                                  <div>
                                  <Typography>
                                    {index+1}.{d.lesson_name}
                                  </Typography>
                                  <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                                      {
                                      d.video!==undefined?
                                      d.video.length+" VIDEO":'No VIDEO'}
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                                    {
                                      d.pdf!==undefined?
                                      d.pdf.length+" PDF":'No PDF'}
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                                    {
                                      d.quiz!==undefined?
                                      d.quiz.length+" QUIZ":'No QUIZ'}
                                    </Button>
                                  </div>
                                  </div>
                                )):''}
                                  {/* <Typography sx={{ marginTop: "25px" }}>
                                    2. HCF & its application
                                  </Typography>
                                  <div style={{ display: "flex", gap: "5px" }}>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                                      1video
                                    </Button>

                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                                      1PDF
                                    </Button>
                                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                                      1Quiz
                                    </Button>
                                  </div> */}
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          )) : '' : '' : '' : '' : ''}
              {/* <Accordion expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} style={this.getPanelStyle('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginRight: "120px" }}>
                      <Button sx={{ color: 'text.secondary' }} >
                        LCM & GCF
                      </Button>
                    </div>
                    <div style={{ display: "flex", gap: "68px", justifyContent: "space-between" }}>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 video Lessons
                      </Button>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 PDF
                      </Button>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 Quiz
                      </Button>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{ background: "#F9F9F9" }}>
                  <Typography>
                    1. LCF & its application
                  </Typography>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1video
                    </Button>

                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1PDF
                    </Button>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1Quiz
                    </Button>
                  </div>
                  <Typography sx={{ marginTop: "25px" }}>
                    2. HCF & its application
                  </Typography>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1video
                    </Button>

                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1PDF
                    </Button>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1Quiz
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} style={this.getPanelStyle('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >

                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginRight: "120px" }}>
                      <Button sx={{ color: 'text.secondary' }} >
                        LCM & GCF
                      </Button>
                    </div>
                    <div style={{ display: "flex", gap: "68px", justifyContent: "space-between" }}>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 video Lessons
                      </Button>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 PDF
                      </Button>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 Quiz
                      </Button>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{ background: "#F9F9F9" }}>

                  <Typography>
                    1. LCF & its application
                  </Typography>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1video
                    </Button>

                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1PDF
                    </Button>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1Quiz
                    </Button>
                  </div>
                  <Typography sx={{ marginTop: "25px" }}>
                    2. HCF & its application
                  </Typography>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1video
                    </Button>

                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1PDF
                    </Button>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1Quiz
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')} style={this.getPanelStyle('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginRight: "130px" }}>
                      <Button sx={{ color: 'text.secondary', fontWeight: "bold" }} >
                        Algebra
                      </Button>
                    </div>
                    <div style={{ display: "flex", gap: "68px", justifyContent: "space-between" }}>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 video Lessons
                      </Button>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 PDF
                      </Button>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 Quiz
                      </Button>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{ background: "#F9F9F9" }}>
                  <Typography>
                    1. LCF & its application
                  </Typography>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1video
                    </Button>

                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1PDF
                    </Button>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1Quiz
                    </Button>
                  </div>
                  <Typography sx={{ marginTop: "25px" }}>
                    2. HCF & its application
                  </Typography>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1video
                    </Button>

                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1PDF
                    </Button>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1Quiz
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')} style={this.getPanelStyle('panel5')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <div style={{ display: "flex", }}>
                    <div style={{ marginRight: "154px" }}>
                      <Button sx={{ color: 'text.secondary', width: "10px" }} >
                        Percentage & Application
                      </Button>
                    </div>
                    <div style={{ display: "flex", gap: "67px", justifyContent: "space-between" }}>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 video Lessons
                      </Button>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 PDF
                      </Button>
                      <Button sx={{ color: 'text.secondary' }} startIcon={<img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/vdo%20icon.png?alt=media&token=737823e7-21b6-48af-9bd2-0da27a6d88d1" alt="icon" />}>
                        2 Quiz
                      </Button>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{ background: "#F9F9F9" }}>
                  <Typography>
                    1. LCF & its application
                  </Typography>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1video
                    </Button>

                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1PDF
                    </Button>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1Quiz
                    </Button>
                  </div>
                  <Typography sx={{ marginTop: "25px" }}>
                    2. HCF & its application
                  </Typography>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1video
                    </Button>

                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1PDF
                    </Button>
                    <Button sx={{ color: "#3E30C2", borderBottom: "solid 2px #3E30C2", borderRadius: "1px" }} >
                      1Quiz
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion> */}
            </div>
          </Box>
          <div className="coursesmallbox" style={{ display: "flex", marginLeft: "1160px", marginTop: "-440px" }}>
            <Box sx={{ maxWidth: "140%" }} >
              <Card className="imgbox"
                variant="outlined"
                sx={{
                  borderRadius: "0px",
                  width: "320px",

                  marginTop: "-20px",
                  boxShadow: "-2px -2px 10px #D8DFF8, 2px 2px 10px #D8DFF8",
                  backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Background.png?alt=media&token=bf10a5f5-0314-4149-a95f-daf6c59c9efc')",
                  backgroundSize: "350px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <CardContent>
                  <Box sx={{ justifyContent: "space-between", display: "flex" }}>

                    <Typography

                      gutterBottom
                      textAlign="center"
                    >
                      <Button className='side-arrrow' variant="contained" sx={{ backgroundColor: "#4578C8", borderRadius: "10px", position: "relative", width: "100%", height: "19px", fontSize: "7px", left: "-10%", boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}>SPECIAL OFFER</Button>

                    </Typography>
                    <Typography

                      gutterBottom
                      textAlign="center"
                    >
                      <Typography sx={{ marginTop: "3px", backgroundColor: "#FCB006", borderRadius: '3.9px', width: "58%", position: "relative", width: "108%", height: "22px", fontSize: "8px", color: "white", left: "-40%", border: "2px solid #FDB43C", boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}><CurrencyRupee />500/-OFF</Typography>

                    </Typography>
                    <Typography

                      gutterBottom
                      textAlign="center"
                    >
                      <Button className="btn" variant="contained" sx={{ borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "22px", fontSize: "9px", right: "-10%", boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}>Best Seller</Button>

                    </Typography>
                  </Box>
                  <Box sx={{ justifyContent: "space-around", display: "flex", marginTop: "5%" }}>
                    <Typography
                      marginLeft="-19px" >

                      <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20147.png?alt=media&token=bcf4e4fb-20a0-430f-ac82-10c0fdc9bbe0" alt="logo" />
                    </Typography>
                    <Typography sx={{ fontSize: "11.8px", fontWeight: "bold", marginTop: "15px" }}>
                      <span style={{ color: "#3E30C2" }}> SSC CHSL Tier 1 & 2 </span>  (Target CHSL 2023)
                      <Typography sx={{ fontSize: "11.8px", fontWeight: "bold" }}>
                        1 year Course
                      </Typography>
                      <Typography sx={{ fontSize: "11.8px", fontWeight: "bold", color: "#3E30C2" }}>
                        365 daya Validity
                      </Typography>
                      <Box sx={{ justifyContent: "space-between", display: "flex" }}>
                        <Typography

                          gutterBottom
                          textAlign="center"
                        >
                          <Button disabled sx={{ color: "#919191", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "11.8px", textDecorationLine: "line-through" }}><CurrencyRupee />10000</Button>

                        </Typography>
                        <Typography

                          gutterBottom
                          textAlign="center"
                        >
                          <Typography sx={{ backgroundColor: "#FFCD5C", borderRadius: '3.9px', width: "58%", position: "relative", width: "130%", height: "19.01px", fontSize: "11.8px", border: "2px solid #FDB43C" }}>20 % OFF</Typography>

                        </Typography>
                        <Typography

                          gutterBottom
                          textAlign="center"
                        >
                          <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px" }}>8000</Button>

                        </Typography>
                      </Box>
                      <Box sx={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>
                        <Typography

                          gutterBottom
                          textAlign="center"
                          sx={{ fontSize: "10px", color: "#000" }}
                        >
                          Special offer apllied successfully

                        </Typography>

                        <Typography

                          gutterBottom
                          textAlign="center"
                        >

                          <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px" }}><CurrencyRupee /> 8000</Button>
                          <hr style={{ marginTop: "-3px", marginBottom: "0px", color: "#000" }} />
                        </Typography>
                      </Box>
                      <Box sx={{ justifyContent: "right", display: "flex" }}>
                        <Typography

                          gutterBottom
                          textAlign="center"
                          sx={{ fontSize: "11.8px", color: "#000", fontWeight: "bold" }}
                        >
                          Total Amount

                        </Typography>

                        <Typography

                          gutterBottom
                          textAlign="center"
                        >
                          <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px", border: "2px solid #00ff00" }}>7500</Button>

                        </Typography>
                      </Box>
                    </Typography>
                  </Box >

                </CardContent>
                <CardActions
                  style={{ justifyContent: "center" }}
                >
                  <Button className='btn' variant="contained" sx={{ marginTop: "15px", fontSize: "13px", background: "#3E30C2" }}>Buy Olanger Course</Button>
                </CardActions>
              </Card>
            </Box>

          </div>
          <div className="coursesmallbox" style={{ display: "flex", marginLeft: "1160px", marginTop: "100px" }}>
            <Box sx={{ maxWidth: "140%" }} >
              <Card
                variant="outlined"
                sx={{
                  borderRadius: "0px",
                  width: "320px",

                  marginTop: "-20px",
                  boxShadow: "-2px -2px 10px #D8DFF8, 2px 2px 10px #D8DFF8",
                  backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Background.png?alt=media&token=bf10a5f5-0314-4149-a95f-daf6c59c9efc')",
                  backgroundSize: "350px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <CardContent>
                  <Box sx={{ justifyContent: "space-between", display: "flex" }}>

                    <Typography

                      gutterBottom
                      textAlign="center"
                    >
                      <Button className='side-arrrow' variant="contained" sx={{ backgroundColor: "#4578C8", borderRadius: "10px", position: "relative", width: "100%", height: "19px", fontSize: "7px", left: "-10%", boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}>SPECIAL OFFER</Button>

                    </Typography>
                    <Typography

                      gutterBottom
                      textAlign="center"
                    >
                      <Typography sx={{ marginTop: "3px", backgroundColor: "#FCB006", borderRadius: '3.9px', width: "58%", position: "relative", width: "108%", height: "22px", fontSize: "8px", color: "white", left: "-40%", border: "2px solid #FDB43C", boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}><CurrencyRupee />500/-OFF</Typography>

                    </Typography>
                    <Typography

                      gutterBottom
                      textAlign="center"
                    >
                      <Button className="btn" variant="contained" sx={{ borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "22px", fontSize: "9px", right: "-10%", boxshadow: "2px 5.16842px 5.16842px rgba(0, 0, 0, 0.25)" }}>Best Seller</Button>

                    </Typography>
                  </Box>
                  <Box sx={{ justifyContent: "space-around", display: "flex", marginTop: "5%" }}>
                    <Typography
                      marginLeft="-19px" >

                      <img src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20147.png?alt=media&token=bcf4e4fb-20a0-430f-ac82-10c0fdc9bbe0" alt="logo" />
                    </Typography>
                    <Typography sx={{ fontSize: "11.8px", fontWeight: "bold", marginTop: "15px" }}>
                      <span style={{ color: "#3E30C2" }}> SSC CHSL Tier 1 & 2 </span>  (Target CHSL 2023)
                      <Typography sx={{ fontSize: "11.8px", fontWeight: "bold" }}>
                        1 year Course
                      </Typography>
                      <Typography sx={{ fontSize: "11.8px", fontWeight: "bold", color: "#3E30C2" }}>
                        365 daya Validity
                      </Typography>
                      <Box sx={{ justifyContent: "space-between", display: "flex" }}>
                        <Typography

                          gutterBottom
                          textAlign="center"
                        >
                          <Button disabled sx={{ color: "#919191", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "11.8px", textDecorationLine: "line-through" }}><CurrencyRupee />10000</Button>

                        </Typography>
                        <Typography

                          gutterBottom
                          textAlign="center"
                        >
                          <Typography sx={{ backgroundColor: "#FFCD5C", borderRadius: '3.9px', width: "58%", position: "relative", width: "130%", height: "19.01px", fontSize: "11.8px", border: "2px solid #FDB43C" }}>20 % OFF</Typography>

                        </Typography>
                        <Typography

                          gutterBottom
                          textAlign="center"
                        >
                          <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px" }}>8000</Button>

                        </Typography>
                      </Box>
                      <Box sx={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>
                        <Typography

                          gutterBottom
                          textAlign="center"
                          sx={{ fontSize: "10px", color: "#000" }}
                        >
                          Special offer apllied successfully

                        </Typography>

                        <Typography

                          gutterBottom
                          textAlign="center"
                        >

                          <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px" }}><CurrencyRupee /> 8000</Button>
                          <hr style={{ marginTop: "-3px", marginBottom: "0px", color: "#000" }} />
                        </Typography>
                      </Box>
                      <Box sx={{ justifyContent: "right", display: "flex" }}>
                        <Typography

                          gutterBottom
                          textAlign="center"
                          sx={{ fontSize: "11.8px", color: "#000", fontWeight: "bold" }}
                        >
                          Total Amount

                        </Typography>

                        <Typography

                          gutterBottom
                          textAlign="center"
                        >
                          <Button sx={{ color: "#000", borderRadius: '3.9px', width: "100%", position: "relative", width: "100%", height: "19.01px", fontSize: "13px", border: "2px solid #00ff00" }}>7500</Button>

                        </Typography>
                      </Box>
                    </Typography>
                  </Box >

                </CardContent>
                <CardActions
                  style={{ justifyContent: "center" }}
                >
                  <Button className='btn' variant="contained" sx={{ marginTop: "15px", fontSize: "13px", background: "#3E30C2" }}>Buy Olanger Course</Button>
                </CardActions>
              </Card>
            </Box>

          </div>

        </div >
        {/* ) )}  */}
      </>
    )
  }
}


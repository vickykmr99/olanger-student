import React, { Component } from 'react'
import "../../Instruction/Components/instructionn.css";
import { Button, Container, Grid, Avatar ,Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import WestIcon from '@mui/icons-material/West';
import InstructionNav from "../../../pages/Instruction/Components/instructionNav";
import Testseriesviewdetails from '../../static/Testseries/Component/Testseriesviewdetails';
// import Avatar from '@mui/material/Avatar';
import avatar from "../../../images/Iconpro.svg";


export default class instruction extends Component {
  // componentDidMount() {
    // console.log("qqqqqqqqqqqq", this.props.instruction.all_question_by_quiz)
    // this.props.viewExamQuestion(this.props.instruction.all_question_by_quiz)
// }
  render() {
    return (
      <Grid style={{overflowY:"hidden"}}>
        <InstructionNav/>
      <Grid className="instruction--page1-container">

        {/* left side  */}
        <Grid className="instruction--page1-leftside">

          <Grid className="instruction--page1-leftside-container">
            <Typography className='instruction--page1-heading'>General Instruction:</Typography>
            <Grid  style={{}}>
              <Grid classname="instruction--page1-first-heading-content1" >
                <Typography style={{marginBottom:"2%"}} >1.
                  The clock will be set at the server. The countdown timer at the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You need not terminate the examination or submit your paper.</Typography>
              </Grid>

              <Grid classname="instruction--page1-first-heading-content2">
                <Grid> <Typography style={{marginBottom:"15px"}}>2.
                  The Question palette displayed on the right side of screen will show the status of each question using one of the following symbols.
                </Typography></Grid>

                <Grid>
                  <Box>
                    <Typography style={{marginBottom:"10px"}}><span className="for-square1-symbol">fgg</span> You have not visited the question yet.</Typography>
                    <Typography style={{marginBottom:"10px"}}><span className="for-second-symbol">fgg</span> You have not answered the question.</Typography>
                    <Typography style={{marginBottom:"10px"}}><span className="for-third-symbol">fgg</span> You have answered the question.</Typography>
                    <Typography style={{marginBottom:"10px"}}><span className="for-fourth-symbol">fgg</span> You have not answered the question, but have marked the question for review.</Typography>
                    <Typography style={{marginBottom:"10px"}}><span className="for-fifth-symbol"> ✓ </span> You have answered the question, but marked it for review.</Typography>
                  </Box>
                </Grid>
                <Grid>
                  <Typography className='after-fifth'>
                    The Mark For Review status for a question simply indicates that you would like to look at that question is answered, but marked for review, then the answer will be considered for evaluation unless the status is modified by the candidate.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className="instruction--page1-ntaQC">
                <Typography className="instruction--page1-ntaQ"> Navigating to a Question:</Typography>
                <Typography style={{marginBottom:"10px"}}>3.To answer a question, do the following:</Typography>
                <Grid>

                </Grid>

                <Grid className="instruction--procedure-part-content" >
                  <Typography style={{marginBottom:"10px"}}>1. Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.</Typography>

                  <Typography style={{marginBottom:"10px"}}>2. Click on <span className="save-next">Save & Next</span> to save your answer for the current question and then go to the next question.</Typography>
                  <Typography style={{marginBottom:"15px"}}>3. Click on <span className="save-next">Mark for Review & Next </span>to save your answer for the current question and also mark it for review, and then go the next question.</Typography>



                </Grid>
                <Grid> <Typography style={{marginBottom:"20px"}}>Note that your answer for the current question will not be saved, if you navigate to another question directly by clicking on a question number without saving the answer to previous question.</Typography></Grid>
                <Grid>
                  <Typography>You can view all the questions by clicking on the Question Paper button.<span className="for-red-text">This feature is provided, so that if you want you can just see the entire question paper at a glance.</span>
                  </Typography>

                </Grid>

              </Grid>

              <Grid className="instruction-AnsQ">
                <Typography className="instruction--page1-ntaQ">Answering a Question:</Typography>

                <Grid >
                  <Typography style={{marginBottom:"15px"}}>4. Procedure for answering a multiple choice (MCQ) type question:</Typography>
                </Grid>
                <Grid className="instruction--procedure-part-content" >
                  <Typography style={{marginBottom:"15px"}}>1. Choose one answer from 4 options (A,B,C,D) given below the question, click on the bubble placed before the chosen option.</Typography>


                  <Typography style={{marginBottom:"15px"}}>2. To deselect your choosen answer, click on the bubble of choosen option again or click on the Clear Response button.</Typography>


                  <Typography style={{marginBottom:"15px"}}>3. To change your chosen  answer , click on the bubble of another option</Typography>



                  <Typography style={{marginBottom:"15px"}}>4. To save Your chosen answer,you MUST click on the Save & Next </Typography>

                </Grid>

              </Grid>

              <Grid className="instruction--procedure-part">
                <Grid>
                  <Typography style={{marginBottom:"15px"}}>5. Procedure for answering a numerical answer tyoe question:</Typography>
                </Grid>
                <Grid className="instruction--procedure-part-content">
                  <Typography style={{marginBottom:"15px"}}>1. To enter a number as your answer, use the virtual numerical keypad.</Typography>
                  <Typography style={{marginBottom:"15px"}}>2. A fraction (e.g. -0.3 or -.3) can be entered as an anser with or without "0" before the decimal point.<span className="for-red-text"> As many as four decimal points, e.g. 12.5435 or 0.003 or -932.6711 or 12.81 can be entered.</span></Typography>
                  <Typography style={{marginBottom:"15px"}}>3.To clear your answer, click on the  Clear Response</Typography>
                  <Typography style={{marginBottom:"15px"}}>4. To save your anser, you MUST click on the Save & Next</Typography>
                </Grid>

              </Grid>

              <Grid>
                <Typography style={{marginBottom:"15px"}}>6.To mark a question for review, click on the Mark for Review & Next button. If an answer is selected (for MCQ/MCAQ) entered (for numerical answer type) for a question that is  Mark for Review, that answer will be considered in the evaluation unless the status is modified by the candidate. </Typography>
              </Grid>
              <Grid>
                <Typography style={{marginBottom:"15px"}}> 7.To change your answer to a question that has already been answeres, first select that question for answering that type of question.</Typography>
              </Grid>
              <Grid>
                <Typography style={{marginBottom:"15px"}}> 8.Note that ONLY Questions for which answers are saved or marked for review after answering will be considered for evaluation.</Typography>
              </Grid>
              <Grid>
                <Typography style={{marginBottom:"15px"}}> 9.Sections in this question paper are displayed on the top bar of the screen. Questions in a Section can be viewed by clicking on the name of that Section. The Section you are currently viewing will be highlighted. </Typography>
              </Grid>
              <Grid>
                <Typography style={{marginBottom:"15px"}}> 10.After clicking the Save & Next button for thr last question in a Section, you will automatically be taken to the first question of the next Section in sequence.</Typography>
              </Grid>
              <Grid>
                <Typography style={{marginBottom:"15px"}}>11.You can move the mouse cursor over the name of a Section to view the ansering status for that Section. </Typography>
              </Grid>
            </Grid>


          </Grid>

          <Grid className="bottom-left-part">
            <Grid className="instruction--page-1-fixedbutton">
              <Grid>       
                <a href="/Testseriesviewdetails" style={{textDecoration:"none"}}>
                 <Typography className="westcon"><WestIcon /> Go to Tests
              </Typography>
              </a>
              </Grid>

              <a href="/instructionpage2">
              <Grid>
                <Button variant="contained" className="next-btnn">Next</Button>
              </Grid>
              </a>


            </Grid>
          </Grid>

        </Grid>


        {/* right side */}
        <Grid className="instruction--page1-rightside" >
          <Grid style={{textAlign:"center",paddingTop:"70px"}}>
            {/* <Avatar src="/broken-image.jpg" className="instruction--page1-rightside-avtar1" /> */}
            <img src={avatar} className='avatar-logo'/>
            <Typography className="user-name-instruction">Priya .Arya</Typography>
          </Grid>
        </Grid>

        {/* <Grid className="instruction--page-1-fixedbutton">

        <Typography className="westcon"><WestIcon/> Go to Tests                               
          <Button variant="contained">Next</Button></Typography>
          
        </Grid> */}
      </Grid>

      
      </Grid>
    )
  }
}


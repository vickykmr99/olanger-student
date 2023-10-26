import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid, Box } from "@mui/material";
import Image1 from "../../../../images/Group 528.png";
import Image2 from "../../../../images/Group 531.png";
import Image3 from "../../../../images/Group 524.png";
import Image4 from "../../../../images/Group 478.png";



export default class CardPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      isShowMore: false,
      isShowMore1: false,
      isShowMore2: false,
      isShowMore4: false,
      // cardData: [
      //   { 
      //     title: "Complete syllabus with clear course design",
      //     description:
      //       "Each course is divided into 5 sections:  (I) Foundation:Chapter-wise Video & PDF followed by quizzes. ",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20528.png?alt=media&token=8d29c437-ef08-4ccb-a633-a37ff3c16999",

      //   },
      //   {
      //     title: "Systematic but flexible Learning Path",
      //     description:
      //       "Video, pdf, quiz & test series are designed in a systematic learning path to ace your exam efficiently. Here, each course comprises 5 sections:- Foundation, In-depth Course, Prev. Year Discussion, Trend analysis and Test Series. However, you can start with any section without any order as courses are designed with flexibility.  ",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20531.png?alt=media&token=95efd22c-c74e-4ec6-899f-4eb7d3e01169",
      //     expanded: false, 
      //   },
      //   {
      //     title: "Advanced Analytics Advanced",
      //     description:
      //       "Learning path analytics gives course progress report. Competitive Index ai analyze chapter-wise strength and weakness of tests and recommends whether you should revise the current chapter or move forward.  Trend analytics makes pattern of last 3 years questions.",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20524.png?alt=media&token=ccff856e-aff5-4dc8-9a5b-641ad68322e4",
      //     expanded: false,
      //   },
      //   {
      //     title: "Comprehensive test series",
      //     description:
      //       "Get mock tests (chapter-wise, sectional & full mock, mini mock, level-up mock, and many more), previous-year tests, trend tests, and live test series to maximize your score with an all-round approach.",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20478.png?alt=media&token=78c99b83-d1d6-466f-bfbd-cc15cb394299",
      //     expanded: false, 
      //   },
      // ],
    };
  }

  // handleCardExpand = (index) => {
  //   const cardData = [...this.state.cardData];
  //   cardData[index].expanded = !cardData[index].expanded;
  //   this.setState({ cardData });
  // };



  toggleReadMoreLess = () => {
    this.setState((prevState) => ({
      isShowMore: !prevState.isShowMore,
    }));
  };

  toggleReadMoreLess1 = () => {
    this.setState((prevState) => ({
      isShowMore1: !prevState.isShowMore1,
    }));
  };
  toggleReadMoreLess2 = () => {
    this.setState((prevState) => ({
      isShowMore2: !prevState.isShowMore2,
    }));
  };

  toggleReadMoreLess3 = () => {
    this.setState((prevState) => ({
      isShowMore3: !prevState.isShowMore3,
    }));
  };



  render() {
    const {
      common,
      home,
      snackbar,
      close_snack_bar
    } = this.props;

    const { isShowMore ,isShowMore1,isShowMore2,isShowMore3} = this.state;
    return (
      <div>
        {/* {common.isHome === true &&<Grid container spacing={1} style={{ display: "flex", justifyContent: "center" ,gap: "104px",flexDirection: "row",padding: "40px 88px",width:"100%"}}>
        {this.state.cardData.map((data, index) => (
          
          <Grid
            key={index}
            sx={{ maxWidth: 250, flex: 1 }}
            className="card-part"
          >
            <Grid>
              <CardMedia
                component="img"
                // height="200"
    ,width:"100%",maxWidth:"240px"            // width="10"
                image={data.image}
                alt="card image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  // variant="h5"
                  component="div"
                  textAlign="center"
                  style={{color:"#141226",fontWeight:"bold"}}
                >
                  {data.title}
                </Typography>
                {data.expanded ? (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    {data.description}
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ textOverflow: "ellipsis" }}
                  >
                    {data.description.slice(0, 80) + "..."}
                  </Typography>
                )}
              </CardContent>
            </Grid>
            <CardActions style={{ justifyContent: "flex-end" }}>
              <Button
                size="small"
                color="primary"
                className="btn-effect"
                style={{ color: "#3E30C2",textDecorationLine:"underline",textTransform:"capitalize",textDecoration:"none",backgroundColor:"#fff",fontWeight:"normal" }}
                onClick={() => this.handleCardExpand(index)}
              >
                {data.expanded ? "...Show Less" : "Read More..."}
              </Button>
            </CardActions>
          </Grid>
        ))}
      </Grid>} */}

        <Grid style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", gap: "30px", margin: "5%", marginTop: "7%" }}>

          <Grid style={{ textAlign: "center" }}>
            <img src={Image1} style={{ height: "200px",width:"100%",maxWidth:"240px" }} />

            <Grid style={{ textAlign: "center", marginTop: "3%" }}>
              <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#141226", paddingBottom: "7px" }}>Complete syllabus with clear course design</Typography>
              <Typography>Each course is divided into 5 sections: </Typography>
              {isShowMore && (
              <Grid style={{ textAlign: "left", marginTop: "1%" }}>
                <Typography style={{ color: "#4A4958", marginTop: "2%" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#141226" }}>(I) Foundation:</span> <br />
                  Chapter-wise Video & PDF followed by quizzes.
                </Typography>
                <Typography style={{ color: "#4A4958", marginTop: "2%" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#141226" }}>
                    (II) Indepth Course</span> <br />
                  In-depth PDFs which contain chapter-wise trend questions of last 5 years followed by quizzes
                </Typography>
                <Typography style={{ color: "#4A4958", marginTop: "2%" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#141226" }}>
                    (III) Prev. year questions PDF discussion</span> <br />

                </Typography>
                <Typography style={{ color: "#4A4958", marginTop: "2%" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#141226" }}>

                    (IV)Trend analysis powered by Examys ai GPT</span> <br />
                  Explore questions trend for a particular exam with Examys ai GPT.<br />

                  Examples: (a) 10 algebra trend of CGL of last 5 years.
                  (b) 10 current affairs trend of SBI PO of last 3 years.
                </Typography>

                <Typography style={{ color: "#4A4958", marginTop: "2%" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#141226" }}>

                    (V)Test Series</span> <br />
                  Access to unlimited chapter-wise, trend, sectional, full length mock, Previous year & live test series.<br />


                </Typography>
                <Typography style={{ color: "#4A4958", marginTop: "2%" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#141226" }}>

                    Note:</span> <br />
                  All courses are supported by <strong>"Course Journey"</strong>  and <strong>Examy ai GPT.</strong><br />


                </Typography>









                .
              </Grid>
              )}
            </Grid>

            <CardActions style={{ justifyContent: "flex-end" }}>
              <Button
                size="small"
                color="primary"
                className="btn-effect"
                style={{ color: "#3E30C2", textDecorationLine: "underline", textTransform: "capitalize", textDecoration: "none", backgroundColor: "#fff", fontWeight: "normal" }}
                onClick={this.toggleReadMoreLess}>

                {isShowMore ? "Show Less" : "Read More"}
              
              </Button>
            </CardActions>
          </Grid>


          <Grid style={{ textAlign: "center" }}>
            <img src={Image2} style={{ height: "200px",width:"100%",maxWidth:"240px" }} />

            <Grid style={{ textAlign: "center", marginTop: "3%" }}>
              <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#141226", paddingBottom: "7px" }}>Systematic but flexible Learning Path</Typography>
              <Typography style={{ fontSize: "16px", fontWeight: "400", color: "#3E3D4D", padding: "0px 5px" }}>
                Video, pdf, quiz & test series are designed in a systematic learning 
                </Typography>
                {isShowMore1 && (
                <Typography> 
                path to ace your exam efficiently. Here, each course comprises 5 sections:- Foundation, In-depth Course, Prev. Year Discussion, Trend analysis and Test Series. However, you can start with any section without any order as courses are designed with flexibility.
              </Typography>
                )}
            </Grid>

            <CardActions style={{ justifyContent: "flex-end" }}>
              <Button
                size="small"
                color="primary"
                className="btn-effect"
                style={{ color: "#3E30C2", textDecorationLine: "underline", textTransform: "capitalize", textDecoration: "none", backgroundColor: "#fff", fontWeight: "normal" }}
                onClick={this.toggleReadMoreLess1}>

                {isShowMore1 ? "Show Less" : "Read More"}
              </Button>
            </CardActions>

          </Grid>


          <Grid style={{ textAlign: "center" }}>
            <img src={Image3} style={{ height: "200px",width:"100%",maxWidth:"240px" }} />
            <Grid style={{ textAlign: "center", marginTop: "3%" }}>
              <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#141226", paddingBottom: "7px" }}>Advanced analytics</Typography>
              <Typography style={{ fontSize: "16px", fontWeight: "400", color: "#3E3D4D", padding: "0px 5px" }}>
                Each Course has a "Course Journey" section which anlalyse your 
                </Typography>

                {isShowMore2 && (
                  // this box used for content show more button 
                  <Box>
                <Typography> 
                "foundation" + "In-depth course" and  "Examys ai GPT" section which provides questions trend to boost your efficiency.

              </Typography>

              <Box style={{ textAlign: "left", marginTop: "1%" }}>
                <Typography style={{ color: "#4A4958", marginTop: "2%" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#141226" }}>

                    Course Journey:</span> <br />

                </Typography>
                <Grid >
                  <Typography style={{ color: "#4A4958" }}>(1) How is your foundation?:  Here you can gauge your strong and weak area of any subject.</Typography><br />
                  <Typography style={{ color: "#4A4958" }}>(2) Are you in the competition?:  You can know this by  "Competitive Index" which will analyse "In-depth Course".</Typography><br />
                  <Typography style={{ color: "#4A4958" }}>(3) Progress Report: "Learning path analytics" gives course progress report.</Typography>
                </Grid>
              </Box>

              <Box style={{ textAlign: "left", marginTop: "1%" }}>
                <Typography style={{ color: "#4A4958", marginTop: "2%" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#141226" }}>


                    Examys AI GPT:</span> <br />

                </Typography>
                <Typography style={{ color: "#4A4958" }}>
                  Trend analysis for questions trend for particular exam powered by Examys ai GPT.
                </Typography>
              </Box>
              </Box>
                )}

            </Grid>

            <CardActions style={{ justifyContent: "flex-end" }}>
              <Button
                size="small"
                color="primary"
                className="btn-effect"
                style={{ color: "#3E30C2", textDecorationLine: "underline", textTransform: "capitalize", textDecoration: "none", backgroundColor: "#fff", fontWeight: "normal" }}
                onClick={this.toggleReadMoreLess2}>

                {isShowMore2 ? "Show Less" : "Read More"}
              </Button>
            </CardActions>
          </Grid>


          <Grid style={{ textAlign: "center" }}>
            <img src={Image4} style={{ height: "200px",width:"100%",maxWidth:"240px" }} />
            <Grid style={{ textAlign: "center", marginTop: "3%" }}>
              <Typography style={{ fontSize: "20px", fontWeight: "600", color: "#141226", paddingBottom: "7px" }}>Comprehensive test series</Typography>

              <Typography style={{ fontSize: "16px", fontWeight: "400", color: "#3E3D4D", padding: "0px 29px" }}>
                Get mock tests (chapter-wise, sectional & full mock, mini mock,
              </Typography >

              {isShowMore3 && (
                <Typography style={{ fontSize: "16px", fontWeight: "400", color: "#3E3D4D", padding: "0px 29px" }}>
                  level-up mock, and many more), previous-year tests, trend tests, and live test series to maximize your score with an all-round approach.
                </Typography>
              )}


            </Grid>





            <CardActions style={{ justifyContent: "flex-end" }}>
              <Button
                size="small"
                color="primary"
                className="btn-effect"
                style={{ color: "#3E30C2", textDecorationLine: "underline", textTransform: "capitalize", textDecoration: "none", backgroundColor: "#fff", fontWeight: "normal" }}
                onClick={this.toggleReadMoreLess3}>

                {isShowMore3 ? "Show Less" : "Read More"}
              </Button>
            </CardActions>

            {/* <CardActions style={{ justifyContent: "flex-end" }}>
              <Button
                size="small"
                color="primary"
                className="btn-effect"
                style={{ color: "#3E30C2",textDecorationLine:"underline",textTransform:"capitalize",textDecoration:"none",backgroundColor:"#fff",fontWeight:"normal" }}
                onClick={() => this.handleCardExpand()}
              >
                {expanded ? "...Show Less" : "Read More..."}
              </Button>
            </CardActions> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

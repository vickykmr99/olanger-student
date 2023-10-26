import React, { Component } from 'react'






import ReactCoverCarousel from 'react-cover-carousel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';
import ComponentCarousel from 'react-awesome-component-carousel';
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CountUp from 'react-countup';
import { width } from '@mui/system'
import { ListItem, List, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import "../common/footer/footer.css";
import banner from "../../../../images/banner.jpg";
import { CurrencyRupee } from "@mui/icons-material";
import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import image1 from "../../../../images/profile-tict.png";

// componentDidMount(){

// }
// render() {
//   const {
//     home,
//   } = this.props;


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(8),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: "100px",
  width: "20vw"

}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "100px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "100px" }}
      onClick={onClick}
    />
  );
}
// const component1 = () => (
//   <div>
//     {Array.isArray(home.all_banner) &&
//       home.all_banner.map((e, index) => (
//         <img
//           key={index}
//           className="image"
//           src={e.banner}
//           style={{ height: "600px", width: '100%' }}
//         />
//       ))}
//   </div>
// );
const component2 = () => (
  <div >
    <img src={banner} style={{ height: "600px", width: '100%' }} />

  </div>
);
const component3 = () => (
  <div>
    <img src={banner} style={{ height: "600px", width: '100%' }} />

  </div>
);
const components = [component2, component3];
const allOfYourImages = [




  // <div>
  //   <img src={banner} style={{ }} />
  //   <img className='slide' src={banner} style={{ marginTop: "-50px", width: "260px", height: "190px", }} />

  // </div>,



];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yPos: 0,
      coursesinstd: [
        {
          titlestd: "SSC CGl Tier 1 & tier 2 ",
          focusstd: "(Focus Package)",
          descriptionstd: "All SSC exams in one package",
          durationstd: "Duration : 1 year",
          targetstd: "(Target 2023-24)",
          lessonbenefitstd:
            " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          suppstd: "Supported by Examys ai & Course Training",
          oldpricestd: "12,000",
          newpricestd: "8000",
          buttonTextstd: "View Details",
        },
        {
          titlestd: "SSC CGl Tier 1 & tier 2 ",
          focusstd: "(Focus Package)",
          descriptionstd: "All SSC exams in one package",
          durationstd: "Duration : 1 year",
          targetstd: "(Target 2023-24)",
          lessonbenefitstd:
            " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          suppstd: "Supported by Examys ai & Course Training",
          oldpricestd: "12,000",
          newpricestd: "8000",
          buttonTextstd: "View Details",
        },
        {
          titlestd: "SSC CGl Tier 1 & tier 2 ",
          focusstd: "(Focus Package)",
          descriptionstd: "All SSC exams in one package",
          durationstd: "Duration : 1 year",
          targetstd: "(Target 2023-24)",
          lessonbenefitstd:
            " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          suppstd: "Supported by Examys ai & Course Training",
          oldpricestd: "12,000",
          newpricestd: "8000",
          buttonTextstd: "View Details",
        },
        {
          titlestd: "SSC CGl Tier 1 & tier 2 ",
          focusstd: "(Focus Package)",
          descriptionstd: "All SSC exams in one package",
          durationstd: "Duration : 1 year",
          targetstd: "(Target 2023-24)",
          lessonbenefitstd:
            " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          suppstd: "Supported by Examys ai & Course Training",
          oldpricestd: "12,000",
          newpricestd: "8000",
          buttonTextstd: "View Details",
        },
        {
          titlestd: "SSC CGl Tier 1 & tier 2 ",
          focusstd: "(Focus Package)",
          descriptionstd: "All SSC exams in one package",
          durationstd: "Duration : 1 year",
          targetstd: "(Target 2023-24)",
          lessonbenefitstd:
            " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          suppstd: "Supported by Examys ai & Course Training",
          oldpricestd: "12,000",
          newpricestd: "8000",
          buttonTextstd: "View Details",
        },
        {
          titlestd: "SSC CGl Tier 1 & tier 2 ",
          focusstd: "(Focus Package)",
          descriptionstd: "All SSC exams in one package",
          durationstd: "Duration : 1 year",
          targetstd: "(Target 2023-24)",
          lessonbenefitstd:
            " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          suppstd: "Supported by Examys ai & Course Training",
          oldpricestd: "12,000",
          newpricestd: "8000",
          buttonTextstd: "View Details",
        },
        {
          titlestd: "SSC CGl Tier 1 & tier 2 ",
          focusstd: "(Focus Package)",
          descriptionstd: "All SSC exams in one package",
          durationstd: "Duration : 1 year",
          targetstd: "(Target 2023-24)",
          lessonbenefitstd:
            " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          suppstd: "Supported by Examys ai & Course Training",
          oldpricestd: "12,000",
          newpricestd: "8000",
          buttonTextstd: "View Details",
        },
        {
          titlestd: "SSC CGl Tier 1 & tier 2 ",
          focusstd: "(Focus Package)",
          descriptionstd: "All SSC exams in one package",
          durationstd: "Duration : 1 year",
          targetstd: "(Target 2023-24)",
          lessonbenefitstd:
            " “Foundation & In-Depth” Course +Trend Analysis & Prev. Year Discussions + Test Series",
          benefitstd: "(Video Lessons + PDFs + Quizzes + Doubt Clear)",
          suppstd: "Supported by Examys ai & Course Training",
          oldpricestd: "12,000",
          newpricestd: "8000",
          buttonTextstd: "View Details",
        },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ yPos: window.pageYOffset });
  }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };
    const settingss = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };
    const msettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    const { yPos } = this.state;
    const style = {
      transform: `translateY(${yPos}px)`
    };



    return (


      <div>
        <div className='desktop'>
          <div style={{ width: '100%', height: '80vh', position: 'relative', overflow: "hidden" }} >
            <ComponentCarousel
              transition={'slide'}
              transitionDuration={0.3}

              auto
              autoDuration={3}
              coolOff={6}

              components={components}

            />

<Grid pt="65px" container style={{ marginTop: "10%", marginBottom: "10%" }}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <Grid
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "75px",
              backgroundColor: "#FBDCD9",
              padding: "24px",
              border: "2px",
            }}
          >
            <img
              style={{
                alignSelf: "center",
                marginLeft: "4%",
                marginTop: "5%",
                width: "72px",
                height: "72px",
              }}
              src={image1}
            />
          </Grid>
          <Grid>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "32px",
                fontWeight: "600",
                lineHeight: "48px",
              }}
            >
              Students Special
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "28px",
                fontWeight: "600",
                lineHeight: "42px",
              }}
            >
              Prepare Govt. job with Semister
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "20.8px",
              }}
            >
              Make your foundation strong while in college and when you pass
              out, be ready for govt. exams.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "5%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <Grid>

            <Typography className="midheaing">Are you a student?:</Typography>
            <Typography className="middesc">
              Are you continuing your study?
            </Typography>
            <Typography className="middesc">
              Examys rolls out special course for you.
            </Typography>

          </Grid>

          <Grid className="listctrl">
            <Typography className="midheaing">Each course contains:</Typography>
            <ul>
              <li className="middesc" style={{ lineHeight: 2 }}><span style={{ color: "#201E31", fontSize: '16px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px', fontFamily: 'poppins' }}>Extended</span> Foundation</li>
              <li className="middesc" style={{ lineHeight: 2 }}>In-depth Course & Trend questions{" "}
                <br />
                powered by<span style={{ color: "#201E31", fontSize: '16px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px', fontFamily: 'poppins' }}>Examys ai</span></li>


              <li className="middesc" style={{ lineHeight: 2 }}>Previous year paper</li>
              <li className="middesc" style={{ lineHeight: 2 }}>Test Series</li>
            </ul>
          </Grid>


          <Grid>
            <Typography className="midheaing">
              Special Course & Validity:
            </Typography>
            <Typography className="middesc">
              Selected focus/power/Combined Packages{" "}
            </Typography>
            <Typography className="middesc">
              Course Validity - 1/2/3 Years
            </Typography>

          </Grid>

        </Grid>


        {/* video section */}
        <Grid item xs={12} style={{ marginTop: "5%" }}>
          <center>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#340101",
                width: "340px",
                height: "80px",
                gap: "8px",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "26px",
                }}
              >
                Video Section
              </Typography>
            </Button>
          </center>
        </Grid>

        <Grid container xs={12} spacing={1} mt={2} display={"flex"} direction="row">
          {this.state.coursesinstd.map((item) => {
            return (
              <Grid item xs={6} sm={4} md={3} m={0}>
                <Box sx={{ maxWidth: 530, margin: "1%" }}>
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: "20.9494px",
                      marginTop: "20px",
                      borderColor: "black",
                      boxShadow:
                        "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)",
                      border: "1.5px solid black",
                      marginLeft: "5%",
                    }}
                  >
                    <CardContent>
                      {/* <Box style={{marginLeft:"6%"}}> */}
                      <Typography
                        sx={{ fontSize: "18.85px",marginLeft:"3%", fontWeight: "600" }}
                        gutterBottom
                        
                      >
                        {item.titlestd}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "#6C60E1",
                
                          fontStyle: "italic",
                          fontWeight: "500",
                        }}
                      >
                        {item.focusstd}
                      </Typography>
                      {/* </Box> */}
                      <Typography
                        sx={{ fontSize: 14 }}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontWeight: "500",
                        }}
                        gutterBottom
                        textAlign="center"
                      >
                        {" "}
                        <span
                          style={{ color: "red", fontSize: "5px" }}
                          sx={{ fontSize: 1 }}
                        >
                          <AccessTimeIcon />
                        </span>
                        {item.durationstd}{" "}
                        <span style={{ color: "#F96255", fontWeight: "600" }}>
                          {item.targetstd}
                        </span>
                      </Typography>
                      <Card
                        className="cards"
                        variant="outlined"
                        sx={{
                          borderRadius: "16px",
                          border: "2px solid lightgray",
                        }}
                        style={{ width: "100%" }}
                      >
                        <CardContent style={{ width: "100%" }}>
                          <Typography
                            sx={{
                              fontSize: 14,
                              fontWeight: "400",
                              lineHeight: "23.04px",
                            }}
                            gutterBottom
                            textAlign="center"
                          >
                            {item.lessonbenefitstd}
                          </Typography>

                          <Typography
                            sx={{ fontSize: 11 }}
                            style={{
                              width: "100%",
                              color: "grey",
                              fontWeight: "500",
                             textAlign:"center"
                            }}
                          >
                            {item.benefitstd}
                          </Typography>
                        </CardContent>
                      </Card>
                      <Typography
                        style={{
                          fontSize: "11px",
                          marginLeft: "7%",
                          fontWeight: "500",
                          color: "#4A4958",
                        }}
                      >
                        {item.suppstd}
                      </Typography>
                    </CardContent>

                    <CardActions
                      style={{ justifyContent: "space-between", gap: "10px", display: "flex" }}
                    >
                      <Box
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textDecoration: "line-through",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "grey",
                          }}
                          textAlign="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          <CurrencyRupee
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              color: "grey",
                              // marginLeft:"10%"
                            }}
                          />
                          {item.oldpricestd}
                        </Typography>

                        <Typography
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "green",
                            fontSize: "14px",
                            fontWeight: "500",
                            marginLeft:"15px" ,
                          }}
                          textAlign="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          <CurrencyRupee
                            marginTop="10%"
                            style={{ fontSize: "14px", fontWeight:600,marginLeft:"" }}
                          />
                          {item.newpricestd}
                        </Typography>

                      </Box>
                      <Link to="/viewdetails" style={{ textDecoration: "none" }}>
                        <button variant="contained" style={{padding:"5px",fontWeight:"500"}}  className="btn ctrl">
                          {item.buttonTextstd}
                        </button>
                      </Link>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
          </div>






        </div>


      </div>

    )
  }
}

export default App;
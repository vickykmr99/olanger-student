import React, { Component } from 'react'
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import "./pdf.css";
export default class pdfhome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfhome: [
        {
          title: "SSC CHSL Prev. Year",
        },
        {
          title: "SSC CHSL Prev. Year",
        },
        {
          title: " SSC CHSL Prev. Year",
        },
        {
          title: "SSC CHSL Prev. Year",
        },
        {
          title: "SSC CHSL Prev. Year",
        },
        {
          title: "SSC CHSL Prev. Year",
        },
  
  
  
      ],
  
      PopularQuestions: [
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/kindpng_1298591%201.png?alt=media&token=d1804319-f92b-48d5-af7e-84bfddd8d6d2",
          title: "SSC",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Indian_Railway_Logo_2%201.png?alt=media&token=79fb838a-8f1b-4901-b5d6-45fb3dcf5c93",
          title: "Railway",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/kindpng_1298591%201.png?alt=media&token=d1804319-f92b-48d5-af7e-84bfddd8d6d2",
          title: "Banking",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/image%2072.png?alt=media&token=db4aebe7-6934-4fb9-b87f-2895d63bc621",
          title: "Teaching",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/image%2073.png?alt=media&token=705508fb-23c0-47d9-aee7-ac6c715fb91b",
          title: "Defence",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/kindpng_1298591%201.png?alt=media&token=d1804319-f92b-48d5-af7e-84bfddd8d6d2",
          title: "State Goverment",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/kindpng_1298591%201.png?alt=media&token=d1804319-f92b-48d5-af7e-84bfddd8d6d2",
          title: "NVS/ Sainik School",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/kindpng_1298591%201.png?alt=media&token=d1804319-f92b-48d5-af7e-84bfddd8d6d2",
          title: "GATE ",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20210.png?alt=media&token=136ae7d4-7b7f-4a0d-9730-c44a212b2fb0",
          title: "IIT JEE",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/kindpng_1298591%201.png?alt=media&token=d1804319-f92b-48d5-af7e-84bfddd8d6d2",
          title: "MBA",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20210.png?alt=media&token=136ae7d4-7b7f-4a0d-9730-c44a212b2fb0",
          title: "NEET",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20209%20(2).png?alt=media&token=77cb8f32-95fa-46b5-83dd-c74b9f4bcd7b",
          title: "CLAT",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20209%20(2).png?alt=media&token=77cb8f32-95fa-46b5-83dd-c74b9f4bcd7b",
          title: "JE & AE",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20210.png?alt=media&token=662762de-31de-4ada-9f48-e3e4e74f2393",
          title: "NET",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20209%20(2).png?alt=media&token=77fc99f6-33f1-435a-9639-ea8b5439269a",
          title: "CUET",
        },
      ],
      showCards: 6
    };
  }
  
  render() {
    const { PopularQuestions, showCards } = this.state;
    const showMore = showCards < PopularQuestions.length;
    const showLess = showCards > 6;
    const Search = styled("div")(({ theme }) => ({
      position: "relative",
   
      borderRadius: "4px",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
     
      marginRight: theme.spacing(2),

      width: "10%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "35%",
      },
    }));
    const SearchIconWrapper = styled("div")(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "10%",

        [theme.breakpoints.up("md")]: {
          width: "65ch",
        },
      },
    }));
    return (


      <div className="pdfpage">
        <div class="pdfsidebar" >


          <a href="#SSC" style={{ borderBottom: "solid", borderColor: "#F96255", fontWeight: "bolder", WebkitTextFillColor: "blue" }}>All</a>

          <a href="#SSC">SSC</a>
          <a href="#services">Railway</a>
          <a href="#Banking & Insurance">Banking & Insurance</a>
          <a href="#Teaching">Teaching</a>
          <a href="#Defence">Defence</a>
          <a href="#NET">NET</a>
          <a href="#UPSC  & State PSC">UPSC  & State PSC</a>
          <a href="#State Government Exam">State Government Exam</a>
          <a href="#E & AE">JE & AE</a>
          <a href="#GATE">GATE</a>
          <a href="#MBA">MBA</a>
          <a href="#IIT JEE">IIT JEE</a>
          <a href="#NEET">NEET</a>
          <a href="#CLAT">CLAT</a>
          <a href="#contact">NVS/Sainik School</a>
          <a href="#contact">CUET</a>

        </div>
        <div class="main">

          <Stack
            spacing={1}
            direction="row"
            sx={{
              justifyContent: "center",
              borderRadius: "90px",
              padding: "25px",
            }}
          >

          </Stack>
          <Box className="pinkbox" >
            <Typography className='pinkboxtext' sx={{ fontSize: 40 }}>Download Previous year PDF Questions and PDF solutions

            </Typography>
            <Search sx={{
              justifyContent: "space-around",
              mt: 1,
              boxShadow: 1,
              // borderRadius: "5px",
              backgroundColor: "#fff"
            }} style={{
              marginLeft: "6%",
              marginTop: "240px",
            }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                style={{ width: "100%" }}
                placeholder="Search for any previous year paper"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Typography
              sx={{ fontSize: 29 }}
              gutterBottom
              textAlign="right" style={{ marginTop: "-17%", marginRight: "17%" }}
            >
              <img style={{ marginLeft: 42 }} src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%2029.png?alt=media&token=8cd49f21-b9df-4551-a07b-fb8bbc9aaf74" alt="image" />
            </Typography>
          </Box>

        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "31%"
        }}>
          {this.state.pdfhome.reduce((rows, pdfhome, index) => {
            if (index % 3 === 0) rows.push([]);
            rows[rows.length - 1].push(pdfhome);
            return rows;
          }, []).map((row, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "3%",
                marginLeft: "19%",
                width: "80%",
              }}
              key={index}
            >
              {row.map((pdfhome, index) => (
                <Box sx={{ maxWidth: 275 }} >
                  <Box sx={{ maxWidth: 1200 }} style={{ boxshadow: " 2px 7px 24px rgba(142, 142, 142, 0.16)" }}>
                    <Card
                      key={index}
                      variant="inlined"
                      sx={{ borderRadius: "1px", marginTop: "20px" }}
                    >
                      <CardContent>
                        <Box sx={{ justifyContent: "space-between", display: "flex" }}>
                          <Typography
                            sx={{ fontSize: 29 }}
                            gutterBottom
                            textAlign="center"
                          >

                            <img style={{ marginLeft: 42 }} src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/image%2029.png?alt=media&token=672de0d6-1111-4a07-9dbe-bf3dc5a52d72" alt="image" />
                          </Typography>
                          <Typography
                            sx={{ fontSize: 14 }}
                            gutterBottom
                            textAlign="center"
                          >

                          </Typography>
                        </Box>
                        <Typography
                          sx={{ fontSize: 14, fontWeight: "bold" }}
                          gutterBottom
                          textAlign="center"
                        >
                          {pdfhome.title}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {pdfhome.description}
                        </Typography>
                        <Box className="orangebox" >
                          Total 60 Previous Year Pdf</Box>

                        <button class="btnlanguage" style={{ fontWeigh: "bold", color: " #737FF5", marginLeft: "32%" }}>English</button>
                        <button className="btnlanguage" style={{ fontWeigh: "bold", color: " #737FF5", marginLeft: "2%" }} > Hindi</button>

                        <Typography
                          sx={{ fontSize: 15, marginTop: "10%", fontWeight: "bold" }}
                          gutterBottom
                          textAlign="center"
                          fontWeigh="bold"
                        >
                          For Tier I
                        </Typography>
                        <button class="btnyr" style={{ fontWeigh: "bold", color: " #141226", marginLeft: "2%" }}>2022</button>
                        <button className="btnyr" style={{ fontWeigh: "bold", color: " #141226" }} > 2021</button>
                        <button class="btnyr" style={{ fontWeigh: "bold", color: "#141226" }}>2020</button>
                        <button className="btnyr" style={{ fontWeigh: "bold", color: "#141226" }} > 2019</button>
                        <button class="btnyr" style={{ fontWeigh: "bold", color: " #141226" }}>2018</button>

                        <Box className="bluebox" >
                          Total 40 Previous Year Pdf</Box>

                        <Typography
                          sx={{ fontSize: 15, marginTop: "6%", fontWeight: "bold" }}
                          gutterBottom
                          textAlign="center"
                          fontWeigh="bold"
                        >
                          For Tier II
                        </Typography>

                        <button class="btnyr" style={{ fontWeigh: "bold", color: " #141226", marginLeft: "15%" }}>2022</button>
                        <button className="btnyr" style={{ fontWeigh: "bold", color: " #141226" }} > 2021</button>
                        <button class="btnyr" style={{ fontWeigh: "bold", color: "#141226" }}>2020</button>

                        <Box className="bluebox" >
                          Total 20 Previous Year Pdf</Box>
                      </CardContent>

                    </Card>
                  </Box>
                </Box>
              ))}
            </div>
          ))}
        </div>


        <Grid style={{
          maxWidth: "1400px",
          marginTop: '30px',
          margin: '70px auto',
          textAlign: 'center'
        }}>
          <Typography variant="h5" component="div" >
            <div style={{
              maxWidth: "1400px",
              marginTop: '30px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <Box color="white"
                bgcolor="#7469DF"
                p={1}

              >
                Some Popular Previous Year Question Papers
              </Box>
            </div>

          </Typography>
          {/* <Box classname="darkbluebox"></Box> */}
          <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {PopularQuestions.reduce((rows, PopularQuestion, index) => {
            if (index % 3 === 0) rows.push([]);
            rows[rows.length - 1].push(PopularQuestion);
            return rows;
          }, []).slice(0, Math.ceil(showCards / 3)).map((row, index) => (
            <Grid
              container
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "50px",
              }}
              key={index}
            >
              {row.map((PopularQuestion, index) => (
                <Grid item key={index}>
                  <Box className="Explorebox" display="flex">
                    <Box className="imagebox">
                      <img src={PopularQuestion.img} />
                      <Typography
                        sx={{
                          fontSize: 15,
                          marginTop: "4%",
                          fontWeight: "bold",
                          justifyContent: "center",
                        }}
                        style={{
                          fontfamily: "Poppins",
                          fontsize: "35px",
                          fontweight: "600",
                          marginTop: "17%",
                          textAlign: "center",
                        }}
                      >
                        {PopularQuestion.title}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>

        {showMore && (
          <Button
            sx={{ ml: 1 }}
            style={{
              color: "#fff",
              padding: "7px 27px 7px 27px",
              backgroundColor: "#7469DF",
              margin: "50px 0",
              width:"17%",
              maxheight:"17px",
            }}
            variant="contained"
            onClick={() =>
              this.setState((prevState) => ({
                showCards: prevState.showCards + 6,
              }))
            }
          >
            Explore more
          </Button>
        )}

        {showLess && (
          <Button
            sx={{ ml: 1 }}
            style={{
              color: "#fff",
              padding: "7px 27px 7px 27px",
              backgroundColor: "#7469DF",
              margin: "50px 0",
            }}
            variant="contained"
            onClick={() =>
              this.setState({
                showCards: 6,
              })
            }
          >
            showLess
          </Button>
        )}
        </Grid>


      </div >
    );
  }
}
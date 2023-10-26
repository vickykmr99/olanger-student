import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import WindowIcon from "@mui/icons-material/Window";
import GroupsIcon from "@mui/icons-material/Groups";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Courses.css";

export default class Courses extends Component {
  state = {
    courses: [
      {
        title: "SSC CHSL Test Series For Tier I & II (New Exam Pattern)",
        description: " Total 500 Tests",

        buttonText: "View Details",
      },
      {
        title: "SSC GD Constable 2022(New Exam Pattern)",
        description: "Total 500 Tests",

        buttonText: "View Details",
      },
      {
        title: " SSC Reasoning Previous Year Question Mock Test",
        description: "Total 500 Tests",

        buttonText: "View Details",
      },
      {
        title: "SSC Reasoning Previous Year Question Mock Test",
        description: "Total 500 Tests",

        buttonText: "View Details",
      },
    ],
  };

  render() {
    const { home, snackbar, close_snack_bar } = this.props;

    var settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div
        style={{
          background: "linear-gradient(180deg, #FFFFFF 58.12%, #FFE0F1 100%)",
        }}
      >
        <Typography variant="h5" component="div" marginTop="3%">
          <span style={{ fontWeight: "bold", marginLeft: "5%" }}>
            {" "}
            Test Series You Like{" "}
          </span>
        </Typography>
        <Stack
          spacing={3}
          direction="row"
          sx={{
            justifyContent: "center",
            borderRadius: "50px",
            padding: "32px",
          }}
        >
          <Button
            className="btn"
            sx={{ ml: 1 }}
            style={{ backgroundColor: "#3E30C2" }}
            variant="contained"
          >
            SSC
          </Button>
          <Button
            className="btn"
            sx={{ ml: 1 }}
            style={{ backgroundColor: "#3E30C2" }}
            variant="contained"
          >
            Railway
          </Button>
          <Button
            className="btn"
            sx={{ ml: 1 }}
            style={{ backgroundColor: "#3E30C2" }}
            variant="contained"
          >
            Banking & Insurance
          </Button>
          <Button
            className="btn"
            sx={{ ml: 1 }}
            style={{ backgroundColor: "#3E30C2" }}
            variant="contained"
          >
            DEFENCE
          </Button>
        </Stack>

        <div className="smallbox" style={{ display: "flex" }}>
          {this.state.courses.map((course, index) => (
            <Box sx={{ maxWidth: 275 }}>
              <Card
                className="smallbox2"
                key={index}
                variant="outlined"
                sx={{
                  borderRadius: "0px",
                  marginTop: "20px",
                  borderColor: "Highlight black",
                  boxshadow: "-2px -2px 10px #D8DFF8, 2px 2px 10px #D8DFF8",
                }}
              >
                <CardContent>
                  <Box
                    sx={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="center"
                    >
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20147.png?alt=media&token=bcf4e4fb-20a0-430f-ac82-10c0fdc9bbe0"
                        alt="logo"
                      />
                    </Typography>
                    <Typography gutterBottom textAlign="center">
                      <Button
                        sx={{
                          borderRadius: "16px",
                          width: "100%",
                          position: "relative",
                          width: "100%",
                          height: "45%",
                        }}
                        variant="outlined"
                        style={{
                          fontweight: "bolder",
                          color: "black",
                          borderColor: "#3E30C2",
                          fontSize: 10,
                          background: " #EEEEEE",
                          marginTop: "9%",
                        }}
                        startIcon={<GroupsIcon />}
                      >
                        122.5K Users
                      </Button>
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    textAlign="center"
                    fontWeight="bold"
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    textAlign="center"
                  >
                    <span style={{ color: "black" }}>
                      {" "}
                      {course.description}
                    </span>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      (15 free test)
                    </span>
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    textAlign="center"
                  >
                    {course.duration}
                  </Typography>

                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      <span
                        style={{
                          color: "#F06B60",
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        English, Hindi{" "}
                      </span>{" "}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      - 200 Chapter Test
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                      - 100 Sectional Test
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}>
                      - 50 Full Length Tests
                    </Typography>

                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                      - 100 Previous Year Test
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                      - 100 Trend Test
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      <span
                        style={{ color: "red", width: "1px" }}
                        sx={{ fontSize: 14 }}
                      >
                        - 100 Trend Test
                      </span>
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions
                  style={{ justifyContent: "center", marginTop: "-20px" }}
                >
                  <Button
                    className="btn"
                    variant="contained"
                    startIcon={
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/grp%20icon.png?alt=media&token=b620c528-4e37-4a6c-b36a-b1a8442ce407"
                        alt="icon"
                      />
                    }
                  >
                    {course.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </div>

        <hr style={{ marginTop: "15px", marginBottom: "20px" }} />

        <div className="smallbox" style={{ display: "flex" }}>
          {this.state.courses.map((course, index) => (
            <Box sx={{ maxWidth: 275 }}>
              <Card
                className="smallbox2"
                key={index}
                variant="outlined"
                sx={{
                  borderRadius: "0px",
                  marginTop: "20px",
                  borderColor: "Highlight black",
                  boxshadow: "-2px -2px 10px #D8DFF8, 2px 2px 10px #D8DFF8",
                }}
              >
                <CardContent>
                  <Box
                    sx={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="center"
                    >
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20147.png?alt=media&token=bcf4e4fb-20a0-430f-ac82-10c0fdc9bbe0"
                        alt="logo"
                      />
                    </Typography>
                    <Typography gutterBottom textAlign="center">
                      <Button
                        sx={{
                          borderRadius: "16px",
                          width: "100%",
                          position: "relative",
                          width: "100%",
                          height: "45%",
                        }}
                        variant="outlined"
                        style={{
                          fontweight: "bolder",
                          color: "black",
                          borderColor: "#3E30C2",
                          fontSize: 10,
                          background: " #EEEEEE",
                          marginTop: "9%",
                        }}
                        startIcon={<GroupsIcon />}
                      >
                        122.5K Users
                      </Button>
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    textAlign="center"
                    fontWeight="bold"
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    textAlign="center"
                  >
                    <span style={{ color: "black" }}>
                      {" "}
                      {course.description}
                    </span>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      (15 free test)
                    </span>
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    textAlign="center"
                  >
                    {course.duration}
                  </Typography>

                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      <span
                        style={{
                          color: "#F06B60",
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        English, Hindi{" "}
                      </span>{" "}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      - 200 Chapter Test
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                      - 100 Sectional Test
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}>
                      - 50 Full Length Tests
                    </Typography>

                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                      - 100 Previous Year Test
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                      - 100 Trend Test
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      <span
                        style={{ color: "red", width: "1px" }}
                        sx={{ fontSize: 14 }}
                      >
                        - 100 Trend Test
                      </span>
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions
                  style={{ justifyContent: "center", marginTop: "-20px" }}
                >
                  <Button
                    className="btn"
                    variant="contained"
                    startIcon={
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/grp%20icon.png?alt=media&token=b620c528-4e37-4a6c-b36a-b1a8442ce407"
                        alt="icon"
                      />
                    }
                  >
                    {course.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </div>
        <hr style={{ marginTop: "15px", marginBottom: "20px" }} />

        <div className="smallbox" style={{ display: "flex" }}>
          {this.state.courses.map((course, index) => (
            <Box sx={{ maxWidth: 275 }}>
              <Card
                className="smallbox2"
                key={index}
                variant="outlined"
                sx={{
                  borderRadius: "0px",
                  marginTop: "20px",
                  borderColor: "Highlight black",
                  boxshadow: "-2px -2px 10px #D8DFF8, 2px 2px 10px #D8DFF8",
                }}
              >
                <CardContent>
                  <Box
                    sx={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="center"
                    >
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Ellipse%20147.png?alt=media&token=bcf4e4fb-20a0-430f-ac82-10c0fdc9bbe0"
                        alt="logo"
                      />
                    </Typography>
                    <Typography gutterBottom textAlign="center">
                      <Button
                        sx={{
                          borderRadius: "16px",
                          width: "100%",
                          position: "relative",
                          width: "100%",
                          height: "45%",
                        }}
                        variant="outlined"
                        style={{
                          fontweight: "bolder",
                          color: "black",
                          borderColor: "#3E30C2",
                          fontSize: 10,
                          background: " #EEEEEE",
                          marginTop: "9%",
                        }}
                        startIcon={<GroupsIcon />}
                      >
                        122.5K Users
                      </Button>
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    textAlign="center"
                    fontWeight="bold"
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    textAlign="center"
                  >
                    <span style={{ color: "black" }}>
                      {" "}
                      {course.description}
                    </span>
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      (15 free test)
                    </span>
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    textAlign="center"
                  >
                    {course.duration}
                  </Typography>

                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      <span
                        style={{
                          color: "#F06B60",
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        English, Hindi{" "}
                      </span>{" "}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      - 200 Chapter Test
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                      - 100 Sectional Test
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}>
                      - 50 Full Length Tests
                    </Typography>

                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                      - 100 Previous Year Test
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                      - 100 Trend Test
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      gutterBottom
                      textAlign="left"
                    >
                      <span
                        style={{ color: "red", width: "1px" }}
                        sx={{ fontSize: 14 }}
                      >
                        - 100 Trend Test
                      </span>
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions
                  style={{ justifyContent: "center", marginTop: "-20px" }}
                >
                  <Button
                    className="btn"
                    variant="contained"
                    startIcon={
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/grp%20icon.png?alt=media&token=b620c528-4e37-4a6c-b36a-b1a8442ce407"
                        alt="icon"
                      />
                    }
                  >
                    {course.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </div>
        <CardActions style={{ justifyContent: "center", marginTop: "25px" }}>
          <Button className="btn" variant="contained">
            Explore All Test Series
          </Button>
        </CardActions>
      </div>
    );
  }
}

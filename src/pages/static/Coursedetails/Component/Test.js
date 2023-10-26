import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CurrencyRupee } from "@mui/icons-material";
import "./course.css";
export default class Coursedetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          title: "SSC + Railway + Banking ",
          description: "All SSC exams in one package",
          duration: "Duration : 1 year (Target 2023-24)",
          price: "12,000",
          buttonText: "View Details",


        },
        {
          title: "SSC + Railway + Banking ",
          description: "All Railway exams in one package",
          duration: "Duration : 6 months (Target 2023)",
          price: "6,000",
          buttonText: "View Details",

        },
        {
          title: "SSC + Railway + Banking ",
          description: "All Banking & Insurance package",
          duration: "Duration : 9 months (Target 2023-24)",
          price: "9,000",
          buttonText: "View Details",

        },
        {
          title: "Teaching",
          description: "All Teaching exams in one package",
          duration: "Duration : 1 year (Target 2023-24)",
          price: "10,000",
          buttonText: "View Details",



        },

      ],


    };
  }
  componentDidMount() {
    this.props.viewAllPackageGroupBypCategory();
    this.props.viewAllCategory();
    // console.log("hiiiiiii",this.props.home.all_package_by_category)

  }

  render() {

    const {
      common,
      home,
      snackbar,
      close_snack_bar
    } = this.props;
    return (
      <div className="coursepage">
        <div>
          <Grid>
            <Typography
              style={{ fontSize: 40, alignItems: "center" }}
              line-height="58px"
            > Courses </Typography>
          </Grid>

          <div class="coursecard" >

            <a href="#SSC" style={{ borderBottom: "solid", borderColor: "#F96255", fontWeight: "bolder", WebkitTextFillColor: "blue" }}>All</a>
            {home.all_category.map((c, index) => (
              <a href="#SSC">{c.category_name}</a>

            ))}
          </div>
        </div>
        <div className="main">

          <Grid>
            <Typography classname="border" variant="h5" component="div">
              <div>
                <Box color="white"
                  bgcolor="tomato" p={1}
                >
                  Combined Packages
                </Box>
              </div>
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>

              {this.state.courses.map((course, index) => (
                <Box >
                  <Card
                    key={index}
                    variant="outlined"
                    sx={{ borderRadius: "20.9494px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14, fontWeight: "bold" }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.title}
                      </Typography>
                      {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                      <Typography
                        sx={{ fontSize: 14 }}
                        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        gutterBottom
                        textAlign="center"
                      >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                        Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                      </Typography>
                      <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                        <CardContent style={{ width: "100%" }}>
                          <Typography
                            sx={{ fontSize: 14 }}
                            gutterBottom
                            textAlign="center"
                          >
                            “Foundation & In-Depth” Course
                          </Typography>
                          <Typography
                            sx={{ fontSize: 13 }}
                            gutterBottom
                            textAlign="center"
                          >
                            Trend Analysis & Prev. Year Discussions
                          </Typography>
                          <Typography
                            sx={{ fontSize: 14 }}
                            gutterBottom
                            textAlign="center"
                          >
                            {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                            Test Series
                          </Typography>
                          <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                            (Video Lessons + PDFs + Quizzes + Doubt Clear)
                          </Typography>
                        </CardContent>
                      </Card>
                      <Typography
                        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        textAlign="center"
                        sx={{ fontWeight: "bold" }}
                      ><CurrencyRupee marginTop="10%" />
                        {course.price}
                      </Typography>

                    </CardContent>
                    <CardActions
                      style={{ justifyContent: "center", marginTop: "-20px" }}
                    >
                      <Button variant="contained" className="btn">{course.buttonText}</Button>
                    </CardActions>
                  </Card>
                </Box>
              ))}
            </div>
          </Grid>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>

                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>



          <hr style={{ marginTop: "15px", marginBottom: "20px" }} />
          <Typography variant="h5" component="div">
            <div style={{
              marginLeft: '40%',
              marginTop: '30px',
              width: '30%'
            }}>
              <Box color="white"
                bgcolor="tomato" p={1}
                marginRight="-90%"
                marginLeft="-115%">
                Power Packages
              </Box>
            </div>

          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>

          <hr style={{ marginTop: "15px", marginBottom: "20px" }} />

          <Typography variant="h5" component="div">
            <div style={{
              marginLeft: '40%',
              marginTop: '30px',
              width: '30%'
            }}>
              <Box color="white"
                bgcolor="tomato" p={1}
                marginRight="-90%"
                marginLeft="-115%">
                Focus Packages
              </Box>
            </div>

          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <hr style={{ marginTop: "15px", marginBottom: "20px" }} />

          <Typography variant="h5" component="div">
            <div style={{
              marginLeft: '40%',
              marginTop: '30px',
              width: '30%'
            }}>
              <Box color="white"
                bgcolor="tomato" p={1}
                marginRight="-90%"
                marginLeft="-117%">
                Sectional Packages
              </Box>
            </div>

          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>


          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
          sx={{ fontSize: 14 }}
          gutterBottom
          textAlign="center"
        >
          {course.description}
        </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
              sx={{ fontSize: 14 }}
              gutterBottom
              textAlign="center"
            >
              {course.description}
            </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    <Button variant="contained" className="btn">{course.buttonText}</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "5%" }}>

            {this.state.courses.map((course, index) => (
              <Box sx={{ maxWidth: 510, maxHeight: 350 }} >
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "311px", borderRadius: "20.9494px", height: "281.77px", marginTop: "20px", borderColor: "black", boxShadow: "4.18987px 4.18987px 4.18987px rgba(0, 0, 0, 0.25)" }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      gutterBottom
                      textAlign="center"
                    >
                      {course.title}
                    </Typography>
                    {/* <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        textAlign="center"
                      >
                        {course.description}
                      </Typography> */}
                    <Typography
                      sx={{ fontSize: 14 }}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      gutterBottom
                      textAlign="center"
                    >  <span style={{ color: "red", fontSize: "5px" }} sx={{ fontSize: 1 }}><AccessTimeIcon /></span>
                      Duration : 6 months <span style={{ color: "#F96255" }}>(Target 2023)</span>
                    </Typography>
                    <Card className="cards" variant="outlined" sx={{ borderRadius: "16px" }} style={{ width: "100%" }}>
                      <CardContent style={{ width: "100%" }}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          “Foundation & In-Depth” Course
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13 }}
                          gutterBottom
                          textAlign="center"
                        >
                          Trend Analysis & Prev. Year Discussions
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          gutterBottom
                          textAlign="center"
                        >
                          {/* <span style={{color:"red", width:"1px"}} sx={{ fontSize: 10 }}><AccessTimeIcon/></span>    */}
                          Test Series
                        </Typography>
                        <Typography sx={{ fontSize: 11 }} style={{ width: "100%" }}>
                          (Video Lessons + PDFs + Quizzes + Doubt Clear)
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    ><CurrencyRupee marginTop="10%" />
                      {course.price}
                    </Typography>

                  </CardContent>
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "-20px" }}
                  >
                    {/* <Button variant="contained" className="btn">
                      <Link to="./CombinePackage" style={{textDecoration:"none"}}>
          <div className={`header-link ${selected === '{course.buttonText}' ? 'selected' : ''}`} onClick={() => this.handleLinkClick('{course.buttonText}')}>
           
            {this.state.selected!=="{course.buttonText}"} </div></Link>
                  
                        </Button> */}
                  </CardActions>
                </Card>
              </Box>
            ))}
          </div>

        </div>

      </div>

    );
  }
}

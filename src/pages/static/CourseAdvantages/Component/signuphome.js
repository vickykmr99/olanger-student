import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Stack,
    Menu,
    MenuItem,
    Box,
    Grid,
    Card,
    Chip,
  } from "@mui/material";
 
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CurrencyRupee } from "@mui/icons-material";
import GroupsIcon from '@mui/icons-material/Groups';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./signuphome.css";
import Coursebtn from '../Container/coursebtnCont';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import "./focus.css"

const responsive = {

  superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
  },
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
};

export default class signuphome extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          banner_name: "",
          banner_url: "",
          package_id: "",
         
        courses: [
         
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
    
    

        signuphome: [
    
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
        PDF: [

            {
              // image1:
              //     "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/images%2FVector%20(2).png?alt=media&token=bfd97eb2-9d66-44cb-8867-d6a53401c95d",
              
              buttonText: "SSC CHSL Prev. YearQuestion PDF & Question with Answer PDF",
              duartion:"2020-2020",
              price:"150 Full Sets for Tier |"
              
              
              
              
            },
            {
              // image2:
              // "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/images%2FVector%20(2).png?alt=media&token=bfd97eb2-9d66-44cb-8867-d6a53401c95d",
              
              
              buttonText: "SSC CHSL Prev. Year  Question PDF & Question with Answer PDF",
              
              
              price:"150 Full Sets for Tier |",
              duartion:"2020-2020"
            },
            {
              // image3:
              // "https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/images%2FVector%20(2).png?alt=media&token=bfd97eb2-9d66-44cb-8867-d6a53401c95d",
              
              
              
              buttonText: "SSC CHSL Prev. Year  Question PDF & Question with Answer PDF",
              
              duartion:"2020-2020",
              price:"150 Full Sets for Tier |"
             
             
            },
           
          ],
        };
      
        
    };

    componentDidMount() {
      this.props.viewAllPackageGroupByCategory(this.props.home.category_id);
      console.log("category",this.props.home.category_id);

  }


  render() {
    const  settings = {
        dots: true, // add this line to enable the dots
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const {
        common,
        home,
        snackbar,
        close_snack_bar
    } = this.props;
      
      return (

        <div style={{background: "linear-gradient(180deg, #FFFFFF 60.23%, rgba(255, 226, 226, 0.6) 93.56%)"}}>
            <Typography style={{ fontWeight: "bolder", fontSize: 28, marginLeft: "4%" }}>Courses You Like</Typography>
            <Coursebtn />

          
                      
                    
            {home.all_package_by_category.map((c,index)=>(
               
                    <div >
           
                      
                                <div style={{ marginTop: "5%" }}>
                                    <Typography variant="h5" component="div" marginLeft="5%" fontWeight={"500"} marginBottom={"5%"} >
                                        
                                        {c.packagecategory_name}
                                        <span
                                            style={{ color: "#3E30C2", fontWeight: "100", fontStyle: "italic" }}
                                        >
                                            <a href="http://lea.verou.me" class="center">(Explore all {c.packagecategory_name} )</a>
                                        </span>
                                    </Typography>

                                   
                                    <Carousel swipeable={false}
                                        draggable={false}
                                        //   showDots={true}

                                        responsive={responsive}
                                        ssr={true} // means to render carousel on server-side.
                                        infinite={true}
                                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                        autoPlaySpeed={2000}
                                        keyBoardControl={true}
                                        //   customTransition="all .5"
                                        //   transitionDuration={500}
                                        containerClass="carousel-container"
                                        removeArrowOnDeviceType={["tablet", "mobile"]}
                                    //   deviceType={this.props.deviceType}
                                    //   dotListClass="custom-dot-list-style"
                                    //   itemClass="carousel-item-padding-40-px"
                                    >
                                        {/* {this.state.courses.map((c, index) => ( */}
                                        {c.package_details.map((row)=>(
                                        <div className='card'>
                                            <p style={{ textAlign: "center", fontWeight: "bolder" }}>{
                                            row.package_name
                                            }<br></br>
                                                {/* {c.description} */}
                                            </p>
                                            {/* <p></p> */}
                                            <p style={{ textAlign: "center" }}><i class="fa fa-clock-o" style={{ color: "#f96255" }} ></i>Duration : {row.package_duration} <span style={{ color: "#f96255", fontWeight: "bold" }}>
                                                (Target 2023-24)
                                                </span></p>
                                            <div className='cards'
                                            >
                                                <p style={{ textAlign: "center", color: "#000", fontWeight: 400, fontSize: 14 }}>“Foundation & In-Depth” Course<br></br>Trend Analysis & Prev. Year Discussions</p>
                                                <p style={{ textAlign: "center", color: "#000", fontWeight: 400, fontSize: 14 }}>Test Series</p>
                                                <p style={{ textAlign: "center", color: "#000", fontWeight: 400, fontSize: 11 }}>(Video Lessons + PDFs + Quizzes + Doubt Clear) </p>

                                            </div>
                                            <p className='price' style={{ textAlign: "center", color: "#000", fontWeight: "bolder", fontSize: 16 }}> ₹{row.package_price}</p>
                                            <center>


                                                
                                                <Link
                                                 to = {{ pathname:"/CombinePackage"
                                                // state: { package_id: d._id }
                                        }}
                                                >
                                                <button className='btn' style={{ backgroundColor: "#3E30C2", color: "white", fontWeight: "bolder", border: "1px solid #3E30C2", borderRadius: 10, marginBottom: "15px" }}
                                                
                                                onClick={() => {
                                                     this.props.set_package_id(row._id) 

                                                    }}

                                                >View Details</button>
                                                </Link>
                                            </center>
                                        </div>
                                        ))}

                                    </Carousel>
                                    


                                    <hr style={{ color: "#72717D", width: "98%", marginLeft: 10, border: "2px solid #000" }}></hr>
                                </div>
                                </div>
                
            ) )}
            {/* ))} */}



            <center style={{marginBottom:"10%"}}>
      <Link smooth to={`/Coursedetails#top`} >
      <Button  style={{backgroundColor: "#3E30C2",weight:"100%",padding:"10px 10px 10px 60px",color:"white"}}>
        <Typography style={{fontWeight:"inherit",marginLeft:"-40px"}}>
          
        Explore All
          </Typography>
          </Button>
          </Link>

    </center>


        </div>
    )
}
}

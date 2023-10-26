import React, { Component } from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Stack } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./Courses.css"



export default class coursebtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButtonIndex:0,
            imageUrl: null,
            imageAlt: null,
            category_name: "",
            courses: [

                {
                    title: "SSC",
                    description: "All SSC exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "12,000",
                    buttonText: "View Details",
    
    
                },
                {
                    title: "Railway",
                    description: "All Railway exams in one package",
                    duration: "Duration : 6 months (Target 2023)",
                    price: "6,000",
                    buttonText: "View Details",
    
                },
                {
                    title: "Banking & Insurance",
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
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
                    buttonText: "View Details",
    
    
    
                },
                {
                    title: "Teaching",
                    description: "All Teaching exams in one package",
                    duration: "Duration : 1 year (Target 2023-24)",
                    price: "10,000",
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
          

        }
    }

    componentDidMount() {
        this.props.viewAllCategory();
    }
  
  render() {
    const {
        home,
        snackbar,
        close_snack_bar
    } = this.props;
    
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
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
  
    return (
      <div>
        
        <Stack
            spacing={2}
            direction="row"
            sx={{
              justifyContent: "center",
              borderRadius: "0px",
              padding: "5px",
              marginTop:"3%"
            }}
          >
          <starticon  style={{marginTop:"0.5em",paddingLeft:"4em"}}><img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(13).png?alt=media&token=d99ef6e3-36f9-4a10-9361-cabb3ba2ee69' /> </starticon> <Slider {...settings} >
            {home.all_category.map((label, index) => (
            <button style={{border: "2px solid #3E30C2"}}
                                    key={index}
                                    className={index === this.state.selectedButtonIndex ? 'button selectedbtn' : 'button'}
                                    onClick={() =>{ this.setState({ selectedButtonIndex: index });
                                    this.props.set_category_id(label._id);
                                    this.props.viewAllPackageGroupByCategory(label._id); }}
                                >
                                    {label.category_name}
                                    <img src='' />
                                </button>
            ))}
            </Slider>          <starticon   style={{marginTop:"0.5em",marginLeft:"1em"}}><img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(14).png?alt=media&token=a91b51d1-462d-4cb9-9627-81a2be69f205' /> </starticon>
            
           
          </Stack>
         

        
      </div>
    )
  }
}

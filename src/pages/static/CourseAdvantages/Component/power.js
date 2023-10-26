import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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


export default class focuspackage extends Component {
    state = {



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
    };


    render() {
        return (
            <div style={{ marginTop: "5%" }}>
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
                    {this.state.courses.map((c, index) => (
                        <div className='card'>
                            <p style={{ textAlign: "center", fontWeight: "bolder" }}>{c.title}<br></br>
                               {c.description}</p>
                            {/* <p></p> */}
                            <p style={{ textAlign: "center" }}><i class="fa fa-clock-o" style={{ color: "#f96255" }} ></i>Duration : 1 year <span style={{ color: "#f96255", fontWeight: "bold" }}>(Target 2023-24)</span></p>
                            <div className='cards'
                            >
                                <p style={{ textAlign: "center", color: "#000", fontWeight: 400, fontSize: 14 }}>“Foundation & In-Depth” Course<br></br>Trend Analysis & Prev. Year Discussions</p>
                                <p style={{ textAlign: "center", color: "#000", fontWeight: 400, fontSize: 14 }}>Test Series</p>
                                <p style={{ textAlign: "center", color: "#000", fontWeight: 400, fontSize: 11 }}>(Video Lessons + PDFs + Quizzes + Doubt Clear) </p>

                            </div>
                            <p className='price' style={{ textAlign: "center", color: "#000", fontWeight: "bolder", fontSize: 16 }}>₹10000</p>
                            <center>
                                <button className='btn' style={{ backgroundColor: "#3E30C2", color: "white", fontWeight: "bolder", border: "1px solid #3E30C2", borderRadius: 10, marginBottom: "15px" }}>View Details</button>
                            </center>
                        </div>
                    ))}

                </Carousel>
            </div>
        )
    }
}

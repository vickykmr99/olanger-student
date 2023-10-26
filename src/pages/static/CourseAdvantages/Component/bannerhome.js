import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        banner_name: "",
        banner_url: ""

    }
}

componentDidMount() {
    this.props.viewAllBanner();
}
  render() {
    const {
      common,
      home,
      snackbar,
      close_snack_bar
  } = this.props;
    const carouselItems = [
      {
        id: 1,
        title: "Image 1",
        imgUrl:  "https://images.unsplash.com/photo-1669310155716-cdd7646f4c09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
      },
      {
        id: 2,
        title: "Image 2",
        imgUrl:"https://images.pexels.com/photos/1061133/pexels-photo-1061133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 3,
        title: "Image 3",
        imgUrl:"https://images.unsplash.com/photo-1531265726475-52ad60219627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80"
      
      },
    ];

    return (
      <div>
      {common.isHome === true &&
      <Carousel interval={2000} >
        {home.all_banner.map(item => (
          <Carousel.Item key={item._id} >
            <img
             style={{marginTop:"8.1%",width:"100%"}}
              // className="d-block w-100"
              height={"500px"}
              src={item.banner_url}
              alt={item.banner_name}
            />
            {/* <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>Image description goes here</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>}
      </div>
    );
  }
}

export default CarouselComponent;

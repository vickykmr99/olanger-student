import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Home from './Home';

class BannerSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      images: [
        'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?cs=srgb&dl=pexels-abdullah-ghatasheh-1631677.jpg&fm=jpg',
      ],
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        index:
          prevState.index === this.state.images.length - 1
            ? 0
            : prevState.index + 1,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handlePrevClick = () => {
    this.setState((prevState) => ({
      index:
        prevState.index === 0 ? this.state.images.length - 1 : prevState.index - 1,
    }));
  };

  handleNextClick = () => {
    this.setState((prevState) => ({
      index:
        prevState.index === this.state.images.length - 1 ? 0 : prevState.index + 1,
    }));
  };

  render() {
    const { index, images } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <Carousel
          selectedItem={index}
          onChange={(index) => this.setState({ index })}
          interval={3000}
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <ChevronLeft
                onClick={onClickHandler}
                style={{
                  color: '#fff',
                  position: 'absolute',
                  top: '50%',
                  left: '20px',
                  cursor: 'pointer',
                }}
              />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <ChevronRight
                onClick={onClickHandler}
                style={{
                  color: '#fff',
                  position: 'absolute',
                  top: '50%',
                  right: '20px',
                  cursor: 'pointer',
                }}
              />
            )
          }
        >
          {images.map((image) => (
            <div key={image}>
              <img src={image} alt="carousel item" />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(<BannerSlider />, document.querySelector('.BannerSlider'));
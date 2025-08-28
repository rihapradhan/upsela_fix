import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CaseCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                <img
                      src="/images/case-slider1.png"
                      alt=""
                      className="inline-block"
                    />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img
                    src="/images/case-slider1.png"
                    alt=""
                    className="inline-block"
                  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="/images/case-slider1.png" alt=""   className="inline-block"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default CaseCarousel;

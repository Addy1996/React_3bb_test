import React from "react";
import '../Component/Content.css'
import Carousel from 'react-bootstrap/Carousel'
import promot1 from "../img/GIGA-Sim.jpg";
import promot2 from "../img/promot2.png";
import promot3 from "../img/promot3.png";
import promot4 from "../img/promot4.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const contentStyle = {
    height: '767px',
    lineHeight: '160px',
  };

const Carousel_p = ()=> {
    return<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={promot1} alt="promot1" style={contentStyle}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={promot2} alt="promot2" style={contentStyle}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={promot3} alt="promot3" style={contentStyle}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={promot4} alt="promot4" style={contentStyle}
    />
  </Carousel.Item>
</Carousel>
      
       
}
export default Carousel_p ;
import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import s1 from "../img/s1.png";
import s2 from "../img/s2.png";
import s3 from "../img/s3.png";
import s4 from "../img/s4.png";
import s5 from "../img/s5.png";
import s6 from "../img/s6.png";
import s7 from "../img/s7.png";



export default class Carousel_center extends Component {
	render() {
        const settings =  {
            focusOnSelect: true,
            infinite: true,
            centerMode: true,
            centerPadding: 478,
            speed: 100,
      	  	autoplay: true,
			      autoplaySpeed: 8000,
        };
        return (
          <div>
            <style>{cssstyle}</style>
            <Slider { ...settings }>
              <div className ="div-ps">
               <img className="ps" src={s1}/>
              </div>
              <div className ="div-ps">
              <img className="ps" src={s2}/>
              </div>
              <div className ="div-ps">
              <img className="ps" src={s3}/>
              </div>
              <div className ="div-ps">
              <img className="ps" src={s4}/>
              </div>
              <div className ="div-ps">
              <img className="ps" src={s5}/>
              </div>
              <div className ="div-ps">
              <img className="ps" src={s6}/>
              </div>
              <div className ="div-ps">
              <img className="ps" src={s7}/>
              </div>
            </Slider>
          </div>
        );
      }
    }

const cssstyle = `
.container-Carousel-center {
  width:  100%;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
.ps
{
    height: 450px;
    width: auto;
    max-width:1500px;
  
}
.div-ps{ height: auto;
    max-width:300px;
    margin: 0px;
    border: none;
    color: white;
  

}


`
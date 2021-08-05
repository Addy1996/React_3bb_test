import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import promot1 from "../img/promot1.png";
import promot2 from "../img/promot2.png";
import promot3 from "../img/promot3.png";
import promot4 from "../img/promot4.png";
import promot5 from "../img/promot5.png";
import promot6 from "../img/promot6.png";
import promot7 from "../img/promot7.png";
import promot8 from "../img/promot8.png";
import promot9 from "../img/promot9.png";
import promot10 from "../img/promot10.png";
import promot11 from "../img/promot11.png";
import promot12 from "../img/promot12.png";


export default class Carousel_p extends Component {
	render() {
		const settings = {
		
			infinite: true,
			speed: 500,
      		autoplay: true,
			autoplaySpeed: 8000,
			slidesToShow: 1,
			slidesToScroll: 1
      
		};
		return (
			<div className="container-Carousel">
				
				<style>{cssstyle}</style>
				<Slider {...settings}>
					<div>
						<img src={promot1} />
					</div>
					<div>
						<img src={promot2}/>
					</div>
					<div>
						<img src={promot3} />
					</div>
					<div>
						<img src={promot4} />
					</div>
					<div>
						<img src={promot5} />
					</div>
					<div>
						<img src={promot6} />
					</div>
					<div>
						<img src={promot7} />
					</div>
					<div>
						<img src={promot8} />
					</div>
					<div>
						<img src={promot9} />
					</div>
					<div>
						<img src={promot10} />
					</div>
					<div>
						<img src={promot11} />
					</div>
					<div>
						<img src={promot12} />
					</div>

				</Slider>
			</div>
		);
	}
}

const cssstyle = `
.container-Carousel {
  width:  100%;
  z-index: 1;    
 
}

.slick-next:before, .slick-prev:before {
    color: #000;
    
}


`
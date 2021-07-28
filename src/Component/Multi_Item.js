import React, { Component } from 'react';
import Slider from '@bit/akiran.react-slick.slider';
import rp1 from "../img/rp1.jpg";
import rp2 from "../img/rp2.jpg";
import rp3 from "../img/rp3.jpg";
import rp4 from "../img/rp4.jpg";
import wifi6 from "../img/wifi6.jpg";
import p590 from "../img/590.jpg";
import p700 from "../img/700.jpg";
import p690 from "../img/690.jpg";
import '../Component/Multi_Item.css'
export default class Multi_Item extends Component {
	render() {
		const settings = {
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			speed: 1000,
			cssEase: "linear"
		};
const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 60px 60px 60px;
  width: 66%;
  margin-top:-85px;
  margin-left:18%;

}
.slick-next:before, .slick-prev:before {
color: #000;


}
`
		return (
			<div className="container">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
			
	<Slider {...settings}>
	<div className = "card">
	<img className ="rp" src = {rp1}/>
  <h1 className ="h-rp">3BB GIGAFiber</h1>
  <img className ="t-rp" src = {wifi6}/>
  <h2>1 Gbps.</h2><br></br>
  <h3>/ 100 Mbps.</h3>
  <h4>590</h4><br></br>
  <h5>บาท/เดือน</h5>
  <p><button>สมัครแพ็กเกจ</button></p>
	</div>
	<div className = "card">
	<img className ="rp" src = {rp2}/>
  <h1 className ="h-rp">3BB GIGATV ดูฟรี 6 เดือน</h1>
  <img className ="t-rp" src = {p590}/>
  <h2>1 Gbps.</h2><br></br>
  <h3>/ 300 Mbps.</h3>
  <h4>590</h4><br></br>
  <h5>บาท/เดือน</h5>
  <p><button>สมัครแพ็กเกจ</button></p>
	</div>
	<div className = "card">
	<img className ="rp" src = {rp3}/>
  <h1 className ="h-rp">3BB GIGATV ดูฟรี 24 เดือน</h1>
  <img className ="t-rp" src = {p700}/>
  <h2>1 Gbps.</h2><br></br>
  <h3>/ 500 Mbps.</h3>
  <h4>700</h4><br></br>
  <h5>บาท/เดือน</h5>
  <p><button>สมัครแพ็กเกจ</button></p>
	</div>
	<div className = "card">
	<img className ="rp" src = {rp4}/>
  <h1 className ="h-rp">3BB GIGASIM+</h1>
  <img className ="t-rp" src = {p690}/>
  <h2>1 Gbps.</h2><br></br>
  <h3>/ 300 Mbps.</h3>
  <h4>690</h4><br></br>
  <h5>บาท/เดือน</h5>
  <p><button>สมัครแพ็กเกจ</button></p>
	</div>
	<div className = "card">
	<img className ="rp" src = {rp1}/>
  <h1 className ="h-rp">3BB GIGAFiber</h1>
  <img className ="t-rp" src = {wifi6}/>
  <h2>1 Gbps.</h2><br></br>
  <h3>/ 100 Mbps.</h3>
  <h4>590</h4><br></br>
  <h5>บาท/เดือน</h5>
  <p><button>สมัครแพ็กเกจ</button></p>
	</div>
	<div className = "card">
	<img className ="rp" src = {rp2}/>
  <h1 className ="h-rp">3BB GIGATV ดูฟรี 6 เดือน</h1>
  <img className ="t-rp" src = {p590}/>
  <h2>1 Gbps.</h2><br></br>
  <h3>/ 300 Mbps.</h3>
  <h4>590</h4><br></br>
  <h5>บาท/เดือน</h5>
  <p><button>สมัครแพ็กเกจ</button></p>
	</div>
	<div className = "card">
	<img className ="rp" src = {rp3}/>
  <h1 className ="h-rp">3BB GIGATV ดูฟรี 24 เดือน</h1>
  <img className ="t-rp" src = {p700}/>
  <h2>1 Gbps.</h2><br></br>
  <h3>/ 500 Mbps.</h3>
  <h4>700</h4><br></br>
  <h5>บาท/เดือน</h5>
  <p><button>สมัครแพ็กเกจ</button></p>
	</div>
	<div className = "card">
	<img className ="rp" src = {rp4}/>
  <h1 className ="h-rp">3BB GIGASIM+</h1>
  <img className ="t-rp" src = {p690}/>
  <h2>1 Gbps.</h2><br></br>
  <h3>/ 300 Mbps.</h3>
  <h4>690</h4><br></br>
  <h5>บาท/เดือน</h5>
  <p><button>สมัครแพ็กเกจ</button></p>
	</div>
				</Slider>
			</div>
		);
	}
}

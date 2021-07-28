import React, { Component } from 'react';
import Slider from '@bit/akiran.react-slick.slider';
import "../Component/Multi_Item_2.css";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p5 from "../img/p5.jpg";
import p6 from "../img/p6.jpg";
import p7 from "../img/p7.jpg";
import p8 from "../img/p8.jpg";
import p9 from "../img/p9.jpg";
import p10 from "../img/p10.jpg";
import p11 from "../img/p11.jpg";
import p12 from "../img/p12.jpg";
import p13 from "../img/p13.jpg";
import p14 from "../img/p14.jpg";
import p15 from "../img/p15.jpg";
import p16 from "../img/p16.jpg";
import p17 from "../img/p17.jpg";
import p18 from "../img/p18.jpg";
import p19 from "../img/p19.jpg";
import p20 from "../img/p20.jpg";



export default class Multi_Item_2 extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: "linear"
		};
		return (
			<div className="container-2">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
				<Slider {...settings}>
					<div className ="p">
						<img src = {p1} />
                        <h2>ประกาศรายชื่อผู้โชคดี แคมเปญ : จ่ายออนไลน์รับความคุ้ม 2 ต่อ</h2>
                        <p>ประกาศรายชื่อผู้โชคดีจากแคมเปญจ่ายออนไลน์รับความคุ้ม 2 ต่อ ต่อที่ 1 รับ...</p>
					</div>
					<div className ="p">
						<img src = {p2} />
                        <h2>Highlight of the Month ประจำเดือนกรกฎาคม 2564</h2>
                        <p>...</p>
					</div>
                    <div className ="p">
						<img src = {p3} />
                        <h2>3BB X TOPVALUE.com</h2>
                        <p>ลูกค้า 3BB รับส่วนลด 5% เมื่อซื้อสินค้ามูลค่ารวม 2,000 ...</p>
                        
					</div>
                    <div className ="p">
						<img src = {p4} />
                        <h2>3BB X KING POWER ONLINE</h2>
                        <p>ลูกค้า 3BB รับส่วนลด 20% เมื่อซื้อสินค้าที่ร่วมรายการครบ 3,000 ...</p>
                        
					</div>
                    <div className ="p">
						<img src = {p5} />
                        <h2>3BB X THAIWATSADU</h2>
                        <p>ลูกค้า 3BB สมัครสมาชิกใหม่กับไทวัสดุ รับฟรี คูปองส่วนลด 200 ...</p>
					</div>
                    <div className ="p">
						<img src = {p6} />
                        <h2>3BB X Baanandbeyond</h2>
                        <p>ลูกค้า 3BB สมัครสมาชิกใหม่กับบ้านแอนด์บียอนด์  รับฟรี คูปองส่วนลด 200 ...</p>
					</div>
                    <div className ="p">
						<img src = {p7} />
                        <h2>3BB x Alco Thailand</h2>
                        <p>ลูกค้า 3BB ลด 20% ทุกรายการ (ขั้นต่ำ ...</p>
					</div>
                    <div className ="p">
						<img src = {p8} />
                        <h2>3BB x Lalai Studio</h2>
                        <p>ลูกค้า 3BB รับส่วนลด 5% เมื่อสั่งซื้อสินค้าที่ Lalai ...</p>
					</div>
                    <div className ="p">
						<img src = {p9} />
                        <h2>3BB x Beauty-Heal</h2>
                        <p>ลูกค้า 3BB รับส่วนลด 5% เมื่อสั่งซื้อสินค้าที่ Beauty-Heal ...</p>
                        
					</div>
                    <div className ="p">
						<img src = {p10} />
                        <h2>3BB x HADESORIES</h2>
                        <p>ลูกค้า 3BB รับส่วนลด 10% เมื่อซื้อเครื่องประดับจาก HADESORIES ...</p>
					</div>
                    <div className ="p">
						<img src = {p11} />
                        <h2>3BB X TIGERBERRY</h2>
                        <p>ลูกค้า 3BB รับสิทธิ์ซื้อ  CHOUXCREAM ในราคาลด 10% ...</p>
					</div>
                    <div className ="p">
						<img src = {p12} />
                        <h2>3BB x Fantuan-飯糰 Thailand</h2>
                        <p>ลูกค้า 3BB รับส่วนลดทันที 15% เมื่อซื้อสินค้าเมนูใดก็ได้ 2 ...</p>
					</div>
                    <div className ="p">
						<img src = {p13} />
                        <h2>3BB X HINOYA CURRY</h2>
                        <p>ลูกค้า 3BB รับสิทธิ์ส่วนลด 15% เมื่อสั่งอาหารที่ร้าน HINOYA ...</p>
					</div>
                    <div className ="p">
						<img src = {p14} />
                        <h2>3BB x Fun-Ize</h2>
                        <p>ลูกค้า 3BB รับส่วนลด 10% (ขั้นต่ำ 500 ...</p>
					</div>
                    <div className ="p">
						<img src = {p15} />
                        <h2>3BB X COMMON GROUND THAILAND</h2>
                        <p>ลูกค้า 3BB รับสิทธิ์ใช้บริการจองห้องประชุมและCo-Working Space ในราคาพิเศษที่ COMMON ...</p>
					</div>
                    <div className ="p">
						<img src = {p16} />
                        <h2>3BB x ENGOO</h2>
                        <p>ลูกค้า 3BB รับสิทธิ์เรียนภาษาอังกฤษออนไลน์ฟรี! 3 คลาส 3 ...</p>
					</div>
                    <div className ="p">
						<img src = {p17} />
                        <h2>สมัครหักชำระค่าบริการรายเดือนอัตโนมัติ (Direct Debit) รับฟรี 100 พอยต์</h2>
                        <p>ลูกค้า 3BB ต่อที่ 1 รับ !! ...</p>
					</div>
                    <div className ="p">
						<img src = {p18} />
                        <h2>SPAGHETTI HOUSE</h2>
                        <p>ลูกค้า 3BB รับส่วนลด 10% เมื่อสั่งอาหารที่สปาเกตตี้เฮาส์ เกษตร-นวมินทร์ ...</p>
					</div>
                    <div className ="p">
						<img src = {p19} />
                        <h2>WOK STAR EXPRESS</h2>
                        <p>ลูกค้า 3BB รับส่วนลด 20% เมื่อสั่งอาหารทาง 1 ...</p>
					</div>
                    <div className ="p">
						<img src = {p20} />
                        <h2>Duo Cucina</h2>
                        <p>ลูกค้า 3BB รับส่วนลด 5% (ไม่มีขั้นต่ำ) เมื่อสั่งอาหารที่ ...</p>
					</div>
					
				</Slider>
			</div>
		);
	}
}

const cssstyle = `
.container-2 {
  margin: 0 auto;
  padding: 0px 60px 60px 60px;
  width: 75%;
  margin-top:-85px;
  margin-left:13.5%;
  
  

.slick-next:before, .slick-prev:before {
    color: #000;
    
    
}
`
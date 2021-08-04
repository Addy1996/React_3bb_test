import React, { Component } from 'react';
import Slider from '@bit/akiran.react-slick.slider';
import "../Component/BB_Reward.css";
import Reward1 from "../img/Reward-1.jpg";
import Reward2 from "../img/Reward-2.jpg";
import Reward3 from "../img/Reward-3.jpg";
import Reward4 from "../img/Reward-4.jpg";
import Reward5 from "../img/Reward-5.jpg";
import Reward6 from "../img/Reward-6.jpg";
import Reward7 from "../img/Reward-7.jpg";
import Reward8 from "../img/Reward-8.jpg";
import Reward9 from "../img/Reward-9.jpg";

export default class BB_Reward extends Component {
        render() {
            const settings = {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 900,
                cssEase: "linear"
            };
    
    return(<div className="muliti-item">		
        <Slider {...settings}>

        <div className = "card">
        <img className ="rp" src = {Reward1}/>
      <h1 className ="h-rp">300 พอยต์ แลกรับฟรี JOOX VIP 30 วัน</h1>
      <p>JOOX</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Reward2}/>
      <h1 className ="h-rp">350 พอยต์ แลกรับฟรี Shibuya honey toast (baby...</h1>
      <p>After You Dessert Cafe</p><br></br>
     
        </div>
        <div className = "card">
        <img className ="rp" src = {Reward3}/>
      <h1 className ="h-rp">80 พอยต์ แลกรับคูปองส่วนลด 40 บาท สำหรับ"จ่ายบิล"ทุก...</h1>
      <p>ShopeePay</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Reward4}/>
      <h1 className ="h-rp">30 พอยต์ รับฟรีไอศกรีมโคน ที่ร้านแดรี่ควีน</h1>
      <p>แดรี่ควีน</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Reward5}/>
      <h1 className ="h-rp">ลูกค้า 3BB ใช้ 150 พอยต์เพื่อรับฟรี กรมธรรม์ประกันภัยโรคไข้...</h1>
      <p>เจพี ประกันภัย</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Reward6}/>
      <h1 className ="h-rp">200 พอยต์ แลกรับส่วนลด 100 บาท เมื่อซื้อบัตรชมภาพยนตร์ที่</h1>
      <p>SF Cinema</p><br></br>
        </div>

     <div className = "card">
        <img className ="rp" src = {Reward7}/>
      <h1 className ="h-rp">200 พอยต์ แลกรับ Starbucks e-Coupon มูลค่า 100 บาท</h1>
      <p>Starbucks e-Coupon</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Reward8}/>
      <h1 className ="h-rp">แลกพอยต์รับบุญกับ 3BB เพื่อบริจาคให้กองทุนโรคมะเร็งใน...</h1>
      <p>กองทุนโรคมะเร็งในเด็กในพระอุปถัมภ์ฯ</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Reward9}/>
      <h1 className ="h-rp">แลกพอยต์รับบุญกับ 3BB เพื่อบริจาคให้กับมูลนิธิช่วยคน...</h1>
      <p>มูลนิธิช่วยคนตาบอดแห่งประเทศไทยในพระบรมราชินูปถัมภ์</p><br></br>
        </div>
                    </Slider>
                </div>
            );
        }
    }
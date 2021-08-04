import React, { Component } from 'react';
import Slider from '@bit/akiran.react-slick.slider';
import "../Component/BB_Privilege.css";
import Privilege1 from "../img/Privilege-1.jpg";
import Privilege2 from "../img/Privilege-2.jpg";
import Privilege3 from "../img/Privilege-3.jpg";
import Privilege4 from "../img/Privilege-4.jpg";
import Privilege5 from "../img/Privilege-5.jpg";
import Privilege6 from "../img/Privilege-6.jpg";
import Privilege7 from "../img/Privilege-7.jpg";
import Privilege8 from "../img/Privilege-8.jpg";
import Privilege9 from "../img/Privilege-9.jpg";

export default class BB_Privilege extends Component {
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
        <img className ="rp" src = {Privilege1}/>
      <h1 className ="h-rp">ส่วนลด 200 บาท เมื่อซื้อสินค้าตั้งแต่ 2,000 บาทขึ้นไป ที่...</h1>
      <p>พาวเวอร์บาย</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Privilege2}/>
      <h1 className ="h-rp">ส่วนลดมูลค่า 80 บาท และฟรีค่าจัดส่ง เมื่อซื้อสินค้าตั้งแต่ 500...</h1>
      <p>HappyFresh</p><br></br>
     
        </div>
        <div className = "card">
        <img className ="rp" src = {Privilege3}/>
      <h1 className ="h-rp">ส่วนลดมูลค่า 100 บาท เมื่อซื้อสินค้าครั้งแรกตั้งแต่ 1,000...</h1>
      <p>Big C Shopping Online - ลูกค้าใหม่</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Privilege4}/>
      <h1 className ="h-rp">ส่วนลด 15% ไม่มีขั้นต่ำ เมื่อซื้อสินค้าที่ www.his.in.th</h1>
      <p>His 8.8 Infinite Sale</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Privilege5}/>
      <h1 className ="h-rp">รับส่วนลดเพิ่ม 10 % เมื่อช้อปสินค้าครบ 2,000 บาท ที่...</h1>
      <p>WISH</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Privilege6}/>
      <h1 className ="h-rp">รับส่วนลด 5% เมื่อใช้บริการ SKOOTAR</h1>
      <p>SKOOTAR - Regular user</p><br></br>
        </div>

     <div className = "card">
        <img className ="rp" src = {Privilege7}/>
      <h1 className ="h-rp">ส่วนลดครั้งละ 35 บาท (รับสิทธิ์ได้ 2 ครั้ง) สำหรับลูกค้าใหม่ที่...</h1>
      <p>SKOOTAR - New user</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Privilege8}/>
      <h1 className ="h-rp">ส่วนลด 100 บาท เมื่อซื้อสินค้าครบ 1,000 บาท ที่...</h1>
      <p>กูร์เมต์ มาร์เก็ต</p><br></br>
        </div>

        <div className = "card">
        <img className ="rp" src = {Privilege9}/>
      <h1 className ="h-rp">ซื้อเครื่องดื่มปั่น 3 เมนูที่ร่วมรายการ ราคาพิเศษเพียง 55...</h1>
      <p>กาแฟพันธุ์ไทย</p><br></br>
        </div>
                    </Slider>
                </div>
            );
        }
    }
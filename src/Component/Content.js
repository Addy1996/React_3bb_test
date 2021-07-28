import React from "react";
import '../Component/Content.css'
import Carousel from 'react-bootstrap/Carousel'
import promot1 from "../img/GIGA-Sim.jpg";
import promot2 from "../img/promot2.png";
import promot3 from "../img/promot3.png";
import promot4 from "../img/promot4.png";
import routerWiFi from "../img/Router-WiFi1680x350.jpg"
import gigttv from "../img/download-3bb.png"
import gigttvbaner from "../img/GIGA-TV_banner.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Multi_Item from "../Component/Multi_Item";
import Multi_Item_2 from "../Component/Multi_Item_2";





const contentStyle = {
    height: '767px',
    
    lineHeight: '160px',
  };

const Content = ()=> {
    return<div>
        <div className = "div2">
        <Carousel fade>
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
    <h1 className = "color-w">พิเศษ! เมื่อติดตั้งอินเทอร์เน็ตบ้านวันนี้</h1>
    
    <img className="routerWiFi"  src={routerWiFi} />
    </div>
    <div className="div3">
      <h1 className ="packget">แพ็คเก็จแนะนำ</h1>
      <Multi_Item/>
    </div>
    <div className = "div4">
    <img className = "gigttv" src= {gigttv} />
    <h1>อินเทอร์เน็ตบ้านพร้อมความบันเทิง</h1>
    <img className = "gigttvbaner" src = {gigttvbaner}/>
    <p><button>ดูรายละเอียด</button></p>
    </div>
    <div className = "div5">
    <h1>โปรโมชั่นแนะนำ</h1>
    <button>ดูทั้งหมด</button>
    <Multi_Item_2/>
    </div>
    <div className ="div6"> 


    </div>
    <div className ="div7"> 
      

    </div>
    <div className ="div8"> 
      

    </div>

        </div>
}
export default Content ;
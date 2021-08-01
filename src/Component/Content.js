import React from "react";
import '../Component/Content.css'
import routerWiFi from "../img/Router-WiFi1680x350.jpg"
import gigttv from "../img/download-3bb.png"
import gigttvbaner from "../img/GIGA-TV_banner.png"
import Multi_Item from "../Component/Multi_Item";
import Multi_Item_2 from "../Component/Multi_Item_2";
import Carousel_p from "./Carousel_p";
import Slidercenter from "../Component/Slidercenter";

const Content = ()=> {
    return<div>
      <div className = "div2">
    <Carousel_p/>
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
        </div>
}
export default Content ;
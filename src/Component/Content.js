import React from "react";
import '../Component/Content.css'
import routerWiFi from "../img/Router-WiFi1680x350.jpg"
import gigttv from "../img/download-3bb.png"
import gigttvbaner from "../img/GIGA-TV_banner.png"
import Multi_Item from "../Component/Multi_Item";
import Multi_Item_2 from "../Component/Multi_Item_2";
import Carousel_p from "./Carousel_p";
import Carousel_center from "../Component/Carousel_center";
import BB_Privilege from "../Component/BB_Privilege";
import Privilege from "../img/Privilege.png";
import Reward_img from "../img/Reward-img.png";
import BB_Reward from "./BB_Reward";
import { MdNavigateNext } from "react-icons/md";
import News from "./News";
import bg from "../img/bg2.png"


const Content = () => {
  return <div>
    <div className="div2">
      <Carousel_p />
      <h1 className="color-o">พิเศษ! </h1><h1 className="color-w">เมื่อติดตั้งอินเทอร์เน็ตบ้านวันนี้</h1>
      <img className="routerWiFi" src={routerWiFi} />
    </div>
    <div className="div3">
      <h1 className="packget">แพ็คเก็จแนะนำ</h1>
      <Multi_Item />
    </div>
    <div className="div4">
      <img className="gigttv" src={gigttv} />
      <h1 className="in">อินเทอร์เน็ตบ้านพร้อมความบันเทิง</h1>
      <img className="gigttvbaner" src={gigttvbaner} />
      <p><button className="de">ดูรายละเอียด</button></p>
    </div>
    <div className="div5">
      <ul className="promotion-recommen-ul">
        <li className="TBB-Privilege">โปรโมชั่นแนะนำ</li>
        <li><button className="btn-see-all-promotion-recommen"><h1>ดูทั้งหมด</h1><MdNavigateNext className="n-icon" /></button></li>
      </ul>
      <Multi_Item_2 />
    </div>
    <div className="div6">
      <h1 className="sp-cut">สิทธิพิเศษสำหรับลูกค้า 3BB</h1>
      <Carousel_center />

      <ul className="Privilege-ul">
        <li className="TBB-Privilege"><img className="Privilege" src={Privilege} />3BB Privilege</li>
        <li><button className="btn-see-all-Privilege"><h1>ดูทั้งหมด</h1><MdNavigateNext className="n-icon" /></button></li>
      </ul>
      <BB_Privilege />
      <ul className="Reward-ul">
        <li className="TBB-Privilege"><img className="Reward_img" src={Reward_img} />Reward</li>
        <li><button className="btn-see-all-Reward"><h1>ดูทั้งหมด</h1><MdNavigateNext className="n-icon" /></button></li>
      </ul>
      <BB_Reward />
    </div>
    <div className="div7">
      <News/>
      <img className="bg" src = {bg}/>
    </div>
  </div>
}
export default Content;
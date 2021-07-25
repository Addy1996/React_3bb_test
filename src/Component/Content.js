import React from "react";
import '../Component/Content.css'
import { Carousel } from 'antd';
import promot1 from "../img/GIGA-Sim.jpg";
import promot2 from "../img/promot2.png";
import promot3 from "../img/promot3.png";
import promot4 from "../img/promot4.png";
import 'antd/dist/antd.css';

const contentStyle = {
    height: '767px',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Content = ()=> {
    return<div>
        <div className = "div1">
        <Carousel autoplay>
    <div>
      <img src={promot1} alt="promot1" style={contentStyle} />
    </div>
    <div>
    <img src={promot2} alt="promot1" style={contentStyle} />
    </div>
    <div>
    <img src={promot3} alt="promot1" style={contentStyle} />
    </div>
    <div>
    <img src={promot4} alt="promot1" style={contentStyle} />
    </div>
    </Carousel>
    <h2>พิเศษ! เมื่อติดตั้งอินเทอร์เน็ตบ้านวันนี้</h2>
    </div>
    <div className="div2">

    </div>
        </div>
}
export default Content ;
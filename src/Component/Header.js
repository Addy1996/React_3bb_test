import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome } from '@fortawesome/free-solid-svg-icons'
import logo from "../img/3BB_logo_popup.png";
import "../Component/Header.css";
import { MdRouter } from "react-icons/md";
import { RiTvLine } from "react-icons/ri";
import { AiOutlineCrown } from "react-icons/ai";
import { AiFillNotification } from "react-icons/ai";
import { BsList } from "react-icons/bs";


const Header = ()=> {
    return<div >
      <div className ="menu1">
        <ul className ="nav1">
  <li className = "main"><a href="#"><BsList className ="icon"/>เมนูหลัก</a></li>
  <li ><img src ={logo}/></li>
  <li ><a href="#t">ช่องทางชำระค่าบริการ</a></li>
  <li ><a href="#">ช่วยเหลือ</a></li>
  <li></li>
</ul>
      </div>
      
<div className ="menu2">
<ul  className ="nav2">
  <li><a href="#"><FontAwesomeIcon className ="icon" icon={faHome} />หน้าแรก</a></li>
  <li><a href="#"><MdRouter className ="icon" />แพ็คเก็จอินเทอร์เน็ต</a></li>
  <li><a href="#"><RiTvLine className ="icon"/>ทีวีและความบันเทิง</a></li>
  <li><a href="#"><AiFillNotification className ="icon"/>โปรโมชั่น</a></li>
  <li><a href="#"><AiOutlineCrown className ="icon"/>พอยต์และสิทธิพิเศษ</a></li>
  <li><a href="#">ศูนย์บริการ</a></li>
</ul>
</div>




  </div>
  
        
}
export default Header;
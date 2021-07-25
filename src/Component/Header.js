import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../img/3BB_logo_popup.png";
import "../Component/Header.css";

const Header = ()=> {
    return<div className="container">
    <div className ="navbar">
      <div class="dropdown">
      <button class="dropbtn"><FontAwesomeIcon icon={faBars} color="#fa8b1f"/>เมนูหลัก</button>
      <div class="dropdown-content">  
        <div class="row">
          <div class="column">
            <h3><a href="#">เมนูหลัก</a></h3>
            <a href="#">ทีวีและความบันเทิง</a>
            <a href="#">โปรโมชั่น</a>
            <a href="#">พอยต์และสิทธิพิเศษ</a>
            <a href="#">ศูนย์บริการ</a>
            <a href="#">ข่าวสารและกิจกรรม</a>
            <a href="#">CSR</a>
            <a href="#">ช่วยเหลือ</a>
          </div>
          <div class="column">
            <h3>อินเทอร์เน็ตบ้าน</h3>
            <a href="#">3BB GIGA Fiber</a>
            <a href="#">3BB GIGA TV</a>
            <a href="#">3BB GIGA SIM+</a>
          </div>
          <div class="column">
            <h3>อินเทอร์เน็ตองค์กร</h3>
            <a href="#">Corporate Solution</a>
            <a href="#">3BB Dark Fiber</a>
          </div>
          <div class="column">
            <h3>VAS</h3>
            <a href="#">3BB WiFi</a>
            <a href="#">3BB CloudTV</a>
            <a href="#">3BB Movie</a>
            <a href="#">3BB Voice</a>
          </div>
        </div>
      </div>
    </div>
    <a href="#home"><img className = "logo" src={logo}/></a>
      <a href="#home">ช่องทางชำระค่าบริการ</a>
      <a href="#news">ช่วยเหลือ</a>
      <a><button>เข้าสู่ระบบ</button></a>
  </div>
  <div class="topnav">
  <a href="#">หน้าแรก</a> 
  <a href="#"> แพ็คเก็จอินเทอร์เน็ต</a> 
  <a href="#">ทีวีและความบันเทิง</a> 
  <a href="#">โปรโมชั่น</a>
  <a href="#">พอยต์และสิทธิพิเศษ</a>
  <a href="#">ศูนย์บริการ</a>
</div>

  </div>
  
        
}
export default Header;
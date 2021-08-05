import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import logo from "../img/3BB_logo_popup.png";
import profile from "../img/Profile.png";
import th from "../img/th.png";
import en from "../img/en_US.png";
import "../Component/Header.css";
import { MdRouter } from "react-icons/md";
import { RiTvLine } from "react-icons/ri";
import { AiOutlineCrown } from "react-icons/ai";
import { AiFillNotification,AiOutlineCaretDown} from "react-icons/ai";
import { BsList, BsBuilding } from "react-icons/bs";
import { GiShop, GiCube } from "react-icons/gi";


const Header = () => {
  return <div >
    <div className="menu1">
      <ul className="nav1">
        <li><div class="dropdown">
          <button class="dropbtn"><BsList className="list-icon" /><h1>เมนูหลัก</h1></button>
          <div class="dropdown-content">
            <div class="row">
              <div className="column-drop-1">
                <h3>เมนูหลัก</h3>
                <a href="#">ทีวีและความบันเทิง</a>
                <a href="#">โปรโมชั่น</a>
                <a href="#">ช็อปปิ้ง</a>
                <a href="#">พอยต์และสิทธิพิเศษ</a>
                <a href="#">ศูนย์บริการ</a>
                <a href="#">ข่าวสารและกิจกรรม</a>
                <a href="#">CSR</a>
                <a href="#">ช่วยเหลือ</a>
              </div>
              <div className="column-drop-rule-style">
                <h3></h3>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
                <a ></a>
              </div>
              <div className="column-drop-2">
                <h3><FontAwesomeIcon className="icon" icon={faHome} />อินเทอร์เน็ตบ้าน</h3>
                <a href="#">3BB GIGA Fiber</a>
                <a href="#">3BB GIGA TV</a>
                <a href="#">3BB GIGA SIM+</a>
              </div>
              <div className="column-drop-3">
                <h3><BsBuilding className="icon" />อินเทอร์เน็ตองค์กร</h3>
                <a href="#">Corporate Solution</a>
                <a href="#">3BB Dark Fiber</a>
              </div>
              <div className="column-drop-4">
                <h3><GiCube className="icon" />VAS</h3>
                <a href="#">3BB WiFi</a>
                <a href="#">3BB CloudTV</a>
                <a href="#">3BB Movie</a>
                <a href="#">3BB Voice</a>
              </div>
              <div className="column-drop-5">
                <h3>...อื่นๆ</h3>
                <a href="#">3BB Mail</a>
              </div>
            </div>
          </div>
        </div>
        </li>
        <li ><img className="logo-icon" src={logo} /></li>
        <li className ="o-h"><a href="#">ช่องทางชำระค่าบริการ</a></li>
        <li className ="o-h"><a href="#">ช่วยเหลือ</a></li>
        <li><button className="btn-login"><img className="profile-icon" src={profile} /><h1>เข้าสู่ระบบ</h1></button></li>
        <li>
          <div class="dropdown-l">
            <button class="dropbtn-l"><img src={th} /><AiOutlineCaretDown className ="Down-icon"/></button>
            <div class="dropdown-content-l">
              <a href="#"><img className ="th-l" src={en} /></a>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div className="menu2">
      <ul className="nav2">
        <li><a href="#"><FontAwesomeIcon className="icon" icon={faHome} />หน้าแรก</a></li>
        <li><a href="#"><MdRouter className="icon" />แพ็คเก็จอินเทอร์เน็ต</a></li>
        <li><a href="#"><RiTvLine className="icon" />ทีวีและความบันเทิง</a></li>
        <li><a href="#"><AiFillNotification className="icon" />โปรโมชั่น</a></li>
        <li><a href="#"><AiOutlineCrown className="icon" />พอยต์และสิทธิพิเศษ</a></li>
        <li><a href="#"><GiShop className="icon" />ศูนย์บริการ</a></li>
      </ul>
    </div>




  </div>


}
export default Header;
import React from "react";
import "../Component/Footer.css"
import f_logo from "../img/logo_footer.jpg"
import bns from "../img/bns.png"
import fb from "../img/fb.png"
import yt from "../img/yt.png"
import le from "../img/le.png"
import ig from "../img/ig.png"
import tw from "../img/tw.png"

const Footer = () => {
  return <div>
    <div class="column-foot">
      <div class="row">
        <div className="column-foot-1">
          <h3>เกี่ยวกับเรา</h3>
          <a className="foot" href="#">เกี่ยวกับเรา</a>
          <a className="foot" href="#">สิทธิพิเศษ</a>
          <a className="foot" href="#">เงื่อนไขและข้อกำหนด</a>
          <a className="foot" href="#">ร่วมงานกับเรา</a>
          <a className="foot" href="#">ติดต่อเรา</a>
        </div>
        <div className="column-foot-2">
          <h3>แพ็กเกจแนะนำ</h3>
          <a className="foot" href="#">3BB Broadband</a>
          <a className="foot" href="#">3BB Corporate</a>
          <a className="foot" href="#">3BB WiFi</a>
          <a className="foot" href="#">Other Service</a>
        </div>
        <div className="column-foot-3">
          <h3>กิจกรรมเพื่อสังคม</h3>
          <a className="foot" href="#">โครงการบรอดแบนด์อินเทอร์เน็ตฟรี เพื่อการศึกษา</a>
          <a className="foot" href="#">โครงการ JAS ส่งเสริมการศึกษาให้เด็กไทย ก้าวทันยุคดิจิทัล</a>
          <a className="foot" href="#">ด้านอื่น ๆ</a>
          <a className="foot" href="#">CSR News & Acitivities</a>
        </div>
        <div className="column-foot-4">
          <h3>ช่วยเหลือและบริการ</h3>
          <a className="foot" href="#">3BB Speed Test</a>
          <a className="foot" href="#">ศูนย์บริการ 3BB</a>
          <a className="foot" href="#">ช่องทางการแจ้งเว็บที่ผิดกฎหมาย</a>
          <a className="foot" href="#">ช่องทางการแจ้งสายเคเบิ้ลตกหรือหย่อน</a>
        </div>
        <div className="column-foot-5">
          <h3>3BB Call Center</h3>
          <a >1530</a>
        </div>
      </div>
    </div>

    <div className="foot-2">
      <div class="column-foot-2">
        <div class="row">
          <div className="column-foot-2-1">
            <h3>บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน)</h3>
            <a >200 หมู่ 4 ถนนแจ้งวัฒนะ ตำบลปากเกร็ด อำเภอปากเกร็ด
              จังหวัดนนทบุรี 11120</a>
            <a >โทรศัพท์ : 66-2-100-2100 แฟกซ์ : 66-2-100-2121</a>
          </div>
          <div className="column-foot-2-2">
            <img className="f_logo" src={f_logo} />
          </div>
          <div className="column-foot-2-3">
            <h2 className="f2h">รองรับโดย</h2><img className="bns" src={bns} />
            <a><img className="so-icon" src={fb} />
              <img className="so-icon" src={yt} />
              <img className="so-icon" src={le} />
              <img className="so-icon" src={ig} />
              <img className="so-icon" src={tw} />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="foot-3">
      <hr />
      <ul className="foot-3-ul">
        <li><a className="f3-1">© 2020 บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน) All rights reserved</a></li>
        <li><a className="f3-2">นโยบายการคุ้มครองข้อมูลส่วนบุคคล | ช่วยเหลือ</a></li>
      </ul>
    </div>
  </div>

}
export default Footer;
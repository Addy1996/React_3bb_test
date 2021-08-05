import React from "react";
import '../Component/News.css'
import N1 from "../img/N-1.jpg"
import N2 from "../img/N-2.jpg"
import N3 from "../img/N-3.jpg"
import N4 from "../img/N-4.jpg"
import N5 from "../img/N-5.jpg"
import N6 from "../img/N-6.jpg"
import A1 from "../img/A-1.jpg"
import A2 from "../img/A-2.jpg"
import A3 from "../img/A-3.jpg"
import A4 from "../img/A-4.jpg"
import A5 from "../img/A-5.jpg"
import A6 from "../img/A-6.jpg"



class News extends React.Component {
  render() {
    return (
      <div className="tabs">
        <Tabs>
          <Tab label="ข่าวสารและกิจกรรม">
            <div class="row">
              <div class="column-news" >
                <img className="img-1" src={N1} />
                <h2>
                  JAS และ 3BB มอบชุด PPE และน้ำดื่มให้กับบุคลากรทางการแพทย์และเจ้าหน้าที่ ศูน...</h2>
                <p className="p1">5 August 2021 14:50</p>
                <p className="p2">กลุ่มบริษัทจัสมินอินเตอร์เนชั่นแนลจำกัด (มหาชน) โดย 3BB ใคร่ขอขอบคุณบุคลาการทางการแพทย์ พยาบาล ...</p>
              </div>
              <div class="column-news" >
                <img className="img-2" src={N2} />
                <h2>3BB จังหวัดชัยนาท มอบหน้ากากอนามัย และ ถุงมือยาง ให้กับโรงพยาบาลสนามองค์การ...</h2>
                <p className="p1">5 August 2021 14:05</p>
                <p className="p2">คุณณัฐสินี จิตต์ภาคภูมิ ผู้จัดการจังหวัด บริษัท ทริปเปิลที บรอดแบนด์ ...</p>
              </div>
            </div>
            <div class="row">
              <div class="column-news" >
                <img className="img-1" src={N3} />
                <h2>
                3BB จังหวัดสุราษฎร์ธานี มอบอินเทอร์เน็ต 1 วงจร ให้กับองค์การบริการส่วนตำบลท...</h2>
                <p className="p1">5 August 2021 10:32</p>
                <p className="p2">บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน) จังหวัดสุราษฎร์ธานี ...</p>
              </div>
              <div class="column-news" >
                <img className="img-2" src={N4} />
                <h2>3BB จังหวัดเพชรบูรณ์ มอบน้ำดื่มณ โรงพยาบาลสนาม ราชพฤกษ์รีสอร์ท</h2>
                <p className="p1">5 August 2021 10:01</p>
                <p className="p2">คุณเอกฤทธิ์ ศรีคำภา ผู้จัดการจังหวัด บริษัท ทริปเปิลที บรอดแบนด์ ...</p>
              </div>
            </div>
            <div class="row">
              <div class="column-news" >
                <img className="img-1" src={N5} />
                <h2>
                3BB จังหวัดเพชรบูรณ์ มอบน้ำดื่มณ โรงพยาบาลสนาม (สนามกีฬากลางจังหวัดเพชรบูรณ...</h2>
                <p className="p1">5 August 2021 09:51</p>
                <p className="p2">คุณเอกฤทธิ์ ศรีคำภา ผู้จัดการจังหวัด บริษัท ทริปเปิลที บรอดแบนด์ ...</p>
              </div>
              <div class="column-news" >
                <img className="img-2" src={N6} />
                <h2>3BB สกลนคร ขอขอบคุณ ทีมงานสาธารณสุข</h2>
                <p className="p1">4 August 2021 17:24</p>
                <p className="p2">3BB สกลนคร ขอขอบคุณ ทีมงานสาธารณสุข และหน่วยงานที่เกี่ยวข้อง ภายใต้การอำนวยการของท่านผู้ว่าราชการจังหวัด ...</p>
              </div>
            </div>
          </Tab>
          <Tab label="กิจกรรมเพื่อสังคม">
            <div>
            <div class="row">
              <div class="column-news" >
                <img className="img-1" src={A1} />
                <h2>
                ลดเสี่ยง เลี่ยงจับ โรงเรียนบ้านหนองแก้ว อ.รัตนวาปี จ.หนองคาย</h2>
                <p className="p1">26 March 2021 16:15</p>
                <p className="p2">คุณธยานนท์ วิเศษจิตเลิศ  ผู้อำนวยการภาคตะวันออกเเฉียงเหนือตอนบน พร้อมคณะผู้บริหาร  พนักงาน บริษัททริปเปิลที ...</p>
              </div>
              <div class="column-news" >
                <img className="img-2" src={A2} />
                <h2>ลดเสี่ยง เลี่ยงจับ โรงเรียนเหนือคลองประชาบำรุง จ.กระบี่</h2>
                <p className="p1">26 March 2021 16:01</p>
                <p className="p2">คุณนิตยา สุราวรรณ์  ผู้จัดการจังหวัด บริษัททริปเปิลที บรอดแบนด์ จำกัด ...</p>
              </div>
            </div>
            <div class="row">
              <div class="column-news" >
                <img className="img-1" src={A3} />
                <h2>
                ลดเสี่ยง เลี่ยงจับ โรงเรียนเทศบาลประตูลี้ จังหวัดลำพูน</h2>
                <p className="p1">26 March 2021 15:53</p>
                <p className="p2">คุณธนาโชติ เอกเกิด ผู้จัดการจังหวัด บริษัททริปเปิลที บรอดแบนด์ จำกัด ...</p>
              </div>
              <div class="column-news" >
                <img className="img-2" src={A4} />
                <h2>ลดเสี่ยง เลี่ยงจับ โรงเรียนบ้านเก่าร้าง จ.สงขลา</h2>
                <p className="p1">26 March 2021 15:41</p>
                <p className="p2">คุณศรัณย์ บุญช่วย  ผู้จัดการเขต บริษัททริปเปิลที บรอดแบนด์ จำกัด ...</p>
              </div>
            </div>
            <div class="row">
              <div class="column-news" >
                <img className="img-1" src={A5} />
                <h2>
                ลดเสี่ยง เลี่ยงจับ โรงเรียนบ้านป่ารวก(คุรุราษฏร์สงเคราะห์) จังหวัดเชียงราย</h2>
                <p className="p1">26 March 2021 15:27</p>
                <p className="p2">คุณวรวุทธ์ ร้านชิตวงศ์ ผู้จัดการจังหวัด บริษัททริปเปิลที บรอดแบนด์ จำกัด ...</p>
              </div>
              <div class="column-news" >
                <img className="img-2" src={A6} />
                <h2>ลดเสี่ยง เลี่ยงจับ โรงเรียนวัดศรีวิสารวาจา จ.นครปฐม</h2>
                <p className="p1">25 March 2021 15:46</p>
                <p className="p2">คุณชาญชัย จินดามณีเรือง ผู้อำนวยการภาคตะวันตก คุณกิตติศักดิ์  ศรีเจริญ ผู้จัดการเขต ...</p>
              </div>
            </div>
            </div>
          </Tab>
        </Tabs>
      </div>

    )
  }
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render() {

    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child => {
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}

        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
        <div className="tab-content">{content}</div>

      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {

  return (
    <div className="tab-buttons">
      {buttons.map(button => {
        return <button className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)}>{button}</button>
      })}
    </div>
  )
}

const Tab = props => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}

export default News;
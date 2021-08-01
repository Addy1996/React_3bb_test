import React, { Component } from 'react';

import s1 from "../img/s1.jpg";

export default class Slidercenter extends Component {
  render() {
    const settingscenter =  {
      centerMode: true,
      centerPadding: 200
    };
    return (
      <div>
        
          <div>
            <image src ={s1}/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
      
      </div>
    );
  }
}
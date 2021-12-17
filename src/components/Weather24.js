import React, { Component } from 'react'
import { render } from "react-dom";
import fog from '../../src/img/weather-icons/fog.svg'
import mostlycloudy from '../../src/img/weather-icons/mostlycloudy.svg'
import partlycloudy from '../../src/img/weather-icons/partlycloudy.svg'
import rain from '../../src/img/weather-icons/rain.svg'
import snow from '../../src/img/weather-icons/snow.svg'
import storm from '../../src/img/weather-icons/storm.svg'
import unknown from '../../src/img/weather-icons/unknown.svg'
// import "../App.css";
export default class Weather24 extends Component {
    render() {
        return (
            <div className="app">
               <div className="main">
                 <div className="temp24">
                    <div className="tempHour">
                        <span>03:00</span>
                        <img src={mostlycloudy} alt="time" />          
                        <span>8 <sup>o</sup>C</span>
                </div>

            <div className="tempHour">
              <span>03:00</span>
              <img src={fog} alt="time" />
           
              <span>8 <sup>o</sup>C</span>
            </div>

            <div className="tempHour">
              <span>03:00</span>
              <img src={partlycloudy} alt="time" />
           
              <span>8 <sup>o</sup>C</span>
            </div>

            <div className="tempHour">
              <span>03:00</span>
              <img src={rain} alt="time" />
           
              <span>8 <sup>o</sup>C</span>
            </div>

            <div className="tempHour">
            <span>03:00</span>
            <img src={snow} alt="time"/>
         
            <span>8 <sup>o</sup>C</span>
            </div>

            <div className="tempHour">
            <span>03:00</span>
            <img src={storm} alt="time"/>
         
            <span>8 <sup>o</sup>C</span>
            
            </div>

            <div className="tempHour">
            <span>03:00</span>
            <img src={unknown} alt="time"/>
         
            <span>8 <sup>o</sup>C</span>
            </div>
          </div></div>
            </div>
        )
    }
}

import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import weatherI from "./img/instructions/weatherI.png";
// import fog from '../src/img/weather-icons/fog.svg'
// import mostlycloudy from '../src/img/weather-icons/mostlycloudy.svg'
// import partlycloudy from '../src/img/weather-icons/partlycloudy.svg'
// import rain from '../src/img/weather-icons/rain.svg'
// import snow from '../src/img/weather-icons/snow.svg'
// import storm from '../src/img/weather-icons/storm.svg'
// import unknown from '../src/img/weather-icons/unknown.svg'

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Khalid Here"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="search">
            <input placeholder="Type in a city name " type="text" required name="searchI" />
            <button className="btnS">FIND WEATHER</button>
          </div>

        </div>
        <div className="main">
          <img className="img01" src={weatherI} alt="image" />
          <p className="temp">overcast clouds</p>
          <div className="TemperatureDiv">
            <p className="temperature" id="temperature01">Temperature </p>
            <p className="temperature">10 ْ to 11 ْC</p>
          </div>
          <div className="temStateDiv">
            <p className="tepState" id="temStateDiv01">Humidity</p>
            <p className="tepState">7<span>8 <sup>o</sup>C</span>%</p>
            <p className="tepState" id="temStateDiv01">Pressure</p>
            <p className="tepState">1008.48</p>
          </div>
          <div className="temp24">
            <div className="tempHour">
              <span>03:00</span>
              {/* <img src={mostlycloudy} alt="time" /> */}
              <img src="https://via.placeholder.com/100/100" />
              <span>8 <sup>o</sup>C</span>
            </div>

            <div className="tempHour">
              <span>03:00</span>
              {/* <img src={fog} alt="time" /> */}
              <img src="https://via.placeholder.com/100/100" />
              <span>8 <sup>o</sup>C</span>
            </div>

            <div className="tempHour">
              <span>03:00</span>
              {/* <img src={partlycloudy} alt="time" /> */}
              <img src="https://via.placeholder.com/100/100" />
              <span>8 <sup>o</sup>C</span>
            </div>

            <div className="tempHour">
              <span>03:00</span>
              {/* <img src={rain} alt="time" /> */}
              <img src="https://via.placeholder.com/100/100" />
              <span>8 <sup>o</sup>C</span>
            </div>

            <div className="tempHour">
            <span>03:00</span>
            {/* <img src={snow} alt="time"/> */}
            <img src="https://via.placeholder.com/100/100" />
            <span>8 <sup>o</sup>C</span>
            </div>

            <div className="tempHour">
            <span>03:00</span>
            {/* <img src={storm} alt="time"/> */}
            <img src="https://via.placeholder.com/100/100" />
            <span>8 <sup>o</sup>C</span>
            
            </div>

            <div className="tempHour">
            <span>03:00</span>
            {/* <img src={unknown} alt="time"/> */}
            <img src="https://via.placeholder.com/100/100" />
            <span>8 <sup>o</sup>C</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

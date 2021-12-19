import React, { Component } from "react";

import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import "./App.css";
import FakeWeather from "./data/FakeWeather.json";

/**
 * 
import FakeWeather from "./data/FakeWeather.json";
import clear from './img/weather-icons/clear.svg';
 import cloudy from '/img/weather-icons/cloudy.svg';
import drizzle from '/img/weather-icons/drizzle.svg';
import fog from '/img/weather-icons/fog.svg';
import mostlycloudy from '/img/weather-icons/mostlycloudy.svg';
import partlycloudy from '/img/weather-icons/partlycloudy.svg';
import rain from '/img/weather-icons/rain.svg';
import storm from '/img/weather-icons/storm.svg';
import snow from '/img/weather-icons/snow.svg';
import unknown from '/img/weather-icons/unknown.svg'; 

 */




const apiKey = "0d533d02ed8c3254b7bd9593764d699f";


class App extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   city: "",
    //   main: "",
    //   icon: "",
    //   pressure: "",
    //   celsius: "",
    //   description: "",
    //   error: false
    // }
    // this.WeatherIcon = {
    //   unknown: './img/weather-icons/unknown.svg'
    // }

    this.state = {
      city: "",
      main: "",
      icon: "",
      pressure: "",
      celsius: "",
      description: "",
      error: false
    }

    this.weatherIcon = {
      clear: './img/weather-icons/clear/svg',
      cloudy: './img/weather-icons/cloudy.svg',
      drizzle: './img/weather-icons/drizzle.svg',
      fog: './img/weather-icons/fog.svg',
      mostlycloudy: './img/weather-icons/mostlycloudy.svg',
      partlycloudy: './img/weather-icons/partlycloudy.svg',
      rain: './img/weather-icons/rain.svg',
      storm: './img/weather-icons/storm.svg',
      snow: './img/weather-icons/snow.svg',
      unknown: './img/weather-icons/unknown.svg',
    }

  }

  // get_WeatherIcon(icons, rangeId) {
  //   switch (true) {
  //     case rangeId < 300:
  //       this.setState({ icon: icons.unknown })
  //       break;
  //     default:
  //       this.setState({ icon: icons.unknown });
  //   }
  // }
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId < 300:
        this.setState({ icon: icons.storm })
        break;
      case rangeId >= 300 && rangeId < 499:
        this.setState({ icon: icons.drizzle })
        break;
      case rangeId >= 500 && rangeId < 599:
        this.setState({ icon: icons.rain })
        break;
      case rangeId >= 600 && rangeId < 699:
        this.setState({ icon: icons.snow })
        break;
      case rangeId >= 700 && rangeId < 799:
        this.setState({ icon: icons.fog })
        break;
      case rangeId = 800:
        this.setState({ icon: icons.clear })
        break;
      case rangeId = 801:
        this.setState({ icon: icons.partlycloudy })
        break;
      case rangeId >= 801 && rangeId < 805:
        this.setState({ icon: icons.mostlycloudy })
        break
      default:
        this.setState({ icon: icons.unknown });
    }
  }
  // tempC(temp) {
  //   let cell = Map.floor(temp - 273.15);
  //   return cell
  // }
  tepmCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell
  }
  // getWeather = async e => {
  //   e.preventDefault();
  //   const data_call = await fetch(
  //     './data/FakeWeather.json'
  //   )
  //   const response = await data_call.json()
  //   this.setState({
  //     city: response.message,
  //     main: response.main.humidity,
  //     pressure: response.main.pressure,
  //     celsius: this.tepmCelsius(response.main.temp),
  //     description: response.weather[0].description,
  //     error: false,
  //   })
  //   this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
  //   console.log(response)

  // }

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      const response = await api_call.json();

      this.setState({
        city: response.name,
        main: response.main.humidity,
        pressure: response.main.pressure,
        celsius: this.tepmCelsius(response.main.temp),
        description: response.weather[0].description,
        error: false
      });
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

      console.log(response);
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <div className="app">

        <Search loadweather={this.getWeather} error={this.state.error} />
        <WeatherItem
          cityname={this.state.city}
          weatherIcon={this.state.icon}
          temp_celsius={this.state.celsius}
          description={this.state.description}
          main={this.state.main}
          pressure={this.state.pressure}

        />
        {/* <Search loadweather={this.getWeather} error={this.state.error} /> */}
        {/* <WeatherItem
        cityname={this.state.city}
        weatherIcon={this.state.icon}
        temp_celsius={this.state.celsius}
        description={this.state.description}
        main={this.state.main}
        pressure={this.state.pressure}
        /> */}
        <div className="main">
        </div>
      </div>
    );
  }
}
export default App;

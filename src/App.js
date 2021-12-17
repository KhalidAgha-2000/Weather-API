import React, { Component } from "react";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import weatherI from "./img/instructions/weatherI.png";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
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
        <Search/>
        <WeatherItem/>
        <div className="main">
        </div> 
      </div>
    );
  }
}
export default App;

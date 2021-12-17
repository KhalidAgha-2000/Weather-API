import React from "react";
import clear from "../img/weather-icons/clear.svg";
// import "./Search.css";
// import "../App.css";
class Search extends React.Component {
  state = {
    input: ""
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
      </div>
    );
  }
}
export default Search;

        {/* {this.state.input}
        <input
          type="text"
          id="input-name"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
        />
        <button
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >
          Say Hello
        </button> */}
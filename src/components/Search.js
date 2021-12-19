import React from "react";
import clear from "../img/weather-icons/clear.svg";

const Search = props => {
  return (
    <div className="app">
    <form onSubmit={props.loadweather}> 
    <div>{props.error ? error() : ""}</div>
     {/* <form onSubmit={props.loadweather}> 
     <div>{props.error ? error() : ""}</div> */}
      <div className="header">
          <div className="search">
            <input placeholder="Type in a city name "
              type="text"
              required
              name="city" />
            <button className="btnS">FIND WEATHER</button>
          </div>
        </div>
        </form>
      {/**</form> */}
    </div>
  );
}
const error = props => {
  return (
    <div role="alert" className="error">
      Please Enter City ...
    </div>
  );
};



export default Search;


import React from "react";
import weatherI from "../img/instructions/weatherI.png";
import fog from '../../src/img/weather-icons/fog.svg'
import mostlycloudy from '../../src/img/weather-icons/mostlycloudy.svg'
import partlycloudy from '../../src/img/weather-icons/partlycloudy.svg'
import rain from '../../src/img/weather-icons/rain.svg'
import snow from '../../src/img/weather-icons/snow.svg'
import storm from '../../src/img/weather-icons/storm.svg'
import unknown from '../../src/img/weather-icons/unknown.svg'

const WeatherItem = props => {

  return (
    <div className="app" >

      {/**--------------- */}
      <div className="main" >
        {/* <img  src={props.weatherIcon}/> */}
        <img className="img01" src={props.weatherIcon} alt="image01" />
        <p className="temp">   {props.description}       </p>

        {/* <p className="temp">   description {props.cityname}     </p> */}

        <div className="TemperatureDiv">
          <p className="temperature" id="temperature01">{props.temp_celsius ? (<span>Temperature : </span>) : null}   </p>
          <p className="temperature">{props.temp_celsius}  {props.temp_celsius ? (<span> ْ C</span>) : null}    </p>

          {/* <p className="temperature" id="temperature01">TEP  :  </p>
          <p className="temperature"> {props.temp_celsius}    </p> */}

        </div>
        <div className="temStateDiv">
        <p className="tepState" id="temStateDiv01">{props.main ? (<span> Humidity</span>) : null}</p>
          <p className="tepState">    {props.main ? (<span>{props.main} %</span>) : null}     </p>
          <p className="tepState" id="temStateDiv01">{props.pressure ? (<span>Pressure</span>) : null} </p>
          <p className="tepState">  {props.pressure} </p>
        
          {/* <p className="tepState" id="temStateDiv01"> Humidity</p>
          <p className="tepState">    {props.main}     </p>
          <p className="tepState" id="temStateDiv01">Pressure </p>
          <p className="tepState">  {props.pressure} </p> */}

        </div>
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
            <img src={snow} alt="time" />

            <span>8 <sup>o</sup>C</span>
          </div>

          <div className="tempHour">
            <span>03:00</span>
            <img src={storm} alt="time" />

            <span>8 <sup>o</sup>C</span>

          </div>

          <div className="tempHour">
            <span>03:00</span>
            <img src={unknown} alt="time" />

            <span>8 <sup>o</sup>C</span>
          </div>
        </div>

      </div>
    </div>
  );

}
export default WeatherItem
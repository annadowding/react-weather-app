import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
function handleResponse (response) {
  alert(response.data);
}

   let apiKey = "d1b6ead1e59b61fc5c228b89a0df9361";
   let city = "London";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse)
  
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 14:00</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6 mt-3">
          <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly cloudy"
                className="float-left mb-5"
              />
                      <span className="temperature">6</span>
                      <span className="unit">&deg;C</span>
          </div>
        </div>

        <div className="col-6 mt-4">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 13 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

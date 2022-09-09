import React  from "react";
import { useEffect, useState } from "react";
import './App.css';
import { CurrentWeather } from "./currentweather/CurrentWeather.js";
import {WeekWeather} from "./weekweather/WeekWeather.js"
import {WeatherContext, WeatherProvider} from "./weathercontext/WeatherContext.js"
function App() {

  return (
    <WeatherProvider>
      <WeatherContext.Consumer>
        {value =>(<div className="main">
      <CurrentWeather locationData={value.locationData}></CurrentWeather>
      <WeekWeather ></WeekWeather>
    </div>)}
    </WeatherContext.Consumer></WeatherProvider>
  );
}

export default App;

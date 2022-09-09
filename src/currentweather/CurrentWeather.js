import React from "react";
import "./CurrentWeather.css"
import { WeatherContext } from "../weathercontext/WeatherContext.js";

function CurrentWeather(){
    const {locationData} = React.useContext(WeatherContext)

    return (
        <div className="container">
            <h2>{Math.round(locationData.daily.apparent_temperature_max[0])}°C</h2>
            <h2>{Math.round(locationData.daily.apparent_temperature_min[0])}°C</h2>
        </div>
    )
}

export {CurrentWeather}
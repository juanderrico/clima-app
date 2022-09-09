import React from "react";
import "./DailyWeather.css"
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import { WiCloud } from "react-icons/wi";


function DailyWeather () {

    const {locationData, loading} = React.useContext(WeatherContext)

    
    return (
        <div className="dailycontainer">
            {!loading && <div><WiCloud className="cloud">
                </WiCloud>
            <div className="temperature-div">
            <h2>{Math.round(locationData.daily.apparent_temperature_max[0])}°C</h2>
            <h2>{Math.round(locationData.daily.apparent_temperature_min[0])}°C</h2>
             </div></div>}
        </div>
    )

}

export {DailyWeather}
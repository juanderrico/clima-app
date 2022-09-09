import React from "react";
import "./WeekWeather.css"
import {DailyWeather} from "../dailyweather/DailyWeather.js"

function WeekWeather (){

    return (

        <div className="weekcontainer">
           
            <DailyWeather ></DailyWeather>
            <DailyWeather ></DailyWeather>
            <DailyWeather ></DailyWeather>
            <DailyWeather ></DailyWeather>
            <DailyWeather ></DailyWeather>
            <DailyWeather ></DailyWeather>
        </div>
    )
}

export {WeekWeather}
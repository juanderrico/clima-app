import React from "react";
import styles from "./WeekWeather.module.css"
import {DailyWeather} from "../dailyweather/DailyWeather.js"
import { WeatherContext } from "../weathercontext/WeatherContext.js";
function WeekWeather (){
    const {locationData, loading} = React.useContext(WeatherContext)
    let index=1;
    let list=[]
    if(!loading){
        for(let day of locationData.daily.time){
    list.push(
        <DailyWeather index={index}></DailyWeather>
    )
    index++}list.pop()}

        
    return (

        <div className={styles.weekcontainer}>
            {list}
        </div>
    )
}

export {WeekWeather}
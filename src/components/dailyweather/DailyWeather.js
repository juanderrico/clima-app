import React from "react";
import styles from "./DailyWeather.module.css"
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import { WiCloud } from "react-icons/wi";
import {renderImage, weekday} from "../weathercontext/setimage.js"
import { useEffect, useState } from "react";
import {WiCloudy,WiDaySunny, WiFog, WiSprinkle, WiThunderstorm,WiRain,WiSnow,WiShowers,WiSnowWind } from "react-icons/wi";

function DailyWeather ({index}) {

    const {locationData, loading,unitLetter, setSelectedIndex} = React.useContext(WeatherContext)
    let response={weathercode:"", image:<WiCloud></WiCloud>};
    const [dayoftheweek,setDay]=React.useState("")
    
    const date = new Date();
    const day = String(date.getDate()+index+1).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = date.getFullYear();
    const currentDate =new Date(`${year}-${month}-${day}`)

    const [image,setimage]=React.useState("<WiCloud></WiCloud>")
    useEffect(()=>{
        if(!loading){
       
        setDay(weekday(currentDate.getDay()))
        
        response= renderImage(locationData, loading,index,styles.img)
        
        setimage(response.image)}
        },[locationData])
    
    return (
        <button className={styles.selectDay} onClick={()=>{setSelectedIndex(index)}}>
        <div className={styles.dailycontainer}>
            {!loading && <div><h2 className={styles.weekday }>{dayoftheweek}</h2>{image}
            <div className={styles.temperaturediv}>
            <h2 className={styles.temperature}>{Math.round(locationData.daily.apparent_temperature_max[index])}°{unitLetter}</h2>
            <h2 className={styles.temperature}>{Math.round(locationData.daily.apparent_temperature_min[index])}°{unitLetter}</h2>
             </div></div>}
        </div></button>
    )

}

export {DailyWeather}
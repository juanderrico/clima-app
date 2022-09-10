import React from "react";
import styles from "./DailyWeather.module.css"
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import { WiCloud } from "react-icons/wi";
import {renderImage} from "../weathercontext/setimage.js"
import { useEffect, useState } from "react";
import {WiCloudy,WiDaySunny, WiFog, WiSprinkle, WiThunderstorm,WiRain,WiSnow,WiShowers,WiSnowWind } from "react-icons/wi";

function DailyWeather ({index}) {

    const {locationData, loading} = React.useContext(WeatherContext)
    let response={weathercode:"", image:<WiCloud></WiCloud>};
    
 
    const [image,setimage]=React.useState("<WiCloud></WiCloud>")
    useEffect(()=>{
        if(!loading){
        response= renderImage(locationData, loading,index,styles.img)
       
        setimage(response.image)}
        },[locationData])
    
    return (
        <div className={styles.dailycontainer}>
            {!loading && <div>{image}
            <div className={styles.temperaturediv}>
            <h2>{Math.round(locationData.daily.apparent_temperature_max[index])}°C</h2>
            <h2>{Math.round(locationData.daily.apparent_temperature_min[index])}°C</h2>
             </div></div>}
        </div>
    )

}

export {DailyWeather}
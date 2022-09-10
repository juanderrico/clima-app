import React from "react";
import { useEffect, useState } from "react";
import styles from "./CurrentWeather.module.css"
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import { WiCloud, WiCloudy,WiDaySunny, WiFog, WiSprinkle, WiThunderstorm,WiRain,WiSnow,WiShowers,WiSnowWind } from "react-icons/wi";
import {renderImage} from "../weathercontext/setimage.js"
function CurrentWeather({setOpenModal}){
    const onClick= ()=> {
        setOpenModal(true)
    }
    const d = new Date();
    let hour = d.getHours();
    
    const {locationData,loading,selectedCity} = React.useContext(WeatherContext)
    let response={weathercode:"", image:<WiCloud></WiCloud>};
    
    const [weathercode,setWeatherCode]=React.useState("")
    const [image,setimage]=React.useState("<WiCloud></WiCloud>")
   
    
    useEffect(()=>{
    if(!loading){
    response= renderImage(locationData, loading,0,styles.img)
    setWeatherCode(response.weathercode)
    setimage(response.image)}
    },[locationData])

    
    
    
    

    return (

        <div className={styles.container}>
            <button className={styles.openModal} onClick={onClick}>Seleccionar ciudad</button>
            {!loading && <div className={styles.currentC}>
            <div>
            {image}
                </div>
            <h2 className={styles.weathercode}>{weathercode}</h2>
               
            <h2 className={styles.currentH}>{Math.round(locationData.hourly.temperature_2m[hour])}°C</h2>
            <h3>Hoy- {hour}:00 - {selectedCity.value}</h3>
            
            </div>}
        </div>
    )
}

export {CurrentWeather}
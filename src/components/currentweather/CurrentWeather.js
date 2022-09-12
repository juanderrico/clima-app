import React from "react";
import { useEffect, useState } from "react";
import styles from "./CurrentWeather.module.css"
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import {renderImage, weekday, setbackground} from "../weathercontext/setimage.js"

function CurrentWeather({setOpenModal}){
    const onClick= ()=> {
        setOpenModal(true)
    }
    const d = new Date();
    
    let hour = d.getHours();
    
    const {locationData,selectedCity} = React.useContext(WeatherContext)
    let response;
    const [backgroundColor, setbackgroundColor]= React.useState("")
    const [weathercode,setWeatherCode]=React.useState("")
    const [image,setimage]=React.useState("")
   
    
    const [dayoftheweek,setDay]=React.useState("")
    
    useEffect(()=>{
    
    
    setDay(weekday(d.getDay()))
    response= renderImage(locationData, 0,styles.img)
    setWeatherCode(response.weathercode)
    setbackgroundColor(setbackground(response.weathercode))
   
    setimage(response.image)
    },[locationData])

    
    
    
    

    return (

        <div className={styles.container} style={{'background':backgroundColor}}>
            <button className={styles.openModal} onClick={onClick}>Seleccionar ciudad</button>
             <div className={styles.currentC}>
            <div>
            {image}
                </div>
            <h2 className={styles.weathercode}>{weathercode}</h2>
               
            <h2 className={styles.currentH}>{Math.round(locationData.hourly.temperature_2m[hour])}{locationData.daily_units.apparent_temperature_max}</h2>
            <h3>{dayoftheweek}- {hour}:00 - {selectedCity.value}</h3>
            
            </div>
        </div>
    )
}

export {CurrentWeather}
import React from "react";
import { useEffect, useState } from "react";
import styles from "./CurrentWeather.module.css"
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import {renderImage, weekday, setbackground} from "../weathercontext/setimage.js"

function CurrentWeather(props){
    const onClick= ()=> {
        props.setOpenModal(true)
    }
    const d = new Date();
    
    let hour = d.getHours();
    
    let response;
    const [backgroundColor, setbackgroundColor]= React.useState("")
    const [weathercode,setWeatherCode]=React.useState("")
    const [image,setimage]=React.useState("")
   
    
    const [dayoftheweek,setDay]=React.useState("")
    
    useEffect(()=>{
    
    
    setDay(weekday(d.getDay()))
    response= renderImage(props.locationData, 0,styles.img)
    setWeatherCode(response.weathercode)
    setbackgroundColor(setbackground(response.weathercode))
   
    setimage(response.image)
    },[props.locationData])

    
    
    
    

    return (
        <div className={styles.container} style={{'background':backgroundColor}}>
            <button className={styles.openModal} onClick={onClick}>
                Seleccionar ciudad
            </button>
            <div className={styles.currentC}>
                <div>
                {image}
                </div>
                <h2 className={styles.weathercode}>
                    {weathercode}
                </h2>
               
                <h2 className={styles.currentH}>
                    {Math.round(props.locationData.hourly.temperature_2m[hour])}
                    {props.locationData.daily_units.apparent_temperature_max}
                </h2>
                <h3>
                    {dayoftheweek}- {hour}:00 - {props.selectedCity.value}
                </h3>
            </div>
        </div>
    )
}

export {CurrentWeather}
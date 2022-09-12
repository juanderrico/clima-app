import React from "react";
import styles from "./DailyWeather.module.css"
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import { WiCloud } from "react-icons/wi";
import {renderImage, weekday} from "../weathercontext/setimage.js"
import { useEffect, useState } from "react";


function DailyWeather ({reference}) {

    const {locationData, setSelectedIndex, setSelectedDayDate} = React.useContext(WeatherContext)
    let response={weathercode:"", image:<WiCloud></WiCloud>};
    const [dayoftheweek,setDay]=React.useState("")
    let index= locationData.daily.time.indexOf(reference) + 1

    const date = new Date();
    const day = String(date.getDate()+index+1).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = date.getFullYear();
    const currentDate =new Date(`${year}-${month}-${day}`)

    const [image,setimage]=React.useState("<WiCloud></WiCloud>")
    useEffect(()=>{
        
       
        setDay(weekday(currentDate.getDay()))
        
        response= renderImage(locationData, index,styles.img)
        
        setimage(response.image)
        },[locationData])
    
    return (
<button className={styles.selectDay} onClick={()=>{setSelectedIndex(index);setSelectedDayDate(currentDate)}}>
    <div className={styles.dailycontainer}>
        <div>
            <h2 className={styles.weekday }>
                {dayoftheweek}
            </h2>
            {image}
            <div className={styles.temperaturediv}>
                <h2 className={styles.temperature}>
                    {Math.round(locationData.daily.apparent_temperature_max[index])}
                    {locationData.daily_units.apparent_temperature_max}
                </h2>
                <h2 className={styles.temperature}>
                    {Math.round(locationData.daily.apparent_temperature_min[index])}
                    {locationData.daily_units.apparent_temperature_max}
                </h2>
            </div>
        </div>
    </div>
</button>
    )

}

export {DailyWeather}
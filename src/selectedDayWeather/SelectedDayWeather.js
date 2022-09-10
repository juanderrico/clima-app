import React from "react";
import { WeatherContext } from "../weathercontext/WeatherContext";
import styles from "./SelectedDayWeather.module.css"
import {windDirection} from "../weathercontext/setimage.js"
import { useEffect, useState } from "react";
function SelectedDayWeather(){
    const [windImage, setWindImage]= React.useState()
    const {locationData, selectedDayIndex, loading} = React.useContext(WeatherContext)
    const [windDir,setWindDirection]= React.useState()
    let response;
    useEffect(()=>{
        if(!loading){
            
            response=windDirection(locationData.daily.winddirection_10m_dominant[selectedDayIndex],styles.wind)
            setWindDirection(response.direction)
            setWindImage(response.image)
            }},[selectedDayIndex,locationData])

   
    return(

    <div>
        {!loading && <div className={styles.container}>
        <div className={styles.datocontainer}>
            <h1 className={styles.dato}>Horas de precipitacion:</h1>
            <h1 className={styles.dato} >{locationData.daily.precipitation_hours[selectedDayIndex]} horas</h1>
        </div>
        <div className={styles.datocontainer}>
            <h1 className={styles.dato}>Total de precipitacion:</h1>
            <h1 className={styles.dato} >{locationData.daily.precipitation_sum[selectedDayIndex]} mm</h1>
        </div>
        <div className={styles.datocontainer}>
            <h1 className={styles.dato}>Maxima velocidad del viento:</h1>
            <h1 className={styles.dato} >{locationData.daily.windspeed_10m_max[selectedDayIndex]} Km/h</h1>
        </div>
        <div className={styles.datocontainer}>
            <h1 className={styles.windDato}>Direccion del viento:</h1>
            {windImage}
            <h1 className={styles.windDato} >{windDir}</h1></div>

        </div>}
    </div>)
}

export {SelectedDayWeather}
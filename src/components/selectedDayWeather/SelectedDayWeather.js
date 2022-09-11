import React from "react";
import { WeatherContext } from "../weathercontext/WeatherContext";
import styles from "./SelectedDayWeather.module.css"
import {windDirection, weekday} from "../weathercontext/setimage.js"
import { useEffect, useState } from "react";
function SelectedDayWeather(){
    const [windImage, setWindImage]= React.useState()
    const {locationData, selectedDayIndex, loading, selectedDayDate} = React.useContext(WeatherContext)
    const [windDir,setWindDirection]= React.useState();
    const [selectedDay,setselectedDay]= React.useState();
    
    let day= new Date(selectedDayDate);
    let response;
    useEffect(()=>{
        if(!loading){
            setselectedDay(weekday(day.getDay()))
            response=windDirection(locationData.daily.winddirection_10m_dominant[selectedDayIndex],styles.wind)
            setWindDirection(response.direction)
            setWindImage(response.image)
            }},[selectedDayIndex,locationData])

            
    return(

    <div>{!loading &&
        <div>
        <h1 className={styles.title}>Datos del dia seleccionado:</h1>
        <h1 className={styles.date}>{locationData.daily.time[selectedDayIndex]}-{selectedDay}</h1>
          <div className={styles.container}>
            
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

        </div></div>}
    </div>)
}

export {SelectedDayWeather}
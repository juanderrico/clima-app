import React from "react";
import { WeatherContext } from "../weathercontext/WeatherContext";
import styles from "./SelectedDayWeather.module.css"
import {windDirection, weekday} from "../weathercontext/setimage.js"
import { useEffect, useState } from "react";
function SelectedDayWeather(props){
    const [windImage, setWindImage]= React.useState()

    const [windDir,setWindDirection]= React.useState();
    const [selectedDay,setselectedDay]= React.useState();
    
    let day= new Date(props.selectedDayDate);
    let response;
    useEffect(()=>{
        
            setselectedDay(weekday(day.getDay()))
            response=windDirection(props.locationData.daily.winddirection_10m_dominant[props.selectedDayIndex],styles.wind)
            setWindDirection(response.direction)
            setWindImage(response.image)
            },[props.selectedDayIndex,props.locationData])

            
    return(

    <div>
        <div>
            <h1 className={styles.title}>
                Datos del dia seleccionado:
            </h1>
            <h1 className={styles.date}>
                {props.locationData.daily.time[props.selectedDayIndex]}-{selectedDay}
            </h1>
            <div className={styles.container}>
                <div className={styles.datocontainer}>
                    <h1 className={styles.dato}>
                        Horas de precipitacion:
                    </h1>
                    <h1 className={styles.dato} >
                        {props.locationData.daily.precipitation_hours[props.selectedDayIndex]} horas
                    </h1>
                </div>
                <div className={styles.datocontainer}>
                    <h1 className={styles.dato}>
                        Total de precipitacion:
                    </h1>
                    <h1 className={styles.dato} >
                        {props.locationData.daily.precipitation_sum[props.selectedDayIndex]} mm
                    </h1>
                </div>
                <div className={styles.datocontainer}>
                    <h1 className={styles.dato}>
                        Maxima velocidad del viento:
                    </h1>
                    <h1 className={styles.dato} >
                        {props.locationData.daily.windspeed_10m_max[props.selectedDayIndex]} Km/h
                    </h1>
                </div>
                <div className={styles.datocontainer}>
                    <h1 className={styles.windDato}>
                        Direccion del viento:
                    </h1>
                    {windImage}
                    <h1 className={styles.windDato} >
                        {windDir}
                    </h1>
                </div>
            </div>
        </div>
    </div>)
}

export {SelectedDayWeather}
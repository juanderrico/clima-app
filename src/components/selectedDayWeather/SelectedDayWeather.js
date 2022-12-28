import React from "react";
import { SelectedDayInfo } from "../selectedDayInfo/SelectedDayInfo";
import { WeatherContext } from "../weathercontext/WeatherContext";
import styles from "./SelectedDayWeather.module.css"
import {windDirection, weekday} from "../weathercontext/setimage.js"
import { useEffect, useState } from "react";
import { SelectedDayInfoLoading } from "../loadingskeleton/SelectedDayInfoLoading";
import Skeleton from 'react-loading-skeleton'
function SelectedDayWeather(props){
    const [windImage, setWindImage]= React.useState()

    const [windDir,setWindDirection]= React.useState();
    const [selectedDay,setselectedDay]= React.useState();
    
    let day= new Date(props.selectedDayDate);
    let response;
    useEffect(()=>{
            if(!props.loading){
            setselectedDay(weekday(day.getDay()))
            response=windDirection(props.locationData.daily.winddirection_10m_dominant[props.selectedDayIndex],styles.wind)
            setWindDirection(response.direction)
            setWindImage(response.image)}
            },[props.selectedDayIndex,props.locationData])

            
    return(

  
        <div className={styles.container}>
            <h1 className={styles.title}>
                Datos del dia seleccionado:
            </h1>
            <h1 className={styles.date}>
                {!props.loading && <p>
                {props.locationData.daily.time[props.selectedDayIndex]}-{selectedDay}</p>}
                {props.loading && <Skeleton width={200} height={20}/>}
            </h1>
            <div className={styles.infocontainer}>
                
                {!props.loading && <React.Fragment><SelectedDayInfo 
                tipoDato="Horas de precipitacion:"
                dato={`${props.locationData.daily.precipitation_hours[props.selectedDayIndex]} Horas`}>
                </SelectedDayInfo>
                
                <SelectedDayInfo 
                tipoDato="Total de precipitacion:"
                dato={`${props.locationData.daily.precipitation_sum[props.selectedDayIndex]} mm`}>
                </SelectedDayInfo>
                <SelectedDayInfo 
                tipoDato="Maxima velocidad del viento:"
                dato={`${props.locationData.daily.windspeed_10m_max[props.selectedDayIndex]} Km/h`}>
                </SelectedDayInfo>
                
                <SelectedDayInfo 
                tipoDato="Direccion del viento:"
                dato={`${windDir} `}>
                    {windImage}
                </SelectedDayInfo></React.Fragment>}
                {props.loading && <React.Fragment>
                    <SelectedDayInfoLoading></SelectedDayInfoLoading>
                    <SelectedDayInfoLoading></SelectedDayInfoLoading>
                    <SelectedDayInfoLoading></SelectedDayInfoLoading>
                    <SelectedDayInfoLoading></SelectedDayInfoLoading>
                    </React.Fragment>}
            </div>
        </div>
    )
}

export {SelectedDayWeather}
import React from "react";
import styles from "../weekweather/WeekWeather.module.css"
import Skeleton from 'react-loading-skeleton'
import { useState } from "react";
import { DailyWeatherLoading } from "./DailyWeatherLoading";
function WeekWeatherLoading(){
    const [list,setList] =React.useState()
    let tempArray=[]
    for(let i=0;i<5;i++){
        tempArray.push(<DailyWeatherLoading></DailyWeatherLoading>)
    }
    //setList("hola")
    return (
        <div className={styles.weekcontainer}>
        <div className={styles.buttondiv}>
            <button className={styles.button}>
                °C  
            </button >                      
            <button className={styles.button}>
                 °F    
            </button>
        </div>
        <div className={styles.weathercontainer}>
                {tempArray}
            </div></div>
    )
}

export {WeekWeatherLoading}
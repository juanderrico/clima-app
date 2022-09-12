import React, { useEffect } from "react";
import styles from "./WeekWeather.module.css"

import { WeatherContext } from "../weathercontext/WeatherContext.js";
function WeekWeather ({children}){
    const {settUnit,locationData} = React.useContext(WeatherContext)
    
    let list=[]
   
    const [stC,setstC]=React.useState(true);
    const [stF,setstF]=React.useState(false);
    useEffect(()=>{
    
    if(locationData.daily_units.apparent_temperature_max==="°C"){
        setstC(true)
        setstF(false)
    }else if(locationData.daily_units.apparent_temperature_max ==="°F"){
        setstC(false)
        setstF(true)
    }},[locationData])
    
    
    const changeToC= () =>{
        settUnit("celsius")
        
    }
    const changeToF= () =>{
        settUnit("fahrenheit")
      
    }
        
    return (
        <div className={styles.weekcontainer}>
        <div className={styles.buttondiv}>
            <button className={stC? styles.button : styles.activebutton} onClick={()=>changeToC()}>
            °C  </button >                      
            <button className={stF? styles.button : styles.activebutton} onClick={()=>changeToF()}>
            °F    </button></div>
        <div className={styles.weathercontainer}>
            {children}
        </div>
        </div>
    )
}

export {WeekWeather}
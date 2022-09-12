import React, { useEffect } from "react";
import styles from "./WeekWeather.module.css"
import { WeatherContext } from "../weathercontext/WeatherContext.js";

function WeekWeather (props){
    
    const [stC,setstC]=React.useState(true);
    const [stF,setstF]=React.useState(false);
    useEffect(()=>{
    if(props.locationData.daily_units.apparent_temperature_max==="°C"){
        setstC(true)
        setstF(false)
    }else if(props.locationData.daily_units.apparent_temperature_max ==="°F"){
        setstC(false)
        setstF(true)
    }},[props.locationData])
    
    
    const changeToC= () =>{
        props.settUnit("celsius")
    }
    const changeToF= () =>{
        props.settUnit("fahrenheit")
    }
        
    return (
        <div className={styles.weekcontainer}>
            <div className={styles.buttondiv}>
                <button className={stC? styles.button : styles.activebutton} onClick={()=>changeToC()}>
                    °C  
                </button >                      
                <button className={stF? styles.button : styles.activebutton} onClick={()=>changeToF()}>
                     °F    
                </button>
            </div>
            <div className={styles.weathercontainer}>
                {props.children}
            </div>
        </div>
    )
}

export {WeekWeather}
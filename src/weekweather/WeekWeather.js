import React, { useEffect } from "react";
import styles from "./WeekWeather.module.css"
import {DailyWeather} from "../dailyweather/DailyWeather.js"
import { WeatherContext } from "../weathercontext/WeatherContext.js";
function WeekWeather (){
    const {locationData, loading,settUnit,unitLetter} = React.useContext(WeatherContext)
    let index=1;
    let list=[]
    if(!loading){
        for(let day of locationData.daily.time){
    list.push(
        <DailyWeather index={index}></DailyWeather>
    )
    index++}list.pop()}
    const [stC,setstC]=React.useState(true);
    const [stF,setstF]=React.useState(false);
    useEffect(()=>{
    if(!loading){
    if(unitLetter==="C"){
        setstC(true)
        setstF(false)
    }else if(unitLetter==="F"){
        setstC(false)
        setstF(true)
    }}},[unitLetter])
    
    
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
            {list}
        </div>
        </div>
    )
}

export {WeekWeather}
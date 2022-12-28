import React from "react";
import styles from "../currentweather/CurrentWeather.module.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function CurrentWeatherLoading(){

    return(
        <div className={styles.container} >
        
        <div className={styles.currentC}>
            <div>
            <Skeleton  width={200} height={200}/>
            </div>
            <p className={styles.weathercode}>
            <Skeleton  width={150} height={20}/>
            </p>
           
            <h2 className={styles.currentH}>
           
            <Skeleton  width={150} height={20}/>
            </h2>
            <h3>
            <Skeleton  width={150} height={20}/>
            </h3>
        </div>
    </div>
    )
}

export {CurrentWeatherLoading}
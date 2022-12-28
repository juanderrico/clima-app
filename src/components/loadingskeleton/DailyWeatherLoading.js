import React from "react";
import styles from "../dailyweather/DailyWeather.module.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function DailyWeatherLoading(){

    return(
        <button className={styles.selectDay}>
    <div className={styles.dailycontainer}>
        
            <h2 className={styles.weekday }>
                <Skeleton  width={100} height={20}/>
            </h2>
            <Skeleton width={60} height={40}/>
            <div className={styles.temperaturediv}>
              
                <h2 className={styles.temperature}>
                    <Skeleton width={100} height={20}/>
                    
                </h2>
            </div>
        
    </div>
</button>
    )
}

export {DailyWeatherLoading}

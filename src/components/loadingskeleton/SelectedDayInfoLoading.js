import React from "react";

import styles from "../selectedDayInfo/SelectedDayInfo.module.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function SelectedDayInfoLoading(){

    return (
        <div className={styles.datocontainer}>
                    <p className={styles.dato}>
                    <Skeleton  width={150} height={20}/>
                    </p>
                    
                    <p className={styles.dato} >
                    <Skeleton  width={150} height={20}/>
                        
                    </p>
                </div>
    )
}

export {SelectedDayInfoLoading}
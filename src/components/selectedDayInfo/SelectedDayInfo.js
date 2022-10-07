import React from "react";

import styles from "./SelectedDayInfo.module.css"


function SelectedDayInfo(props){

    return (
        <div className={styles.datocontainer}>
                    <p className={styles.dato}>
                        {props.tipoDato}
                    </p>
                    {props.children}
                    <p className={styles.dato} >
                        {props.dato}
                        
                    </p>
                </div>
    )
}

export {SelectedDayInfo}
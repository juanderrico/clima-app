import React from "react" 
import styles from "./header.module.css"

function Header(){
//hora diaria
//hourly wind details   
//hourly soil moisture
//detailed precipitation hourly
    return(
        <div className={styles.container}>
            <button className={styles.button}>Home</button>
            <button className={styles.button}>Detalles generales</button>
            <button className={styles.button}>Detalles viento</button>
            <button className={styles.button}>Detalles suelo</button>
            <button className={styles.button}>Cambiar tema</button>
        </div>
    )
}
export {Header}
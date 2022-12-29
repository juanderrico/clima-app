import React from "react";
import  ReactDOM  from "react-dom";
import styles from "./SelectLocation.module.css"
function SelectLocation(props){


    return ReactDOM.createPortal(
        <div className={styles.ModalBackground} ref={props.modalRef}>
       {props.children}</div>,
        document.getElementById("search")
    )
}
export {SelectLocation}
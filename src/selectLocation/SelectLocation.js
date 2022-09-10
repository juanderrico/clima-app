import React from "react";
import  ReactDOM  from "react-dom";

function SelectLocation({children}){


    return ReactDOM.createPortal(
        <div className="ModalBackground">
       {children}</div>,
        document.getElementById("search")
    )
}
export {SelectLocation}
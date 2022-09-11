import React from "react";
import { WiSleet,WiDaySleetStorm,WiDirectionUpLeft,WiDirectionUpRight,WiDirectionDownRight,WiDirectionDownLeft,WiDirectionUp,WiDirectionLeft,WiDirectionDown,WiDirectionRight, WiCloud, WiCloudy,WiDaySunny, WiFog, WiSprinkle, WiThunderstorm,WiRain,WiSnow,WiShowers,WiSnowWind } from "react-icons/wi";
function renderImage (locationData, loading,index,styles) {

  if(!loading){
  
  switch(locationData.daily.weathercode[index]){
      case 0: 
          return{weathercode:"Soleado", image:<WiDaySunny className={styles}/>}
      case 1:
      case 2: 
          return{weathercode:"Parcialmente nublado",image: <WiCloud className={styles}/>}
      case 3: 
          return{weathercode:"Nublado", image:<WiCloudy className={styles}/>}
      case 45:
      case 48:
          
          return{weathercode:"Niebla",image: <WiFog className={styles}/>}
      case 51: 
      case 53: 
      case 55:
          return{weathercode:"Llovizna",image: <WiSprinkle className={styles}/>}
      case 61:
      case 63:
      case 65:
        return{weathercode:"Lluvia",image: <WiRain className={styles}/>}
    case 56:
    case 57:
    case 66:
    case 67:
          return{weathercode:"Aguanieve",image: <WiSleet className={styles}/>}
      case 71:
      case 73:
      case 75:
      case 77:
          return{weathercode:"Nieve", image:<WiSnow className={styles}/>}
      case 80:
      case 81:
      case 82:
          return{weathercode:"Chaparrones", image:<WiShowers className={styles}/>}
      case 85:
      case 86:
          return{weathercode:"Nieve fuerte", image:<WiSnowWind className={styles}/>}
      case 95:
        return{weathercode:"Tormentas" ,image:<WiThunderstorm className={styles}/>}
      case 96: 
      case 99:
          return{weathercode:"Cellisca" ,image:<WiDaySleetStorm className={styles}/>}
   }}}

   function weekday(date){
    switch(date){
        case 0:
            return "Domingo"
        case 1:
            return "Lunes"
        case 2: 
            return "Martes"
        case 3:
            return "Miercoles"
        case 4:
            return "Jueves"
        case 5:
            return "Viernes"
        case 6:
            return "Sabado"

    }
    return
   }
function windDirection(wind,style){


        if (wind > 337.5 || wind < 22.5){
            return {direction:"Norte",image:<WiDirectionUp className={style}></WiDirectionUp>}}
        else if (wind > 22.5 && wind < 67.5){
            return {direction:"Noreste",image:<WiDirectionUpRight className={style}></WiDirectionUpRight>}}
        else if (wind > 67.5 && wind < 112.5){
            return {direction:"Este",image:<WiDirectionRight className={style}></WiDirectionRight>}}
        else if (wind > 112.5 && wind < 157.5){
            return {direction:"Sureste",image:<WiDirectionDownRight className={style}></WiDirectionDownRight>}}
        else if (wind > 157.5 && wind < 202.5){
            return {direction:"Sur",image:<WiDirectionDown className={style}></WiDirectionDown>}}
        else if (wind > 202.5 && wind < 247.5){
            return {direction:"Suroeste",image:<WiDirectionDownLeft className={style}></WiDirectionDownLeft>}}
        else if (wind > 247.5 && wind < 292.5){
            return {direction:"Oeste",image:<WiDirectionLeft className={style}></WiDirectionLeft>}}
        else if (wind > 292.5 && wind < 337.5){
            return {direction:"Noroeste",image:<WiDirectionUpLeft className={style}></WiDirectionUpLeft>}}
        
       
    }
function setbackground(weathercode){
    switch(weathercode){
        case "Soleado":
            return "linear-gradient(0deg, rgba(41,241,237,1) 71%, rgba(208,200,5,1) 95%)";
        case "Nieve":
        case "Nieve fuerte":
        case "Aguanieve":
            return "linear-gradient(0deg, rgba(255,255,255,1) 12%, rgba(84,84,84,1) 55%)";
        case "Parcialmente nublado":
        case "Nublado":
            return "linear-gradient(0deg, rgba(162,162,162,1) 0%, rgba(41,42,42,1) 69%)";
        case "Tormentas":
        case "Cellisca":
            return "linear-gradient(331deg, rgba(57,57,55,1) 43%, rgba(153,163,163,1) 57%, rgba(211,213,36,1) 59%, rgba(153,163,163,1) 62%, rgba(153,163,163,1) 70%, rgba(211,213,36,1) 73%, rgba(153,163,163,1) 75%, rgba(57,57,55,1) 82%)";
        case "Llovizna":
        case "Lluvia":
        case "Chaparrones":
            return "linear-gradient(0deg, rgba(27,70,199,1) 12%, rgba(84,84,84,1) 59%)";
        case "Niebla":
            return "radial-gradient(circle, rgba(52,52,52,1) 4%, rgba(105,105,105,1) 46%, rgba(62,62,62,1) 83%)";


    }


}
export {renderImage, weekday, windDirection, setbackground}
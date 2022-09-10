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

export {renderImage, weekday, windDirection}
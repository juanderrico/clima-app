import React from "react";
import { WiCloud, WiCloudy,WiDaySunny, WiFog, WiSprinkle, WiThunderstorm,WiRain,WiSnow,WiShowers,WiSnowWind } from "react-icons/wi";
function renderImage (locationData, setWeatherCode,loading) {
  if(!loading){
  console.log(locationData)
  switch(locationData.daily.weathercode[0]){
      case 0: 
          setWeatherCode( "Soleado")
          return <WiDaySunny className="img"/>;
      case 1:
      case 2: 
          setWeatherCode("Parcialmente nublado")
          return <WiCloud className="img"/>;
      case 3: 
          setWeatherCode("Nublado")
          return <WiCloudy className="img"/>;
      case 45:
      case 48:
          setWeatherCode("Niebla")
          return <WiFog className="img"/>
      case 51: 
      case 53: 
      case 55:
      case 56:
      case 57:
          setWeatherCode("Llovizna")
          return <WiSprinkle className="img"/>
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
          setWeatherCode("Lluvia")
          return <WiRain className="img"/>
      case 71:
      case 73:
      case 75:
      case 77:
          setWeatherCode("Nieve")
          return <WiSnow className="img"/>
      case 80:
      case 81:
      case 82:
          setWeatherCode("Chaparrones")
          return <WiShowers className="img"/>
      case 85:
      case 86:
          setWeatherCode("Nieve fuerte")
          return <WiSnowWind className="img"/>
      case 95:
      case 96: 
      case 99:
          setWeatherCode("Tormentas")
          return <WiThunderstorm className="img"/>
   }}}

export {renderImage}
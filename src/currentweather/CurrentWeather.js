import React from "react";
import "./CurrentWeather.css"
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import { WiCloud, WiCloudy,WiDaySunny, WiFog, WiSprinkle, WiThunderstorm,WiRain,WiSnow,WiShowers,WiSnowWind } from "react-icons/wi";

function CurrentWeather(){
    const d = new Date();
    let hour = d.getHours();
    const {locationData,loading} = React.useContext(WeatherContext)
    let weathercode= ""
    console.log(weathercode)
    const renderImage = () =>{if(!loading){
        switch(locationData.daily.weathercode[0]){
            case 0: 
                weathercode= "Soleado"
                return <WiDaySunny className="img"/>;
            case 1:
            case 2: 
                weathercode="Parcialmente nublado"
                return <WiCloud className="img"/>;
            case 3: 
                weathercode="Nublado"
                return <WiCloudy className="img"/>;
            case 45:
            case 48:
                weathercode="Niebla"
                return <WiFog className="img"/>
            case 51: 
            case 53: 
            case 55:
            case 56:
            case 57:
                weathercode="Llovizna"
                return <WiSprinkle className="img"/>
            case 61:
            case 63:
            case 65:
            case 66:
            case 67:
                weathercode="Lluvia"
                return <WiRain className="img"/>
            case 71:
            case 73:
            case 75:
            case 77:
                weathercode="Nieve"
                return <WiSnow className="img"/>
            case 80:
            case 81:
            case 82:
                weathercode="Chaparrones"
                return <WiShowers className="img"/>
            case 85:
            case 86:
                weathercode="Nieve fuerte"
                return <WiSnowWind className="img"/>
            case 95:
            case 96: 
            case 99:
                weathercode="Tormentas"
                return <WiThunderstorm className="img"/>
         }}
    }
    
    
    

    return (

        <div className="container">
            {!loading && <div className="currentC">
            <div>
            {renderImage()}
                </div>
            <h2 className="weathercode">{weathercode}</h2>
               
            <h2 className="currentH">{Math.round(locationData.hourly.temperature_2m[0])}°C</h2>
            
            </div>}
        </div>
    )
}

export {CurrentWeather}
import React from "react";
import { useEffect, useState } from "react";

const WeatherContext= React.createContext();

function WeatherProvider(props){
  let currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  const year = currentDate.getFullYear();
  currentDate =`${year}-${month}-${day}`
  const maxDate = `${year}-${month}-${day+6}`
  console.log(currentDate)
  const [locationData, setlocationData] = React.useState([])
  const [loading, setLoading] = React.useState(true);

  const API= `https://api.open-meteo.com/v1/forecast?latitude=-31.25&longitude=-64.30&hourly=temperature_2m,precipitation&daily=weathercode,apparent_temperature_max,apparent_temperature_min&timezone=auto&start_date=${currentDate}&end_date=2022-09-15`;
    
  useEffect(()=> {
    
      fetch(`${API}`)
      .then(response=>response.json())
      .then((data)=>{
        setlocationData(data)
        console.log(data)
        setLoading(false)
    })
},[])


    return (
        <WeatherContext.Provider value={{
            locationData,
            setlocationData,
            loading
        }}>{props.children}</WeatherContext.Provider>
    )
}

export {WeatherContext, WeatherProvider}
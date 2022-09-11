import React from "react";
import { useEffect, useState } from "react";
import { locationSet } from "./locationSet.js";

const WeatherContext= React.createContext();

function WeatherProvider(props){
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  const currentDate =`${year}-${month}-${day}`
  let maxDate = new Date(date);
  const nday= maxDate.getDate()+6
  maxDate=`${year}-${month}-${nday}`
 

  const [selectedDayIndex,setSelectedIndex]=React.useState(0)

  
  const [locationData, setlocationData] = React.useState([])
  const [selectedDayDate, setSelectedDayDate]= React.useState(currentDate)
  const [loading, setLoading] = React.useState(true);
  const cities = ["Berlin", "Paris","London","Madrid","Vienna","Brussels","Moscow","Sofia","Copenhagen","Athens","Budapest","Reykjavik","Dublin","Rome","Amsterdam","Oslo","Warsaw","Lisabon","Bern","Kiev","Stockholm","Washington","New York","Sacramento","Los angeles","Chicago","Houston","Phoenix","Philadelphia","Vancouver","Ottawa","Buenos Aires","Brasilia","Santiago","Bogota","Ciudad de Mexico","Asuncion","Lima","Montevideo","Kabul","Dhaka","Peking","Tiflis","New Delhi","Jakarta","Teheran","Baghdad","Jerusalem","Tokyo","Kuala Lumpur","Ulan Bator","Kathmandu","Singapure","Seoul","Ankara","Abu Dhabi","Algiers","Luanda","Cairo","Nairobi","Tripoli","WindHoek","Pretoria","Canberra","Wellington"]
  cities.sort((a,b)=> a.localeCompare(b))//filtra el array alfabeticamente
  
  const [selectedCity, setCity] = React.useState("Madrid")

  const [latitude,setLatitude]= React.useState(0);
  const [longitude,setLongitude]= React.useState(0);
  
  let searchResults=[]
  const [searchValue, setSearchValue]= React.useState("");
  if (!searchValue.length>=1){
    searchResults=cities;
  }
  else{
    searchResults=cities.filter(city=>{
      const citiesFilter=city.toLowerCase()
      const searchFilter=searchValue.toLowerCase()
      return citiesFilter.includes(searchFilter)
    })
  }//filtra en el array para buscar la ciudad que se esta buscando
  const [tUnit,settUnit]=React.useState("celsius")
  let unitLetter="C"
  if(tUnit==="celsius"){
    unitLetter="C"
  } else{
    unitLetter="F"
  }
  let i={longitud:0,latitud:0};
  
  useEffect(()=>{
    i=locationSet(selectedCity)
    setLatitude(i.latitud)
    setLongitude(i.longitud)
  },[selectedCity])

  useEffect(()=> {

    const API= `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,weathercode&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant&temperature_unit=${tUnit}&timezone=auto&start_date=${currentDate}&end_date=${maxDate}`;
      fetch(`${API}`)
      . then(response=>response.json())
      .then((data)=>{
        setlocationData(data)
        setLoading(false)

        
    })
},[longitude,tUnit])//llama a la api, y se asegura que los componentes que tengan loading no sean cargados antes de que se reciba la api


    return (
        <WeatherContext.Provider value={{
            locationData,
            setlocationData,
            loading,
            searchValue,
            setSearchValue,
            searchResults,
            setCity,
            selectedCity,
            setLoading,
            settUnit,
            unitLetter,
            tUnit,
            setSelectedIndex,
            selectedDayIndex,
            setSelectedDayDate,
            selectedDayDate
        }}>{props.children}</WeatherContext.Provider>
    )
}

export {WeatherContext, WeatherProvider}
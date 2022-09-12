import React from "react";
import { useEffect, useState } from "react";
import { locationSet } from "./locationSet.js";

const WeatherContext= React.createContext();

function WeatherProvider(props){
  const date = new Date();
  let day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  const currentDate =`${year}-${month}-${day}`
  let maxDate = new Date(date);
  day = String(date.getDate()+6).padStart(2, '0');
  maxDate=`${year}-${month}-${day}`
 
  const [selectedDayIndex,setSelectedIndex]=React.useState(0)
  const [openModal, setOpenModal] = React.useState(false) // utilizado para abrir el input para filtrar ciudades
  
  const [locationData, setlocationData] = React.useState([])
  const [selectedDayDate, setSelectedDayDate]= React.useState(currentDate)
  const [loading, setLoading] = React.useState(true);
  const cities = ["Berlin", "Paris","London","Madrid","Vienna","Brussels","Moscow","Sofia","Copenhagen","Athens","Budapest","Reykjavik","Dublin","Rome","Amsterdam","Oslo","Warsaw","Lisabon","Bern","Kiev","Stockholm","Washington","New York","Sacramento","Los angeles","Chicago","Houston","Phoenix","Philadelphia","Vancouver","Ottawa","Buenos Aires","Brasilia","Santiago","Bogota","Ciudad de Mexico","Asuncion","Lima","Montevideo","Kabul","Dhaka","Peking","Tiflis","New Delhi","Jakarta","Teheran","Baghdad","Jerusalem","Tokyo","Kuala Lumpur","Ulan Bator","Kathmandu","Singapure","Seoul","Ankara","Abu Dhabi","Algiers","Luanda","Cairo","Nairobi","Tripoli","WindHoek","Pretoria","Canberra","Wellington"]
  cities.sort((a,b)=> a.localeCompare(b))//filtra el array alfabeticamente
  
  const [selectedCity, setCity] = React.useState("Madrid")
  const [coordenadas, setCoordenadas]=React.useState({longitud:0,latitud:0})

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
 
  useEffect(()=>{
    setCoordenadas({...locationSet(selectedCity)})
  },[selectedCity])

  useEffect(()=> {

    const API= `https://api.open-meteo.com/v1/forecast?latitude=${coordenadas.latitud}&longitude=${coordenadas.longitud}&hourly=temperature_2m,precipitation,weathercode&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant&temperature_unit=${tUnit}&timezone=auto&start_date=${currentDate}&end_date=${maxDate}`;
      fetch(`${API}`)
      . then(response=>response.json())
      .then((data)=>{
        setlocationData(data)
        setLoading(false)

        
    })
},[coordenadas,tUnit])//llama a la api, y se asegura que los componentes que tengan loading no sean cargados antes de que se reciba la api


    return (
        <WeatherContext.Provider value={{
            locationData,
            loading,
            searchValue,
            setSearchValue,
            searchResults,
            setCity,
            selectedCity,
            settUnit,
            tUnit,
            setSelectedIndex,
            selectedDayIndex,
            setSelectedDayDate,
            selectedDayDate,
            setOpenModal,
            openModal
        }}>{props.children}</WeatherContext.Provider>
    )
}

export {WeatherContext, WeatherProvider}
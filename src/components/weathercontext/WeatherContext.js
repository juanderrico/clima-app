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
 // day = String(date.getDate()+6).padStart(2, '0');
  maxDate.setDate(date.getDate()+6)
  let maxday = String(maxDate.getDate()).padStart(2, '0');
  const maxmonth = String(maxDate.getMonth() + 1).padStart(2, '0'); 
  const maxyear = maxDate.getFullYear();
   maxDate =`${maxyear}-${maxmonth}-${maxday}`
 
  const [selectedDayIndex,setSelectedIndex]=React.useState(0)
  const [openModal, setOpenModal] = React.useState(false) // utilizado para abrir el input para filtrar ciudades
  
  const [locationData, setlocationData] = React.useState([])
  const [selectedDayDate, setSelectedDayDate]= React.useState(currentDate)
  const [loading, setLoading] = React.useState(true);
  const [countries, setCountries]=React.useState()
  const [cities,setCities]=React.useState()
  
  const [selectedCity, setCity] = React.useState("Madrid")
  const [coordenadas, setCoordenadas]=React.useState({longitud:0,latitud:0})
  const [error,setError]= React.useState(false)
  const [selectedCountry,setSelectedCountry]=React.useState()
  const geoCodingAPI= `http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=5&appid=02856c6edfa4a4a343b7b40c12bd6d33`
  let searchResults=[]
  const [searchValue, setSearchValue]= React.useState("");
  const [cityModal,setCityModal]=React.useState(false)
  if (!searchValue.length>=1){
    searchResults=countries;
  }
  else{
    searchResults=countries.filter(country=>{
      const citiesFilter=country.country.toLowerCase()
      const searchFilter=searchValue.toLowerCase()
      return citiesFilter.includes(searchFilter)
    })
  }//filtra en el array para buscar la ciudad que se esta buscando
  
  const [tUnit,settUnit]=React.useState("celsius")
  useEffect(()=>{
    
    if(!loading){
      setCityModal(true)
    setCities(countries.find(country=>country.country==selectedCountry).cities)}
    
  },[selectedCountry])
  useEffect(()=>{
    fetch(geoCodingAPI)
    .then(response=>response.json())
    .then(response=>{
      setCoordenadas({latitud:response[0].lat,longitud:response[0].lon})
      console.log(response)
    })
  },[selectedCity])
  useEffect(()=>{
    fetch('https://countriesnow.space/api/v0.1/countries')
    .then(response=>response.json())
    .then(response=>{
      setCountries(response.data)
    console.log(countries)})
  },[])
  useEffect(()=> {
    setLoading(true)
    const API= `https://api.open-meteo.com/v1/forecast?latitude=${coordenadas.latitud}&longitude=${coordenadas.longitud}&hourly=temperature_2m,weathercode&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&temperature_unit=${tUnit}&start_date=${currentDate}&end_date=${maxDate}`
      window.
      fetch(API)
      .then(response=>response.json())
      
      .then((data)=>{
        setlocationData(data)
        setLoading(false)

        
    }).catch((err) => {
      setError(err)
      
    });
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
            openModal,
            error,
            setSelectedCountry,
            selectedCountry,
            cityModal,
            setCityModal,
            cities
        }}>{props.children}</WeatherContext.Provider>
    )
}

export {WeatherContext, WeatherProvider}
import React from "react";
import { useEffect, useState } from "react";

const WeatherContext= React.createContext();

function WeatherProvider(props){
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const year = date.getFullYear();
  const currentDate =`${year}-${month}-${day}`
  let maxDate = new Date(date);
  const nday= maxDate.getDate()+6
  maxDate=`${year}-${month}-${nday}`
 


  const [locationData, setlocationData] = React.useState([])
  
  const [loading, setLoading] = React.useState(true);
  const cities = ["Berlin", "Paris","London","Madrid","Vienna","Brussels","Moscow","Sofia","Copenhagen","Athens","Budapest","Reykjavik","Dublin","Rome","Amsterdam","Oslo","Warsaw","Lisabon","Bern","Kiev","Stockholm","Washington","New York","Sacramento","Los angeles","Chicago","Houston","Phoenix","Philadelphia","Vancouver","Ottawa","Buenos Aires","Brasilia","Santiago","Bogota","Ciudad de Mexico","Asuncion","Lima","Montevideo","Kabul","Dhaka","Peking","Tiflis","New Delhi","Jakarta","Teheran","Baghdad","Jerusalem","Tokyo","Kuala Lumpur","Ulan Bator","Kathmandu","Singapure","Seoul","Ankara","Abu Dhabi","Algiers","Luanda","Cairo","Nairobi","Tripoli","WindHoek","Pretoria","Canberra","Wellington"]
  const [selectedCity, setCity] = React.useState("")

  let latitude= 0;
  let longitude= 0;
  


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
  let tUnit="celsius"
  
  
  useEffect(()=> {
    switch(selectedCity.value){
      case "Berlin":
        longitude=13.41;
        latitude=52.52;
        break;
      case "Paris":
        longitude=2.35;
        latitude=48.85;
        break;
      case "London":  
        longitude=-0.12;
        latitude=51.50;
        break;
      case "Madrid":
        longitude=-3.70;
        latitude=40.41;
        break;
      case "Vienna":
        longitude=16.37;
        latitude=48.20;
        break;
      case "Brussels":
        longitude=4.36;
        latitude=50.83;
        break;
      case "Moscow":
        longitude=37.61;
        latitude=55.75;
        break;
      case "Sofia":
        longitude=23.32;
        latitude=42.71 
        break;
      case "Athens":
        longitude=23.71;
        latitude=37.97
        break;
      case "Copenhagen":
        longitude=12.56;
        latitude=55.67
        break;
      case "Budapest":
        longitude=19.04;
        latitude=47.49 
        break;
      case "Reykjavik":
        longitude=-21.89;
        latitude=64.13 
        break;
      case "Dublin":
        longitude=-6.26;
        latitude=53.34
        break;
      case "Rome":
        longitude=12.48;
        latitude=41.89 
        break;
      case "Amsterdam":
        longitude=4.89;
        latitude=52.37 
        break;
      case "Oslo":
        longitude=10.73;
        latitude=59.91 
        break;
      case "Warsaw":
        longitude=21.01;
        latitude=52.22 
        break;
      case "Lisabon":
        longitude=-9.13;
        latitude=38.70 
        break;
      case "Bern":
        longitude=7.44;
        latitude=46.94 
        break;
      case "Kiev":
        longitude=30.53;
        latitude=50.44 
        break;
      case "Stockholm":
        longitude=18.06;
        latitude=59.33
        break;
      case "Washington":
        longitude=-77.02;
        latitude=38.89 
        break;
      case "New York":
        longitude=-74.01;
        latitude=40.71 
        break;
      case "Sacramento":
        longitude=-121.48;
        latitude=38.57 
        break;
      case "Los angeles":
        longitude=-118.24;
        latitude=34.05 
        break;
      case "Chicago":
        longitude=-87.65;
        latitude=41.85 
        break;
      case "Houston":
        longitude=-95.36;
        latitude=29.76
        break;
      case "Phoenix":
        longitude=-112.07;
        latitude=33.45 
        break;
      case "Philadelphia":
        longitude=-75.16;
        latitude=39.95 
        break;
      case "Vancouver":
        longitude=-123.12;
        latitude=49.25 
        break;
      case "Ottawa":
        longitude=-75.69;
        latitude=45.42 
        break;
      case "Buenos Aires":
        longitude=-58.41;
        latitude=-34.61 
        break;
      case "Brasilia":
        longitude=-47.92;
        latitude=-15.78 
        break;
      case "Santiago":
        longitude=-70.64;
        latitude=-33.46 
        break;
      case "Bogota":
        longitude=-74.09;
        latitude=4.64
        break;
      case "Ciudad de Mexico":
        longitude=-99.12;
        latitude=19.42 
        break;
      case "Asuncion":
        longitude=-57.63;
        latitude=-25.30 
        break;
      case "Lima":
        longitude=-77.04;
        latitude=-12.09 
        break;
      case "Montevideo":
        longitude=-56.06;
        latitude=-34.89 
        break;
      case "Kabul":
        longitude=69.19;
        latitude=34.51
        break;
      case "Dhaka":
        longitude=90.39;
        latitude=23.71
        break;
      case "Peking":
        longitude=116.39;
        latitude=39.90 
        break;
      case "Tiflis":
        longitude=44.79;
        latitude=41.70 
        break;
      case "New Delhi":
        longitude=77.22;
        latitude=28.63
        break;
      case "Jakarta":
        longitude=106.80;
        latitude=-6.18 
        break;
      case "Teheran":
        longitude=51.43;
        latitude=35.70 
        break;
      case "Baghdad":
        longitude=44.39;
        latitude=33.31
        break;
      case "Jerusalem":
        longitude=35.20;
        latitude=31.78
        break;
      case "Tokyo":
        longitude=139.68;
        latitude=35.67 
        break;
      case "Kuala Lumpur":
        longitude=101.70;
        latitude=3.15 
        break;
      case "Ulan Bator":
        longitude=106.92;
        latitude=47.91 
        break;
      case "Kathmandu":
        longitude=85.31;
        latitude=27.70 
        break;
      case "Singapure":
        longitude=103.85;
        latitude=1.28 
        break;
      case "Seoul":
        longitude=126.98;
        latitude=37.51 
        break;
      case "Ankara":
        longitude=32.85;
        latitude=39.94 
        break;
      case "Abu Dhabi":
        longitude=54.37;
        latitude=24.47 
        break;
      case "Algiers":
        longitude=3.05;
        latitude=36.77 
        break;
      case "Luanda":
        longitude=13.23;
        latitude=-8.81 
        break;
      case "Cairo":
        longitude=31.22;
        latitude=30.05 
        break;
      case "Nairobi":
        longitude=36.79;
        latitude=-1.27
        break;
      case "Tripoli":
        longitude=13.18;
        latitude=32.88 
        break;
      case "WindHoek":
        longitude=17.08;
        latitude=-22.57 
        break;
      case "Pretoria":
        longitude=28.18;
        latitude=-25.74 
        break;
      case "Canberra":
        longitude=149.12;
        latitude=-35.28 
        break;
      case "Wellington":
        longitude=174.77;
        latitude=-41.28;
      break;
    }
    const API= `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,weathercode&daily=weathercode,apparent_temperature_max,apparent_temperature_min&temperature_unit=${tUnit}&timezone=auto&start_date=${currentDate}&end_date=${maxDate}`;
      fetch(`${API}`)
      . then(response=>response.json())
      .then((data)=>{
        setlocationData(data)
        setLoading(false)
        
    })
},[selectedCity])//llama a la api, y se asegura que los componentes que tengan loading no sean cargados antes de que se reciba la api


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
            setLoading
        }}>{props.children}</WeatherContext.Provider>
    )
}

export {WeatherContext, WeatherProvider}
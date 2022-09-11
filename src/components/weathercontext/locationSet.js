import React from "react";

function locationSet(selectedCity){
    switch(selectedCity.value || "Berlin"){
        case "Berlin":
          return {longitud:13.41, latitud:52.52}
          
        case "Paris":
          return {longitud:2.35, latitud:48.85}
          
        case "London":  
          return {longitud:-0.12, latitud:51.50}
          
        case "Madrid":
          return {longitud:-3.70, latitud:40.41}
          
        case "Vienna":
          return {longitud:16.37, latitud:48.20}
          
        case "Brussels":
          return {longitud:4.36, latitud:50.83}
          
        case "Moscow":
          return {longitud:37.61, latitud:55.75}
          
        case "Sofia":
          return {longitud:23.32, latitud:42.71 }
          
        case "Athens":
          return {longitud:23.71, latitud:37.97}
          
        case "Copenhagen":
          return {longitud:12.56, latitud:55.67}
          
        case "Budapest":
          return {longitud:19.04, latitud:47.49 }
          
        case "Reykjavik":
          return {longitud:-21.89, latitud:64.13 }
          
        case "Dublin":
          return {longitud:-6.26, latitud:53.34}
          
        case "Rome":
          return {longitud:12.48, latitud:41.89 }
          
        case "Amsterdam":
          return {longitud:4.89, latitud:52.37 }
          
        case "Oslo":
          return {longitud:10.73, latitud:59.91 }
          
        case "Warsaw":
          return {longitud:21.01, latitud:52.22 }
          
        case "Lisabon":
          return {longitud:-9.13, latitud:38.70 }
          
        case "Bern":
          return {longitud:7.44, latitud:46.94 }
          
        case "Kiev":
          return {longitud:30.53, latitud:50.44 }
          
        case "Stockholm":
          return {longitud:18.06, latitud:59.33}
          
        case "Washington":
          return {longitud:-77.02, latitud:38.89 }
          
        case "New York":
          return {longitud:-74.01, latitud:40.71 }
          
        case "Sacramento":
          return {longitud:-121.48, latitud:38.57 }
          
        case "Los angeles":
          return {longitud:-118.24, latitud:34.05} 
          
        case "Chicago":
          return {longitud:-87.65, latitud:41.85 }
          
        case "Houston":
          return {longitud:-95.36, latitud:29.76}
          
        case "Phoenix":
          return {longitud:-112.07, latitud:33.45 }
          
        case "Philadelphia":
          return {longitud:-75.16, latitud:39.95 }
          
        case "Vancouver":
          return {longitud:-123.12, latitud:49.25} 
          
        case "Ottawa":
          return {longitud:-75.69,  latitud:45.42 }
          
        case "Buenos Aires":
          return {longitud:-58.41, latitud:-34.61} 
          
        case "Brasilia":
          return {longitud:-47.92, latitud:-15.78 }
          
        case "Santiago":
          return {longitud:-70.64, latitud:-33.46 }
          
        case "Bogota":
          return {longitud:-74.09, latitud:4.64}
          
        case "Ciudad de Mexico":
          return {longitud:-99.12, latitud:19.42 }
          
        case "Asuncion":
          return {longitud:-57.63, latitud:-25.30 }
          
        case "Lima":
          return {longitud:-77.04, latitud:-12.09 }
          
        case "Montevideo":
          return {longitud:-56.06, latitud:-34.89 }
          
        case "Kabul":
          return {longitud:69.19, latitud:34.51}
          
        case "Dhaka":
          return {longitud:90.39, latitud:23.71}
          
        case "Peking":
          return {longitud:116.39, latitud:39.90 }
          
        case "Tiflis":
          return {longitud:44.79, latitud:41.70 }
          
        case "New Delhi":
          return {longitud:77.22, latitud:28.63}
          
        case "Jakarta":
          return {longitud:106.80, latitud:-6.18 }
          
        case "Teheran":
          return {longitud:51.43, latitud:35.70 }
          
        case "Baghdad":
          return {longitud:44.39, latitud:33.31}
          
        case "Jerusalem":
          return {longitud:35.20, latitud:31.78}
          
        case "Tokyo":
          return {longitud:139.68, latitud:35.67 }
          
        case "Kuala Lumpur":
          return {longitud:101.70, latitud:3.15 }
          
        case "Ulan Bator":
          return {longitud:106.92, latitud:47.91 }
          
        case "Kathmandu":
          return {longitud:85.31, latitud:27.70 }
          
        case "Singapure":
          return {longitud:103.85, latitud:1.28 }
          
        case "Seoul":
          return {longitud:126.98, latitud:37.51 }
          
        case "Ankara":
          return {longitud:32.85, latitud:39.94 }
          
        case "Abu Dhabi":
          return {longitud:54.37, latitud:24.47 }
          
        case "Algiers":
          return {longitud:3.05, latitud:36.77 }
          
        case "Luanda":
          return {longitud:13.23, latitud:-8.81 }
          
        case "Cairo":
          return {longitud:31.22, latitud:30.05 }
          
        case "Nairobi":
          return {longitud:36.79, latitud:-1.27}
          
        case "Tripoli":
          return {longitud:13.18, latitud:32.88 }
          
        case "WindHoek":
          return {longitud:17.08, latitud:-22.57 }
          
        case "Pretoria":
          return {longitud:28.18, latitud:-25.74 }
          
        case "Canberra":
          return {longitud:149.12, latitud:-35.28 }
          
        case "Wellington":
          return {longitud:174.77, latitud:-41.28,}
        
      }
}

export {locationSet};
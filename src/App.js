import React  from "react";
import { useEffect, useState } from "react";
import './App.css';
import { CurrentWeather } from "./currentweather/CurrentWeather.js";
import {WeekWeather} from "./weekweather/WeekWeather.js";
import { SelectedDayWeather } from "./selectedDayWeather/SelectedDayWeather";
import { SearchBar } from "./seachBar/SearchBar";
import {SelectLocation} from "./selectLocation/SelectLocation.js"
import {WeatherContext, WeatherProvider} from "./weathercontext/WeatherContext.js"
function App() {
  const [openModal, setOpenModal] = React.useState(false) // utilizado para abrir el input para filtrar ciudades
  return (
    <WeatherProvider>
      <WeatherContext.Consumer>
        {value =>(<div className="main"><div className="upperSide">
      <CurrentWeather setOpenModal={setOpenModal}></CurrentWeather>
      <WeekWeather ></WeekWeather></div>
      <SelectedDayWeather></SelectedDayWeather>
      {openModal && <SelectLocation><SearchBar setOpenModal={setOpenModal}></SearchBar></SelectLocation>}
    </div>
    )}
    </WeatherContext.Consumer></WeatherProvider>
  );
}

export default App;

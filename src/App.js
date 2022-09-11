import React  from "react";
import { useEffect, useState } from "react";
import './App.css';
import { CurrentWeather } from "./components/currentweather/CurrentWeather.js";
import {WeekWeather} from "./components/weekweather/WeekWeather.js";
import { SelectedDayWeather } from "./components/selectedDayWeather/SelectedDayWeather";
import { SearchBar } from "./components/searchBar/SearchBar";
import {SelectLocation} from "./components/selectLocation/SelectLocation.js"
import {WeatherContext, WeatherProvider} from "./components/weathercontext/WeatherContext.js"
function App() {
  const [openModal, setOpenModal] = React.useState(false) // utilizado para abrir el input para filtrar ciudades
  return (
    <WeatherProvider>
      <WeatherContext.Consumer>
        {value =>(<div className="main"><div className="upperSide">
      <CurrentWeather setOpenModal={setOpenModal} className="cWeather"></CurrentWeather>
      <WeekWeather ></WeekWeather></div>
      <div className="downside"><SelectedDayWeather></SelectedDayWeather></div>
      {openModal && <SelectLocation><SearchBar setOpenModal={setOpenModal}></SearchBar></SelectLocation>}
    </div>
    )}
    </WeatherContext.Consumer></WeatherProvider>
  );
}

export default App;

import React from "react";
import { WeatherContext } from "../weathercontext/WeatherContext";
import { CurrentWeather } from "../currentweather/CurrentWeather.js";
import {WeekWeather} from "../weekweather/WeekWeather.js";
import { SelectedDayWeather } from "../selectedDayWeather/SelectedDayWeather";
import { SearchBar } from "../searchBar/SearchBar";
import {DailyWeather} from "../dailyweather/DailyWeather.js"
import {SelectLocation} from "../selectLocation/SelectLocation.js"

function AppUI(){
    
    const {locationData,
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
        selectedDayDate,
        setOpenModal,
        openModal}= React.useContext(WeatherContext)
        let index = 1;
        return (
          
                <div className="main">
                  <div className="upperSide">
            
                    <CurrentWeather setOpenModal={setOpenModal} className="cWeather"></CurrentWeather>
            
                   <WeekWeather>
                   {locationData.map(()=>{
                    <DailyWeather index={index}></DailyWeather>;{index++}
                })}
                   </WeekWeather>
                  </div>
                  <div className="downside">
                   <SelectedDayWeather>
                   </SelectedDayWeather>
                 </div>
      
                 {openModal && 
                 <SelectLocation>
                    <SearchBar setOpenModal={setOpenModal}>
                    </SearchBar>
                 </SelectLocation>}
               </div>
           
        );
      
}

export {AppUI}
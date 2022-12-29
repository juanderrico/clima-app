import React, { useRef } from "react";
import "../../App.css"
import { WeatherContext } from "../weathercontext/WeatherContext";
import { CurrentWeather } from "../currentweather/CurrentWeather.js";
import {WeekWeather} from "../weekweather/WeekWeather.js";
import { SelectedDayWeather } from "../selectedDayWeather/SelectedDayWeather";
import { SearchBar } from "../searchBar/SearchBar";
import {DailyWeather} from "../dailyweather/DailyWeather.js"
import { SelectedCountry } from "../selectedCountry/SelectedCountry.js";
import {SelectLocation} from "../selectLocation/SelectLocation.js"
import { WeekWeatherLoading } from "../loadingskeleton/WeekWeatherLoading";
import { CurrentWeatherLoading } from "../loadingskeleton/CurrentWeatherLoading";
function AppUI(){
    
   const {locationData,
           loading,
           setOpenModal,
           openModal,
           settUnit,
           selectedCity,
           selectedDayIndex,
           selectedDayDate,
           selectedCountry,
           cityModal,
           cities,
             error}= React.useContext(WeatherContext)
   let list=[]
    const modalRef=useRef()

        if(!loading){
            for(let reference of locationData.daily.time){
        list.push(
            <DailyWeather reference={reference} key={reference} locationData={locationData}></DailyWeather>
        )
        }list.pop()}
        
       
        return (<React.Fragment>
            <div className="main">
                {loading && 
                <React.Fragment>
                  <div className="upperSide">

                    <CurrentWeatherLoading className="cWeather">
                    </CurrentWeatherLoading>
            
                   <WeekWeatherLoading>
                      
                   </WeekWeatherLoading>
                  </div>
                   </React.Fragment>}
                {!loading &&
                <React.Fragment>
                  <div className="upperSide">

                    <CurrentWeather 
                      setOpenModal={setOpenModal} 
                      locationData={locationData}
                      selectedCity={selectedCity}
                      className="cWeather">
                    </CurrentWeather>
            
                   <WeekWeather 
                      settUnit={settUnit} 
                      locationData={locationData}>

                      {list}
                   </WeekWeather>
                  </div>
                    </React.Fragment>}  <SelectedDayWeather
                      locationData={locationData}
                      selectedDayIndex={selectedDayIndex}
                      selectedDayDate={selectedDayDate}
                      loading={loading}>
                   </SelectedDayWeather> </div>
                 {openModal && 
                 <SelectLocation modalRef={modalRef}>
                    <SearchBar setOpenModal={setOpenModal} modalRef={modalRef}>
                    </SearchBar>
                    {cityModal && <SelectedCountry
                    country={selectedCountry}
                    cities={cities}></SelectedCountry>}
                 </SelectLocation>}
                 
                 
                 {error && <h1>Se ha encontrado un error de tipo{error.message}</h1>}
               </React.Fragment>
        );
      
}

export {AppUI}
import React from "react";
import "../../App.css"
import { WeatherContext } from "../weathercontext/WeatherContext";
import { CurrentWeather } from "../currentweather/CurrentWeather.js";
import {WeekWeather} from "../weekweather/WeekWeather.js";
import { SelectedDayWeather } from "../selectedDayWeather/SelectedDayWeather";
import { SearchBar } from "../searchBar/SearchBar";
import {DailyWeather} from "../dailyweather/DailyWeather.js"
import {SelectLocation} from "../selectLocation/SelectLocation.js"

function AppUI(){
    
    const {locationData,loading,setOpenModal,openModal}= React.useContext(WeatherContext)
        let list=[]


        if(!loading){
            for(let reference of locationData.daily.time){
        list.push(
            <DailyWeather reference={reference} key={reference}></DailyWeather>
        )
        }list.pop()}
        
       
        return (<React.Fragment>
                {!loading &&
                <div className="main">
                  <div className="upperSide">
            
                    <CurrentWeather setOpenModal={setOpenModal} className="cWeather">
                    </CurrentWeather>
            
                   <WeekWeather>
                   {list}
                   </WeekWeather>
                  </div>
                 
                   <SelectedDayWeather>
                   </SelectedDayWeather>
                 
      
                 {openModal && 
                 <SelectLocation>
                    <SearchBar setOpenModal={setOpenModal}>
                    </SearchBar>
                 </SelectLocation>}
               </div>}
               </React.Fragment>
        );
      
}

export {AppUI}
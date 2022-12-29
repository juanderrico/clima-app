import React, { useEffect } from "react";
import styles from "./SelectedCountry.module.css"
import { WeatherContext } from "../weathercontext/WeatherContext";
function SelectedCountry(props){
    const {setCity,setOpenModal,setCityModal} = React.useContext(WeatherContext)
    const onValueChange= (event) => {
       setSearchValue(event.target.value);
        }

const onSelect= (value) =>{
    setCity(value.value)
    setOpenModal(false)
    setCityModal(false)
}
let list;
const [cityList,setCityList]=React.useState()
let searchResults=[]
const [searchValue, setSearchValue]= React.useState("");
useEffect(()=>{
if (!searchValue.length>=1){
  searchResults=props.cities;
}
else{
  searchResults=props.cities.filter(city=>{
    const citiesFilter=city.toLowerCase()
    const searchFilter=searchValue.toLowerCase()
    return citiesFilter.includes(searchFilter)
  })

}
list=[]

searchResults.map((value)=>{
    list.push(
    <button key={value} className={styles.city} onClick={()=>onSelect({value})}>{value}</button>)
})
setCityList(list)},[searchValue,props.cities])


return(
    <div className={styles.citiesList}>
        <h1 className={styles.upperText}>
            Escoja una ciudad
        </h1>
        <input className={styles.searchInput} value={searchValue}  onChange={onValueChange}>
        </input>
        {cityList}</div>
)
}

export {SelectedCountry}
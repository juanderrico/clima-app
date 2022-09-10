import React from "react";
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import styles from "./SearchBar.module.css"
function SearchBar({setOpenModal}){
    const {setSearchValue, searchValue,setLoading, searchResults, setCity, selectedCity} = React.useContext(WeatherContext)
const onValueChange= (event) => {
    setSearchValue(event.target.value);
    }
const onSelect= (value) =>{
    setCity(value)
    setOpenModal(false)
    setLoading(false)

}
let list=[]
searchResults.map((value)=>{
    list.push(
    <button className={styles.city} onClick={()=>onSelect({value})}>{value}</button>)
})
return (<div className={styles.ModalBackground}><input className={styles.searchInput} value={searchValue} onChange={onValueChange}></input>
{list}<button className={styles.cancelbutton} onClick={()=>setOpenModal(false)}>X</button></div>
)
}

export {SearchBar}
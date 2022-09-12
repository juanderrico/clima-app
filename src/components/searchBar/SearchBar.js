import React from "react";
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import styles from "./SearchBar.module.css"
function SearchBar({setOpenModal}){
    const {setSearchValue, searchValue, searchResults, setCity} = React.useContext(WeatherContext)
const onValueChange= (event) => {
    setSearchValue(event.target.value);
    }
const onSelect= (value) =>{
    setCity(value)
    setOpenModal(false)
    

}
let list=[]
searchResults.map((value)=>{
    list.push(
    <button className={styles.city} onClick={()=>onSelect({value})}>{value}</button>)
})
return (<div className={styles.ModalBackground}>
    <div className={styles.citiesList}>
    <h1 className={styles.upperText}>Escoja una ciudad</h1>
    <input className={styles.searchInput} value={searchValue} onChange={onValueChange}>
    </input>
{list}</div>
<button className={styles.cancelbutton} onClick={()=>setOpenModal(false)}>X</button></div>
)
}

export {SearchBar}
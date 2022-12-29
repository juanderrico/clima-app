import React,{useRef} from "react";
import { WeatherContext } from "../weathercontext/WeatherContext.js";
import styles from "./SearchBar.module.css"
function SearchBar(props){
    const {setSearchValue, searchValue, searchResults, setCity,setSelectedCountry} = React.useContext(WeatherContext)
const modalRef=useRef()
    const onValueChange= (event) => {
    setSearchValue(event.target.value);
    }
const onSelect= (value) =>{
    setSelectedCountry(value.value.country)
    props.modalRef.current?.scrollTo({x: 0, y: 0, animated: false})
    

}
let list=[]
searchResults.map((value)=>{
    list.push(
    <button key={value.country} className={styles.city} onClick={()=>onSelect({value})}>{value.country}</button>)
})
return (
<React.Fragment>
    <div className={styles.citiesList}>
        <h1 className={styles.upperText}>
            Escoja un pais
        </h1>
        <input className={styles.searchInput} value={searchValue} onChange={onValueChange}>
        </input>
        {list}
    </div>
    <button className={styles.cancelbutton} onClick={()=>props.setOpenModal(false)}>
        X
    </button>
    </React.Fragment>
)
}

export {SearchBar}
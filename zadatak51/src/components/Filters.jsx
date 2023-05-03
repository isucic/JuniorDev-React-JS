import { useEffect, useState, useContext } from 'react'
import styles from '../styles/Filters.module.css'
import axios from 'axios'

function Filters({products, filteredDataFun}){

    const [clothes,setClothes] = useState([])
    const [filter, setFilter] = useState("")
    const [removeFilter, setRemoveFilter] = useState(false)

    useEffect(() => {
        axios
         .get("http://localhost:3001/type")
         .then(res => setClothes(res.data))
         .catch(err => console.log(err.message))
    },[])

    function handleFilterClick() {
        var filteredData = products.filter(product => product.type == filter)
        filteredDataFun(filteredData)
        if(filteredData){
            setRemoveFilter(true)
        }
    }
    function handleRemoveFilter(){
        setFilter('')
        setRemoveFilter(false)
        filteredDataFun(null)
    }

    return (
        <div className={styles.filtersDiv}>
            <label className={styles.filters}>Filters
            {clothes.map(clo => (
                <div key={clo}>
                    <input 
                     type="radio" 
                     name="filters" 
                     value={clo} 
                     onChange={(e) => setFilter(e.target.value)}
                     checked={filter === clo}
                    />
                    <label>{clo}</label>
                </div>
            ))}      
            </label>

            <button className={styles.filterClickBtn} onClick={handleFilterClick}>Pretraži</button>
            {removeFilter && <button className={styles.filterClickBtn} onClick={handleRemoveFilter}>Ukloni filter</button>}
        </div>
    )
}

export default Filters
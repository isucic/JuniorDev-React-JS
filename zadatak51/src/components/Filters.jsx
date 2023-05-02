import { useEffect, useState } from 'react'
import styles from '../styles/Filters.module.css'
import axios from 'axios'

function Filters({products, filteredDataFun}){

    const [clothes,setClothes] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
        axios
         .get("http://localhost:3001/type")
         .then(res => setClothes(res.data))
         .catch(err => console.log(err.message))
    },[])

    function handleFilterClick() {
        var filteredData = products.filter(product => product.type == filter)
        filteredDataFun(filteredData)
    }

    return (
        <div >
            <label className={styles.filters}>Filters
            {clothes.map(clo => (
                <div key={clo}>
                    <input 
                     
                     type="radio" 
                     name="filters" 
                     value={clo} 
                     onChange={(e) => setFilter(e.target.value)}
                    />
                    <label>{clo}</label>
                </div>
            ))}      
            </label>

            <button onClick={handleFilterClick}>Pretraži</button>
        </div>
    )
}

export default Filters
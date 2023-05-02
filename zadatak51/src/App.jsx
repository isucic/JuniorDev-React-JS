import { useEffect, useState } from 'react'
import './App.css'
import AddingNewClothes from './components/AddingNewClothes'
import ClothesTable from './components/ClothesTable'
import Filters from './components/Filters'
import axios from 'axios'

function App() {

  const [clothes, setClothes] = useState([])
  const [filteredData, setFilteredData] = useState()

  useEffect(() => {
     axios
      .get("http://localhost:3001/products")
      .then(res => setClothes(res.data))
    
  },[])

  const filteredDataFun = (filteredData) => {
    setFilteredData(filteredData)

  }

  return (
    <div className="App">
      <h1 className="title">Moja garderoba</h1>
      <div className="otherDivs">
        <AddingNewClothes dodaj={setClothes}/>
        <div className="right-side">
          <Filters products={clothes} filteredDataFun={filteredDataFun} />
          <ClothesTable  products={(filteredData) ? filteredData : clothes}/>
        </div>
      </div>
      
    </div>
  )
}

export default App

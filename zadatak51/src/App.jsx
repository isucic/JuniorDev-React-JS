import { useEffect, useState, createContext } from 'react'
import './App.css'
import AddingNewClothes from './components/AddingNewClothes'
import ClothesTable from './components/ClothesTable'
import Filters from './components/Filters'
import axios from 'axios'

export const TableUpdate = createContext({})

function App() {

  const [clothes, setClothes] = useState([])
  const [filteredData, setFilteredData] = useState()
  const [change, setChange] = useState(false);

  useEffect(() => {
     axios
      .get("http://localhost:3001/products")
      .then(res => setClothes(res.data))
      if(change) setChange(false)
  },[change])

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
          <TableUpdate.Provider value={{setChange}}>   
              <ClothesTable  products={(filteredData) ? filteredData : clothes}/>
            </TableUpdate.Provider>
        </div>
      </div>
      
    </div>
  )
}

export default App

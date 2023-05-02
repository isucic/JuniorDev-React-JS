import { useEffect, useState } from "react"
import axios from "axios"
function SelectInputClothes({podaci, promjenaUlaza, vrsta}){
    const [lista, setLista] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/${vrsta}`)   
         .then(res => setLista(res.data))
         .catch(err => console.log(err.message))
    },[])

    return(
        <>
            <label>    
                    <select
                    name={vrsta}
                    value={podaci.vrsta}
                    onChange={promjenaUlaza}
                    required
                    >
                        <option
                        value="">--{vrsta}--
                        </option>
                        {lista.map(lis => (
                            <option key={lis} value={lis}>
                                {lis}
                            </option>
                        ))}
                    </select>
                </label>
        </>
    )
}

export default SelectInputClothes
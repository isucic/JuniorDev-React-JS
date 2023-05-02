import { useState} from 'react';
import axios from 'axios';
import styles from '../styles/AddNewClothes.module.css'
import SelectInputClothes from './SelectInputClothes';
import PhotoInput from './PhotoInput';
import ColorPicker from './ColorPicker';

function AddingNewClothes(props){
    
    const [color, setColor] = useState("#ffffff");
    const [podaci,setPodaci] = useState({
        type:"",
        size:"",
        color:"",
        image:"",
    })

    function promjenaBoje(newColor){
        setPodaci({...podaci, "color": newColor.hex})
    }

    function promjenaUlaza(event){
        var { name, value } = event.target
        if(value.includes('\\')){
            value = value.split('\\').pop();
        }
        setPodaci({...podaci,[name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        // const zaSlanje = obradiPodatke(podaci)

        axios.post("http://localhost:3001/products", podaci, {
            headers: {
                'content-type': "application/json"
            }
        })
         .then(res => {
            props.dodaj(stanje => [...stanje,res.data])
         })
    }
    
    return(
        <div className={styles.addNew}>
            <h2>Dodaj novu</h2>

            <SelectInputClothes podaci={podaci} promjenaUlaza={promjenaUlaza} vrsta="type"/>
            <SelectInputClothes podaci={podaci} promjenaUlaza={promjenaUlaza} vrsta="size" />

            <ColorPicker podaci={podaci} promjenaBoje={promjenaBoje}/>
            <PhotoInput podaci={podaci} promjenaUlaza={promjenaUlaza}/>
            
            <button onClick={handleSubmit}>Spremi</button>

        </div>
    )
}

export default AddingNewClothes
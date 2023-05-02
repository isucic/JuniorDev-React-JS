import { useState } from "react";
import axios from "axios";
import SelectInputClothes from "./SelectInputClothes";
import PhotoInput from "./PhotoInput";
import ColorPicker from "./ColorPicker";

function EditRow({product, handleCancelButton}){

    const [updatedData, setUpdatedData] = useState()

    function promjenaBoje(newColor){
        setUpdatedData({...updatedData,"color": newColor.hex})
    }
    
    function promjenaUlaza(event){
        var { name, value } = event.target
        if(value.includes('\\')){
            value = value.split('\\').pop();
        }
        setUpdatedData({...updatedData,[name]: value})
    }

    function handleSaveButton(){
        axios
         .patch(`http://localhost:3001/products/${product.id}`, updatedData)
         .then(res => console.log(res))
    }

    const [showColorPicker, setShowColorPicker] = useState(false);
    function handleColorButton(){
        setShowColorPicker(!showColorPicker);
    }

    return(
        <tr>
            <td>
            <SelectInputClothes podaci={product} promjenaUlaza={promjenaUlaza} vrsta="type"/>
            </td>

            <td>
            <SelectInputClothes podaci={product} promjenaUlaza={promjenaUlaza} vrsta="size"/>
            </td>

            <td>
                <ColorPicker podaci={product} promjenaBoje={promjenaBoje}/>
            </td>

            <td>
                <p>Nema promjene slike</p>
            {/* <PhotoInput podaci={product} promjenaUlaza={promjenaUlaza} /> */}
            </td>

            

            <td>
                <button onClick={handleSaveButton}>Spremi</button>
                <button onClick={handleCancelButton}>Otkaži</button>
            </td>
        </tr>
    )
}
export default EditRow


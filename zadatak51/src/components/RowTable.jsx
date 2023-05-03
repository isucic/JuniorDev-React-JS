import axios from 'axios'
import styles from '../styles/RowTable.module.css'
import { useState,useContext } from 'react'
import EditRow from './EditRow'
import { TableUpdate } from "../App";


function RowTable({product}){

    const {setChange} = useContext(TableUpdate)

    const [editingRowId,setEditingRowId] = useState(null)

    function handleEditButton(id){
        setEditingRowId(id)
    }

    async function handleDeleteButton(id){
        if(window.confirm('Želite li sigurno ovo izbrisati?')){
            await axios.delete(`http://localhost:3001/products/${id}`)
            setChange(true)
        }

    }

    return (
        <>
            {editingRowId == product.id ? (
                <EditRow product={product} handleCancelButton={() => setEditingRowId(null)}/>
            ) : (
                <tr>
                    <td>{product.type}</td>
                    <td>{product.size}</td>
                    <td>
                        <div className={styles.colorBlock} style={{backgroundColor:`${product.color}`}}></div>
                    </td>

                    <td><img className={styles.photo} src={product.image} alt="clothes-img"/></td>
                    <td>
                        <button onClick={() =>handleDeleteButton(product.id)}>Briši</button>
                        <button onClick={() =>handleEditButton(product.id)}>Uredi</button>
                    </td>
                </tr>
            )}
        
        </>
        
    )
}

export default RowTable
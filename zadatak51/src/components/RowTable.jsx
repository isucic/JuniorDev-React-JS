import axios from 'axios'
import styles from '../styles/RowTable.module.css'
import { useState } from 'react'
import EditRow from './EditRow'

function RowTable({product}){

    const [editingRowId,setEditingRowId] = useState(null)

    function handleEditButton(id){
        setEditingRowId(id)
    }

    async function handleDeleteButton(id){
        if(window.confirm('Želite li sigurno ovo izbrisati?'))
            await axios.delete(`http://localhost:3001/products/${id}`)
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
                        <div style={{borderRadius: "50%", width: "20px", height:"20px", backgroundColor:`${product.color}`}}></div>
                    </td>

                    <td><img className={styles.photo} src={product.image} alt="clothes-img"/></td>
                    <td><button onClick={() =>handleDeleteButton(product.id)}>Briši</button></td>
                    <td><button onClick={() =>handleEditButton(product.id)}>Uredi</button></td>
                </tr>
            )}
        
        </>
        
    )
}

export default RowTable
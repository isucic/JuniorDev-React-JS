import styles from '../styles/ClothesTable.module.css'
import RowTable from './RowTable'

function ClothesTable({products}){
    return(
        <>
            <table className={styles.tablica}>
                <thead>
                    <tr>
                        <th>Vrsta</th>
                        <th>Veličina</th>
                        <th>Boja</th>
                        <th>Slika</th>
                        <th>Opcije</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <RowTable key={product.id} product={product} />
                    ))
                    }
                    {(products==0) && <p>Nema tih odjevnih predmeta.</p>}
                </tbody>
            </table>
        </>
    )
}

export default ClothesTable
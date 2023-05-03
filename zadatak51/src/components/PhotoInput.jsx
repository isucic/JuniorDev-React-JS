import { useState } from "react";
import styles from '../styles/PhotoInput.module.css'

function PhotoInput({podaci, promjenaUlaza}){

    // podaci.image=""
    const [isUploaded,setIsUploaded] = useState(false)
    function fileUpload(e){
        setIsUploaded(URL.createObjectURL(e.target.files[0]));
        promjenaUlaza(e);
    }

    return(
            <div className={styles.imageUpload}>
            {!isUploaded ? (
                <label className={styles.inputPhoto}>
                    <input type="file" accept="image/*" onChange={fileUpload} name="image" value={podaci.image}/>
                </label>
            ) : (
                <div className={styles.ImagePreview}>
                    <img className={styles.uploadedImage} src={isUploaded} draggable={false} alt="uploaded-img" />
                </div>
            )}
    </div>
    )
}
export default PhotoInput
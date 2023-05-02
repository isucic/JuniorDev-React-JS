import { useState } from "react";
import styles from '../styles/AddNewClothes.module.css'

function PhotoInput({podaci, promjenaUlaza}){

    // podaci.image=""
    const [isUploaded,setIsUploaded] = useState(false)
    function fileUpload(e){
        setIsUploaded(URL.createObjectURL(e.target.files[0]));
        promjenaUlaza(e);
    }

    return(
        <div className="BoxUpload">
            <div className="image-upload">
            {!isUploaded ? (
                <label>
                    <input type="file" accept="image/*" onChange={fileUpload} name="image" value={podaci.image}/>
                </label>
            ) : (
                <div className="ImagePreview">
                    <img className={styles.uploadedImage} src={isUploaded} draggable={false} alt="uploaded-img" />
                </div>
            )}
            </div>
    </div>
    )
}
export default PhotoInput
import { useState } from 'react';
import { ChromePicker } from 'react-color';
import styles from '../styles/ColorPicker.module.css'

const ColorPicker = ({podaci,promjenaBoje}) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [showColorBlock,setShowColorBlock] = useState(true)
  const [color,setColor] = useState("")

  const handleClickToShowColors = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };


  const handleOnColorClick = (newColor) => {
    setColor(newColor.hex)
    promjenaBoje(newColor);
    setShowColorBlock(true);
  }

  return (
    <div className={styles.addColor}>
      {!(podaci.color) && 
        <label>Odaberi boju</label>
      }
      <button className={styles.coloredButton} onClick={handleClickToShowColors} style={{backgroundColor:`${color}`}}></button>

      {displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
            <ChromePicker color={podaci.color} onChange={handleOnColorClick}/>
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker

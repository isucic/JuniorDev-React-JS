import { useState } from 'react';
import { ChromePicker } from 'react-color';

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

  const popover = {
    position: 'absolute',
    zIndex: '2',
  };

  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  const handleOnColorClick = (newColor) => {
    setColor(newColor.hex)
    promjenaBoje(newColor);
    setShowColorBlock(true);
  }

  return (
    <div>
      {/* {showColorBlock ? (
        <button onClick={handleClick} style={{width: "20px", height:"20px", backgroundColor:`${color}`}}></button>
      )  : (
        <button onClick={handleClick}>Pick Color</button>
      )} */}

      {!(podaci.color) && 
        <label>Odaberi boju</label>
      }
      <button onClick={handleClickToShowColors} style={{padding: "10px",width: "20px", height:"20px", borderRadius: "50%", backgroundColor:`${color}`}}></button>

      {displayColorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker color={podaci.color} onChange={handleOnColorClick}/>
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker

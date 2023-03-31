import { useContext,useState } from "react";
import {AddressContext} from "../App";
import InputText from "./InputText";

function AddressInfo(props){

    const {name,setName,address,setAddress} = useContext(AddressContext)

    const [correctName,setCorrectName] = useState(true);
    const checkName = () => {
        if(name.length < 6) setCorrectName(false)
        else setCorrectName(true)
    }

    const [correctAddress,setCorrectAddress] = useState(true);
    const checkAddress = () => {
        if(address.length < 6) setCorrectAddress(false)
        else setCorrectAddress(true)
    }
    return(
        <div className="address-cntr">
          <h3>Address information</h3>
          <hr />
          <InputText
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            onMouseLeave={checkName}
            />

            {correctName ? 
          <p className="error-message"></p>
           : 
          <p className="error-message">Name should be at least 6 charachters long.</p>}
        
            <label htmlFor="country">Country</label>
            <div className="dropPress">
                <select 
                    id="country"
                    onChange={props.action()}
                >
                  <option value="-"></option>
                  <option value="Croatia">Croatia</option>
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
              </select>
            </div>

            <InputText
            name="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Write down your address"
            onMouseLeave={checkAddress}
            />

            {correctAddress ? 
          <p className="error-message"></p>
           : 
          <p className="error-message">Address should be at least 6 charachters long.</p>}
            
        </div>
    )
}

export default AddressInfo;
import { useState, createContext, useRef } from "react"
import './App.css'
import ContactInfo from "./components/ContactInfo";
import AddressInfo from "./components/AddressInfo";
import PayingInfo from "./components/PayingInfo";
import Information from "./components/Information";

export const ContactContext = createContext({})
export const AddressContext = createContext({})

function App() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [number,setNumber] = useState("")
  const [address,setAddress] = useState("")
  const [country,setCountry] = useState("-")
  const handleCountry = (e) => {setCountry(e.target.value)}
  const [paying,setPaying] = useState("")
  const handleRadioButton = (e) => {
    setPaying(e.target.value)
  }
  const [agree,setAgree] = useState(false)

  const [showInfo,setShowInfo] = useState(false);

  const scroll = useRef();

  function handleSubmit () {
    if(validation()){
      scroll.current.scrollIntoView({behavior: "scroll"});
      setShowInfo(true);
    }
    else {alert("Something is wrong. Check the form again.")}
  }

  function validation (){
    let valid=true;
    if(email.length<=0 || !(email.includes("@")) || number.length<=0 || name.length<5 || country.length==0 || address.length<5 || paying.length==0 || !agree)
      valid=false;
    else valid = true;
    return valid;
  }


  return (
        <div className="container">
          <div className="title">
            <h1>Račun</h1>
            <h2> /Plaćanje</h2>
          </div>

          {/* <form> */}
            {/*********     Contact Info     ************/}
            <ContactContext.Provider value={{email,setEmail,number,setNumber}}>
              <ContactInfo />
            </ContactContext.Provider>

            {/*********      Address Info     ************/}
            <AddressContext.Provider value={{address,setAddress,name,setName}}>
              <AddressInfo action={() => handleCountry}/>
            </AddressContext.Provider>

            {/*********     Paying Info     ************/}
            <PayingInfo setRadioButton={() => handleRadioButton}/>

            {/*********     Terms and Conditions     ************/}
            <div className="terms-checkbox">
              <input type="checkbox" className="checkbox" onClick={() => setAgree(!agree)}/>
              <label> I agree with Terms & Conditions</label>
            </div>

            <button className="submit-btn" onClick={handleSubmit}>Order</button>
          {/* </form> */}

          <div ref={scroll}>
          {(showInfo) && <Information name={name} email={email} number={number} address={address} country={country} paying={paying}/>
          }
          </div>
   
          </div>
  )
}

export default App
import InputText from "./InputText";
import { useContext, useState } from 'react';
import { ContactContext } from '../App';


function ContactInfo(){

  const { email, setEmail, number, setNumber } = useContext(ContactContext);


  const [correctEmail,setCorrectEmail] = useState(true);
  const CheckEmail = () => {
    if (email.includes("@")) setCorrectEmail(true)
    else setCorrectEmail(false)
  }

    return(
        <div className="contact-cntr">
        <h3>Contact information</h3>
        <hr />
        <InputText
          name="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          onMouseLeave={CheckEmail}
          />
          
          {correctEmail ? 
          <p className="error-message"></p>
           : 
          <p className="error-message">Sorry, that is not a valid email address.</p>}
          
          <InputText
          name="Contact Number" 
          value={number} 
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter your phone number"
          onKeyDown={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
          />
      </div>
    )
}

export default ContactInfo
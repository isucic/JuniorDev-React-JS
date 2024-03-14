import picture from '../../public/profilepicture.avif';
import Skills from './Skills';
import GeneralInfo from './GeneralInfo';

import axios from "axios"
import { useEffect, useState } from 'react';

function Zivotopis()
{
    const [name,setName] = useState("");
    const [generalInfo,setGeneralInfo] = useState({})
    const [skills, setSkills] = useState([])

    useEffect(() => {
        axios
        .get("http://localhost:3000/animalName")
        .then(res => setName(res.data))
        .catch(err => alert(err))

        axios
         .get("http://localhost:3000/info")
         .then(res => setGeneralInfo(res.data))
         .catch(err => alert(err))

        axios
         .get("http://localhost:3000/skills")
         .then(res => setSkills(res.data))
         .catch(err => alert(err))
    },[])

    return (
        <div className="container">
            <div >
                <img className="profile-picture" src={picture}></img>
            </div>
            <h1 className="name">{name}</h1>
            <GeneralInfo generalInfo={generalInfo} dob="16. prosinca, 2014." add="Splitovo 10, Split" contact="+385 99 467 528"/>
            <Skills skills={skills}/>
        </div>
        
    )
}

export default Zivotopis;
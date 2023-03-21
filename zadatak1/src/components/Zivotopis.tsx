import picture from '../../public/profilepicture.avif';
import Skills from './Skills';
import GeneralInfo from './GeneralInfo';

function Zivotopis()
{
    return (
        <div className="container">
            <div >
                <img className="profile-picture" src={picture}></img>
            </div>
            <h1 className="name">Daisy the Pug</h1>
            <GeneralInfo dob="16. prosinca, 2014." add="Splitovo 10, Split" contact="+385 99 467 528"/>
            <Skills />
        </div>
        
    )
}

export default Zivotopis;
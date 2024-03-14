import ProgressBar from "./ProgressBar";

const skillNames = ["Eating", "Sleeping", "Running"]

function Skills({skills})
{
    return (
        <div className="skills">
                <h2>Skills</h2>
                <hr/>

                {skills.map((skill,index) => (
                    <ProgressBar skill={skillNames[index]} done={skill} key={index}/>
                ))}
                {/* <ProgressBar skill="Eating" done="50"/>
                <ProgressBar skill="Sleeping" done="70"/>
                <ProgressBar skill="Running" done="40"/> */}
            </div>
    )

}

export default Skills;
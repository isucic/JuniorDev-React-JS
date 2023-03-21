import ProgressBar from "./ProgressBar";

function Skills()
{
    return (
        <div className="skills">
                <h2>Skills</h2>
                <hr/>
                <ProgressBar skill="Eating" done="50"/>
                <ProgressBar skill="Sleeping" done="70"/>
                <ProgressBar skill="Running" done="40"/>
            </div>
    )

}

export default Skills;
type TeamProps = {
    name: string;
    teamphoto: string;
}

function Team(props: TeamProps) {
    return (
        <div className="team">
            <div>
                <h1>{props.name}</h1>
                <img className="team-logo" src={props.teamphoto}></img>
            </div>
        </div>
    )
}

export default Team;
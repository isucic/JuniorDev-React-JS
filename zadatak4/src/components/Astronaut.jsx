import {memo} from 'react'

const AstronautMemo = memo(Astronaut)

function Astronaut(props){
    return (
        <div style={{border: "1px dotted black"}}>
            <p>Osoba: {props.name}</p>
            <p>Lokacija: {props.craft}</p>
        </div>
    )
}

export default AstronautMemo
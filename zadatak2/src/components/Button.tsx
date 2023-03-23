type ButtonProps = {
    sign: string;
    action: Function;
    flag: boolean;
}
function Button(props: ButtonProps) {

    function handleClick(){
        props.action();
    }

    return (
        <div className="button">
            {(props.flag == false) &&
              <button className="disabled-btn" disabled>{props.sign}</button>
            }
            {(props.flag == true) &&           
            <button onClick={handleClick}>{props.sign}</button>
            }
        </div>
    )
}

export default Button;
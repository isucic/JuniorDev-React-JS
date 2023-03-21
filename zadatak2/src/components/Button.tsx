type ButtonProps = {
    sign: string;
    action: Function;
}
function Button(props: ButtonProps) {

    function handleClick(){
        props.action();
    }

    return (
        <div className="button">
            <button onClick={handleClick}>{props.sign}</button>
        </div>
    )
}

export default Button;
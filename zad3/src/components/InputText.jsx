function InputText(props) {

    return (
        <div>
            <label htmlFor={props.name}>{props.name}</label>
            <input 
                type="text" 
                onChange={props.onChange} 
                value={props.value} 
                placeholder={props.placeholder}
                onMouseLeave={props.onMouseLeave ? props.onMouseLeave : null}
                onKeyPress={props.onKeyDown ? props.onKeyDown : null}
                />
        </div>
    )
}
export default InputText;
function Information(props){
    return (
        <div className="info-cntr">
            <h1>Information</h1>
            <hr />
            <div className="info-box"><h2>Name</h2><p>{props.name}</p></div>
            <div className="info-box"><h2>Email</h2><p>{props.email}</p></div>
            <div className="info-box"><h2>Phone number</h2><p>{props.number}</p></div>
            <div className="info-box"><h2>Address</h2><p>{props.address}</p></div>
            <div className="info-box"><h2>Country</h2><p>{props.country}</p></div>
            <div className="info-box"><h2>Paying method</h2><p>{props.paying}</p></div>
        </div>
    )
}

export default Information;
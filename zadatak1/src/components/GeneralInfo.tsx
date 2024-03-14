function GeneralInfo(props) {
    return (
        <div className="general-info">
            <h2>General Info</h2>
            <hr/>

            {Object.entries(props.generalInfo).map(([key, value], index) => (
                <div className='info' key={index}>
                <h4>{key}</h4>
                <p className="info-p">{value}</p>
            </div>
            ))}
            
            {/* <div className='info'>
                    <h4>Address</h4>
                    <p className="info-p">{props.add}</p>
            </div>
            <div className="info">
                    <h4>Contact Number</h4>
                    <p className="info-p">{props.contact}</p>
            </div> */}
        </div>
    )
}

export default GeneralInfo;
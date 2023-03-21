function GeneralInfo(props) {
    return (
        <div className="general-info">
            <h2>General Info</h2>
            <hr/>

            <div className='info'>
                <h4>Date of Birth</h4>
                <p className="info-p">{props.dob}</p>
            </div>
            <div className='info'>
                    <h4>Address</h4>
                    <p className="info-p">{props.add}</p>
            </div>
            <div className="info">
                    <h4>Contact Number</h4>
                    <p className="info-p">{props.contact}</p>
            </div>
        </div>
    )
}

export default GeneralInfo;
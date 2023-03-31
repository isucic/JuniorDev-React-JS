function PayingInfo(props) {

    return (
        <div className="paying-cntr">
            <h3>Paying method</h3>
            <hr />

            <div className="paying-radio">
              <input type="radio" id="credit-card" name="pay" value="credit-card" onClick={props.setRadioButton()}/>
              <label htmlFor="credit-card">Credit Card</label>
            </div>

            <div className="paying-radio">
              <input type="radio" id="when-delivered" name="pay" value="on-spot" onClick={props.setRadioButton()}/>
              <label htmlFor="when-delivered">When delivered</label>
            </div>

          </div>
    )
}
    export default PayingInfo;
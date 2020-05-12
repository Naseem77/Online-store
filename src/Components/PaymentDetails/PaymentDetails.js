import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  };
};

// This component shows the items user checked out from the cart.
class ConnectedPayment extends Component {
  state = {
    pass: "",
    redirectToReferrer: false
  };
  render() {

    return (
      <div style={{ padding: 10 }}>
      <div className="row">
            <div className="col-75">
              <div className="container">
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Max" />
                    <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
                    <input type="text" id="email" name="email" placeholder="max@example.com" />
                    <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                    <label htmlFor="city"><i className="fa fa-institution" /> City</label>
                    <input type="text" id="city" name="city" placeholder="Ashdod" />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" placeholder="Ashdod" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" id="zip" name="zip" placeholder={10002} />
                      </div>
                    </div>
                  </div>
                  <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="Max" />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                    <label htmlFor="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="May" />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder={2019} />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder={111} />
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
                </label>
              </div>
            </div>
          </div>

        <div
          style={{
            color: "#504F5A",
            marginLeft: 5,
            marginTop: 50,
            fontSize: 22
          }}
        >
        </div>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            console.log("purchased");
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Pay
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            this.props.history.push("/");
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Cancel
        </Button>
      </div>
    );
  }
}
const PaymentDetails = withRouter(connect(mapStateToProps)(ConnectedPayment));

export default PaymentDetails;

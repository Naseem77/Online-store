import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import fire from "../../config/FBConfig";
import { userType } from "../../Components/Login/Login";
import totalPrice, { totalOrderPrice } from "../../Components/Order/Order"

const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  };
};

// This component shows the items user checked out from the cart.
class ConnectedPayment extends Component {
  state = {
    fullname: "",
    email:"",
    address:"",
    city:"",
    state1:"",
    zip:"",
    cardname:"",
    cardnumber:"",
    expmonth:"",
    expyear:"",
    cvv:"",
    checkboxship:"",

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
                    <input
                      value={this.state.fullname}
                      type="text"
                      placeholder="Nasim"
                      onChange={e => {
                        this.setState({ fullname: e.target.value });
                      }}
                    />
                    <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
                    <input
                    value={this.state.email}
                    type="text"
                    placeholder="nasim@example.com"
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                    <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                    <input
                    value={this.state.address}
                    type="text"
                    placeholder="542 W. 15th Street"
                    onChange={e => {
                      this.setState({ address: e.target.value });
                    }}
                  />
                    <label htmlFor="city"><i className="fa fa-institution" /> City</label>
                    <input
                    value={this.state.city}
                    type="text"
                    placeholder="Ashdod"
                    onChange={e => {
                      this.setState({ city: e.target.value });
                    }}
                    />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="state">State</label>
                        <input
                        value={this.state.state1}
                        type="text"
                        placeholder="Ashdod"
                        onChange={e => {
                          this.setState({ state1: e.target.value });
                        }}
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">Zip</label>
                        <input
                        value={this.state.zip}
                        type="text"
                        placeholder={10002}
                        onChange={e => {
                          this.setState({ zip: e.target.value });
                        }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="cname">Name on Card</label>
                    <input
                    value={this.state.cardname}
                    type="text"
                    placeholder="cardname"
                    onChange={e => {
                      this.setState({ cardname: e.target.value });
                    }}
                    />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input
                    value={this.state.cardnumber}
                    type="text"
                    placeholder="1111-2222-3333-4444"
                    onChange={e => {
                      this.setState({ cardnumber: e.target.value });
                    }}
                    />
                    <label htmlFor="expmonth">Exp Month</label>
                    <input
                    value={this.state.expmonth}
                    type="text"
                    placeholder="5"
                    onChange={e => {
                      this.setState({ expmonth: e.target.value });
                    }}
                    />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input
                        value={this.state.expyear}
                        type="text"
                        placeholder={2019}
                        onChange={e => {
                          this.setState({ expyear: e.target.value });
                        }}
                      />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input
                        value={this.state.cvv}
                        type="text"
                        placeholder={111}
                        onChange={e => {
                          this.setState({ cvv: e.target.value });
                        }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  <input
                  value={this.state.checkboxship}
                  type="checkbox"
                  defaultChecked="checked"
                  placeholder={111}
                  onChange={e => {
                    this.setState({ checkboxship: e.target.value });
                  }}
                 /> Shipping address same as billing
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
            console.log("2:",userType)
            var i=0,j=0,k=0,l=0;
            this.props.checkedOutItems.map((item, index)=>{
              console.log(item.category)
              switch(item.category){
                case 'Snacks and Sweets':{
                  i+=item.price*item.quantity
                  break;
                }
                 case 'Dairy products':{
                    j+=item.price*item.quantity
                    break;
                 }
                   
                 case 'Meats and fish':{
                   k+=item.price*item.quantity
                   break;

                 }
                    
                 case 'Fruits and Vegetables':{
                   l+=item.price*item.quantity
                   break;
                 }
                     
              }
              fire.firestore().collection('sampleProducts').doc(''+item.id).get().then((doc)=>{
              var itemStock=doc.data().stock;
              console.log( itemStock);
              itemStock =itemStock-item.quantity;
              // console.log( sampleProducts[item.id].stock);
              fire.firestore().collection('sampleProducts').doc(''+item.id).update({
                stock: itemStock               
              })

              }
              );
            })
             fire.firestore().collection('ordersHistory').add({
                userType:userType,
                date:new Date(),
                snacksAndSweets:i,
                meatsAndFish:k,
                dairyProducts:j,
                fruitsAndVegetables:l,
                totalOrderPrice: totalOrderPrice
                
              })
              
             
            alert('The order will be sent to' + this.state.address + 'in'+ this.state.state1);
            // useAlert().show('The order will be sent to' +this.state.Address+' in' +this.state.state1)  
            // <Alert severity="success">The order will be sent to ${this.state.Address} in ${this.state.state1}</Alert>
            console.log("purchased");
            this.props.history.push("/");
          }
        }
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

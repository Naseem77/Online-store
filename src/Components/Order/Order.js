import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { setCheckedOutItems } from "../../Redux/Actions";
import fire from "../../config/FBConfig";
import PriceDialog from "../PriceDialog/PriceDialog";
import { sampleProducts } from "../../Data"
import { userType } from "../Login/Login";
export var totalOrderPrice;
var totalPrice 
const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  };
};

// This component shows the items user checked out from the cart.
class ConnectedOrder extends Component {
  updateTotalPriceDiscount(tPrice){
    totalPrice=tPrice-tPrice*0.2

  }
  
  render() {

    totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    if(userType==="student")
    {
      this.updateTotalPriceDiscount(totalPrice)
    }
    totalOrderPrice=totalPrice;
    return (
      <div style={{ padding: 10 }}>
        <div style={{ fontSize: 24, marginTop: 10 }}>
          Order summary
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.checkedOutItems.map((item, index) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div
          style={{
            color: "#504F5A",
            marginLeft: 5,
            marginTop: 50,
            fontSize: 22
          }}
        >
          Total price for {userType}: {totalPrice} ₪
        </div>
        <Button
          color="primary"
          variant="outlined"  
          disabled={totalPrice === 0}
          onClick={() => {

                let arr=this.props.checkedOutItems.map((item, index)=>{
                return{itemName:item.name,
                price:item.price,
                quantity:item.quantity
                }
              });   
            fire.firestore().collection('orders').add({arr})
          
             this.props.history.push("/Payment");
            

          }
        }
      
          style={{ margin: 5, marginTop: 30 }}
        >
          Purchase
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          disabled={totalPrice === 0}
          onClick={() => {
            this.props.dispatch(setCheckedOutItems([]));
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Discard
        </Button>
      </div>
    );
  }
}
const Order = withRouter(connect(mapStateToProps)(ConnectedOrder));

export default Order;

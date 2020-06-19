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
import Api from "../../Api";
import Item from "../Item/Item";
export var totalOrderPrice;
var totalPrice

const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems,
  };
};

// This component shows the items user checked out from the cart.
class ConnectedOrder extends Component {
  state={
    recommendItems:[]
  }
  updateTotalPriceDiscount(tPrice){
    totalPrice=tPrice-tPrice*0.2

  }
   async func1(item){
     var recommendItems= await Api.searchItems({
         category:item.category
     })
     return recommendItems
   }

  async getRecommendItems(){
    var tmp=[]
    var dairyProducts= this.props.checkedOutItems.filter(x=>x.category==="Dairy products")
    var snacksAndSweetsProducts= this.props.checkedOutItems.filter(x=>x.category==="Snacks and Sweets")
    var vegeFrutisProducts= this.props.checkedOutItems.filter(x=>x.category==="Fruits and Vegetables")
    var meatsAndFishProducts= this.props.checkedOutItems.filter(x=>x.category==="Meats and fish")

    for (let i = 0; i < this.props.checkedOutItems.length; i++){
      var product=this.props.checkedOutItems[i]
      if(product.category==="Dairy products"){
      var recommendItems = await this.func1(product)
      tmp[0]=recommendItems.data.filter(x => x.id !== product.id)
      for (let index = 0; index < dairyProducts.length; index++) {
        item = await Api.getItemUsingID(dairyProducts[index].id)
        tmp[0]=tmp[0].filter(x => x.id !== item.id)
      }
      tmp[0]=tmp[0].slice(0,3)
      }
      else if (product.category==="Snacks and Sweets") {
      var recommendItems = await this.func1(product)
      tmp[1]=recommendItems.data.filter(x => x.id !== product.id)
      for (let index = 0; index < snacksAndSweetsProducts.length; index++) {
        item = await Api.getItemUsingID(snacksAndSweetsProducts[index].id)
        tmp[1]=tmp[1].filter(x => x.id !== item.id)
      }
      tmp[1]=tmp[1].slice(0,3)
      }
      else if (product.category==="Meats and fish") {
      var recommendItems = await this.func1(product)
      tmp[2]=recommendItems.data.filter(x => x.id !== product.id)
      for (let index = 0; index < meatsAndFishProducts.length; index++) {
        item = await Api.getItemUsingID(meatsAndFishProducts[index].id)
        tmp[2]=tmp[2].filter(x => x.id !== item.id)
      }
      tmp[2]=tmp[2].slice(0,3)
      }
      else{
          var item = await Api.getItemUsingID(vegeFrutisProducts[0].id)
        var recommendItems= await Api.searchItems({
            category:item.category
        })
        tmp[3]=recommendItems.data.filter(x => x.id !== item.id)
        for (let index = 0; index < vegeFrutisProducts.length; index++) {
          item = await Api.getItemUsingID(vegeFrutisProducts[index].id)
          tmp[3]=tmp[3].filter(x => x.id !== item.id)
        }
        tmp[3]=tmp[3].slice(0,3)
      }
    }
    this.setState({
          recommendItems:tmp
          })
  }
  render() {
    this.getRecommendItems()
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
            this.props.history.push("/");

          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Discard
        </Button>
        <div
          style={{
            marginTop: 20,
            marginBottom: 10,
            fontSize: 22
          }}
        >
          Recommend Items
        </div>
        {
       this.state.recommendItems.map(x=>{return x.map(item => {
         return <Item key={item.id} item={item} />;
      })
        })
      }
      </div>
    );
  }
}
const Order = withRouter(connect(mapStateToProps)(ConnectedOrder));

export default Order;

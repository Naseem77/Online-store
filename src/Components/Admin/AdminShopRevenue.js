import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { setCheckedOutItems, deleteCartItem } from "../../Redux/Actions";
import fire from "../../config/FBConfig";
import PriceDialog from "../PriceDialog/PriceDialog";
import { sampleProducts } from "../../Data";

var totalStudentPrice;
var totalCustomerPrice;
var totalDiarySales;
var totalMeatAndFish;
var totalSweetAndSnacks;
var totalFruitsAndVegetables;

function calculateIncome() {
      console.log('calling'); 
      totalDiarySales=0;
      totalMeatAndFish=0;
      totalSweetAndSnacks=0;
      totalFruitsAndVegetables=0;
      totalCustomerPrice=0;
      totalStudentPrice=0;
        var data=fire.firestore().collection("ordersHistory").get().then((data)=>{
            data.docs.forEach(doc=>{        
        if(doc.data().userType==="customer"){
          totalCustomerPrice += doc.data().totalOrderPrice;
          console.log(totalCustomerPrice);
        }
        else
          totalStudentPrice += doc.data().totalOrderPrice;

          totalDiarySales+= doc.data().dairyProducts;
          totalMeatAndFish+= doc.data().meatsAndFish;
          totalSweetAndSnacks+= doc.data().snacksAndSweets;
          totalFruitsAndVegetables+= doc.data().fruitsAndVegetables;
        
      })
    })
      console.log(totalCustomerPrice);
      console.log("Finished");
    
      }
      calculateIncome();

class AdminShopRevenue extends Component {
  state = {
    listitems: [
      {
        id: 0,
        context: "Total Diary Products Sales: "+ totalDiarySales+" ₪",
        modifier: "list-group-item list-group-item-primary"
      },
      {
        id: 1,
        context: "Total Fruits and Vegetables Sales: "+ totalFruitsAndVegetables+" ₪",
        modifier: "list-group-item list-group-item-secondary"
      },
      {
        id: 2,
        context: "Total Meat and Fish Sales: "+ totalMeatAndFish+" ₪",
        modifier: "list-group-item list-group-item-primary"
      },
      {
        id: 3,
        context: "Total Sweets and Snacks Sales: "+ totalSweetAndSnacks+" ₪",
        modifier: "list-group-item list-group-item-secondary"
      },

      {
        id: 4,
        context: "Total Students Sales: "+ totalStudentPrice+" ₪",
        modifier: "list-group-item list-group-item-success"
      },
      {
        id: 5,
        context: "Total Customers Sales: "+ totalCustomerPrice+" ₪",
        modifier: "list-group-item list-group-item-danger"
      },
      {
        id: 6,
        context: "Total Revenue May: "+ (totalCustomerPrice+totalStudentPrice) +" ₪" ,
        modifier: "list-group-item list-group-item-warning"
      }
    ]
  };
 
  render() {
    return (
      <React.Fragment>
        <ul className="list-group">
          {this.state.listitems.map(listitem => (
            <li style={{backgroundColor:"yellow"}} key={listitem.id} className={listitem.modifier}>
              {listitem.context}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default AdminShopRevenue;

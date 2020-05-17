import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { sampleProducts } from "../../Data";
import  fire  from "../../config/FBConfig";


const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  };
};


// This component shows the items user checked out from the cart.
class AdminEditProducts extends Component {
  state = {
    Productname: "sampleProducts[id-1]",
    price:"",
    category:"",
    company:"",
    description:"",
    id:"",
    imageUrls:"",
    stock:"",
    redirectToReferrer: false
  };
 

  render() {

    return (

    <div style={{ padding: 10 }}>
                      <h3>Edit product</h3>
                      Please enter specific and correct id of product!
                      <br></br>
                      <br></br>
<label htmlFor="pname"> Category </label>
                    <input
                      value={this.state.category}
                      type="text"
                      placeholder="Enter Category"
                      onChange={e => {
                        this.setState({ category: e.target.value });
                      }}
                    />
                    <label htmlFor="price"> Company </label>
                    <input
                    value={this.state.company}
                    type="text"
                    placeholder="Enter Company"
                    onChange={e => {
                      this.setState({ company: e.target.value });
                    }}
                  />


<label htmlFor="pname"> Description </label>
                    <input
                      value={this.state.description}
                      type="text"
                      placeholder="Enter Description"
                      onChange={e => {
                        this.setState({ description: e.target.value });
                      }}
                    />
                    <label htmlFor="price"> id </label>
                    <input
                    value={this.state.id}
                    type="text"
                    placeholder="Enter id"
                    onChange={e => {
                      this.setState({ id: e.target.value });
                    }}
                  />
    <br></br>
<label htmlFor="pname"> imageUrls </label>
                    <input
                      value={this.state.imageUrls}
                      type="text"
                      placeholder="Enter imageUrls"
                      onChange={e => {
                        this.setState({ imageUrls: e.target.value });
                      }}
                    />
                    <label htmlFor="price"> Name </label>
                    <input
                    value={this.state.name}
                    type="text"
                    placeholder="Enter Product Name"
                    onChange={e => {
                      this.setState({ Productname: e.target.value });
                    }}
                  />
    <br></br>

<label htmlFor="pname"> Price </label>
                    <input
                      value={this.state.price}
                      type="text"
                      placeholder="Enter Product price"
                      onChange={e => {
                        this.setState({ price: e.target.value });
                      }}
                    />
                    <label htmlFor="price"> Stock </label>
                    <input
                    value={this.state.stock}
                    type="text"
                    placeholder="Enter Product stock"
                    onChange={e => {
                      this.setState({ stock: e.target.value });
                    }}
                  />


                  
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={() => {
                      var len=sampleProducts.length+1;
                      fire.firestore().collection('sampleProducts').doc(''+this.state.id).update({
                        name:this.state.Productname,
                        price:this.state.price,
                        category: this.state.category,
                        company:this.state.company,
                        description: this.state.description,
                        id: this.state.id,
                        imageUrls: this.state.imageUrls,
                        stock: this.state.stock,
                      })
                     
                    alert("The product was edited in the database!");
                    }}
                    style={{ margin: 5, marginTop: 30 }}
                  >
                    Save
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={() => {
                      this.props.history.push("/admin");
                    }}
                    style={{ margin: 5, marginTop: 30 }}
                  >
                    Cancel
                  </Button>
                </div>
    );
  }
}
const Admin = withRouter(connect(mapStateToProps)(AdminEditProducts));

export default Admin;

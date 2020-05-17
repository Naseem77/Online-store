import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import fire from "../../config/FBConfig"
import { sampleProducts } from "../../Data";

const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  };
};

class AdminAddProducts extends Component {
  state = {
    Productname: "",
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
                    <h3>Add new product</h3>
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
                      fire.firestore().collection('sampleProducts').doc(''+len).set({
                        name:this.state.Productname,
                        price:this.state.price,
                        category: this.state.category,
                        company:this.state.company,
                        description: this.state.description,
                        id: this.state.id,
                        imageUrls: this.state.imageUrls,
                        stock: this.state.stock,
                      })
                     
                    alert("The product was added to the database!");
                    }}
                    style={{ margin: 5, marginTop: 30 }}
                  >
                    Add
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
const AdminDetails = withRouter(connect(mapStateToProps)(AdminAddProducts));

export default AdminDetails;

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  };
};

class Admin extends Component {
  state = {

    redirectToReferrer: false
  };
  render() {

    return (
      <div style={{ padding: 10 }}>
                    <h3>Admin Panel</h3>
                 
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={() => {
                        this.props.history.push("/AdminShopRevenue");
                      }}
                      style={{ margin: 5, marginTop: 30 }}
                    >
                      Shop Revenue
                    </Button>
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={() => {
                        this.props.history.push("/AdminAddProducts");
                      }}
                      style={{ margin: 5, marginTop: 30 }}
                    >
                      Add a new Product
                    </Button>
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={() => {
                        this.props.history.push("/AdminEditProducts");
                      }}
                      style={{ margin: 5, marginTop: 30 }}
                    >
                      Edit products
                    </Button>
                  </div>

    );
  }
}
const AdminDetails = withRouter(connect(mapStateToProps)(Admin));

export default AdminDetails;

import React, { Component } from "react";
import Item from "../Item/Item";
import CircularProgress from "@material-ui/core/CircularProgress";
import queryString from "query-string";
import Api from "../../Api";
import Paging from "../Paging/Paging";
import ProductsHeader from "../ProductsHeader/ProductsHeader"


// This component is responsible for fetching products. It determines from query string which products to fetch.
// The URL is checked on initial mount and when URL changes.
class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      totalItemsCount: null,
      items: []
    };
    this.updateQueryString = this.updateQueryString.bind(this);

  }

  async fetchData() {

    this.setState({ loading: true });

    // Parse the query string
    let qsAsObject = queryString.parse(this.props.location.search);

    let results = await Api.searchItems(qsAsObject);

    this.setState({
      items: results.data,
      loading: false,
      totalItemsCount: results.totalLength
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  updateQueryString(newValues) {
    let currentQS = queryString.parse(this.props.location.search);
    let newQS = { ...currentQS, ...newValues };
    this.props.history.push("/?" + queryString.stringify(newQS));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    let currentQS = queryString.parse(this.props.location.search);
    let oldQS = queryString.parse(prevProps.location.search);
    
    let areSameObjects = (a, b) => {
      if (Object.keys(a).length !== Object.keys(b).length) return false;
      for (let key in a) {
              if (a[key] !== b[key]) return false;
      }
      return true;
    }

    // We will refetch products only when query string changes.
    if (!areSameObjects(currentQS,oldQS )) {
      this.fetchData();
    }
  }

  render() {
    let parsedQS = queryString.parse(this.props.location.search);

    if (this.state.loading) {
      return (
        <CircularProgress className="circular" />
      );
    }

    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <ProductsHeader
          parsedQS={parsedQS}
          updateQueryString={this.updateQueryString}
          totalItemsCount={this.state.totalItemsCount} />

        <div style={{ flex: 1 }}>
          {this.state.items.map(item => {
            return <Item key={item.id} item={item} />;
          })}
        </div>

        <Paging
          parsedQS={parsedQS}
          updateQueryString={this.updateQueryString}
          totalItemsCount={this.state.totalItemsCount}
        />
      </div >
    );
  }
}

export default ProductList;

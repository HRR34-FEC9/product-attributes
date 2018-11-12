import React from "react";
import $ from 'jquery';
import ProductAttribs from './ProductAttribs'

class App extends React.Component {
  constructor(props) {
    super(props);

    //think through and set up state
    this.state = {
      error: null,
      isLoaded: false,
      product: "",
      productId: "",
    };
    // bind functions to "this"
    this.getData = this.getData.bind(this);
  }

  getData(id) {
    $.get(`/api/productdata/q/${id}`, (data) => {
      this.setState({
        isLoaded: true,
        product: data,
        productId: data.productId,
      })
    })
    .done(() => {
      console.log('successfully connected to server')
    })
    .fail(() => {
      console.log('error connecting to server')
    })
  }

  componentDidMount() {
    var prodId = Number(window.location.pathname.replace(/\//, ''));
    if (![19, 33, 41, 73, 88].includes(prodId)) {
      this.getData(19);
    } else {
      this.getData(prodId);
    }
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ProductAttribs product={this.state.product}/>
      )
    }
  }
};

export default App;
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
    };
    // bind functions to "this"
    this.getData = this.getData.bind(this);
  }

  getData() {
    $.get('/api/products/product', (data) => {
      this.setState({
        isLoaded: true,
        product: data,
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
    this.getData();
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
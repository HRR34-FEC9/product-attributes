import React from "react";
import $ from 'jquery';
import ProductAttribs from './ProductAttribs'

class App extends React.Component {
  constructor(props) {
    super(props);

    //think through and set up state
    this.state = {

    };
    // bind functions to "this"
    this.getData = this.getData.bind(this);
  }

  getData() {
    $.get('/api/product/info', (data) => {
      this.setState()
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
    return (
      <ProductAttribs />
    )
  }
};

export default App;
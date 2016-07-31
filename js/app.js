import React from 'react';
import ReactDOM from 'react-dom';

import Product from './Components/Product.js'


console.log("does this work?");

ReactDOM.render(
  <Product
    name={"Sample React App"}
    imageUrl={"http://orig13.deviantart.net/b479/f/2011/132/4/7/blinking_strawberry_jelly_by_eivven-d3g5tyu.gif"}
    quantityAvailable={1}
    price={"$99.99"}
  />, document.getElementById('product')
);

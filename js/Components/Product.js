import React from 'react';

const Product = (props) => (
  <div>
    <h3>{props.name}</h3>
    <img src={props.imageUrl} />
    <p>{props.quantityAvailable}</p>
    <p>{props.price]</p>
    <p>Buy one</p>
  </div>
);

export default Product;

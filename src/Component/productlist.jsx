import React from "react";
import Product from "../product";

export default function ProductList(props) {
  return  (
    props.ProductList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
         
        />
      );
    })
  );
}
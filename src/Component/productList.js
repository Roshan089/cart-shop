import React from "react";
import Product from "../product"; 

export default function ProductList(props) {
  return  (
    props.products.map((product,i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
         index={i}
         decrementQuantity={props.decrementQuantity}
         removeProduct={props.removeProduct}
         onSubmit={props.onSubmit} 
       
        />
      );
    })
  );
}
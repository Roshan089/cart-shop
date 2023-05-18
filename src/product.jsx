import React from "react";

export default function Product(props) {


    
    
    return(
<div className="row mt-3">
    <div className="col-4">
        <h2>{props.product.name} <span className="badge bg-secondary">{props.product.price}</span></h2>
    </div>
    <div className="col-3">
    <div
  className="btn-group"
  role="group"
  aria-label="Basic mixed styles example"
>
  <button type="button" className="btn btn-danger" onClick={()=>{props.incrementQuantity(props.index)}} >
    +
  </button>
  <button type="button" className="btn btn-warning">
    {props.product.quantity}
  </button>
  <button type="button" className="btn btn-success" onClick={()=>{props.decrementQuantity(props.index)}}>
    -
  </button>
</div>

</div>

<div className="col-2">
     {props.product.price*props.product.quantity}
    </div>
    <div>
        <button className=" btn btn-danger col-2" onClick={()=> {props.removeProduct(props.index)}}>remove</button>
    </div>
</div>

    )
}

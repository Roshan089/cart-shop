import React from 'react'
import {useForm} from "react-hook-form"

export default function Additem(props) {

  const{register, handleSubmit}= useForm()
  return (
    <div>
   <div className=' row' >
      <form onSubmit={handleSubmit(props.onSubmit)}>
  <div className="mb-3 col-4">
    <label htmlFor="Text" className="form-label">
      name
    </label>
    <input
      type="text"
      name='name'
      id="names"
      
     
      {...register("name")}

    />
    <div id="text" className="form-text">
    
    </div>
  </div>
  <div className="mb-3 col-4">
    <label htmlFor="number" className="form-label">
      Price
    </label>
    <input
      type="number"
      className="form-control"
      name='price'
      
      id="number"
      
      {...register("price")}
    />
  </div>
 
  <button type="submit" className="btn btn-primary col-6">
    Submit
  </button>
</form>

    </div>
  
   </div>



  )
}

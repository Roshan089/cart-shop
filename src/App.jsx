
import './App.css';
import Navbar from './Component/navbar';
import ProductList from './Component/productList.js';
import { useState } from 'react';
import Footer from './Component/footer'
/*import Additem from './Component/addItem';*/
import {useForm} from "react-hook-form"
import Additem from './Component/addItem';


function App() {
  const initialProductList = [
    {
      key:1,
      price: 9999,
      name: "iphone",
      quantity:0,
    },
    {
      key:2,
      price: 8888,
      name: "redmi",
      quantity:0,
    }
  ]
  let [productList, setproductList]= useState(initialProductList )
  let [totalAmount, settotalAmount]= useState(0)
  

  const{register, handleSubmit}= useForm()

  const incrementQuantity = (index) =>{
    let newproductlist= [...productList]
    let newtotalAmount = totalAmount
    newproductlist[index].quantity++
    newtotalAmount = parseInt(newtotalAmount) + parseInt(newproductlist[index].price)
    setproductList(newproductlist)
    settotalAmount(newtotalAmount)
  }
   
  const decrementQuantity = (index)=>{
    let newproductlist =[...productList]
    let newtotalAmount = totalAmount
    if (newproductlist[index].quantity>0) {
      newproductlist[index].quantity--
      newtotalAmount -= newproductlist[index].price

    }
    
    setproductList(newproductlist)
    settotalAmount(newtotalAmount)
  }
    const resetValue = () =>{
      let newproductlist =[...productList]
     
      newproductlist.map((productList)=>{
        productList.quantity=0
        
      })
      setproductList(newproductlist)
      settotalAmount(0)
    }
    const removeProduct = (index)=>{
      let newproductlist =[...productList]
       let newtotalAmount=totalAmount
       newtotalAmount-=newproductlist[index].price*newproductlist[index].quantity
      newproductlist.splice(index,1)
      console.log(newproductlist);
      setproductList(newproductlist)
      settotalAmount(newtotalAmount)
      
    }

    const onSubmit=(data)=>{
      let newproductlist=[...productList]
      newproductlist.push({key: newproductlist.length + 1, name: data.name, price: data.price, quantity: 0})
      setproductList(newproductlist)
    }
  
  return (
    <>
    <Navbar/>
    
    <main className='container mt-5'>

    <Additem onSubmit={onSubmit} />

    <ProductList products ={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}
    removeProduct={removeProduct} onSubmit={ onSubmit} />
    
    </main>
    <Footer totalAmount={totalAmount} resetValue={resetValue}/>
    </>
  );
}

export default App;

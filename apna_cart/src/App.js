import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer.js';
import AddItem from './components/AddItem.js';

function App() {
  const initialProductsList = [
    {
      price: 99999,
      name: 'IPhone 10s MAX',
      quantity: 0
    },
    {
      price: 9999,
      name: 'Redmi Note 10s MAX',
      quantity: 0
    }
  ]; 

  let [productList, setProductList] = useState(initialProductsList);
  let [totalAmount,setTotalAmount] = useState(0);  

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount  += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0){
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity=()=>{
    let newProductList = [...productList];
     newProductList.map((products)=>{
      products.quantity = 0;
     })
     setProductList(newProductList);
     setTotalAmount(0);
  }

  const removeItem=(index)=>{
   let newProductList = [...productList];
   let newTotalAmount = totalAmount;
   newTotalAmount -= newProductList[index].quantity * newProductList[index].quantity;
   newProductList.splice(index,1);
   setProductList(newProductList);
   setTotalAmount(newTotalAmount);

  }
  const addItem = (name,price)=>{
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newProductList);

  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem = {removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;

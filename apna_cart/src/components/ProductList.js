// import React from 'react';
// import Product from './Product.js';

// export default function ProductList(props) {
//     return (
//         <>
//         {props.ProductList.map((product,i)=>(
//              <Product product={product} key={i}/>
//     ))}
//   );
// }

import React from 'react';
import Product from './Product.js';

export default function ProductList(props) {
  return (  
    <>
      {
      props.productList.length > 0 ?
      props.productList.map((product, i) => (
        <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity = {props.decrementQuantity} removeItem={props.removeItem}/>
      ))
    :<h1>No products in the cart</h1> 
    }
    </>
  );
}


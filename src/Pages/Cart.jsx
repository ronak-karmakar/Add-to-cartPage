import React, { useEffect, useState } from 'react'
import { CartState } from "../Contextapi";
import SingleProduct from "./SingleProduct";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function Cart() {
    const { cart } = CartState();
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
      }, [cart]);
  return (
    <>
    
        <div className='' style={{ textAlign: "center" }}>
          <div>
        <div style={{ fontSize: 30 }}>My Cart</div>
        <div style={{ fontSize: 30, float: 'left' }}>Total Amount: {total} 
        <br />
        <button type="button" class="btn btn-warning">Buy Now ₹: {total} </button>
        </div>
        <br />
        </div>
        <div className="productContainer">
            {cart.map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
            ))}
        </div>
        </div>
    </>
  )
}

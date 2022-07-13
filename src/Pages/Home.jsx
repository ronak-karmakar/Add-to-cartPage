import React from 'react'
import { CartState } from "../Contextapi";
import SingleProduct from "./SingleProduct";

export default function Home() {
    const { products } = CartState();
  return (
    <>
        <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 30 }}>Products Page</span>
            <div className="productContainer">
                {products.map((prod) => (
                <SingleProduct prod={prod} key={prod.id} />
                ))}
            </div>
        </div>
    </>
  )
}

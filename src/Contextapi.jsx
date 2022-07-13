import React,{ createContext, useContext, useState } from 'react'
import faker from 'faker'

const Cart = createContext();
faker.seed(100)

export default function Contextapi({ children }) {
    const [cart, setCart] = useState([]);

  const productsArray = [...Array(21)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products] = useState(productsArray);
  return (
    <div>
        <Cart.Provider value={{ cart, setCart, products }}>
            {children}
        </Cart.Provider>
    </div>
  );
};

export const CartState = () => {
    return useContext(Cart);
};

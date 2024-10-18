import React, { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import Order from './Order'

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
        <div>
            <span className='logo'>House staff</span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <GiShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.map(element => (
                  <Order key={element.id} item={element} />
                ))}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}

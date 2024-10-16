import React, { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi";

export default function Header() {
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
                
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}

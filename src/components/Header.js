import React, { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import Order from './Order'

const showOrders = (props) => {
  let sum = 0
  props.orders.forEach(element => {
    sum += Number.parseFloat(element.price)
  })
  return (<>
    {props.orders.map(element => (
      <Order key={element.id} item={element} onDelete={props.onDelete} />
      ))}
      <p className='sum'>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
  </>)
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}

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
                {props.orders.length > 0 ? 
                showOrders(props) : showNothing() }
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}

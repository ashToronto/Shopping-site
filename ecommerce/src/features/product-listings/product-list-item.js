import React from 'react';
import AddButton from './add-button'
import RemoveButton from './remove-button'


export default function ProductListItem(props) {

  // const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]

  return <div className='product-list-item'>
    <img
      height={150}
      width={180}
      title= {props.product.name}
      src={`/products/${props.product.image}`}
      alt=''
      />
    <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <div>
        <AddButton
          cartItem = {props.cartItem}
          product = {props.product}
          addToCart = {props.addToCart}
          />

        {
          props.cartItem
            ?   <RemoveButton
                cartItem = {props.cartItem}
                product = {props.product}
                removeFromCart = {props.removeFromCart}
                />
              : null
        }
    </div>
  </div>
}

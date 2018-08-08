import React from 'react';

export default function AddButton(props) {
  return <button className='bttn-add' onClick = {() => props.addToCart(props.product)}>
    Add to cart ({
      (props.cartItem && props.cartItem.quantity) || 0
    })
  </button>
}

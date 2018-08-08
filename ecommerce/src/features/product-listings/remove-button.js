import React from 'react';

export default function RemoveButton(props) {
  return <button className='bttn-rmv' onClick = {() => props.removeFromCart(props.cartItem)}>
    Remove
  </button>
}

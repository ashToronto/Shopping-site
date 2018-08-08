import React from 'react';
import { connect } from 'react-redux';

function Cart(props){
  return <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        props.cart.map(item => <tr>
          <td>{ item.name }</td>
          <td>{ item.quantity }</td>
          <td>
            <button onClick = {(e) => props.addToCart(item)}>+</button>
            <button onClick = {(e) => props.removeFromCart(item)}>-</button>
          </td>
          <td>
            <button onClick = {(e) => props.removeAllFromCart(item)}>
              Clear all
            </button>
          </td>
        </tr>)
      }
    </tbody>
  </table>
}

function mapStateToProps(state){
  return {
    state: state.cart
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch(type: 'REMOVE', payload: item)
    },
    removeAllFromCart: (item) => {
      dispatch(type: 'REMOVE_ALL', payload: item)
    }
  }
}

export default connect(mapStateToProps)(Cart)

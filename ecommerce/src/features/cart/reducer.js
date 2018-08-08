// Helper function to add all cart items without the new items id
const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== cartItem.id )

//helper function to get a single item added to cart
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === cartItem.id )[0]

// helper function add to cart
const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined
  ? [...cartWithoutItem(cart, item), {...item, quantity: 1}]
  : [...cartWithoutItem(cart, item),{...cartItem, quantity: cartItem.quantity + 1}]
}

// helper function remove from cart
const removeFromCart = (cart, item) => {
  return item.quantity === 1
  ? [...cartWithoutItem(cart, item)]
  : [...cartWithoutItem(cart, item), {...item, quantity: item.quantity - 1}]
}

// helper removes all from cart on cart page
const removeAllFromCart = (cart, item) => {
  return [...cartWithoutItem(cart, item)]
}

// Setting state with reduce
const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
    return addToCart(state, action.payload)

    case 'REMOVE':
    //Removes only first instance of repeated items
    return removeFromCart(state, action.payload)

    case 'REMOVE_ALL' :
    return removeAllFromCart(state, action.payload)

    default:
    return state;
  }
}

export default cartReducer;

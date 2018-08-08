// Helper function to add all cart items without the new items id
const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== cartItem.id )

//helper function to get a single item added to cart
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === cartItem.id )[0]

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined
  ? [...cartWithoutItem(cart, item), {...item, quantity: 1}]
  ; [...cartWithoutItem(cart, item),(...cartItem, quantity: cartItem.quantity + 1 )]
}



// Setting state with reduce
const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
    return addToCart(state, action.payload)

    case 'REMOVE':
    //Removes only first instance of repeated items
    const firstMatchIndex = state.indexOf(action.payload)
    return state.filter((item, index) => index !== firstMatchIndex)

    default:
    return state;
  }
}

export default cartReducer;

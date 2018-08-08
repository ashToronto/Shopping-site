// Helper function to add all cart items without the new items id
const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== cartItem.id )

//helper function to get a single item added to cart
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === cartItem.id )[0]

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
}



// Setting state with reduce
const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
    return [...state, action.payload]

    case 'REMOVE':
    //Removes only first instance of repeated items
    const firstMatchIndex = state.indexOf(action.payload)
    return state.filter((item, index) => index !== firstMatchIndex)

    default:
    return state;
  }
}

export default cartReducer;

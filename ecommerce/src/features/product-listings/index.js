import React from 'react';
import productListItem from './product-list-item';

export default productListing(props){
  return <div>
    props.products.map(product =>
      <productListItem product = {product} />
    )
  </div>
}

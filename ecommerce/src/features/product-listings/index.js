import React from 'react';
import ProductListItem from './product-list-item';

export default function productListing(props) {
  return <div className='product-listing'>
    {
    props.products.map(product =>
      <ProductListItem product = {product} />)
    }
  </div>
}

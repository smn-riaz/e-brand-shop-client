import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Products.css'

function Products({trendingProducts}) {
  const navigate = useNavigate()
  return (
    <div class="row d-flex justify-content-center">
    {trendingProducts.map((product) => (
      <div className="py-3 col-lg-4 h-100 col-md-5 col-sm-8 type-container productCard">
        <img
          src={product.image}
          className="h-100 w-100"
          alt=""
        />
        <div className="type-name text-center">
          <h3>{product.typeName}</h3>
          <button className="py-2 px-3 shop-nowBtn shopnow-btn" onClick={() => navigate(`${product.type}/${product.productId}`, {state: product})}>GRAB NOW</button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Products
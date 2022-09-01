import React from 'react'
import './ProductCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

function ProductCard({image, name,type}) {
  const navigate = useNavigate()
  return (
    <main className='productCard col-lg-4 col-md-5 col-sm-10 p-3 g-5 text-center' onClick={() => navigate(`${type}`)}>
        <img src={image} alt="" className='product-image h-100'/>
        
        <div className='iconDiv row d-flex justify-content-center align-items-center'>
            <div className="col-4 px-4">
            <FontAwesomeIcon className='fs-4 bg-light p-1 rounded-circle product-icon' icon={faCartShopping} />
            </div>
            <div className="col-4 px-4">
            <FontAwesomeIcon className='fs-4 bg-light p-1 rounded-circle product-icon' icon={faMagnifyingGlass} />
            </div>
            <div className="col-4 px-4">
            <FontAwesomeIcon className='fs-4 bg-light p-1 rounded-circle product-icon' icon={faHeart} />
            </div>
        </div>
        <div className='product-name'><p className='fw-bold'>{name}</p></div>
    </main>
  )
}

export default ProductCard
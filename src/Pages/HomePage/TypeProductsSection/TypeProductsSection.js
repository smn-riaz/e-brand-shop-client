import React from "react";
import { useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import {  typesName } from "../../../data";
import "./TypeProductsSection.css";

function TypeProductsSection() {
  
  const [showMore, setShowMore] = useState(false);
  const [showProducts, setShowProducts] = useState(typesName.slice(0, 6))
  const showMoreHandler =() => {
        setShowProducts(typesName)
        setShowMore(true)
  }
  const showLessHandler =() => {
        setShowProducts(typesName.slice(0, 6))
        setShowMore(false)
    }

  return (
    <main className="productsSection p-5">
       <h2 className="text-center">TYPES OF CLOTHES</h2>
      <div className="row d-flex justify-content-around container-fluid">
        {showProducts.map((product) => (
          <ProductCard type={product.type} image={product.image} name={product.name} />
        ))}
      </div>
      <div className="d-flex justify-content-end p-3">
        {
            (showMore === false)? <button className="px-4 py-2" onClick={showMoreHandler}>MORE</button> : <button className="px-4 py-2" onClick={showLessHandler}>LESS</button>
        }
        
      </div>
    </main>
  );
}

export default TypeProductsSection;

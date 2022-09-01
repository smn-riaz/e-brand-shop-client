import React from "react";
import Products from "../../../Components/Products/Products";
import { allProducts } from "../../../data";
import "./TrendingProductsSection.css";

function TrendingProductsSection() {
  const trendingProducts = allProducts.filter(products => products.type === "trending")
  return (
    <main className="productTypeSection p-5" id="shopping">
      <h2 className="text-center">TRENDING</h2>
     <Products trendingProducts={trendingProducts} />
    </main>
  );
}

export default TrendingProductsSection;

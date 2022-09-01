import React from "react";
import { useLocation } from "react-router-dom";
import TypeProductCard from "../../Components/TypeProductCard/TypeProductCard";
import { allProducts } from "../../data";

function SingleTypePage() {
  const productType = useLocation().pathname.slice(1);
  const typeProducts = allProducts.filter(
    (product) => product.type === productType
  );
  // console.log(typeProducts)
  return (
    <main className="p-5">
      {typeProducts.length >0 &&<h2 className="text-center">{productType.toUpperCase()}</h2>

      }
      <div className="row d-flex justify-content-around container-fluid">
        {typeProducts.map((product) => (
          <TypeProductCard
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default SingleTypePage;

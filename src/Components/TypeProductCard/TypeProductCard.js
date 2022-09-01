import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const TypeProductCard = ({product}) => {
  const {type, image, name, productId} = product
  const navigate = useNavigate();
  return (
    <main
      className="productCard col-lg-4 col-md-5 col-sm-10 p-3 text-center"
      onClick={() => navigate(`/${type}/${productId}`, {state: product})}
    >
      <img
        src={image}
        alt={name}
        className="product-image"
        height="100%"
        width="80%"
      />

      <div className="iconDiv row d-flex justify-content-center align-items-center">
        <div className="col-4 px-4">
          <FontAwesomeIcon
            className="fs-4 bg-light p-1 rounded-circle product-icon"
            icon={faCartShopping}
          />
        </div>
        <div className="col-4 px-4">
          <FontAwesomeIcon
            className="fs-4 bg-light p-1 rounded-circle product-icon"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="col-4 px-4">
          <FontAwesomeIcon
            className="fs-4 bg-light p-1 rounded-circle product-icon"
            icon={faHeart}
          />
        </div>
      </div>
    </main>
  );
};

export default TypeProductCard;

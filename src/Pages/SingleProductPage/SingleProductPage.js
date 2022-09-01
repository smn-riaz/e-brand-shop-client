import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CustomerInfoContext } from "../../App";
import "./SingleProductPage.css";

const SingleProductPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation();

  const { image, name, price, instock, type, color, size, productId } = state;
  const {customerInfo, cartInfo, setCartInfo} = useContext(CustomerInfoContext)
  const [selectedColor, setSelectedColor] = useState("Available Color");
  const [selectedSize, setSelectedSize] = useState("L");
 
  

  const [amount, setAmount] = useState(1);

  const totalPrice = amount * price;

  const cartDetails = {
    email: customerInfo.email,
    productId: productId,
    productName: name,
    productImage: image,
    productType: type,
    amount,
    singlePrice: price,
    totalPrice,
    productColor: selectedColor,
    productSize: selectedSize,
  };
  // console.log(cartDetails);
  const isAvailable = cartInfo.filter(cart => cart.productId === productId)

  const handleSubmit = () => {
    if(isAvailable.length === 0){
      setCartInfo([...cartInfo, cartDetails]) 
       
      navigate("/cart")


    } else if(isAvailable.length > 0){

    }
    // navigate("/cart")
  };

  // console.log(cartInfo);

  return (
    <main className="singleProductPage px-3">
      <div className="row d-flex justify-content-around align-items-center py-3">
        <div className="col-5">
          <img src={image} height="90%" width="80%" alt="" />
        </div>
        <div className="col-6">
          {isAvailable.length>0 &&<h5 className=""><Link to="/cart" className="py-4 text-success">Already Carted.</Link></h5>}
          <h2 className="py-1">{name[0].toUpperCase()}</h2>
          <p className="pb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio id
            magnam aspernatur accusamus. Nobis, vero dolores mollitia facere
            sequi quibusdam.
          </p>
          <p className="fs-1 py-1">${totalPrice}</p>
          <div className="row d-flex justify-content-center">
            <div className="color-container col-6">
              <label for="color" className="p-2 fw-bold">
                Color:
              </label>
              <select className="selectOption"
                name="color"
                id="color"
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                {color.map((color) => (
                  <option value={color}>{color}</option>
                ))}
              </select>
            </div>

            <div className="size-container col-6">
              <label for="size" className="p-2 fw-bold">
                Size:
              </label>
              <select className="selectOption"
                name="size"
                id="size"
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {size.map((size) => (
                  <option value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="amount-container">
            <button
              className="border-0 mx-3 bg-white fs-4 fw-bold"
              onClick={() => {
                if (amount > 0) {
                  setAmount(amount - 1);
                }
              }}
            >
              -
            </button>
            <button className="border border-secondary rounded selectOption fw-bold">
              {amount}
            </button>
            <button
              className="border-0 mx-3 bg-white fs-4 fw-bold"
              onClick={() => {
                if (amount < instock) {
                  setAmount(amount + 1);
                }
              }}
            >
              +
            </button>
          </div>

          <div className="submit-container py-4">
            {isAvailable.length === 0 &&
              <button
              className="border-0 bg-secondary text-white w-25 px-3 py-2"
              onClick={handleSubmit}
            >
              ADD TO CART
            </button>
            }
            {isAvailable.length > 0 &&
              <button
              className="border-0 bg-secondary text-white w-25 px-3 py-2"
              onClick={handleSubmit}
            >
              UPDATE TO CART
            </button>
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;


import React, { useContext, useEffect, useState,   } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerInfoContext } from "../../App";
import DeliveryAddressModal from "../../Components/DeliveryAddressModal/DeliveryAddressModal";
import "./CartedProductsPage.css";


const CartedProductsPage = () => {
  const navigate = useNavigate();
  const { customerInfo, setCustomerInfo } = useContext(CustomerInfoContext);
 
  useEffect(() => {
      fetch("http://localhost:5000/customer/aCustomer",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify({_id:customerInfo._id})
      })
      .then(res=> res.json())
      .then(data => {
        setCustomerInfo(data.data[0])
    })
     },[])
 

  const clothesCost = customerInfo.cart.reduce((a, b) => a + b.totalPrice, 0);

  // shipping cost
  let shippingCost = 15;
  const disCount = 0;
  if (clothesCost >= 200 && shippingCost < 300) {
    shippingCost = 10;
  } else if (clothesCost >= 300 && shippingCost < 350) {
    shippingCost = 6;
  } else if (clothesCost >= 350) {
    shippingCost = 0;
  }


  const checkOutData = {
    cart: customerInfo.cart,
    name: customerInfo.name,
    email: customerInfo.email,
    orderDate: new Date().toLocaleDateString(),
    amount: clothesCost,
    orderStatus:"pending",
  };


  const deleteCart = (productId) =>{
   
      fetch("http://localhost:5000/customer/deleteCart",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify({_id:customerInfo._id,productId})
      })
      .then(res=> res.json())
      .then(data => {
        if(data){
          navigate('/#shopping')
        }
    })
  
  }


  return (
    <main className="cartedProductsPage p-4">
      {customerInfo.cart.length > 0 && (
        <h5 className="text-center">Total Item: {customerInfo.cart.length}</h5>
      )}
      {customerInfo.cart.length > 0 ? (
        <div className="d-flex row justify-cotent-around">
          <div className="col-lg-9 d-flex row justify-cotent-around">
            {customerInfo.cart.map((cart) => {
              const {
                productImage,
                amount,
                productColor,
                productType,
                productId,
                productName,
                productSize,
                singlePrice,
                totalPrice,
              } = cart;

              return (
                <div className="col-lg-10 d-flex row justify-cotent-around align-items-center p-3 m-2 cart-item">
                  <div className="col-lg-4">
                    <img src={productImage} alt="" height="100%" width="80%" />
                  </div>
                  <div className="col-lg-4">
                    {/* <p>
                      <b>Product: </b> {productName[0]}
                    </p> */}
                    <p>
                      <b>ID: </b> {productId}
                    </p>
                    <p>
                      <b>Color: </b> {productColor}
                    </p>
                    <p>
                      <b>Size: </b> {productSize}
                    </p>
                  </div>
                  <div className="col-lg-4 ">
                    <p>
                      <b>Amount: </b> {amount}
                    </p>
                    <p>
                      <b>Total Cost: </b> ${totalPrice}
                    </p>
                    <button onClick={() => deleteCart( productId)}>
                      DELETE
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-lg-3 p-4 orderSummary-container">
            <h2>ORDER SUMMARY</h2>
            <p>
              <b>Clothes Cost: </b> ${clothesCost}
            </p>
            <p>
              <b>Shipping Cost:</b> ${shippingCost}
            </p>
            <p>
              <b>Discount: </b> $0
            </p>
            <p>
              <b>Total: </b> ${clothesCost + shippingCost - disCount}
            </p>
            <div className="text-center">
                <button className="border-0">
                  <DeliveryAddressModal checkOutData={checkOutData}/>
                </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-center">No Item has been Carted</h3>
        </div>
      )}
    </main>
  );
};

export default CartedProductsPage;

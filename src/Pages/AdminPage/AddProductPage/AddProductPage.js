import React, { useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { Form } from "react-bootstrap";
import './AddProductPage.css'
import OpenMessage from "../../../Components/OpenMessage/OpenMessage";

const AddProductPage = () => {


  const addProductHandler = () => {
    
    fetch("http://localhost:5000/product/addProducts",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify()
    })
  }
  return (
    <main className="adminPage">
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <Sidebar />
        </div>

        <div className="col-lg-10 row d-flex justify-content-center col-md-9">
          <div className="addproduct-container col-8 py-3 m-3">
            <OpenMessage />
            <Form>
              <div className="first-part d-flex justify-content-center row">
                <div className=" col-5">
                  <label for="name" className="fw-bold">
                    Product Name:
                  </label>
                  <br />
                  <input
                    id="name"
                    type="text"
                    className="px-3 py-2 w-100"
                    placeholder="For multiple use space"
                    required
                  />
                </div>

                <div className="col-5">
                  <label for="price" className="fw-bold">
                    Price
                  </label>
                  <br />
                  <input
                    id="price"
                    type="number"
                    min="10"
                    className="px-3 py-2 w-100"
                    required
                  />
                </div>
              </div>

              <div className="second-part py-3 d-flex justify-content-center row">
                <div className="col-5">
                  <label for="instock" className="fw-bold">
                    Instock
                  </label>
                  <br />
                  <input
                    id="instock"
                    min="1"
                    type="number"
                    className="px-3 py-2 w-100"
                    required
                  />
                </div>

                <div className=" col-5">
                  <label for="type" className="fw-bold">
                    Type:
                  </label>
                  <br />
                  <input
                    id="type"
                    type="text"
                    className="px-3 py-2 w-100"
                    required
                  />
                </div>
              </div>

              <div className="third-part py-3 d-flex justify-content-center row">
                <div className="col-5">
                  <label for="size" className="fw-bold">
                    Size:
                  </label>
                  <br />
                  <input
                    id="size"
                    type="text"
                    placeholder="For multiple use space"
                    className="px-3 py-2 w-100"
                    required
                  />
                </div>

                <div className=" col-5">
                  <label for="color" className="fw-bold">
                    Color
                  </label>
                  <br />
                  <input
                    id="color"
                    type="text"
                    placeholder="For multiple use space"
                    className="px-3 py-2 w-100"
                    required
                  />
                </div>
              </div>


              <div className="third-part2 py-3 d-flex justify-content-center row">
                <div className="col-5">
                  <label for="size" className="fw-bold">
                    ProductId:
                  </label>
                  <br />
                  <input
                    id="size"
                    type="text"
                    className="px-3 py-2 w-100"
                    required
                  />
                </div>

                <div className=" col-5">
                  <label for="color" className="fw-bold">
                    OfferPrice
                  </label>
                  <br />
                  <input
                    id="color"
                    type="num"
                    min="0"
                    className="px-3 py-2 w-100"
                    required
                  />
                </div>
              </div>
              <div className="fourth-part py-3 d-flex justify-content-center row">
                <div className="col-6">
                  <label for="image" className="fw-bold">
                    Image:
                  </label>
                  <br />
                  <input
                    id="image"
                    type="file"
                    className="px-3 py-2 w-100"
                    required
                  />
                </div>
              </div>
              <div className="fifth-part py-3 d-flex justify-content-center row">
                <div className="p-2 m-1 col-5">
                  <button
                  onClick={() => addProductHandler}
                    type="submit"
                    className="border-0 w-100 py-2 mx-auto fw-bold btn btn-success"
                  >
                    ADD PRODUCT
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddProductPage;

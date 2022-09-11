import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { CustomerInfoContext } from "../../../App";
import OpenMessage from "../../../Components/OpenMessage/OpenMessage";
import Sidebar from "../../../Components/Sidebar/Sidebar";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState()
  const { dashboardData, setDashboardData } = useContext(CustomerInfoContext);

  useEffect(() => {
    fetch("http://localhost:5000/order/allOrder")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.data);
        setDashboardData({
          ...dashboardData,
          totalOrders: data.data.length,
          orders: data.data,
        });
      });
  }, []);
  
  return (
    <main className="adminPage">
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <Sidebar />
        </div>

        <div className="col-lg-10 row col-md-9 p-4 appointmentsPageContainer">
          <div>
            <div>
              {" "}
              <OpenMessage />
              <h4 className="text-center p-3">
                Pending Orders:{" "}
                <button className="circleStyle"> {orders.length}</button>
              </h4>
              <table className="patientInfo-table table table-borderless delete-data container">
                <thead>
                  <tr className="table-header border ">
                    <th className="" scope="col">
                      Customer
                    </th>
                    <th className="" scope="col">
                      Email
                    </th>
                    <th className="" scope="col">
                      Phone
                    </th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Amount($)</th>
                    <th scope="col">Address</th>
                    <th scope="col">Products</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => {
                    const {
                      name,
                      email,
                      deliveryAddress,
                      orderDate,
                      orderStatus,
                      amount,
                      cart,
                    } = order;
                    return (
                      <tr className="border border-secondary my-1">
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{deliveryAddress.phone}</td>
                        <td>{orderDate}</td>
                        <td>
                          <label for="color" className="p-2 fw-bold">
                          <select
                            className="selectOption"
                            name="status"
                            id="status"
                            onChange={(e) => setOrderStatus(e.target.value)}
                          >
                            <option value="pending">Pending</option>
                            <option value="devivered">Delivered</option>
                          </select>
                          </label>
                          
                        </td>
                        <td>{amount}</td>
                        <td>
                          <ul className="list-unstyled">
                            <li>Street: {deliveryAddress.street}</li>
                            <li>City: {deliveryAddress.city}</li>
                            <li>State: {deliveryAddress.state}</li>
                          </ul>
                        </td>
                        <td>
                          {cart.map((crt) => (
                            <li>{crt.productId}</li>
                          ))}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrdersPage;

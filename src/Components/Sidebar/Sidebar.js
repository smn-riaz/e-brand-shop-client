import {
    faCartArrowDown,
  faChartLine,
  faFileCirclePlus,
  faHome,
  faShirt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between pt-5 px-3">
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="sidebar-link text-decoration-none">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard" className="sidebar-link text-decoration-none">
            <FontAwesomeIcon icon={faChartLine} /> <span c>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/customers" className="sidebar-link text-decoration-none">
            <FontAwesomeIcon icon={faUserCircle} />{" "}
            <span>
              <strong>Customers</strong>
            </span>
          </Link>
        </li>


        <li>
          <Link
            to="/admin/addProduct"
            className="sidebar-link text-decoration-none"
          >
            <FontAwesomeIcon icon={faFileCirclePlus} />{" "}
            <span>Add Product</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin/orders"
            className="sidebar-link text-decoration-none"
          >
            <FontAwesomeIcon icon={faCartArrowDown} />{" "}
            <span>Orders</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin/products"
            className="sidebar-link text-decoration-none"
          >
            <FontAwesomeIcon icon={faShirt} /> <span>Products</span>
          </Link>
        </li>

    
      </ul>
    </div>
  );
};

export default Sidebar;

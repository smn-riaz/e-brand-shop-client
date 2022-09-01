import { createContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddProductPage from "./Pages/AdminPage/AddProductPage/AddProductPage";
import CustomersPage from "./Pages/AdminPage/CustomersPage/CustomersPage";
import DashboardPage from "./Pages/AdminPage/DashboardPage/DashboardPage";
import OrdersPage from "./Pages/AdminPage/OrdersPage/OrdersPage";
import ProductsPage from "./Pages/AdminPage/ProductsPage/ProductsPage";
import CartedProductsPage from "./Pages/CartedProductsPage/CartedProductsPage";
import CheckoutSuccessPage from "./Pages/CheckoutSuccessPage/CheckoutSuccessPage";
import Announcement from "./Pages/HomePage/Announcement/Announcement";
import HomePage from "./Pages/HomePage/HomePage";
import NavbarSection from "./Pages/HomePage/NavbarSection/NavbarSection";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
// import SingleTypePage from "./Pages/SingleTypePage/SingleTypePage";
import TypeProductPage from "./Pages/SingleTypePage/SingleTypePage";

export const CustomerInfoContext = createContext();

function App() {
  const [showAnnounce, setshowAnnounce] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    userId: "",
    name: "",
    email: "",
    cart: [],
  });
  const [cartInfo, setCartInfo] = useState([]);
  const [dashboardData, setDashboardData] = useState({
    totalProducts: 0,
    totalCustomers: 0,
    totalOrders: 0,
    products: [],
    customers: [],
    orders: [],
  });
  return (
    <CustomerInfoContext.Provider
      value={{
        customerInfo,
        setCustomerInfo,
        cartInfo,
        setCartInfo,
        dashboardData,
        setDashboardData,
      }}
    >
      <BrowserRouter>
        {showAnnounce && <Announcement />}
        <NavbarSection />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/:type" element={<TypeProductPage />} />
          {/* <Route path="/private-outlet" element={<PrivateOutlet />}>
            <Route path="" element={<Private />} />
          </Route> */}
          <Route path="/:type/:productId" element={<PrivateRoute><SingleProductPage /></PrivateRoute>} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/cart" element={<CartedProductsPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/orders" element={<OrdersPage />} />
          <Route path="/admin/customers" element={<CustomersPage />} />
          <Route path="/admin/products" element={<ProductsPage />} />
          <Route path="/admin/addProduct" element={<AddProductPage />} />
        </Routes>
      </BrowserRouter>
    </CustomerInfoContext.Provider>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OrderManagement from "./components/OrderManagement";
import Footer from "./components/Footer";
import ViewItems from "./components/ViewItems";
import CustomerRegistration from "./components/CustomerRegistration";
import CreateProducts from "./components/CreateProducts";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order-management" element={<OrderManagement />}/>
          <Route path="customer-registration" element={<CustomerRegistration />}/>
          <Route path="add-products" element={<CreateProducts />}/>
          <Route path="view-item/:id" element={<ViewItems />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

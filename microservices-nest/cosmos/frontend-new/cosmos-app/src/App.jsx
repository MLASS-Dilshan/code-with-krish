import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OrderManagement from "./components/OrderManagement";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order-management" element={<OrderManagement />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

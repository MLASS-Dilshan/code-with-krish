import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OrderManagement from "./components/OrderManagement";
import Footer from "./components/Footer";
import ViewItems from "./components/ViewItems";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order-management" element={<OrderManagement />}/>
          <Route path="view-item/:id" element={<ViewItems />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

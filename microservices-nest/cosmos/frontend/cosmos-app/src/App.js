import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderMgt from "./components/OrderMgt";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/order-management" element={<OrderMgt />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;

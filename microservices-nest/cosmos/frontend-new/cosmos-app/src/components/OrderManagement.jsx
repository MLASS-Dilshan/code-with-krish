import React, { useEffect, useState } from "react";
import { createOrder, getOrders } from "../service/OrderService";
import ViewItems from "./ViewItems";
import { Link } from "react-router-dom";

const OrderManagement = () => {
  // usestate for getting all orders
  const [orders, setOrders] = useState([]);

  //   usestate for creating an order
  const [customerId, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  //   function to submit an order
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("order submitted");

    try {
      const order = {
        customerId,
        items: [
          {
            productId,
            price,
            quantity: qty,
          },
        ],
      };

      console.log({ customerId, productId, price, qty });
      const response = await createOrder(order);
      console.log(response.data);

      setCustomerId('')
      setProductId('')
      setPrice('')
      setQty('')

      fetchOrders()
    } catch (err) {
      console.log("Error creating order", err);
    }
  };

  //   function to catch input change no need to use separate onChange function in inputs, just use this handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "customerId") {
      setCustomerId(value);
    }
    if (name === "productId") {
      setProductId(value);
    }
    if (name === "price") {
      setPrice(value);
    }
    if (name === "qty") {
      setQty(value);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  //   function to getting all orders
  const fetchOrders = async () => {
    const respone = await getOrders();
    console.log(respone.data);
    setOrders(respone.data);
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          {/* <label>Customer ID</label> */}
          <input
            type="text"
            name="customerId"
            placeholder="Customer ID"
            value={customerId}
            onChange={handleChange}
          />

        

          {/* <label>Product ID</label> */}
          <input
            type="text"
            name="productId"
            placeholder="Product Id"
            value={productId}
            onChange={handleChange}
          />

    

          {/* <label>Price</label> */}
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={price}
            onChange={handleChange}
          />

      

          {/* <label>Quantity</label> */}
          <input type="text" placeholder="Quantity" name="qty" value={qty} onChange={handleChange} />

       

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer Id</th>
              <th>Order Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <th>{order.id}</th>
                <td>{order.customerId}</td>
                <td>{order.createdAt}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="view-btn"><Link to={`/view-item/${order.id}`} className="view-link">View items</Link></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderManagement;

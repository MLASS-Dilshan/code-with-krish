import React, { useEffect, useState } from "react";
import createOrder from "../services/orderService";
import axios from "axios";

const OrderMgt = () => {
  const [customerId, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const [orders, setOrders] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("order submitted");
    console.log({ customerId, productId, price, qty });

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

      const response = await createOrder(order);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChnage = (e) => {
    const { name, value } = e.target;

    if (name === "customerId") {
      setCustomerId(value);
    }

    if (name === "prodId") {
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
    getOrders();
  }, []);

  const getOrders = async () => {
    const response = await fetchOrders();
    setOrders(response.data);
  };

  const fetchOrders = async () => {
    return axios.get("http://localhost:3000/orders");
  };

  return (
    <>
      <p>Create Order</p>

      <form onSubmit={handleSubmit}>
        <label>Customer ID</label>
        <input
          type="text"
          name="customerId"
          value={customerId}
          onChange={handleChnage}
        />

        <br />

        <label>Product ID</label>
        <input
          type="text"
          name="prodId"
          value={productId}
          onChange={handleChnage}
        />

        <br />

        <label>Price</label>
        <input type="text" name="price" value={price} onChange={handleChnage} />

        <br />

        <label>Qty</label>
        <input type="text" name="qty" value={qty} onChange={handleChnage} />

        <br />

        <button type="submit">Submit</button>
      </form>

      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer id</th>
              <th>Order date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerId}</td>
                <td>{order.createdAt}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>View items</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderMgt;

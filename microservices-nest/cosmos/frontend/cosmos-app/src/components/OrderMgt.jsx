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

  // const handleChnage = () => {
  //     const {name, value} = e.target;

  //     if(name === ) {

  //     }
  // }

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
          id="cus_id"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />

        <br />

        <label>Product ID</label>
        <input
          type="text"
          id="prod_id"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />

        <br />

        <label>Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />

        <label>Qty</label>
        <input
          type="text"
          id="qty"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />

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

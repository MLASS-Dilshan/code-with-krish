import React, { useEffect, useState } from "react";
import { getOrderById } from "../service/OrderService";
import { useParams } from "react-router-dom";

const ViewItems = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, []);

  const getItem = async (id) => {
    try {
      const response = await getOrderById(id);
      console.log(response.data.items);
      setItems(response.data.items);
    } catch (err) {}
  };

  return (
    <>
      <div className="view-item-container">
        <div>
          <h2>Order ID : {id}</h2>
        </div>

        <div>
          <p>Below are the items of order Id {id}</p>
        </div>

        {items.map((item) => (
          <ul key={item.id}>
            <li>Id : {item.id}</li>
            <li>Price : {item.price}</li>
            <li>product Id : {item.productId}</li>
            <li>Quantity : {item.quantity}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default ViewItems;

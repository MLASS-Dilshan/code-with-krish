import React, { useState } from "react";
import { createProducts } from "../service/IncentoryService";

const CreateProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setProductName(value);
    }
    if (name === "price") {
      setProductPrice(value);
    }
    if (name === "quantity") {
      setQuantity(value);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const product = {
        name: productName,
        price: productPrice,
        quantity,
      };

      const response = await createProducts(product);
      console.log(response.data)

      setProductName('')
      setProductPrice('')
      setQuantity('')
    } catch (err) {
        console.log(err)
    }
  };
  const inputStyles = {
    marginBottom: "20px",
    width: "500px",
    height: "40px",
    outline: "none",
    padding: "20px",
  };

  const btnStyle = {
    width: "100px",
    padding: "10px",
    backgroundColor: "#578FCA",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
  };

  return (
    <>
      <form className="customer-form" onSubmit={handleSubmit}>
        <div className="form-container-cus">
          <input
            type="text"
            style={inputStyles}
            className="inputCus"
            placeholder="Product Name"
            name="name"
            value={productName}
            onChange={handleChange}
          />

          <br />

          <input
            type="text"
            style={inputStyles}
            className="inputCus"
            placeholder="Price"
            name="price"
            value={productPrice}
            onChange={handleChange}
          />

          <br />

          <input
            type="text"
            style={inputStyles}
            className="inputCus"
            placeholder="Quantity"
            name="quantity"
            value={quantity}
            onChange={handleChange}
          />

          <br />
          <div className="btn-cus">
            <button type="submit" style={btnStyle} className="cus-submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateProducts;

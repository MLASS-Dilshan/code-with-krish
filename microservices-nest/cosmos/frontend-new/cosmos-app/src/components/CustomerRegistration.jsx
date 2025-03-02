import React, { useState } from "react";
import { createCustomer } from "../service/OrderService";

const CustomerRegistration = () => {

    const [customerName, setCustomerName] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [address, setAddress] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(name === "name") {
            setCustomerName(value)
        } 
        if(name === "email") {
            setCustomerEmail(value)
        }
        if(name === "address") {
            setAddress(value)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const customer = {
                name: customerName,
                email: customerEmail,
                address
            }

            // console.log({name, email, address})
            let response = await createCustomer(customer)
            console.log(response.data)

            setCustomerName('')
            setCustomerEmail('')
            setAddress('')
        }
        catch(err) {
            console.log(err)
        }
    }
  const inputStyles = {
    marginBottom: "20px",
    width: "500px",
    height: "40px",
    outline: "none",
    padding: "20px",
    // borderRadius: "10px"
  };

  // const labelStyles = {
  //     paddingBottom: "5px",
  //     display: "block"
  // }

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
      {/* <div className='cus-heading'>
        <h1>Fill the form below to add a customer</h1>
        </div> */}
      <form className="customer-form" onSubmit={handleSubmit}>
        <div className="form-container-cus">
          {/* <label style={labelStyles}>Customer Name</label>
            <br /> */}
          <input
            type="text"
            style={inputStyles}
            className="inputCus"
            placeholder="Customer Name"
            name="name"
            value={customerName}
            onChange={handleChange}

          />

          <br />
          {/* <label style={labelStyles}>Email</label>
            <br /> */}
          <input
            type="text"
            style={inputStyles}
            className="inputCus"
            placeholder="Customer Email"
            name="email"
            value={customerEmail}
            onChange={handleChange}
          />

          <br />
          {/* <label style={labelStyles}>Address</label>
            <br /> */}
          <input
            type="text"
            style={inputStyles}
            className="inputCus"
            placeholder="Customer Address"
            name="address"
            value={address}
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

export default CustomerRegistration;

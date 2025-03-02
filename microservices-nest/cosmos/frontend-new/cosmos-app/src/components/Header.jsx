import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="navbar-container">

        <p>
            <Link className="nav-logo" to={"/"}>Cosmos</Link>
        </p>


        <div className="nav-links">
          <ul className="navigation-links">
            <Link className="nav-link" to={"/order-management"}>Order Managment</Link>
            <Link className="nav-link" to={"/customer-registration"}>Customer Registration</Link>
            <Link className="nav-link" to={"/add-products"}>Inventory</Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
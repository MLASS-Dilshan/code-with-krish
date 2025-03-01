import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">

        <p>
            <Link className="nav-logo" to={"/"}>Cosmos</Link>
        </p>


        <div className="nav-links">
          <ul className="navigation-links">
            <Link className="nav-link" to={"/order-management"}>Order Managment</Link>
            <Link className="nav-link">Another link 1</Link>
            <Link className="nav-link">Another link 2</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

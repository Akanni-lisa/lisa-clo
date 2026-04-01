import React, { useState } from "react";
import "./cart.css";
import {
  FaTrash,
  FaUserCircle,
  FaHome
} from "react-icons/fa";
import { Link } from "react-router-dom";

import outfit1 from "../assets/cart/img1.jpg";
import outfit2 from "../assets/cart/img2.jpg";
import outfit3 from "../assets/cart/img3.jpg";

export default function CartPage() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Formal Shirt",
      price: 999,
      quantity: 1,
      image: outfit1,
    },
    {
      id: 2,
      name: "Straight Fit Jeans",
      price: 1599,
      quantity: 1,
      image: outfit2,
    },
    {
      id: 3,
      name: "Floral Dress",
      price: 1499,
      quantity: 1,
      image: outfit3,
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <header className="header">
        <div className="header-content">
          <h1 className="logo">Lisa</h1>
        </div>

        <h2 className="cart-title">Your Cart</h2>

        <div className="cart-header-icons">
          <Link to="/" className="icon-btn">
            <FaHome />
          </Link>


          <div className="account-menu">
            <button
              className="icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsAccountOpen((prev) => !prev);
              }}
            >
              <FaUserCircle />
            </button>

            <div className={`account-dropdown ${isAccountOpen ? "open" : ""}`}>
              <Link to="/signup" className="dropdown-btn">Register</Link>
              <Link to="/login" className="dropdown-btn">Login</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="cart-container">
        {/* Items */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div className="details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div className="quantity">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>

              <FaTrash className="delete-icon" />
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="cart-summary">
          <h2>Summary</h2>
          <p>Subtotal: ₹{subtotal}</p>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
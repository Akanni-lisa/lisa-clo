import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRegHeart, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./checkout.css";

export default function CheckoutPage() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const orderItems = [
    { id: 1, name: "Off-Shoulder Top", price: 999 },
    { id: 2, name: "Straight Fit Jeans", price: 1599 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="checkout-page">
      <header className="header">
        <div className="header-content">
          <Link to="/">
            <img src={logo} alt="Lisa Logo" className="logo" />
          </Link>
        </div>

        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-header-icons">
          <Link to="/wishlist" className="icon-btn" aria-label="Go to wishlist">
            <FaRegHeart />
          </Link>

          <Link to="/" className="icon-btn" aria-label="Go to home">
            <FaHome />
          </Link>

          <div className="account-menu">
            <button
              className="icon-btn"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setIsAccountOpen((prev) => !prev);
              }}
            >
              <FaUserCircle />
            </button>

            <div className={`account-dropdown ${isAccountOpen ? "open" : ""}`}>
              <Link to="/signup" className="dropdown-btn">
                Register
              </Link>
              <Link to="/login" className="dropdown-btn">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="checkout-layout">
        <section className="checkout-form-panel">
          <div className="checkout-panel-header">
            <p className="checkout-step-label">Checkout details</p>
            <h1>Shipping & Contact</h1>
            <p>Fill in your details so the team can wire payment and order flow later.</p>
          </div>

          <div className="checkout-form-grid">
            <div className="field-group">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" type="text" placeholder="Enter your full name" />
            </div>

            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="field-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>

            <div className="field-group">
              <label htmlFor="city">City</label>
              <input id="city" type="text" placeholder="Enter your city" />
            </div>

            <div className="field-group full-width">
              <label htmlFor="addressOne">Address line 1</label>
              <input id="addressOne" type="text" placeholder="House number and street name" />
            </div>

            <div className="field-group full-width">
              <label htmlFor="addressTwo">Address line 2</label>
              <input id="addressTwo" type="text" placeholder="Apartment, suite, landmark (optional)" />
            </div>

            <div className="field-group">
              <label htmlFor="state">State</label>
              <input id="state" type="text" placeholder="Enter your state" />
            </div>

            <div className="field-group">
              <label htmlFor="pincode">Pincode</label>
              <input id="pincode" type="text" placeholder="Enter pincode" />
            </div>

            <div className="field-group full-width">
              <label htmlFor="notes">Order notes</label>
              <textarea
                id="notes"
                rows="5"
                placeholder="Add delivery notes or any special instructions"
              ></textarea>
            </div>
          </div>
        </section>

        <aside className="checkout-summary-panel">
          <h2>Your Order</h2>

          <div className="summary-items">
            {orderItems.map((item) => (
              <div key={item.id} className="summary-item">
                <div>
                  <p className="summary-item-name">{item.name}</p>
                  <p className="summary-item-meta">Qty: 1</p>
                </div>
                <span>₹{item.price}</span>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
          </div>

          <div className="summary-total-row">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="place-order-btn" type="button">
            Place Order
          </button>

          <p className="checkout-note">
            Payment and backend order wiring will be connected later.
          </p>
        </aside>
      </main>
    </div>
  );
}

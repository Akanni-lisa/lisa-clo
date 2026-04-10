import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import {
  FaRegHeart,
  FaHeart,
  FaHome,
  FaUserCircle,
  FaFilter,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { gender, category } = useParams();

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [wishlistedCards, setWishlistedCards] = useState({});
  const [burstCards, setBurstCards] = useState({});

  const toggleWishlist = (cardId) => {
    const isCurrentlyWishlisted = !!wishlistedCards[cardId];

    if (isCurrentlyWishlisted) {
      setWishlistedCards((prev) => {
        const updated = { ...prev };
        delete updated[cardId];
        return updated;
      });
      return;
    }

    setWishlistedCards((prev) => ({ ...prev, [cardId]: true }));
    setBurstCards((prev) => ({ ...prev, [cardId]: true }));

    setTimeout(() => {
      setBurstCards((prev) => {
        const updated = { ...prev };
        delete updated[cardId];
        return updated;
      });
    }, 500);
  };

  return (
    <div className="category-page">
      {/* HEADER */}
      <header className="header">
        <div className="header-content">
          <Link to="/">
            <img src={logo} alt="Lisa Logo" className="logo" />
          </Link>
        </div>

        <div className="category-header-icons">
          {/* FILTER BUTTON */}
          <button
            className="icon-btn"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FaFilter />
          </button>

          <Link to="/Wishlist" className="icon-btn">
            <FaRegHeart />
          </Link>

          <Link to="/" className="icon-btn">
            <FaHome />
          </Link>

          <div className="account-menu">
            <button
              className="icon-btn"
              onClick={() => setIsAccountOpen(!isAccountOpen)}
            >
              <FaUserCircle />
            </button>

            <div className={`account-dropdown ${isAccountOpen ? "open" : ""}`}>
              <Link to="/login" className="dropdown-btn">Login</Link>
              <Link to="/signup" className="dropdown-btn">Signup</Link>
            </div>
          </div>
        </div>
      </header>

      {/* FILTER DROPDOWN */}
      {isFilterOpen && (
        <div className="filter-dropdown">
          <div className="filter-box">
            <div className="filter-header">
              <h2>Filters</h2>
              <button
  className="filter-close-btn"
  onClick={() => setIsFilterOpen(false)}
>
  <FaTimes />
</button>
            </div>

            {/* SIZE */}
            <div className="filter-section">
              <h3>Size</h3>
              <div className="filter-options">
                {["XS", "S", "M", "L"].map((size) => (
                  <button key={size}>{size}</button>
                ))}
              </div>
            </div>

            {/* COLOR */}
            <div className="filter-section">
              <h3>Color</h3>
              <div className="color-options">
                {[
                  "#000000",
                  "#ffffff",
                  "#ff6b6b",
                  "#4dabf7",
                  "#51cf66",
                  "#f8c8dc",   // pastel pink
                  "#d0ebff",   // pastel blue
                  "#fff3bf",   // pastel yellow
                  "#e6fcf5",   // pastel mint
                ].map((color, i) => (
                  <span
                    key={i}
                    className="color-circle"
                    style={{ background: color }}
                  ></span>
                ))}
              </div>
            </div>

            {/* PRICE */}
            <div className="filter-section">
              <h3>Price</h3>
              <input type="range" min="0" max="1500" />
              <p>₹0 - ₹1500</p>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCTS */}
      <div className="product-grid">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className="product-card" key={item}>
            <div className="image-wrapper">
              <button
                className={`wishlist-btn ${
                  wishlistedCards[item] ? "active" : ""
                } ${burstCards[item] ? "burst" : ""}`}
                onClick={() => toggleWishlist(item)}
              >
                {wishlistedCards[item] ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>

            <div className="product-info">
              <p className="product-name">Sample Product</p>
              <p className="product-price">₹999</p>

              <select className="size-select">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>

              <button className="add-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
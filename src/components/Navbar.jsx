import React, { useState } from "react";
import '../index.css'

const Navbar = ({setCategory}) => {
  const [activeCategory, setActiveCategory] = useState(""); 

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Cập nhật danh mục đang được chọn
    setCategory(category); 

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-white text-black fs-4">HoaNews</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className={`nav-link ${activeCategory === "technology" ? "active" : ""}`}
                onClick={() => handleCategoryClick("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${activeCategory === "business" ? "active" : ""}`}
                onClick={() => handleCategoryClick("business")}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${activeCategory === "health" ? "active" : ""}`}
                onClick={() => handleCategoryClick("health")}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${activeCategory === "sport" ? "active" : ""}`}
                onClick={() => handleCategoryClick("sport")}
              >
                Sport
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${activeCategory === "entertainment" ? "active" : ""}`}
                onClick={() => handleCategoryClick("entertainment")}
              >
                Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${activeCategory === "science" ? "active" : ""}`}
                onClick={() => handleCategoryClick("science")}
              >
                Science
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
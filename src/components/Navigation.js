import React from "react";
import { NavLink } from "react-router-dom";
import "../App.scss";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/portofolio"
        >
          Portofolio
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;

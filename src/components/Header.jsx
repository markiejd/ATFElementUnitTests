import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Header.css"; // Custom CSS file for the header styles

import React from "react";
import logo from "../assets/images/CGILogoWhite.jpg";

function NavBar() {
  const location = useLocation(); // Get the current route

  const navLinks = [
    
    { path: "/AccordionPage", label: "Accordion" },
    { path: "/AlertPage", label: "Alerts" },
    { path: "/ButtonPage", label: "Buttons" },
    { path: "/CheckboxPage", label: "Checkbox" },
    { path: "/ChipPage", label: "Chip" },
    { path: "/DatePickerPage", label: "DateandTimePicker" },
    { path: "/DropdownPage", label: "Dropdown" },
    { path: "/ImagePage", label: "Image" },
    { path: "/LinkPage", label: "Links" },
    { path: "/ListPage", label: "Lists" },
    { path: "/RadioButtonPage", label: "RadioButton" },
    { path: "/SliderPage", label: "Slider" },
    { path: "/SpanPage", label: "Span" },
    { path: "/SpinnerPage", label: "Spinner" },
    { path: "/TabPage", label: "Tab" },
    { path: "/TablePage", label: "Table" },
    { path: "/TextboxPage", label: "Textbox" },

  ];

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo as a Link */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}// Path to your logo in the public/images folder
            alt="Company Logo"
            width="100"
            height="50"
            className="d-inline-block align-top me-2"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <Link
                  className={`nav-link ${
                    location.pathname === path ? "active-link" : ""
                  }`}
                  to={location.pathname === path ? "#" : path} // Disable clicking on current page
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

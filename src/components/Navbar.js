import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Tejaswi</div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="burger" onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default Navbar;

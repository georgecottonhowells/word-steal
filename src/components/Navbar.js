import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui two item menu">
      <Link to="/about" className="item">
        About
      </Link>
      <Link to="/compose" className="item">
        Compose
      </Link>
    </div>
  );
};

export default Navbar;

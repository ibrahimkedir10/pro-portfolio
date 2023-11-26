// Header.js
import ReorderIcon from '@material-ui/icons/Reorder';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/HomePage"> Home </Link>
        <Link to="/WebsiteRequestForm"> contact </Link>
        <Link to="/ContactUs"> contact </Link>
      </div>
    </div>
  );
}

export default Navbar;

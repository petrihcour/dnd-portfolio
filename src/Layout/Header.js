import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3">
              <h3 className="">Vanessa Garcia</h3>
            </div>
            <div className="col-3">
              <h3>Frontend Developer</h3>
            </div>
            <div className="col-6 text-end">
              <Link to="/" className="navbar-brand">
                <img
                  src="https://cdn.iconfinder.com/icons/4683694/5155940/1024/raster.png?token=1700153899-BGXowyJ2GNVAKFc4EM1mKwubdLIMi9Hytpw4WBJevfI%3D"
                  width="35"
                  alt="20 sided die with crossing swords"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

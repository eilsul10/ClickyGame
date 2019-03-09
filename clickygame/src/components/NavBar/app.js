import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Bob's Burgers Clicky Game
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            Click an Image to Begin!
          </li>
          <li className="nav-item">
            Score: {this.props.score}
          </li>
          <li className="nav-item">
            High Score: {this.props.highScore}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
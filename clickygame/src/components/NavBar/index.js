import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            Bob's Burgers Clicky Game
          </li>
          <li className="nav-item">
            Click an Image to Begin!
          </li>
          <li className="nav-item">
            Score: {props.score}
          </li>
          <li className="nav-item">
            High Score: {props.highScore}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
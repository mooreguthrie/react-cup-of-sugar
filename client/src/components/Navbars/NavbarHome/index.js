import React, { Component } from "react";
import './style.scss'

class NavbarHome extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-xxl navbar-light bg-light">
          <a id="cos" className="navbar-brand" href="/">Cup of Sugar</a>

          <div id="signup-login" className="form-inline">
            <a id="signup" className="navbar-brand" href="/signup">Sign Up</a>
            <a id="login" className="navbar-brand" href="/login">Login</a>
          </div>

        </nav>
      </>
    )
  }
}
export default NavbarHome;

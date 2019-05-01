import React, { Component } from "react";
import './style.scss'

class NavbarMember extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-xxl navbar-light bg-light">
          <a id="cos" class="navbar-brand" href="/">Cup of Sugar</a>
          <div id="signup-login">
            <a id="signup" class="navbar-brand" href="/">Back</a>
          </div>
        </nav>
      </>
    )
  }
}
export default NavbarMember;

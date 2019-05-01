import React, { Component } from "react";
import './style.scss'

class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-xxl navbar-light bg-light">
          <a id="cos" class="navbar-brand" href="/">Cup of Sugar</a>
          <div id="navbar-items">
            <a id="profile" class="navbar-brand" href="/profile">Profile</a>
            <a id="search" class="navbar-brand" href="/search">Search</a>
            <a id="post" class="navbar-brand" href="/post">Post</a>
            <a id="logout" class="navbar-brand" href="/">Logout</a>
          </div>
        </nav>
      </>
    )
  }
}
export default Navbar;

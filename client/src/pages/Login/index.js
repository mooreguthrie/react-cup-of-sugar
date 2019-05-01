import React from "react";
import NavbarMember from "../../components/Navbars/NavbarMember";
import CustomButton from '../../components/UI/CustomButton';
import { Link } from 'react-router-dom';
import "./style.scss";

function Login() {
  return (
    <>
      <NavbarMember />
      <section id="auth-section">
        <div id="auth-body">
          <div id="auth-header">
            <h1 id="login">Login</h1>
            <div id="auth-switch">
              <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
            </div>
          </div>
          <hr id="auth-hr" />
          <form>
            <div id="form-elements">
              <label className="label">Email:</label><br />
              <input type="text" name="email" placeholder="bob@cupofsugar.com"></input><br />

              <label className="label">Password:</label><br />
              <input id="last-input" type="passowrd" name="password" placeholder="*********"></input>
            </div>
            <CustomButton id="auth-button" to="/profile">Login</CustomButton>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;

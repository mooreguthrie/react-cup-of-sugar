import React from "react";
import NavbarMember from "../../components/Navbars/NavbarMember";
import CustomButton from '../../components/UI/CustomButton';
import { Link } from 'react-router-dom';
import "./style.scss";

function Signup() {
  return (
    <>
      <NavbarMember />
      <section id="auth-signup-section">
        <div id="auth-body">
          <div id="auth-header">
            <h1 id="sign-up">Sign Up</h1>
            <div id="auth-switch">
              <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
            </div>
          </div>
          <hr id="auth-hr" />
          <div id="form-wrapper">
            <form>
              <div id="form-elements">
                <label>First Name:</label><br />
                <input type="text" name="first name" placeholder="John"></input><br />

                <label>Last Name:</label><br />
                <input type="text" name="last name" placeholder="Smith"></input><br />

                <label>Email:</label><br />
                <input type="text" name="email" placeholder="bob@cupofsugar.com"></input><br />

                <label>Password:</label><br />
                <input type="password" name="password" placeholder="*********"></input><br />

                <label>Retype Password:</label><br />
                <input id="last-input" type="password" name="password" placeholder="*********"></input>

                <label>Zipcode:</label><br />
                <input type="text" name="zipcode" placeholder="60093"></input><br />

                <label>County:</label><br />
                <input type="text" name="county" placeholder="Cook County"></input><br />

                <label>State:</label><br />
                <input type="text" name="state" placeholder="Illinois"></input><br />

                <label>Bio:</label><br />
                <textarea type="text" name="bio" placeholder="Let your neighbors know who you are!"></textarea>

                <CustomButton to="profile">Sign Up</CustomButton>
              </div>
            </form>
          </div>
        </div>
      </section >
    </>
  );
}

export default Signup;

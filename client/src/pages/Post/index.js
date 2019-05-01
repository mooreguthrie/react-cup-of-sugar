import React, { Component } from "react";
import Navbar from "../../components/Navbars/Navbar";
import Footer from '../../components/Footer';
import CustomButton from '../../components/UI/CustomButton';
import "./style.scss";

class Post extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="auth-signup-section">
          <div id="post-body">

            <h1 id="post">Post a Favor</h1>

            <hr id="post-hr" />
            <div id="form-post-wrapper">
              <form>
                <div id="form-post-elements">
                  <label>Favor:</label><br />
                  <input type="text" name="favor-name" placeholder="Lawnmower"></input><br />

                  <label>Image:</label><br />
                  <input type="text" name="favor-image" placeholder="lawnmower_image.jpg"></input><br />

                  <label>Message:</label><br />
                  <textarea id="last-input" type="text" name="favor-message" placeholder="Lawnmower is in great condition! It could use a day at the spa, but otherwise it works perfectly."></textarea>

                  <CustomButton to="profile">Submit</CustomButton>
                </div>
              </form>
            </div>
          </div>
        </section >
        <Footer />
      </>
    );
  }
}

export default Post;
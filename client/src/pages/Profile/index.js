import React, { Component } from "react";
import Navbar from "../../components/Navbars/Navbar";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
import "./style.scss";

//* components
import FavorCard from "../../components/UI/FavorCard";
import ReviewCard from '../../components/UI/ReviewCard';
import ProfAbout from '../../components/ProfAboutSection';

class Profile extends Component {

  render() {
    return (
      <>
        <Navbar />
        <div className="container" id="profile-container">

          {/* PROFILE SECTION */}
          <ProfAbout />

          {/* FAVOR SECTION */}
          <div className="row favors-row section-carousel">
            <div className="col-lg-12">
              <div id="auth-header">
                <h3>Favors</h3>
                <div id="auth-switch">
                  <Link to="/editfavors" style={{ textDecoration: 'none', color: 'black' }}>Edit Favors</Link>
                </div>
              </div>
              <hr />
              <div className="scrollmenu">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <FavorCard />
                  <FavorCard />
                  <FavorCard />
                </div>
              </div>
            </div>
          </div>

          {/* REVIEW SECTION */}
          <div className="row reviews-row section-carousel">
            <div className="col-lg-12">
              <h3>Reviews</h3>
              <hr />
              <div className="scrollmenu">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Profile;

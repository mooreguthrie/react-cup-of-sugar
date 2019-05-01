import React, { Component } from "react";
import Navbar from "../../components/Navbars/Navbar";
import Footer from '../../components/Footer';
import "./style.scss";

import FavorCard from '../../components/UI/FavorCard';

class Search extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="search-section">

          <div className="search" id="search-zip">

            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Search by Zipcode</h2>
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
            </div>

          </div>

          <div className="search" id="search-county">

            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Search by County</h2>
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
            </div>

          </div>

          <div className="search" id="search-state">

            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Search by State</h2>
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
            </div>

          </div>

        </section>
        <Footer />
      </>
    );
  }
}

export default Search;
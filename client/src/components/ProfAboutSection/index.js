import React, { Component } from "react";
import faker from 'faker';
import { Link } from 'react-router-dom';
import "./style.scss";

class ProfAbout extends Component {
    render() {

        return (
            <div className="row" id="information">
                {/* USER INFORMATION */}
                <div className="col-sm-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Sam Smith</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={faker.image.avatar()}></img></div>

                        <div className="col-lg-8">
                            <div className="col-lg-12"><span id="about-info-header">Email:</span>
                                <p className="profile-location-detail">{faker.internet.email()}</p>
                            </div>
                            <div className="col-lg-12" ><span id="about-info-header-two">Location:</span>
                                <p className="profile-location-detail">{faker.address.zipCode()}</p>
                                <p className="profile-location-detail">{faker.address.county()}</p>
                                <p className="profile-location-detail">{faker.address.state()}</p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* BIO */}
                <div className="col-sm-7">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="auth-header">
                                <h3>Bio</h3>
                                <div id="auth-switch">
                                    <Link to="/editprofile" style={{ textDecoration: 'none', color: 'black' }}>Edit Profile</Link>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <p>
                                Lorem ipsum dolor amet single-origin coffee artisan banjo
                                semiotics bushwick direct trade PBR&B typewriter gastropub
                                taxidermy truffaut man bun food truck. Glossier yr synth,
                                vape vaporware enamel pin copper mug tattooed bushwick jean
                                shorts paleo jianbing trust fund plaid. Street art four
                                dollar toast asymmetrical, tattooed mlkshk migas blog
                                farm-to-table twee edison bulb la croix man bun listicle
                                8-bit. Readymade activated charcoal lumbersexual banjo poke.
                  </p>
                        </div>
                    </div>
                </div>
            </div >
        );

    }
}
export default ProfAbout
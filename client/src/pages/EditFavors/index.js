import React, { Component } from "react";
import Navbar from "../../components/Navbars/Navbar";
import Footer from '../../components/Footer';
import CustomButton from '../../components/UI/CustomButton';
import { Link } from 'react-router-dom';
import "./style.scss";
import FavorCardEdit from '../../components/UI/FavorCardEdit'
import Carousel from "../../components/UI/CarouselBootstrap";

class EditFavors extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container" id="edit-favors-container">
                    <div className="row">

                        {/* EDITING THE FAVOR */}
                        <div className="col-lg-5">
                            <div id="favor-edit-wrapper">
                                <div id="auth-header">
                                    <h1>Select Favor</h1>
                                    <div id="auth-switch">
                                        <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>Back to Profile</Link>
                                    </div>
                                </div>
                                <hr />


                                <div id="form-edit-list">
                                    <div className="scrollmenu">
                                        <FavorCardEdit />
                                        <FavorCardEdit />
                                        <FavorCardEdit />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* GUTTER */}
                        <div className="col-lg-2"></div>

                        {/* EDITING THE FAVOR */}
                        <div className="col-lg-5">
                            <div id="favor-edit-wrapper">
                                <div id="auth-header">
                                    <h1>Edit Away!</h1>
                                </div>
                                <hr />

                                <div id="form-edit-content">
                                    <div id="selected-favor">
                                        <p>SELECTED FAVOR (NAME)</p>
                                    </div>

                                    <div id="selected-favor-form">
                                        <form>
                                            <label>Favor:</label><br />
                                            <input type="text" name="favor-name" placeholder="Lawnmower"></input><br />

                                            <label>Image:</label><br />
                                            <input type="text" name="favor-image" placeholder="lawnmower_image.jpg"></input><br />

                                            <label>Message:</label><br />
                                            <textarea id="edit-form-textarea" type="text" name="favor-message" placeholder="Lawnmower is in great condition! It could use a day at the spa, but otherwise it works perfectly."></textarea>

                                            <button type='submit'>Submit</button>
                                        </form>
                                    </div>

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

export default EditFavors;
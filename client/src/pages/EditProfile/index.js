import React, { Component } from "react";
import Navbar from "../../components/Navbars/Navbar";
import Footer from '../../components/Footer';
import CustomButton from '../../components/UI/CustomButton';
import "./style.scss";

class EditProfile extends Component {
    render() {
        return (
            <>
                <Navbar />
                <section id="auth-signup-section">
                    <div id="post-body">

                        <h1 id="post">Edit Your Profile</h1>

                        <hr id="post-hr" />
                        <div id="form-post-wrapper">
                            <form>
                                <div id="form-post-elements">
                                    <label>First Name:</label><br />
                                    <input type="text" name="first name" placeholder="John"></input><br />

                                    <label>Last Name:</label><br />
                                    <input type="text" name="last name" placeholder="Smith"></input><br />

                                    <label>Profile Pic:</label><br />
                                    <input type="text" name="profile Pic" placeholder="image.jpg"></input><br />

                                    <label>Zipcode:</label><br />
                                    <input type="text" name="zipcode" placeholder="60093"></input><br />

                                    <label>County:</label><br />
                                    <input type="text" name="county" placeholder="Cook County"></input><br />

                                    <label>State:</label><br />
                                    <input type="text" name="state" placeholder="Illinois"></input><br />

                                    <label>Bio:</label><br />
                                    <textarea type="text" name="bio" placeholder="Let your neighbors know who you are!"></textarea>

                                    <button type="submit" href="/profile">Submit</button>
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

export default EditProfile;